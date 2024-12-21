document.body.appendChild(
    createEntireElement('div', { class: 'cnt', child: [
        createEntireElement('a', { href: 'index.html', innerText: '⤶ Retourner à la page d\'accueil' }),
        createEntireElement('h1', { innerText: 'Mon stage à CISA Informatique'}),
        createEntireElement('div', { class: 'cnt box', child: [
            createEntireElement('h2', { innerText: 'L\'entreprise' }),
            createEntireElement('div', { child: [
                createEntireElement('p', { child: [
                    createEntireElement('a', { href: 'https://www.cisa-informatique.com/', innerText: `CISA Informatique `, child : [
                        createEntireElement('i', {class: 'fa-solid fa-arrow-up-right-from-square' })
                    ]}),
                    createEntireElement('span', { class: 'inline', innerText: ` est une entreprise française spécialisée dans les solutions informatiques pour PME, PMI et ETI. Forte de plus de 60 ans d'expérience, elle propose des services variés : ERP, intégration de solutions de gestion, hébergement cloud, systèmes et réseaux, et assistance technique. Basée à Bourg-en-Bresse et Dardilly (près de Lyon), elle se distingue par sa méthodologie agile, son expertise multisectorielle et son engagement envers la réussite de ses clients.`})    
                ]})
            ]})
        ]}),
        createEntireElement('div', { class: 'cnt box', child: [
            createEntireElement('h2', { innerText: 'Ma Mission' }),
            createEntireElement('div', { child: [
                createEntireElement('p', { innerText: `J'ai effectué mon stage à CISA Informatique. Mon rôle durant ces 5 semaines a été de créer un module sur LXP, leur ERP (Enterprise Resource Planning, en français PGI, Progiciel de Gestion Intégré).` }),
                createEntireElement('p', { innerText: `Le module était un outil de gestion des employés sur la hot-line prenant en compte les congés, les absences, et se devait d'être le plus "équitable" possible quant à la répartition des heures d'hot-line sur les employés.` }),
                createEntireElement('p', { innerText: `Le développement de LXP se fait en C#, pour des raisons de confidentialité, je n'expliquerais pas plus les normes de développement de l'entreprise.` }),
                createEntireElement('p', { innerText: `Pour ce qui est du projet en lui-même, j'ai dû me baser sur l'agenda (et donc la manière dont est géré les utilisateurs). Récupérer tous les empêchements, congé ou autre, et faire en sorte de faire un "pré-affichage" avant de valider les heures d'hot-line, permettant à la personne qui gère ceci de voir s'il y a un de ces empêchements qui bloqueraient sur la semaine d'un employé en particulier. Ainsi, il peut modifier l'ordre des passages, ou bien remplacer par un autre employé pour faire des semaines équitable. Je n'ai pas eu le temps de finaliser à 100% le projet, mais il était prévu d'y ajouter des statistiques afin de voir combien de jours chaque employé est en hot-line pour ajuster et rendre le plus équitable possible la répartition de cette tâche.` })
            ]})
        ]})
    ]})
);