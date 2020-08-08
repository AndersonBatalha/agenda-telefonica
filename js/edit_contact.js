$(document).ready(function () {
    let contatos = JSON.parse(localStorage.getItem("contatos"));
    console.log(contatos);

    //let contato = contatos.filter(contato => contato.id === contactId);
    //console.log(contato);

    let nome = $("#input-nome");
    let telefone = $("#input-telefone");
    let email = $("#input-email");

});