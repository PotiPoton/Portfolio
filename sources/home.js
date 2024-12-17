function content() {
    let content = createEntireElement('div', {class: 'cnt content'});

    content.appendChild(createEntireElement('h1', { innerText: 'Accueil' }));

    // content.appendChild(title('Accueil'));

    document.body.appendChild(content);
}
content();