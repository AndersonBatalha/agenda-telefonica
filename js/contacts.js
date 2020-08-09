function loadContacts() {
    var contatos = [];
    for (var i = 0; i <= localStorage.length; i++) {
        let item = localStorage.getItem(i);
        if (item !== null && item !== undefined && item.startsWith("{")) {
            contatos.push(item);
        }
    }
	if (contatos === null) {
		return [];
	} else {
		return contatos;
	}
}

function getSelectedId(id) {
    console.log("editID", id);
    localStorage.setItem("editID", id);
    return id;
}

function removeItem(id) {
    localStorage.removeItem(id);
    localStorage.removeItem("editID");
}

$(document).ready(function () {    
    let section = $("section");

    let contatos = loadContacts();
    if (contatos.length > 0) {
        section.append(`
            <h1 class="text-center my-5">
                Contatos
            </h1>`);
        for (var i in contatos) {
            let contato = JSON.parse(contatos[i]);
            section.append(`
            <div class="border border-dark p-3 my-4 w-100 mx-auto rounded">
                <div class="row text-center text-sm-center text-xl-justify">
                    <div class="col-sm-12 col-md-2 col-xl-2 col-lg-2 
                            mx-auto mx-sm-auto my-xl-auto my-lg-auto my-2 my-sm-2">
                        <img src="./img/person.png" class="person" alt="Contact" />
                    </div>
                    <div class="col-sm-12 col-md-8 col-xl-7 col-lg-7 
                                my-xl-auto my-lg-auto my-2 my-sm-2">
                        <h2 class="font-weight-bolder text-wrap text-break">
                            ${contato.nome}
                        </h2>
                        <h4 class="text-wrap text-break">
                            ${contato.email}
                        </h4>
                        <h5 class="text-wrap text-break">
                            ${contato.telefone}
                        </h5>
                    </div>
                    <div class="col-sm-12 col-md-2 col-xl-3 col-lg-3 
                                my-xl-auto my-lg-auto my-2 my-sm-2">
                        <a href="./edit_contact.html" 
                            onclick=getSelectedId(${contato.id})>
                            <img src="./img/edit_icon.png" 
                            class="edit px-2" alt="Edit icon" />
                        </a>
                        <a href="./index.html"
                            onclick=removeItem(getSelectedId(${contato.id}))>
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
            <div class="row p-5 d-flex">
                <div class="col-md-6 col-sm-12 pb-sm-5 pb-5 justify-content-center">
                    <img
                        class="mx-auto d-block my-2"
                        src="./img/site-icon-512.png"
                        alt="Agenda"
                        id="agenda"
                    />
                </div>

                <div class="col-md-6 col-sm-12 justify-content-center">
                    <h1 class="d-flex-row mb-4 text-center">Agenda</h1>

                    <ul class="list-group-flush">
                        <li class="list-group-item">
                            <a href="./create_contact.html" 
                                class="text-reset">
                                Inserir novo contato
                            </a>
                        </li>
                        <li class="list-group-item">
                            Excluir contatos
                        </li>
                        <li class="list-group-item">
                            Editar contatos
                        </li>
                        <li class="list-group-item">
                            Visualizar todos os contatos
                        </li>
                    </ul>
                </div>
            </div>
        `);
    };
});
