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
    let tabSco = [
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
            content.push(createEntireElement('div', { class: 'cnt box', child: [
                createEntireElement('h2', { innerText: element.ttle }),
                createEntireElement('div', { class: 'parcours', child: [
                    createEntireElement('div', { class: 'content', child: [
                        createEntireElement('i', { class: 'icon fa-solid fa-calendar-days' }),
                        createEntireElement('p', { class: 'text', innerText: element.date })
                    ]}),
                    createEntireElement('div', { class: 'content', child: [
                        createEntireElement('i', { class: 'icon fa-solid fa-info' }),
                        createEntireElement('p', { class: 'text',innerText: element.desc })
                    ]}),
                    () => (element.minf) ? createEntireElement('div', { class: 'content', child: [
                        createEntireElement('a', { class: '', href: element.minf, innerText: "Plus d'information ", child: [
                            createEntireElement('i', { class: 'fa-solid fa-arrow-up-right-from-square' })
                        ]}),
                    ]}) : undefined
                ]})

            ]}));
        });
    
        return content;
    }

    document.body.appendChild(createEntireElement('div', {class: 'cnt content', child: [
        createEntireElement('div', { class: 'fake-select', child: [
            createEntireElement('div', { 
                class: 'select', 
                onclick: function () { 
                    this.querySelector(".optList").classList.toggle("hidden");  
                },
                child: [
                createEntireElement('span', { class: 'value', innerText: 'Expériences Professionnelles' }),
                createEntireElement('ul', { class: 'optList hidden', child: [
                    createEntireElement('li', { class: 'option highlight', innerText: 'Expériences Professionnelles', hidden: '', value: 'pro' }),
                    createEntireElement('li', { class: 'option', innerText: 'Formations', value: 'sco'})
                ]})
            ]})
        ]}),
        createEntireElement('div', { id: 'output', child: [...experiences(tabPro)] })
    ]}));
        
    document.querySelectorAll(".select").forEach((select) => {
        const optionList = select.querySelectorAll(".option");
        optionList.forEach((option) => {
            option.addEventListener("click", () => { 
                select.querySelector(".value").textContent = option.textContent;
            
                let selectedValue = option.attributes.value;
                Array.from(optionList).forEach(option => { option.removeAttribute('hidden') });
                Array.from(optionList).find(option => { if (option.attributes.value === selectedValue) option.setAttribute('hidden', ''); });
    
                let outputDiv = document.getElementById('output');
                while (outputDiv.firstChild) outputDiv.removeChild(outputDiv.firstChild);
    
                if (selectedValue.nodeValue === 'pro') outputDiv.append(...experiences(tabPro));
                else if (selectedValue.nodeValue === 'sco') outputDiv.append(...experiences(tabSco));
            });
        });
    });
    

}

content();


