$(document).ready(function () {
    let contatoID = localStorage.getItem("editID");
    let contato = JSON.parse(localStorage.getItem(contatoID));
    console.log(contato);

    let nome = $("#input-nome");
    let telefone = $("#input-telefone");
    let email = $("#input-email");
    let btnSubmit = $("button[type='submit'");

    nome.val(contato.nome);
    email.val(contato.email);
    telefone.val(contato.telefone);

    btnSubmit.click(function () {
        if (nome.val() !== contato.nome) {
            contato.nome = nome.val();
        }
        if (email.val() !== contato.email) {
            contato.email = email.val();
        }
        if (telefone.val() !== contato.telefone) {
            contato.telefone = telefone.val();
        }
        localStorage.setItem(`${contatoID}`, JSON.stringify(contato));
    });

});