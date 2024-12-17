function loadTab(tabName) {
    // Supprimer l'ancienne div avec la classe "content" si elle existe
    const oldContent = document.querySelector('.content');
    if (oldContent) oldContent.remove();

    // Supprimer un script existant correspondant à un autre onglet
    const oldScript = document.getElementById('dynamic-script');
    if (oldScript) oldScript.remove();

    // Créer un nouveau script pour charger dynamiquement le fichier JS
    let script = document.createElement('script');
    script.setAttribute('id', 'dynamic-script');
    script.src = `./${tabName}.js`;
    
    // Ajouter le script en bas de la page
    document.body.appendChild(script);
}

function navbar(navElements){

    document.title = 'Portfolio - Accueil';
    let nav = createEntireElement('nav', {id: 'navbar'});
    let h1 = createEntireElement('h1', {innerHTML: 'Léo<br>Gilblas'});
    
    nav.appendChild(h1);

    Object.entries(navElements).forEach(([dataTab, affichage]) => {
        let a = createEntireElement('a', {
            id: (dataTab == 'home') ? 'active' : undefined,
            name: dataTab, 
            class: 'tab-link', 
            innerText: affichage,
            onclick: function (e) {
                e.preventDefault();

                //Récuperer le nom de l'onglet selectionnée
                const tabName = this.getAttribute('name');

                //Charger l'onglet correspondant
                loadTab(tabName);

                // Supprimer l'ID 'active' de l'ancien onglet actif
                const activeLink = document.getElementById('active');
                if (activeLink) activeLink.removeAttribute('id');

                // Ajouter l'ID 'active' à l'onglet cliqué
                this.setAttribute('id', 'active');

                // Changer le titre dynamiquement
                document.title = `Portfolio - ${this.innerText}`;

                //Rétracter la navbar
                nav.classList.toggle('open');

                // Change le texte ou l'icône du bouton
                if (nav.classList.contains("open")) {
                    toggleButton.innerText = "✖"; // Icône de fermeture
                } else {
                    toggleButton.innerText = "☰"; // Icône d'ouverture
                }
            }
        });
        nav.appendChild(a);
    });

    document.body.appendChild(nav);
}

let navElements = {
    "home": "Accueil",
    "parcours": "Mon parcours",
    "projets": "Mes projets",
    "veille": "Veille technologique",
    "cv": "CV"

}
navbar(navElements)
// displayTab();

let toggleButton = createEntireElement('button', { 
    id: 'toggle-btn',
    class: 'toggle', 
    innerText: '☰',
    onclick: function () {
        let nav = document.getElementById('navbar');
        nav.classList.toggle('open');

        // Change le texte ou l'icône du bouton
        if (nav.classList.contains("open")) {
            toggleButton.innerText = "✖"; // Icône de fermeture
        } else {
            toggleButton.innerText = "☰"; // Icône d'ouverture
        }
    }
});

document.body.appendChild(toggleButton);