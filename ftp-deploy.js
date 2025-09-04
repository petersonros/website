import FtpDeploy from "ftp-deploy";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT ? parseInt(process.env.FTP_PORT) : 21,
  localRoot: join(__dirname, "out"),
  remoteRoot: process.env.FTP_REMOTE_ROOT || "/",
  include: ["*", "**/*"],
  deleteRemote: false,
  forcePasv: true,
};

ftpDeploy.on("uploaded", data => {
  console.log(`📁 Enviado: ${data.filename}`);
});

ftpDeploy
  .deploy(config)
  .then(res => console.log("✅ Deploy concluído!", res))
  .catch(err => console.error("❌ Erro ao fazer deploy:", err));


  