<?php

session_start();

$TO = "contato@petersonros.com";
$FROM = "no-reply@petersonros.com";
$SUBJECT_PREFIX = "[Site | Contato] ";
$REDIRECT_OK = "/contato/sucesso/";
$REDIRECT_ERR = "/contato/erro/";

if (!isset($_SESSION["last_submit"])) $_SESSION["last_submit"] = 0;
if (time() - $_SESSION["last_submit"] < 30) {
  header("Location: $REDIRECT_ERR");
  exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: $REDIRECT_ERR");
  exit;
}

$hp = isset($_POST["hp"]) ? trim($_POST["hp"]) : "";
if ($hp !== "") {
  header("Location: $REDIRECT_OK");
  exit;
}

$name    = isset($_POST["name"]) ? trim($_POST["name"]) : "";
$email   = isset($_POST["_replyto"]) ? trim($_POST["_replyto"]) : "";
$message = isset($_POST["message"]) ? trim($_POST["message"]) : "";

if ($name === "" || $email === "" || $message === "") {
  header("Location: $REDIRECT_ERR");
  exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  header("Location: $REDIRECT_ERR");
  exit;
}

$bad = "/(content-type|bcc:|cc:|to:)/i";
if (preg_match($bad, $name) || preg_match($bad, $email)) {
  header("Location: $REDIRECT_ERR");
  exit;
}

$subject = $SUBJECT_PREFIX . $name;
$body = "Nome: $name\nE-mail: $email\n\nMensagem:\n$message\n\nIP: " . $_SERVER["REMOTE_ADDR"];
$headers = [];
$headers[] = "From: $FROM";
$headers[] = "Reply-To: $email";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";

$ok = @mail($TO, "=?UTF-8?B?" . base64_encode($subject) . "?=", $body, implode("\r\n", $headers));

$_SESSION["last_submit"] = time();

if ($ok) {
  header("Location: $REDIRECT_OK");
} else {
  header("Location: $REDIRECT_ERR");
}
exit;
