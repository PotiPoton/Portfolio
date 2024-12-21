function createEntireElement(element, attributes){
    let elm = document.createElement(element);

    // console.log(`Création de l'élément : ${element} avec les attributs : ${attributes}`);

    if (attributes === undefined){
        return elm
    }
    for (let [key, value] of Object.entries(attributes)) {
        if (value !== undefined) {
            if (key === 'innerText') elm.innerText = value;
            else if (key === 'innerHTML') elm.innerHTML = value;
            else if (key === 'style' && typeof value === 'object') {
                Object.assign(elm.style, value);
            } else if (key.startsWith('on') && typeof value === 'function') {
                elm.addEventListener(key.slice(2), value);
            } else if (key === 'child' && Array.isArray(value)) {
                value.forEach(child => { 
                    if (typeof child === 'function') child = child();
                    if (child !== undefined) elm.appendChild(child); 
                });
            } else elm.setAttribute(key, value);
        }
    }
    return elm;
}

function createModal(id, title, content) {

    function closeModal() {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        }
    }

    // Crée l'arrière-plan (overlay) de la modale
    document.body.appendChild(
        createEntireElement('div', { id: id, class: 'modal-overlay', onclick: function () { closeModal(); }, child: [
            createEntireElement('div', { class: 'cnt box modal', child: [
                createEntireElement('h2', { innerText: title }),
                createEntireElement('div', { child: [
                    content
                ]}),
                //TODO Ajouter un jolie boutton sur la barre a droite du h2 ?
            ]})
        ]})
    );

    setTimeout(() => document.getElementById(id).classList.add('show'), 10);
}