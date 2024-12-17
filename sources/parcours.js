function experiences(tabElements) {

    let content = [];

    tabElements.forEach(element => {
        let box = createEntireElement('div', { class: 'cnt box parcours' });

        let h2 = createEntireElement('h2', { innerText: element.ttle });
        // Date
        let divDate = createEntireElement('div', { class: 'content' });
        let ical = createEntireElement('i', { class: 'icon fa-solid fa-calendar-days' })
        let date = createEntireElement('p', { class: 'text', innerText: element.date });
        divDate.appendChild(ical);
        divDate.appendChild(date);
        //D Description
        let divDesc = createEntireElement('div', { class: 'content' });
        let iinf = createEntireElement('i', { class: 'icon fa-solid fa-comment-dots fa-flip-horizontal' })
        let desc = createEntireElement('p', { class: 'text',innerText: element.desc });
        divDesc.appendChild(iinf);
        divDesc.appendChild(desc);
        // Plus d'information
        let divMinf;
        if (element.minf) {
            divMinf = createEntireElement('div', { class: 'content' });
            let iminf = createEntireElement('i', { class: 'icon fa-solid fa-info' });
            let minf = createEntireElement('a', { class: 'minf', href: element.minf, innerText: 'Plus d\'information' }); 
            divMinf.appendChild(iminf);
            divMinf.appendChild(minf);                   
        }

        box.appendChild(h2);
        box.appendChild(divDate);
        box.appendChild(divDesc);
        if (divMinf) box.appendChild(divMinf);

        content.push(box);
        // div.appendChild(box);
    });

    return content;
}

function selector() {
    let select = createEntireElement('select', { class: 'title',
        onchange: function (e) {
            e.preventDefault();
            let selectedOption = e.target.value;
            Array.from(select.options).forEach(option => option.removeAttribute('hidden'));
            // console.log(Array.from(select.options));
            Array.from(select.options).find(option => (option.value === selectedOption)? option.hidden = true : '');
            selectedOption.hidden = true;
            let outputDiv = document.getElementById('output');

            while (outputDiv.firstChild) outputDiv.removeChild(outputDiv.firstChild);

            if (selectedOption === 'pro') {
                outputDiv.append(...experiences(loadTabPro()));
            } else if (selectedOption === 'sco') {
                outputDiv.append(...experiences(loadTabSchool()));
            } else { 
                //TODO: Logique d'erreur
            }


        }
    });
    let optionPro = createEntireElement('option', { class: 'title', innerText: 'Expériences Professionnelles', value: 'pro', hidden: true });
    let optionSco = createEntireElement('option', { class: 'title', innerText: 'Formations', value: 'sco' });

    select.appendChild(optionPro);
    select.appendChild(optionSco);

    return select;
}

function content(){
    let content = createEntireElement('div', {class: 'cnt content'});
    
    let output = createEntireElement('div', { id: 'output' });
    output.append(...experiences(loadTabPro()));

    let title = createEntireElement('h1');
    title.appendChild(selector());
    content.appendChild(title);
    content.appendChild(output);

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
}

content();

