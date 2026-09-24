const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {

    let filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, (err, content) => {

        if (err) {
            res.writeHead(500, {
                "Content-Type": "text/plain; charset=utf-8"
            });

            res.end("Erro ao carregar a página.");
            return;
        }

        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(content);
    });
});

server.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}`);
});
