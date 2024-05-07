const mysql = require("mysql2/promise");

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '*******',
            database: 'formulario_usuario'
        });

        console.log("Conectado ao MySQL!");
        global.connection = connection;

        // Criar a tabela 'usuario1' se ela não existir
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS form_usuario (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                idade INT,
                endereco VARCHAR(255),
                biografia TEXT
            )
        `);

        return connection;
    } catch (error) {
        console.error("Erro ao conectar ao MySQL:", error.message);
        throw error;
    }
}

async function salvarFormulario(nome, idade, endereco, biografia) {
    try {
        const connection = await connect();
        const [rows, fields] = await connection.execute(`
            INSERT INTO usuario1 (nome, idade, endereco, biografia) 
            VALUES (?, ?, ?, ?)
        `, [nome, idade, endereco, biografia]);

        console.log(`${rows.affectedRows} linha(s) inserida(s) com sucesso.`);

        return rows.insertId; // Retorna o ID do novo registro inserido
    } catch (error) {
        console.error("Erro ao salvar no banco de dados:", error.message);
        throw error;
    }
}

module.exports = {
    connect: connect,
    salvarFormulario: salvarFormulario
};
