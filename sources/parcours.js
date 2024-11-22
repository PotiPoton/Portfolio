function experiences(tabElements) {

    let div = createEntireElement('div');

    tabElements.forEach(element => {
        let box = createEntireElement('div', {class: 'cnt box parcours'});

        let h2 = createEntireElement('h2', {innerText: element.ttle});
        let date = createEntireElement('p', {class: 'date', innerText: element.date});
        let desc = createEntireElement('p', {class: 'desc', innerText: element.desc});
        let minf;
        if (element.minf) {
            minf = createEntireElement('a', {
                href: element.minf,
                class: 'more-info', //TODO: Add more-info CSS class
                innerText: 'Plus d\'information', 
            });                    
        }
        box.appendChild(h2);
        box.appendChild(date);
        box.appendChild(desc);
        if (minf) box.appendChild(minf);

        div.appendChild(box);
    });

    return div;
}

function content(){
    let content = createEntireElement('div', {class: 'cnt content'});

    content.appendChild(title('Expériences Professionnelles'));
    content.appendChild(experiences(loadTabPro()));

    content.appendChild(title('Formations'));
    content.appendChild(experiences(loadTabSchool()));

    document.body.appendChild(content);
}

function loadTabPro() {
    return tabPro = [
        {
            date: "27 mai au 28 juin 2024",
            ttle: "CISA Informatique",
            city: "Bourg-en-Bresse",
            desc: "Stage de développement sur un ERP en C#",
            minf: "cisa-informatique.html"
        },
        {
            date: "septembre 2023 à septembre 2024",
            ttle: "SAS Monnet Philippe",
            city: "Bouligneux",
            desc: "Menuisier installateur en alternance"
        },
        {
            date: "août à octobre 2021",
            ttle: "Restaurant Bar L'Essentiel",
            city: "Bressolles",
            desc: "Serveur, Barman, Commis pour des extras"
        },
        {
            date: "octobre 2021",
            ttle: "Théâtre de Bourg-en-Bresse",
            city: "Bourg-en-Bresse",
            desc: "Stage de technicien son et lumière d'une semaine"
        },
        {
            date: "mars 2018",
            ttle: "SCOP Bois Logic",
            city: "Saint-Jean-le-Vieux",
            desc: "Stage de menuiserie et de plaquiste d'une semaine"
        },
    ];
}

function loadTabSchool() {
    return tabSchool = [
        {
            date: '2023 - en cours',
            ttle: 'BTS Services Informatique aux Organisation',
            desc: 'Option Solution Logicielles et Application Métiers'
            // minf: ''
        },
        {
            date: '2022 - 2023',
            ttle: 'CAP Menuisier Installateur',
            desc: 'Année en alternance'
        },
        {
            date: '2021 - 2022',
            ttle: 'Fac de Musicologie',
            desc: 'Année Préparatoire en Étude Musicale'
        },
        {
            date: '2021',
            ttle: 'Bac Général',
            desc: 'Options Sciences de l\'Ingénieur, Numérique et Sciences Informatiques, Mathématiques et Mathématiques complémentaire Mention Assez Bien'
        },
    ];
}

content();

