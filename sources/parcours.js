function content(){

    let tabPro = [
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
    let tabSchool = [
        {
            date: '2023 - en cours',
            ttle: 'BTS Services Informatique aux Organisation',
            desc: 'Option Solution Logicielles et Application Métiers'
            // minf: 'bts-sio.html'
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

    function experiences(tabElements) {

        let content = [];
    
        tabElements.forEach(element => {
            content.push(createEntireElement('div', { class: 'cnt box parcours', child: [
                createEntireElement('h2', { innerText: element.ttle }),
                createEntireElement('div', { class: 'content', child: [
                    createEntireElement('i', { class: 'icon fa-solid fa-calendar-days' }),
                    createEntireElement('p', { class: 'text', innerText: element.date })
                ]}),
                createEntireElement('div', { class: 'content', child: [
                    createEntireElement('i', { class: 'icon fa-solid fa-comment-dots fa-flip-horizontal' }),
                    createEntireElement('p', { class: 'text',innerText: element.desc })
                ]}),
                () => (element.minf) ? createEntireElement('div', { class: 'content', child: [
                    createEntireElement('i', { class: 'icon fa-solid fa-info' }),
                    createEntireElement('a', { class: 'minf', href: element.minf, innerText: "Plus d'information" })
                ]}) : undefined
            ]}));
        });
    
        return content;
    }

    document.body.appendChild(createEntireElement('div', {class: 'cnt content', child: [
        createEntireElement('h1', { child: [
            createEntireElement('select', { 
                class: 'title',
                child : [
                    createEntireElement('option', { class: 'title', innerText: 'Expériences Professionnelles', value: 'pro', hidden: true }),
                    createEntireElement('option', { class: 'title', innerText: 'Formations', value: 'sco' })
                ],
                onchange: function (e) {
                    e.preventDefault();
        
                    let selectedOption = e.target.value;
                    Array.from(this.options).forEach(option => option.removeAttribute('hidden'));
                    Array.from(this.options).find(option => (option.value === selectedOption)? option.hidden = true : '');
        
                    let outputDiv = document.getElementById('output');
                    while (outputDiv.firstChild) outputDiv.removeChild(outputDiv.firstChild);
        
                    if (selectedOption === 'pro') { outputDiv.append(...experiences(tabPro)); }
                    else if (selectedOption === 'sco') { outputDiv.append(...experiences(tabSchool)); }
                }
            })
        ]}),
        createEntireElement('div', { id: 'output', child: [...experiences(tabPro)] })
    ]}));

}

content();

