function content() {
    document.body.appendChild(createEntireElement('div', { class: 'cnt content', child: [
        createEntireElement('h1', { innerText: 'Cirruculum vitae' }),
        createEntireElement('div', {class: 'cnt box', child: [
            createEntireElement('h2', {innerText: 'Visionner mon CV'}),
            createEntireElement('iframe', {
                    src: './cv-leogilblas.pdf',
                    width: '100%',
                    height: '650px',
             })
        ]})
    ]}));
}

content();
