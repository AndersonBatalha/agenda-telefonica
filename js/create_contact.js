function loadContacts() {
    var contatos = [];
    const keys = Object.keys(localStorage);
    for (var i = 0; i <= keys.length; i++) {
        let item = localStorage.getItem(parseInt(keys[i]));
        if ( item !== null && item !== undefined && item.startsWith("{") ) {
            contatos.push(item);
        }
    }
	if (contatos === null) {
		return [];
	} else {
		return contatos;
	}
}

$(document).ready(function () {

	let nome = $("#input-nome");
	let telefone = $("#input-telefone");
	let email = $("#input-email");

    $("#errorNome").css("display", "none");
    $("#errorEmail").css("display", "none");
    $("#errorTel").css("display", "none");
    $("#errorForm").css("display", "none");

	const patternNome = /^[a-z ,.'-]+$/i;
	const patternEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/i;
	const patternTelefone = /(0?[1-9]{2})*\D*(9?)\D?(\d{4})+\D?(\d{4})/;

	$("button").click(function () {
		let nameIsValid =
            patternNome.test(nome.val()) &&
            nome.val().length >= 3 && nome.val().length < 75;
		let emailIsValid =
            patternEmail.test(email.val()) &&
            email.val().length > 10 && email.val().length < 75;
		let telefoneIsValid =
            patternTelefone.test(telefone.val()) &&
            telefone.val().length > 8 && telefone.val().length < 75;

		if (nameIsValid && emailIsValid && telefoneIsValid) {
            var id = localStorage.length++;
            let contato = {
                id: id,
                nome: nome.val(),
                email: email.val(),
                telefone: telefone.val(),
            };
            localStorage.setItem(`${id}`, JSON.stringify(contato));    
		} else {
			if (!nameIsValid) {
                $("form").submit(function (e) { 
                    e.preventDefault();
                    $('#errorNome').show().fadeOut(5000);
                });
            }
			if (!emailIsValid) {
                $("form").submit(function (e) { 
                    e.preventDefault();
                    $('#errorEmail').show().fadeOut(5000);
                });
			}
			if (!telefoneIsValid) {
                $("form").submit(function (e) { 
                    e.preventDefault();
                    $('#errorTel').show().fadeOut(5000);
                });
			}
		}
	});
});
