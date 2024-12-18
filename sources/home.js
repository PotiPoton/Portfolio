function createModal() {

    function closeModal() {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        }
    }

    // Crée l'arrière-plan (overlay) de la modale
    document.body.appendChild(
        createEntireElement('div', { id: 'bts-sio-modal', class: 'modal-overlay', onclick: function () { closeModal(); }, child: [
            createEntireElement('div', { class: 'cnt box modal', child: [
                createEntireElement('h2', { innerText: 'Le BTS' }),
                createEntireElement('span', { child: [
                    createEntireElement('p', { innerHTML: `Le BTS SIO option SLAM prépare les étudiants à trois domaines clés :` }),
                    createEntireElement('ol', { child: [
                        createEntireElement('li', { innerHTML: `<strong>Support et services informatiques</strong> : Gestion des services existants, accompagnement de la transformation numérique, développement de la présence web et gestion de l’employabilité tout en travaillant en mode projet.` }),
                        createEntireElement('li', { innerHTML: `<strong>Cybersécurité</strong> : Analyse des risques et sécurisation des données, équipements et usages des utilisateurs, avec une approche technique, organisationnelle et juridique pour protéger l'entreprise.` }),
                        createEntireElement('li', { innerHTML: `<strong>Conception et développement d'applications</strong> : Participation à la création, au déploiement et à la maintenance de solutions logicielles (web, mobile) en intégrant des compétences en bases de données et gestion de version.` })]
                    })
                ]}),
                //TODO Ajouter un jolie boutton sur la barre a droite du h2 plutôt ?
                // createEntireElement('button', {
                //     innerText: 'Fermer',
                //     onclick: function () { closeModal(); }
                // })
            ]}),
        ]})
    );

    // document.querySelector('modal-overlay').classList.add('show');
}

function content() {
    document.body.appendChild(
        createEntireElement('div', { class: 'cnt content', child: [
            // Titre
            createEntireElement('h1', { innerText: 'Accueil' }),
            // À propos de moi
            createEntireElement('div', { class: 'cnt box', child: [
                // Sous-titre
                createEntireElement('h2', {innerText: 'À propos de moi' }),
                createEntireElement('span', { class: 'img-txt', child: [
                    createEntireElement('img', { src: './img/pp-lgi.png' }),
                    createEntireElement('p', { innerText: "Je m'appelle Léo Gilblas, j'ai 21 ans et je suis actuellement entrain de passer mon Brevet de Technicien Supérieur des Services Informatique aux Organistion option Solutions Logicielles et Application Métier, ou en version courte : ", child: [
                        createEntireElement('a', { 
                            innerText: "BTS SIO option SLAM ", 
                            child: [ createEntireElement('i', { class: 'fa-solid fa-arrow-up-right-from-square' }) ], 
                            onclick: function (e) {
                                e.preventDefault();
                                createModal();
                                setTimeout(() => document.getElementById('bts-sio-modal').classList.add('show'), 10);
                            }
                        })
                    ]}),
                    createEntireElement('p', { innerText: "Je suis passionné par l'informatique et tout ce qui l'entoure ! Les jeux vidéo, la musique assisté par ordinateur (MAO), l'intelligence artificielle, et bien évidemment, la programmation et le développement. " }),
                    createEntireElement('p', { innerText: "J'affectionne tout particulièrement le développement web et les divers facettes qu'il aborde ! En partant du design et de la mise en page, jusqu'au fonctionnalités poussées à découvrir en php, javascript, SQL et les plaisirs du CSS, en passant bien évidemment par une bonne dose de cybersécurité !" }),
                    createEntireElement('p', { innerText: "Malgré ma spécialisation dans le développement au sein de ce BTS, je reste curieux des système et réseaux sur lesquels mes applications web et projets tournent. J'aime comprendre et apprendre à mettre en place moi-même ce sur quoi je travail afin de mieux comprendre les éventuels problèmes de cybersécurité, de compatibilité ou autres que je ne verrais pas en restant enfermé dans mon environnement de développement. " })
                ]})
            ]}),
            // Compétences
            createEntireElement('div', { class: 'cnt box', child: [
                createEntireElement('h2', { innerText: 'Mes compétences' }),
                createEntireElement('span', { class: 'competences-categories',child: [
                    createEntireElement('p', { innerText: "Toutes les compétences que j'ai pu aquérir sont là pour divers raisons. D'abord, et bien évidemment, grâce aux cours de programmation et de réseaux que j'ai suivi lors de mon BTS. Mais certaines viennent surtout du temps passé chez moi à coder des petits projets rarement terminées, mais qui m'ont énormément appris, et ce aussi bien au niveau technique qu'au niveau de la gestion de ceux-ci." }),
                    createEntireElement('div', { class: 'categorie', child: [
                        createEntireElement('h3', { innerText: 'Languages de programmation' }),
                        createEntireElement('ul', { class: 'competences-list', child: [
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-competences/javascript.svg", alt: "Javascript" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-competences/php-elephant.svg", alt: "PHP" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-competences/html-5.svg", alt: "HTML" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-competences/css-3.svg", alt: "CSS" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-competences/c-sharp.svg", alt: "C Sharp" }) ] })
                        ]})
                    ]}),
                    createEntireElement('div', { class: 'categorie', child: [
                        createEntireElement('h3', { innerText: 'Outils' }),
                        createEntireElement('ul', { class: 'competences-list', child: [
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-outils/vs-code.svg", alt: "Visual Studio Code" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-outils/git.svg", alt: "Git" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-outils/github.svg", alt: "Github" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-outils/bitbucket.svg", alt: "Bitbucket" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-outils/mariadb.svg", alt: "MariaDb" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-outils/vs-2022.svg", alt: "Visual Studio 2022" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-outils/filezilla.svg", alt: "Filezilla" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-outils/photoshop.svg", alt: "Photoshop" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-outils/scribus.svg", alt: "Scribus" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-outils/debian.svg", alt: "Debian" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-outils/ubuntu.svg", alt: "Ubuntu" }) ] }),
                            createEntireElement('li', { child: [ createEntireElement('img', { src: "./img/logo-outils/windows-11.svg", alt: "Windows" }) ] })
                        ]})
                    ]})
                ]})
            ]})
        ]})
    );
}

