$(document).ready(function () {
    let contatoID = localStorage.getItem("editID");
    let contato = JSON.parse(localStorage.getItem(contatoID));

    let nome = $("#input-nome");
    let telefone = $("#input-telefone");
    let email = $("#input-email");
    let btnSubmit = $("button[type='submit']");

    $("#errorNome").css("display", "none");
    $("#errorEmail").css("display", "none");
    $("#errorTel").css("display", "none");

	const patternNome = /^[a-z ,.'-]+$/i;
	const patternEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/i;
	const patternTelefone = /(0?[1-9]{2})*\D*(9?)\D?(\d{4})+\D?(\d{4})/;

    nome.val(contato.nome);
    email.val(contato.email);
    telefone.val(contato.telefone);

    btnSubmit.click(function () {
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
        } else {
            if (!nameIsValid) {
                $("form").submit(function (e) { 
                    e.preventDefault();
                    $('#errorNome').show().fadeOut(5000);
                });
            }
			else if (!emailIsValid) {
                $("form").submit(function (e) { 
                    e.preventDefault();
                    $('#errorEmail').show().fadeOut(5000);
                });
			}
			else if (!telefoneIsValid) {
                $("form").submit(function (e) { 
                    e.preventDefault();
                    $('#errorTel').show().fadeOut(5000);
                });
			}
        }
    });
});