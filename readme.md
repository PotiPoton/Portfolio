# Portfolio Léo Gilblas

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)

## Descripton
Ce projet consiste en créer mon portfolio. Ce document servira à détailler les différentes méthodes et fonction que j'utiliser, ou encore la manière dont est structuré le code.

## Les fonctions 
La fonction que j'ai trouvé pour créer divers élément est la suivante :

````Javascript
function createEntireElement(element, attributes){
    let elm = document.createElement(element);

    if (attributes === undefined){
        return elm
    }
    for (let [key, value] of Object.entries(attributes)) {
        if (value !== undefined) {
            if (key === 'innerText') elm.innerText = value;
            else if (key === 'innerHTML') elm.innerHTML = value;
            else if (key === 'style' && typeof value === 'object') {
                Object.assign(elm.style, value);
            } else if (key.startsWith('on') && typeof value === 'function') {
                elm.addEventListener(key.slice(2), value);
            } else if (key === 'child' && Array.isArray(value)) {
                value.forEach(child => { 
                    if (typeof child === 'function') child = child();
                    if (child !== undefined) elm.appendChild(child); 
                });
            } else elm.setAttribute(key, value);
        }
    }
    return elm;
}
````
Par exemple je peux avec créer un div, qui à tel classe, tel id, qui possède tel et tel enfant, qui sont respectivement un titre et un lien avec un icone. Ce qui donnera :
````javascript
createEntireElement('div', { id: 'tel', class: 'tel', child: [
    createEntireElement('h2', { innerText: 'Titre' }),
    createEntireElement('a', { 
        innerText: 'super lien ', 
        child [ createEntireElement('i', { src: 'lien/vers/mon/icone' })],
        onclick: function (e) {
            e.preventDefault();
            alert('vous avez cliqué sur le lien !');
        }    
    })
]})
````

## Organisation des blocs d'informations
### Avec une navbar :
On retrouve une première div, qui à pour classe "cnt content" qui permet d'afficher tout le contenu dans la zone à côté de la navbar (ou bien centré pour les téléphones). 
À l'intérieur de celle-ci on peux retrouver un titre (h1), ou bien des conteneur de type box (cnt box). La boite permet de mettre des limites à une zone. Elle à différentes tailles.
Une boite est composé d'un titre (h2) puis un d'un bloc d'information (span) à l'intérieur de ce bloc on pourra retrouver des listes (ul/ol), des paragraphes (p), des liens (a), etc... 