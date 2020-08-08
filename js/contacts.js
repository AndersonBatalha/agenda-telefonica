function loadContacts() {
    var contatos = [];
    for (var i = 0; i < localStorage.length; i++) {
        contatos.push(localStorage.getItem(i));
    }
	if (contatos === null) {
		return [];
	} else {
		return contatos;
	}
}

function getSelectedItem(id) {
    localStorage.setItem("id", id);
    return id;
}

function removeItem(id) {
    let contatos = JSON.parse(loadContacts());

    console.log(contatos, contatos.length, id);

    return contatos;
}

$(document).ready(function () {    
    let section = $("section");

    let contatos = loadContacts();
    if (contatos.length > 0) {
        section.append(`<h1 class="text-center my-5">Contatos</h1>`);
        for (var i in contatos) {
            let contato = JSON.parse(contatos[i]);
            console.log(contato);
            section.append(`
            <div class="border border-dark p-3 my-4 w-100 mx-auto rounded">
                <div class="row">
                    <div class="col-2 my-auto">
                        <img src="./img/person.png" class="person" alt="Contact" />
                    </div>
                    <div class="col-7 my-auto">
                        <h2 class="font-weight-bolder">
                            ${contato.nome}
                        </h2>
                        <h4>
                            ${contato.email}
                        </h4>
                        <h6>
                            ${contato.telefone}
                        </h6>
                    </div>
                    <div class="col-3 my-auto">
                        <a href="./edit_contact.html" 
                            onclick=getSelectedItem(${contato.id})>
                            <img src="./img/edit_icon.png" 
                            class="edit px-2" alt="Edit icon" />
                        </a>
                        <a 
                            onclick=removeItem(getSelectedItem(${contato.id}))>
                            <img src="./img/trash.png" 
                            class="trash px-2" alt="Trash icon" />    
                        </a>
                    </div>
                </div>    
            </div>
        `);
        };
	} else {
        section.append(`
            <div class="row p-5">
            <div class="col-md-6 col-sm-12 pb-4">
                <img
                    class="mx-auto d-block my-2"
                    src="./img/site-icon-512.png"
                    alt="Agenda"
                    id="agenda"
                />
            </div>

            <div class="col-md-6 col-sm-12 align-middle">
                <h1 class="d-flex-row mb-4 text-center">Agenda</h1>

                <ul class="list-group-flush">
                    <li class="list-group-item">Inserir novo contato</li>
                    <li class="list-group-item">Excluir contatos</li>
                    <li class="list-group-item">Editar contatos</li>
                    <li class="list-group-item">
                        Visualizar todos os contatos
                    </li>
                </ul>
            </div>
        </div>
        `);
    };
});
