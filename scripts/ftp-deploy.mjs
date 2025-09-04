#!/usr/bin/env node
// scripts/ftp-deploy.mjs
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";
import FtpDeploy from "ftp-deploy";

dotenv.config({ path: ".env.deploy" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const {
  FTP_HOST,
  FTP_USER,
  FTP_PASS,
  FTP_PORT = "21",
  FTP_REMOTE_ROOT = "/"
} = process.env;

if (!FTP_HOST || !FTP_USER || !FTP_PASS) {
  console.error("Defina FTP_HOST, FTP_USER e FTP_PASS em .env.deploy");
  process.exit(1);
}

const config = {
  user: FTP_USER,
  password: FTP_PASS,
  host: FTP_HOST,
  port: Number(FTP_PORT),
  localRoot: path.resolve(__dirname, "../out"),
  remoteRoot: FTP_REMOTE_ROOT,
  include: ["**/*"],
  deleteRemote: false,
  forcePasv: true
};

const ftpDeploy = new FtpDeploy();

try {
  const res = await ftpDeploy.deploy(config);
  console.log("Deploy concluído:", res);
} catch (err) {
  console.error("Erro no deploy:", err);
  process.exit(1);
}
