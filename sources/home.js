function content() {
    let content = createEntireElement('div', {class: 'cnt content'});

    content.appendChild(title('Accueil'));

    document.body.appendChild(content);
}
content();