content();

document.querySelectorAll('.competences-list img').forEach(img => {
    const randomAngle = Math.floor(Math.random() * 25) - 12; 
    img.style.transform = `scale(1.1) rotate(${randomAngle}deg)`;
    img.addEventListener('mouseover', () => {
        // Générer un angle aléatoire entre -12 et 12 degrés
        const randomAngle = Math.floor(Math.random() * 25) - 12; 
        img.style.transform = `scale(1.1) rotate(${randomAngle}deg)`;

        timeout = setTimeout(() => {
            const text = createEntireElement('div', {

            });
            // const text = document.createElement('div');
            text.className = 'hover-text';
            text.textContent = img.alt;
            // text.style.position = 'absolute';
            text.style.top = `${img.getBoundingClientRect().bottom + window.scrollY}px`;
            text.style.left = `${img.getBoundingClientRect().left + window.scrollX}px`;
            // text.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            // text.style.color = 'white';
            // text.style.padding = '5px 10px';
            // text.style.borderRadius = '5px';
            // text.style.zIndex = '1000';
            // text.style.pointerEvents = 'none'; // Empêche l'interaction avec le texte
            // text.style.transition = 'opacity 0.3s ease';
            // text.style.opacity = '0';
            
            document.body.appendChild(text);
            
            // Apparition avec un petit délai
            requestAnimationFrame(() => {
              text.style.opacity = '1';
            });
      
            img.hoverText = text; // Stocker la référence pour pouvoir la supprimer plus tard
          }, 100); // Afficher après 500ms (demi-seconde)
    });

    img.addEventListener('mouseleave', () => {
        clearTimeout(timeout); // Annuler l'affichage si la souris part avant le délai
        if (img.hoverText) {
            img.hoverText.style.opacity = '0'; // Disparition fluide
            setTimeout(() => {
                img.hoverText?.remove(); // Supprime l'élément une fois invisible
                img.hoverText = null;
            }, 300); // Délai pour permettre la transition
        }
        // img.style.transform = 'rscale(1) rotate(0deg)';
    });
});