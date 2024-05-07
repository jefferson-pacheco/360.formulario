document.getElementById("update-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    var newName = document.getElementById("name").value;
    var newAge = document.getElementById("age").value;
    var newAddress = document.getElementById("address").value;
    var newBio = document.getElementById("bio").value;

    console.log("Dados do formulário:", newName, newAge, newAddress, newBio);

    // Salvar os dados no banco de dados
    try {
        console.log("Tentando salvar os dados no banco de dados...");
        const id = await salvarFormulario(newName, newAge, newAddress, newBio);
        console.log(`Formulário salvo com ID: ${id}`);

        // Limpar o formulário
        document.getElementById("update-form").reset();
        console.log("Formulário limpo com sucesso!");

    } catch (error) {
        console.error("Erro ao salvar formulário:", error.message);
    }

    // Atualizar a exibição dos dados no HTML (se necessário)
    document.getElementById("nome").textContent = newName;
    document.getElementById("idade").textContent = newAge + " anos";
    document.getElementById("endereco").textContent = newAddress;
    document.querySelector(".bio").innerHTML = "<h3>Biografia:</h3>" + newBio;
});
