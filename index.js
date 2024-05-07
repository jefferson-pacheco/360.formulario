// index.js
const db = require("./db");

async function startApp() {
    try {
        // Conecta ao banco de dados
        await db.connect();

        // Agora você pode prosseguir com o restante do seu aplicativo, como iniciar o servidor HTTP, etc.
        console.log('Conexão com o banco de dados estabelecida.');
        console.log('Inicie seu servidor HTTP ou execute outras operações aqui.');
    } catch (error) {
        console.error("Erro ao iniciar o aplicativo:", error);
        process.exit(1); // Encerra o processo do aplicativo com um código de erro
    }
}

// Chama a função para iniciar o aplicativo
startApp();
