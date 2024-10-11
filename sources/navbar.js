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
        a.setAttribute('name', dataTab);
        a.innerText = Affichage;

        nav.appendChild(a);
    });

    document.body.appendChild(nav);
}

function displayTab(){
    // Sélectionner tous les liens de la navbar
    const tabLinks = document.querySelectorAll('.tab-link');

    // Boucler sur chaque lien et ajouter un écouteur d'événement
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Empêcher le comportement par défaut du lien (rechargement)

            // Supprimer l'ancienne div avec la classe "content" si elle existe
            const oldContent = document.querySelector('.content');
            if (oldContent) oldContent.remove();

            // Supprimer un script existant correspondant à un autre onglet
            const oldScript = document.getElementById('dynamic-script');
            if (oldScript) oldScript.remove();

            //Récuperer le nom de l'onglet selectionnée
            const tabName = this.getAttribute('name');

            // Créer un nouveau script pour charger dynamiquement le fichier JS
            let script = document.createElement('script');
            script.setAttribute('id', 'dynamic-script');
            script.src = `./${tabName}.js`;
            
            // Ajouter le script en bas de la page
            document.body.appendChild(script);

            // Supprimer l'ID 'active' de l'ancien onglet actif
            const activeLink = document.getElementById('active');
            if (activeLink) activeLink.removeAttribute('id');

            // Ajouter l'ID 'active' à l'onglet cliqué
            this.setAttribute('id', 'active');
        });
    });
}

let navElements = {
    "home": "Accueil",
    "parcours": "Mon parcours",
    "cv": "CV",
}
navbar(navElements)
displayTab();


