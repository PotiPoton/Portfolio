function content() {
    document.body.appendChild(
        createEntireElement('div', { class: 'cnt content', child: [
            createEntireElement('h1', { innerText: `Mes projets` }),
            createEntireElement('div', { class: 'cnt box', child: [
                createEntireElement('h2', { innerText: 'Drive GSB' }),
                createEntireElement('div', { child: [
                    createEntireElement('p', { innerText: `Ce projet est réalisé  dans le cadre de mon BTS SIO. Il n'est pas encore tout à fait terminé, le lien qui mène à ce projet sera donc prochainement disponible !` }),
                    createEntireElement('p', { innerText: `En attendant, quelques explications. Ce projet vise à créer un drive où des visiteurs médicaux, des directeurs régionaux, des comptables, des médecins ou des patients, pourrons se connecter et auront tous accès au drive, mais chacun d'une manière différente. Ainsi, j'apprends à l'aide de ce projet à gérer la connexion sécurisée d'utilisateur, et à définir des droits en fonction de qui est connecté.`})
                ]})
            ]}),
            createEntireElement('div', { class: 'cnt box', child: [
                createEntireElement('h2', { innerText: 'Mon portfolio'}),
                createEntireElement('div', { child: [
                    createEntireElement('p', { innerText: `Avec le temps passé à le réaliser et à découvrir plein de fonctionnalité aussi géniales que casse-tête, je pense pouvoir mettre ce portfolio entièrement fait maison dans mes projets !` }),
                    createEntireElement('p', { innerText: `Certes, il a quelques défauts (notamment le fait que je ne suis vraiment pas graphiste ou designer), mais je me suis bien amusé à le réaliser, et je compte bien l'améliorer avec pleins de petites fonctionnalité que je n'ai pas encore eu (pris) le temps d'ajouter !` })
                ]})
            ]}),
            createEntireElement('div', { class: 'cnt box', child: [
                createEntireElement('h2', { innerText: 'Comparateur de prix'}),
                createEntireElement('div', { child: [
                    createEntireElement('p', { innerText: `Le comparateur de prix est le premier projet que j'ai réalisé dans le cadre de mon BTS (lors de ma première année). Il est loin d'être parfait, et je me suis rendu compte que certaines fonctionnalités étaient encore trop complexes par rapport à mes compétences lors de sa réalisation.` }),
                    createEntireElement('p', { innerText: `Ce projet vise à comparer les prix d'un produit sur une période. L'idée de base était que l'utilisateur rentre son lien, et que l'application gère le reste, à savoir récupérer le prix sur la page en question. C'était un peu trop complexe pour moi sur le moment, donc j'ai fait plus simple.` }),
                    createEntireElement('p', { innerText: `Je mettrais le projet en ligne dès que j'ai un peu de temps pour !`})
                    // createEntireElement('p', { innerText: `Vous pouvez retrouver le projet `, child: [
                    //     createEntireElement('a', { href: '/comparateur/sources/index.php', innerText: `ici `, child: [
                    //         createEntireElement('i', { class: 'fa-solid fa-arrow-up-right-from-square'})
                    //     ]})
                    // ]})
                ]})
            ]})
        ]})
    );
}

content();