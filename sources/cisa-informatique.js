let cnt = createEntireElement('div', { class: 'cnt' });

//Titre
let titleCisa = createEntireElement('h1', { innerText: 'Mon stage à CISA Informatique'});

// Retour à la page d'acceuil
let goToIndex = createEntireElement('a', { href: 'index.html', innerText: 'Retourner à la page d\'accueil' });
goToIndex.prepend(createEntireElement('i', { class: 'fa-solid fa-turn-down fa-rotate-90'}));

// Présentation entreprise
let cisa = createEntireElement('div', { class: 'cnt box' });
cisa.append(
    createEntireElement('h2', { innerText: 'L\'entreprise' }),
    createEntireElement('p', { 
        innerHTML: "Description ICI"
    })
);

// Présentation mission
let mission = createEntireElement('div', { class: 'cnt box' });
mission.append(
    createEntireElement('h2', { innerText: 'Ma Mission' }),
    createEntireElement('p', { 
        innerHTML: `
        J'ai effectué mon stage à CISA Informatique. Mon rôle durant ces 5 semaines ont été de créer un module sur LXP, leur ERP (Enterprise Resource Planning, en français PGI, Progiciel de Gestion Intégré).
        <br>Le module était un outil de gestion des employés sur la hotline prenant en compte les congés, les absences, et se devait d'être le plus "équitable" possible quant à la répartition des heures de hotline sur les employés.
        <br>Le développement de LXP se fait en C#, pour des raisons de confidentialité, je n'expliquerais pas plus les normes de développement de l'entreprise.
        <br>
        <br>Pour ce qui est du projet en lui-même, j'ai dû me baser sur l'agenda (et donc la manière dont est géré les utilisateur). Récupérer tous les empêchements, congé ou autre, et faire en sorte de faire une "pré-affichage" avant de valider les heures de hotline, permettant à la personne qui gère ceci de voir si il y a un de ces empêchements qui bloquerais sur la semaine d'un employé en particulier. Ainsi il peut modifier l'ordre des passages, ou bien remplacer par un autre employé pour faire des semaines équitable. Je n'ai pas eu le temps de finaliser à 100% le projet, mais il était prévu d'y ajouter des statistiques afin de voir combien de jours chaque employé est en hotline pour ajuster et rendre le plus équitable possible la répartition de cette tâche.
        `
    })
); 

//Ajout au DOM

cnt.append(goToIndex, titleCisa, cisa, mission);

document.body.appendChild(cnt)