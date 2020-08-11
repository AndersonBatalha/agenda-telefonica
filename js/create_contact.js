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

function validateForm(nome, email, telefone) {
	const patternNome = /^[a-z ,.'-]+$/i;
	const patternEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/i;
	const patternTelefone = /(0?[1-9]{2})*\D*(9?)\D?(\d{4})+\D?(\d{4})/;

    let nameIsValid = patternNome.test(nome) &&
                    nome.length >= 3 && nome.length < 75;
    let emailIsValid = patternEmail.test(email) &&
                    email.length > 10 && email.length < 75;
    let telefoneIsValid = patternTelefone.test(telefone) &&
                    telefone.length > 8 && telefone.length < 20;

    if (nameIsValid && emailIsValid && telefoneIsValid) {
        return true;
    } else {
        return [nameIsValid, emailIsValid, telefoneIsValid];
    }
}

function save(nome, email, telefone) {
    var id = localStorage.length++;
    let contato = {
        id, nome, email, telefone
    };
    localStorage.setItem(`${id}`, JSON.stringify(contato));    
}

$(document).ready(function () {

	let nome = $("#input-nome");
	let telefone = $("#input-telefone");
    let email = $("#input-email");

    $("#errorNome").css("display", "none");
    $("#errorEmail").css("display", "none");
    $("#errorTel").css("display", "none");
    $("#errorForm").css("display", "none");
  
	$("button").click(function () {
        let formValid = validateForm(nome.val(), email.val(), telefone.val());
        console.log(formValid);
		if ( formValid === true ) {
            save(nome.val(), email.val(), telefone.val());
		} else {
            $('form').submit(function (event) {
                event.preventDefault();
            });
			if (!formValid[0]) {
                $("#errorNome").show().fadeOut(3000);
            }
			if (!formValid[1]) {
                $("#errorEmail").show().fadeOut(3000);
			}
			if (!formValid[2]) {
                $("#errorTel").show().fadeOut(3000);
			}
        }
	});
});
