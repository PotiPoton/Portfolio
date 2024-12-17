function content() {
    document.body.appendChild(
        createEntireElement('div', { class: 'cnt content', child: [
            // Titre
            createEntireElement('h1', { innerText: 'Accueil' }),
            // Le BTS
            createEntireElement('div', { class: 'cnt box', child: [
                // Sous-titre
                createEntireElement('h2', { innerText: 'Le BTS' }),
                // Descrition
                createEntireElement('p', { innerHTML: `Le BTS SIO option SLAM prépare les étudiants à trois domaines clés :`, child: [
                    createEntireElement('ol', { child: [
                        createEntireElement('li', { innerHTML: `<strong>Support et services informatiques</strong> : Gestion des services existants, accompagnement de la transformation numérique, développement de la présence web et gestion de l’employabilité tout en travaillant en mode projet.` }),
                        createEntireElement('li', { innerHTML: `<strong>Cybersécurité</strong> : Analyse des risques et sécurisation des données, équipements et usages des utilisateurs, avec une approche technique, organisationnelle et juridique pour protéger l'entreprise.` }),
                        createEntireElement('li', { innerHTML: `<strong>Conception et développement d'applications</strong> : Participation à la création, au déploiement et à la maintenance de solutions logicielles (web, mobile) en intégrant des compétences en bases de données et gestion de version.` })]
                    })]
                })] 
            })]
        })
    );
}

content();