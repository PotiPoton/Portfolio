function navbar(navElements){
    let nav = document.createElement('nav')
    nav.setAttribute('id', 'navbar');
    let h1 = document.createElement('h1');
    h1.innerHTML = "Léo <br> Gilblas";
    
    nav.appendChild(h1);

    Object.entries(navElements).forEach(([dataTab, Affichage]) => {
        let a = document.createElement('a');
        if (dataTab == 'home') a.setAttribute('id', 'active');
        a.setAttribute('href', '#');
        a.setAttribute('class', 'tab-link');
        a.setAttribute('data-tab', dataTab);
        a.innerText = Affichage;

        nav.appendChild(a);
    });

    document.body.appendChild(nav);
}

function displayTabs(){
    // Sélectionner tous les liens de la navbar
    const tabLinks = document.querySelectorAll('.tab-link');

    // Boucler sur chaque lien et ajouter un écouteur d'événement
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Empêcher le comportement par défaut du lien (rechargement)

            // Cacher tout le contenu des onglets
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.style.display = 'none';
            });

            // Afficher le contenu correspondant
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).style.display = 'block';

            // Supprimer l'ID 'active' de l'ancien onglet actif
            const activeLink = document.getElementById('active');
            if (activeLink) {
            activeLink.removeAttribute('id');
            }

            // Ajouter l'ID 'active' à l'onglet cliqué
            this.setAttribute('id', 'active');
        });
    });
}

let navElements = {
    "home": "Accueil",
    "tab2": "test button",
    "parcours": "Mon parcours",
    "cv": "CV",
}
navbar(navElements)
displayTabs();


