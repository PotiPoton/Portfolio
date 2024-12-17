function createModal() {
    // Crée l'arrière-plan (overlay) de la modale
    document.body.appendChild(
        createEntireElement('div', { id: 'bts-sio-modal', class: 'modal-overlay', onclick: function () { closeModal(); }, child: [
            createEntireElement('div', { class: 'cnt box modal', child: [
                createEntireElement('h2', { innerText: 'Le BTS' }),
                createEntireElement('p', { innerHTML: `Le BTS SIO option SLAM prépare les étudiants à trois domaines clés :`, child: [
                    createEntireElement('ol', { child: [
                        createEntireElement('li', { innerHTML: `<strong>Support et services informatiques</strong> : Gestion des services existants, accompagnement de la transformation numérique, développement de la présence web et gestion de l’employabilité tout en travaillant en mode projet.` }),
                        createEntireElement('li', { innerHTML: `<strong>Cybersécurité</strong> : Analyse des risques et sécurisation des données, équipements et usages des utilisateurs, avec une approche technique, organisationnelle et juridique pour protéger l'entreprise.` }),
                        createEntireElement('li', { innerHTML: `<strong>Conception et développement d'applications</strong> : Participation à la création, au déploiement et à la maintenance de solutions logicielles (web, mobile) en intégrant des compétences en bases de données et gestion de version.` })]
                    })
                ]}),
                // createEntireElement('button', {
                //     innerText: 'Fermer',
                //     onclick: function () { closeModal(); }
                // })
            ]}),
        ]})
    );

    // document.querySelector('modal-overlay').classList.add('show');
}

function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
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
                createEntireElement('p', { child: [
                    createEntireElement('img', { src: '' }),
                    createEntireElement('ul', { child: [
                        createEntireElement('li', { innerText: "Je m'appelle Léo Gilblas, j'ai 21 ans et je suis actuellement entrain de passer mon Brevet de Technicien Supérieur des Services Informatique aux Organistion option Solutions Logicielles et Application Métier, ou en version courte : ", child: [
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
                        createEntireElement('li', { innerText: "Je suis passionné par l'informatique et tout ce qui l'entoure ! Les jeux vidéo, la musique assisté par ordinateur (MAO), l'intelligence artificielle, et bien évidemment, la programmation et le développement. " }),
                        createEntireElement('li', { innerText: "J'affectionne tout particulièrement le développement web et les divers facettes qu'il aborde ! En partant du design et de la mise en page, jusqu'au fonctionnalités poussées à découvrir en php, javascript, SQL et les plaisirs du CSS, en passant bien évidemment par une bonne dose de cybersécurité !" }),
                        createEntireElement('li', { innerText: "Malgré ma spécialisation dans le développement au sein de ce BTS, je reste curieux des système et réseaux sur lesquels mes applications web et projets tournent. J'aime comprendre et apprendre à mettre en place moi-même ce sur quoi je travail afin de mieux comprendre les éventuels problèmes de cybersécurité, de compatibilité ou autres que je ne verrais pas en restant enfermé dans mon environnement de développement. " })
                    ]})
                ]})
            ]}),
            // Projet Professionnel
            createEntireElement('div', { class: 'cnt box', child: [
                createEntireElement('h2', { innerText: 'Mon projet professionel' }),
                createEntireElement('p', { child: [
                    
                ]})
            ]}),
            // Compétences
            createEntireElement('div', { class: 'cnt box', child: [
                createEntireElement('h2', { innerText: 'Mes compétences' }),
                createEntireElement('p', { child: [
                    
                ]})
            ]})
        ]})
    );
}

content();