
function titlePro(){
    let title = document.createElement('div');
    title.setAttribute('class', 'cnt');
    
    let h1 = document.createElement('h1');
    h1.innerHTML = "Mon parcours professionnel";
    title.appendChild(h1);

    return title;
}

function pro(tabElements) {
    let div = document.createElement('div');

    tabElements.forEach(element => {
        let box = document.createElement('div');
        box.setAttribute('class', 'cnt box parcours');

        let h2 = document.createElement('h2');
        h2.innerText = element.cpny;

        let date = document.createElement('p');
        date.setAttribute('class', 'date');
        date.innerText = element.date;

        let desc = document.createElement('p');
        desc.setAttribute('class', 'desc');
        desc.innerText = element.desc;

        box.appendChild(h2);
        box.appendChild(date);
        box.appendChild(desc);

        div.appendChild(box);
    });

    return div;
}

function content(tabPro){
    let content = document.createElement('div');
    content.setAttribute('class', 'cnt content');

    content.appendChild(titlePro());
    content.appendChild(pro(tabPro));

    // content.appendChild(titleSchool());
    // content.appendChild(school(tabSchool));

    document.body.appendChild(content);
}

function loadParcours() {
    return tabPro = [
        {
            date: "27 mai au 28 juin 2024",
            cpny: "CISA Informatique",
            city: "Bourg-en-Bresse",
            desc: "Stage de développement sur un ERP en C#"
        },
        {
            date: "septembre 2023 à août 2024",
            cpny: "SAS Monnet Philippe",
            city: "Bouligneux",
            desc: "Menuisier installateur en alternance"
        },
        {
            date: "août à octobre 2021",
            cpny: "Restaurant Bar L'Essentiel",
            city: "Bressolles",
            desc: "Serveur, Barman, Commis pour des extras"
        },
        {
            date: "octobre 2021",
            cpny: "Théâtre de Bourg-en-Bresse",
            city: "Bourg-en-Bresse",
            desc: "Stage de technicien son et lumière d'une semaine"
        },
        {
            date: "mars 2018",
            cpny: "SCOP Bois Logic",
            city: "Saint-Jean-le-Vieux",
            desc: "Stage de menuiserie et de plaquiste d'une semaine"
        },
    ];
}

content(loadParcours());

