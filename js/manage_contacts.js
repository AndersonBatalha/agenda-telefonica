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
                Editar/excluir contatos
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
                        <a href="./list_contacts.html"
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
            <div class="m-5 p-5 h-100 d-flex justify-content-center">
                <h1 class="text-center"> 
                    <div class="row d-flex justify-content-center">
                        <ion-icon class="info" name="information-circle"></ion-icon>
                    </div>
                    <div class="row">               
                        <p>Não existem contatos cadastrados.</p>
                    </div>
                </h1>
            </div>
        `);
    };
});
