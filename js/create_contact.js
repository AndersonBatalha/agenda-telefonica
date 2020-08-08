var i = localStorage.length;
function generateID() {
    return i++;
}

$(document).ready(function () {
    let nome = $("#input-nome");
    let telefone = $("#input-telefone");
    let email = $("#input-email");

    $("button").click(function () {
        var id = generateID();
        let contato = { 
            "id": id,
            "nome": nome.val(), 
            "email": email.val(), 
            "telefone": telefone.val()
        };
        localStorage.setItem(`${id}`, JSON.stringify(contato));
    });

});
