function navbar(navElements){

    function loadTab(tabName) {
        // Supprimer l'ancienne div avec la classe "content" si elle existe
        let oldContent = document.querySelector('.content');
        if (oldContent) oldContent.remove();
    
        // Supprimer un script existant correspondant à un autre onglet
        let oldScript = document.getElementById('dynamic-script');
        if (oldScript) oldScript.remove();
    
        // Créer un nouveau script pour charger dynamiquement le fichier JS
        let script = document.createElement('script');
        script.setAttribute('id', 'dynamic-script');
        script.src = `./${tabName}.js`;
        
        // Ajouter le script en bas de la page
        document.body.appendChild(script);
    }

    document.title = 'Portfolio - Accueil';
    document.body.appendChild(
        // Navbar
        createEntireElement('nav', { id: 'navbar', child: [
            // Titre
            createEntireElement('h1', {innerHTML: 'Léo<br>Gilblas'}),
            // Tous les liens vers les différents onglets
            ...Object.entries(navElements).map(([dataTab, affichage]) => {
                return createEntireElement('a', {
                    id: (dataTab === 'home') ? 'active' : undefined,
                    name: dataTab,
                    innerText: affichage,
                    onclick: function (e) {
                        e.preventDefault();

                        document.title = `Portfolio - ${this.innerText}`;
    
                        const tabName = this.getAttribute('name');
                        loadTab(tabName);
    
                        const activeLink = document.getElementById('active');
                        if (activeLink) activeLink.removeAttribute('id');
                        this.setAttribute('id', 'active');
    
                        // Pour navbar rétractable
                        let nav = document.getElementById('navbar');
                        let togglebtn = document.getElementById('toggle-btn');
                        nav.classList.toggle('open');
                        if (nav.classList.contains("open")) { togglebtn.innerText = "✖"; } 
                        else { togglebtn.innerText = "☰"; }
                    }
                });
            })
        ]})
    );

    // Charger par défaut home
    loadTab('home');

}

let navElements = {
    "home": "Accueil",
    "parcours": "Mon parcours",
    "projets": "Mes projets",
    "veille": "Veille technologique",
    "cv": "CV"

}
navbar(navElements)

// Pour navbar rétractable
document.body.appendChild(createEntireElement('button', { 
    id: 'toggle-btn',
    class: 'toggle', 
    innerText: '☰',
    onclick: function () {
        let nav = document.getElementById('navbar');
        nav.classList.toggle('open');

        // Change le texte ou l'icône du bouton
        if (nav.classList.contains("open")) {
            this.innerText = "✖"; // Icône de fermeture
        } else {
            this.innerText = "☰"; // Icône d'ouverture
        }
    }
}));