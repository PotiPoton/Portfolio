
function showCv() {
    let div = createEntireElement('div', {class: 'cnt'});

    let h2 = createEntireElement('h2', {innerText: 'Visionner mon CV'});
    let iframe = createEntireElement('iframe', {
        src: './cv-leogilblas.pdf',
        width: '100%',
        height: '600px',
        style: 'border: none;'
    });

    div.appendChild(h2);
    div.appendChild(iframe);

    return div;
}

// function dlCv() {
//     let div = createEntireElement('div', {class: 'cnt'});
//     let h2 = createEntireElement('h2', {innerText: 'Télécharger mon CV'});
//     let a = createEntireElement('a', {innerText: 'Cliquez ici', href: '#'});
//     let link = createEntireElement('p', {innerText: `${a} pour télécharger mon cv`});

//     div.appendChild(h2);
//     div.appendChild(link);

//     return div;
// }

function content() {
    let content = createEntireElement('div', {class: 'cnt content'});
    content.appendChild(createEntireElement('h1', { innerText: 'Cirruculum vitae' }));
    // content.appendChild(dlCv());
    content.appendChild(showCv());

    document.body.appendChild(content);
}
content();
