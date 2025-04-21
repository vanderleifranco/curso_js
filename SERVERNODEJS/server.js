// Importa o módulo 'http' para criar o servidor
const http = require('http');
// Importa o módulo 'fs' (File System) para trabalhar com arquivos
const fs = require('fs').promises;
const path = require('path');

// Define a porta em que o servidor irá escutar
const port = 3000;

// Cria o servidor HTTP
const server = http.createServer(async (req, res) => {
    try {
        // Define o caminho para o arquivo HTML
        const filePath = path.join(__dirname, 'index.html');
        // Lê o conteúdo do arquivo HTML de forma assíncrona
        const content = await fs.readFile(filePath, 'utf8');

        // Define o cabeçalho da resposta HTTP para indicar que é HTML
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // Envia o conteúdo do arquivo HTML como resposta
        res.end(content);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
        // Em caso de erro, envia uma resposta de erro
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erro interno do servidor.');
    }
});

// Inicia o servidor e o faz escutar na porta definida
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});