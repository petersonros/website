<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["warmup"])) {
  header("Content-Type: text/plain; charset=UTF-8");
  echo "ok";
  exit;
}


$TO_EMAIL    = "contato@petersonros.com";
$FROM_EMAIL  = "no-reply@petersonros.com";
$FROM_NAME   = "Contato do site";
$SUBJECT_PREFIX = "[Site | Contato] ";

$REDIRECT_OK  = "/contato/sucesso/";
$REDIRECT_ERR = "/contato/erro/";

$SMTP_HOST   = "mail.petersonros.com";
$SMTP_PORT   = 465;
$SMTP_USER   = "no-reply@petersonros.com";
$SMTP_PASS   = "SENHA_DA_CAIXA";
$SMTP_SECURE = "ssl";
$SMTP_TIMEOUT= 15;

if (!isset($_SESSION["last_submit"])) $_SESSION["last_submit"] = 0;
if (time() - $_SESSION["last_submit"] < 30) {
  header("Location: $REDIRECT_ERR"); exit;
}
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: $REDIRECT_ERR"); exit;
}
$hp = isset($_POST["hp"]) ? trim($_POST["hp"]) : "";
if ($hp !== "") { header("Location: $REDIRECT_OK"); exit; }

$name    = isset($_POST["name"]) ? trim($_POST["name"]) : "";
$email   = isset($_POST["_replyto"]) ? trim($_POST["_replyto"]) : "";
$message = isset($_POST["message"]) ? trim($_POST["message"]) : "";

if ($name === "" || $email === "" || $message === "") {
  header("Location: $REDIRECT_ERR"); exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  header("Location: $REDIRECT_ERR"); exit;
}
$bad = "/(content-type|bcc:|cc:|to:)/i";
if (preg_match($bad, $name) || preg_match($bad, $email)) {
  header("Location: $REDIRECT_ERR"); exit;
}

$subject = $SUBJECT_PREFIX . $name;
$dateStr = date('r');
$headers = [];
$headers[] = "From: $FROM_NAME <$FROM_EMAIL>";
$headers[] = "Reply-To: $name <$email>";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";
$headers[] = "Date: $dateStr";
$headers[] = "Message-ID: <" . time() . "." . uniqid() . "@".$_SERVER['HTTP_HOST'].">";

$bodyTxt = "Nome: $name\r\nE-mail: $email\r\n\r\nMensagem:\r\n$message\r\n\r\nIP: " . $_SERVER["REMOTE_ADDR"] . "\r\n";

$ok = smtp_send([
  "host" => $SMTP_HOST,
  "port" => $SMTP_PORT,
  "secure" => $SMTP_SECURE,
  "user" => $SMTP_USER,
  "pass" => $SMTP_PASS,
  "timeout" => $SMTP_TIMEOUT,
  "from" => $FROM_EMAIL,
  "mail_from" => $SMTP_USER,
  "to" => $TO_EMAIL,
  "subject" => $subject,
  "headers" => $headers,
  "body" => $bodyTxt
], $err);

if (!$ok) {
  $ok = @mail($TO_EMAIL, "=?UTF-8?B?".base64_encode($subject)."?=", $bodyTxt, implode("\r\n", $headers));
}

@file_put_contents(__DIR__ . "/../contact.log", date('c') . " | " . ($ok ? "OK" : "FAIL") . " | $email | $name | " . ($err ?? "") . "\n", FILE_APPEND);

$_SESSION["last_submit"] = time();

header("Location: " . ($ok ? $REDIRECT_OK : $REDIRECT_ERR));
exit;

function smtp_send($cfg, &$err) {
  $err = "";
  $host = $cfg["host"];
  $port = (int)$cfg["port"];
  $secure = strtolower(trim($cfg["secure"] ?? "")); // "ssl" | "tls" | ""
  $user = $cfg["user"];
  $pass = $cfg["pass"];
  $timeout = (int)($cfg["timeout"] ?? 15);
  $fromHeader = $cfg["from"];
  $mailFrom = $cfg["mail_from"] ?: $user;
  $to = $cfg["to"];
  $subject = $cfg["subject"];
  $headers = $cfg["headers"];
  $body = $cfg["body"];

  $data = [];
  $data[] = "From: $fromHeader";
  $data[] = "To: <$to>";
  $data[] = "Subject: $subject";
  $data = array_merge($data, $headers);
  $data[] = "";
  $data[] = $body;
  $message = implode("\r\n", $data);
  $message = preg_replace("/\r\n\./", "\r\n..", $message);
  if (substr($message, -2) !== "\r\n") $message .= "\r\n";

  $remote = ($secure === "ssl") ? "ssl://$host:$port" : "$host:$port";
  $errno = 0; $errstr = "";
  $fp = @stream_socket_client($remote, $errno, $errstr, $timeout, STREAM_CLIENT_CONNECT);
  if (!$fp) { $err = "connect fail: $errstr"; return false; }
  stream_set_timeout($fp, $timeout);

  $expect = function($code) use ($fp, &$err) {
    $line = "";
    while (($l = fgets($fp, 515)) !== false) {
      $line .= $l;
      if (strlen($l) < 4) break;
      if ($l[3] == ' ') break;
    }
    if (substr($line, 0, 3) != (string)$code) { $err = "expect $code, got: $line"; return false; }
    return true;
  };
  $send = function($cmd) use ($fp) { fwrite($fp, $cmd . "\r\n"); };

  if (! $expect(220)) { fclose($fp); return false; }

  $ehloHost = isset($_SERVER["HTTP_HOST"]) ? $_SERVER["HTTP_HOST"] : "localhost";
  $send("EHLO " . $ehloHost);
  if (! $expect(250)) {
    $send("HELO " . $ehloHost);
    if (! $expect(250)) { fclose($fp); return false; }
  }

  if ($secure === "tls") {
    $send("STARTTLS");
    if (! $expect(220)) { fclose($fp); return false; }
    if (! stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
      $err = "tls enable failed"; fclose($fp); return false;
    }
    $send("EHLO " . $ehloHost);
    if (! $expect(250)) { fclose($fp); return false; }
  }

  if ($user !== "" && $pass !== "") {
    $send("AUTH LOGIN");
    if (! $expect(334)) { fclose($fp); return false; }
    $send(base64_encode($user));
    if (! $expect(334)) { fclose($fp); return false; }
    $send(base64_encode($pass));
    if (! $expect(235)) { fclose($fp); return false; }
  }

  $send("MAIL FROM:<$mailFrom>");
  if (! $expect(250)) { fclose($fp); return false; }
  $send("RCPT TO:<$to>");
  if (! $expect(250)) { fclose($fp); return false; }
  $send("DATA");
  if (! $expect(354)) { fclose($fp); return false; }
  fwrite($fp, $message . "\r\n.\r\n");
  if (! $expect(250)) { fclose($fp); return false; }

  $send("QUIT");
  fclose($fp);
  return true;
}
