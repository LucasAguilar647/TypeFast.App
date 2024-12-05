
import express from "express";
import bodyParser from "body-parser";
import crypto from "crypto";
import { exec } from "child_process";

const app = express();
const SECRET = "43858348Lucas."; // Usa la clave definida en GitHub

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
    const sig = req.headers["x-hub-signature-256"];
    const hmac = crypto.createHmac("sha256", SECRET);
    const digest = "sha256=" + hmac.update(JSON.stringify(req.body)).digest("hex");

    if (sig !== digest) {
        return res.status(403).send("Firma no válida");
    }

    exec("./deploy.sh", (error, stdout, stderr) => {
        if (error) {
            console.error(`Error ejecutando el script: ${error.message}`);
            return res.status(500).send("Error ejecutando el script");
        }

        if (stderr) {
            console.error(`Error en el script: ${stderr}`);
        }

        console.log(`Resultado del script: ${stdout}`);
        res.status(200).send("Despliegue completado");
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
