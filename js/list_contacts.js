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
    let section = $("section");

    let contatos = loadContacts();
    if (contatos.length > 0) {
        section.append(`
            <h1 class="text-center my-5">
                Meus contatos
            </h1>`);
        for (var i in contatos) {
            let contato = JSON.parse(contatos[i]);
            section.append(`
            <div class="border border-dark p-3 my-4 w-75 mx-auto rounded">
                <div class="row text-center text-sm-center text-xl-justify">
                    <div class="col-sm-12 col-md-2 col-xl-2 col-lg-2 
                            mx-auto mx-sm-auto my-xl-auto my-lg-auto my-2 my-sm-2">
                        <img src="./img/person.png" class="person" alt="Contact" />
                    </div>
                    <div class="col-sm-12 col-md-8 col-xl-10 col-lg-10 
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
                </div>    
            </div>
        `);
        };
    } else {
        section.append(`
            <div class="m-5 p-5 h-100">
                <h1 class="text-center">
                    Não existem contatos cadastrados.
                </h1>
            </div>
        `);
    };
});
