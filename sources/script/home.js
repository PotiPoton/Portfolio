

function content() {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    let imgCmptFldr = "./img/logo-competences/";
    let imgToolFldr = "./img/logo-outils/";
    let tabCmptImg = [
        {
            src: `${imgCmptFldr}javascript.svg`,
            alt: "Javascript",
        },
        {
            src: `${imgCmptFldr}php-elephant.svg`,
            alt: "PHP",
        },        
        {
            src: `${imgCmptFldr}html-5.svg`,
            alt: "HTML",
        },        
        {
            src: `${imgCmptFldr}css-3.svg`,
            alt: "CSS",
        },        
        {
            src: `${imgCmptFldr}c-sharp.svg`,
            alt: "C#",
        }
    ];
    let tabToolImg = [
        {
            src: `${imgToolFldr}vs-code.svg`,
            alt: 'Visual Studio Code'
        },
        {
            src: `${imgToolFldr}git.svg`,
            alt: 'Git'
        },
        {
            src: `${imgToolFldr}github.svg`,
            alt: 'Github'
        },
        {
            src: `${imgToolFldr}bitbucket.svg`,
            alt: 'Bitbucket'
        },
        {
            src: `${imgToolFldr}mariadb.svg`,
            alt: 'MariaDb'
        },
        {
            src: `${imgToolFldr}vs-2022.svg`,
            alt: 'Visual Studio 2022'
        },
        {
            src: `${imgToolFldr}filezilla.svg`,
            alt: 'Filezilla'
        },
        {
            src: `${imgToolFldr}photoshop.svg`,
            alt: 'Photoshop'
        },
        {
            src: `${imgToolFldr}scribus.svg`,
            alt: 'Scribus'
        },
        {
            src: `${imgToolFldr}debian.svg`,
            alt: 'Debian'
        },
        {
            src: `${imgToolFldr}ubuntu.svg`,
            alt: 'Ubuntu'
        },
        {
            src: `${imgToolFldr}windows-11.svg`,
            alt: 'Windows'
        },
    ];
    tabCmptImg = shuffleArray(tabCmptImg);
    tabToolImg = shuffleArray(tabToolImg);


    function createImage(image) {
        let img = createEntireElement('img', { src: image.src, alt: image.alt, 
            onpointerover: function () {
                const randomAngle = Math.floor(Math.random() * 25) - 12; 
                img.style.transform = `scale(1.1) rotate(${randomAngle}deg)`;
        
                timeout = setTimeout(() => {
                    const text = createEntireElement('div', {
                        class: 'hover-text',
                        innerText: img.alt,
                        style: `top: ${img.getBoundingClientRect().bottom + window.scrollY}px; left: ${img.getBoundingClientRect().left + window.scrollX}px`
                    });
                    
                    document.body.appendChild(text);
                    
                    // Apparition avec un petit délai
                    requestAnimationFrame(() => { text.style.opacity = '1'; });
              
                    img.hoverText = text; // Stocker la référence pour pouvoir la supprimer plus tard
                  }, 100);
            },
            onpointerleave: function () {
                clearTimeout(timeout); // Annuler l'affichage si la souris part avant le délai
                if (img.hoverText) {
                    img.hoverText.style.opacity = '0'; // Disparition fluide
                    setTimeout(() => {
                        img.hoverText?.remove(); // Supprime l'élément une fois invisible
                        img.hoverText = null;
                    }, 300); // Délai pour permettre la transition
                }
            }
        });
        const randomAngle = Math.floor(Math.random() * 25) - 12; 
        img.style.transform = `scale(1.1) rotate(${randomAngle}deg)`;
        return img;
    }


    document.body.appendChild(
        createEntireElement('div', { class: 'cnt content', child: [
            // Titre
            createEntireElement('h1', { innerText: 'Accueil' }),
            // À propos de moi
            createEntireElement('div', { class: 'cnt box', child: [
                // Sous-titre
                createEntireElement('h2', {innerText: 'À propos de moi' }),
                createEntireElement('div', { class: 'img-txt', child: [
                    createEntireElement('img', { src: './img/pp-lgi.png' }),
                    createEntireElement('p', { innerText: "Je m'appelle Léo Gilblas, j'ai 21 ans et je suis actuellement en train de passer mon Brevet de Technicien Supérieur des Services Informatique aux Organisations option Solutions Logicielles et Application Métier, ou en version courte : ", child: [
                        createEntireElement('a', { 
                            innerText: "BTS SIO option SLAM ", 
                            child: [ createEntireElement('i', { class: 'fa-solid fa-arrow-up-right-from-square' }) ], 
                            onclick: () => {
                                createModal('bts-sio-modal', 'Le BTS', createEntireElement('div', { child: [
                                    createEntireElement('p', { innerHTML: `Le Brevet de Technicien Supérieur (BTS) Services Informatiques aux Organisations (SIO) est une formation de deux ans après le baccalauréat, visant à former des professionnels capables de répondre aux besoins informatiques des entreprises. Ce diplôme national se décline en deux options, chacune orientée vers des compétences spécifiques :` }),
                                    createEntireElement('div', { child: [
                                        createEntireElement('p', { innerHTML: `→ <strong>Solutions d'Infrastructure, Systèmes et Réseaux (SISR).</strong> Cette option prépare les étudiants à :` }),
                                        createEntireElement('ol', { child: [
                                            createEntireElement('li', { innerHTML: `Participer à la production et à la fourniture de services informatiques en réalisant ou en adaptant des solutions d’infrastructure.` }),
                                            createEntireElement('li', { innerHTML: `Assurer le fonctionnement optimal des équipements et des services informatiques.` })
                                        ]}),
                                        createEntireElement('p', { innerHTML: `Les débouchés professionnels incluent des postes tels que technicien d’infrastructure, technicien en télécommunications, technicien de maintenance, technicien support et déploiement, technicien systèmes et réseaux, analyste d'études, et webmaster.` }),
                                        createEntireElement('hr', { class: 'line' }),
                                        createEntireElement('p', { innerHTML: `→ <strong>Solutions Logicielles et Applications Métiers (SLAM).</strong> Cette option forme les étudiants à :` }),
                                        createEntireElement('ol', { child: [
                                            createEntireElement('li', { innerHTML: `Participer à la conception, au développement, au déploiement et à la maintenance des composants logiciels d'une solution applicative (Web, mobile, client…).` }),
                                            createEntireElement('li', { innerHTML: `Assurer la maintenance des solutions développées.` }),
                                            createEntireElement('li', { innerHTML: `Gérer les bases de données et les données numériques.` }),
                                            createEntireElement('li', { innerHTML: `Utiliser des outils de gestion de version (comme Git).` }),
                                        ]}),
                                        createEntireElement('p', { innerHTML: `Les débouchés professionnels pour cette option comprennent des postes tels qu'analyste programmeur, chargé d'études informatiques, développeur (web, d'applications informatiques ou mobiles), et technicien d'études informatiques.` })
                                    ]})
                                ]}));
                            }
                        })
                    ]}),
                    createEntireElement('p', { innerText: "Je suis passionné par l'informatique et tout ce qui l'entoure ! Les jeux vidéo, la musique assistée par ordinateur (MAO), l'intelligence artificielle, et bien évidemment, la programmation et le développement. " }),
                    createEntireElement('p', { innerText: "J'affectionne tout particulièrement le développement web et les divers facettes qu'il aborde ! En partant du design et de la mise en page, jusqu'au fonctionnalités poussées à découvrir en php, javascript, SQL et les plaisirs du CSS, en passant bien évidemment par une bonne dose de cybersécurité !" }),
                    createEntireElement('p', { innerText: "Malgré ma spécialisation dans le développement au sein de ce BTS, je reste curieux des systèmes et réseaux sur lesquels mes applications web et projets tournent. J'aime comprendre et apprendre à mettre en place moi-même ce sur quoi je travaille afin de mieux comprendre les éventuels problèmes de cybersécurité, de compatibilité ou autres que je ne verrai pas en restant enfermé dans mon environnement de développement. " })
                ]})
            ]}),
            // Compétences
            createEntireElement('div', { class: 'cnt box', child: [
                createEntireElement('h2', { innerText: 'Mes compétences' }),
                createEntireElement('div', { child: [
                    createEntireElement('p', { innerText: "Toutes les compétences que j'ai pu aquérir sont là pour divers raisons. D'abord, et bien évidemment, grâce aux cours de programmation et de réseaux que j'ai suivi lors de mon BTS. Mais certaines viennent surtout du temps passé chez moi à coder des petits projets rarement terminées, mais qui m'ont énormément appris, et ce aussi bien au niveau technique qu'au niveau de la gestion de ceux-ci." }),
                    createEntireElement('div', { class: 'competences-categories',child: [
                        createEntireElement('div', { class: 'categorie petit', child: [
                            createEntireElement('h3', { innerText: 'Languages de programmation' }),
                            createEntireElement('ul', { class: 'competences-list', child: [
                                ...tabCmptImg.map(function (cmptImg) { return createEntireElement('li', { child: [ function () { return createImage(cmptImg); } ] });
                                })
                            ]})
                        ]}),
                        createEntireElement('div', { class: 'categorie grand', child: [
                            createEntireElement('h3', { innerText: 'Outils' }),
                            createEntireElement('ul', { class: 'competences-list', child: [
                                ...tabToolImg.map(function (toolImg) { return createEntireElement('li', { child: [ function () { return createImage(toolImg); } ] });
                                })
                            ]})
                        ]})
                    ]})
                ]})
            ]})
        ]})
    );
}

content();