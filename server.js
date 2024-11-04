const express = require("express");
const app = express();
const port = 3000;
const { exec } = require('child_process');

app.use(express.static("public")); // Sirve archivos estáticos desde la carpeta public
app.use(express.urlencoded({ extended: true })); // Middleware para parsear el cuerpo del formulario

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Sirve el archivo HTML
});

app.post("/ping", (req, res) => {
    const url = req.body.url; // Obtiene la URL del formulario
    const comando = `ping -c 4 ${url}`; // Crea el comando ping usando el URL proporcionado
    exec(comando, (error, stdout, stderr) => {
        console.log(error, stdout, stderr);
        res.send(`<pre>${stdout}</pre>`); // Muestra el resultado del ping en un bloque preformateado
    });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});
