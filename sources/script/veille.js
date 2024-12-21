function content() {
    document.body.appendChild(
        createEntireElement('div', { class: 'cnt content', child: [
            createEntireElement('h1', { class: 'no-margin', innerText: `Veille technologique` }),
            createEntireElement('h2', { innerText: `Les CPU` }),
            createEntireElement('div', { class: 'cnt box medium ', child: [
                createEntireElement('h2', { innerText: `Qu'est-ce que donc ...?`}),
                createEntireElement('div', { child: [
                    createEntireElement('a', { 
                        class: 'def', 
                        innerText: `Une veille technologique ? `, 
                        child: [ createEntireElement('i', { class: 'fa-solid fa-arrow-up-right-from-square' }) ], 
                        onclick: () => { 
                            createModal('veille-techno-modal', 'Une veille technologique', createEntireElement('div', { child: [
                                createEntireElement('p', { innerText: `La veille technologique consiste à surveiller les évolutions et innovations dans un domaine afin d'anticiper les changements, s'adapter, innover et orienter les décisions stratégiques.`})
                            ]}));
                        } 
                    }),
                    createEntireElement('a', { 
                        class: 'def', 
                        innerText: `Un CPU ? `, 
                        child: [ createEntireElement('i', { class: 'fa-solid fa-arrow-up-right-from-square' }) ], 
                        onclick: () => { 
                            createModal('cpu-modal', 'Un CPU', createEntireElement('div', { child: [
                                createEntireElement('p', { innerText: `Le CPU (Central Processing Unit), ou processeur central, est le composant principal d'un ordinateur qui exécute les instructions des programmes informatiques. Il effectue des opérations arithmétiques, logiques, de contrôle et d'entrée/sortie. Ses performances sont déterminées par la fréquence d'horloge (vitesse de traitement) et le nombre de cœurs (unités de traitement indépendantes).` }),
                                createEntireElement('p', { innerText: `L'APU (Accelerated Processing Unit), terme popularisé par AMD, combine sur une seule puce un CPU et un GPU (processeur graphique). Cette intégration vise à améliorer l'efficacité énergétique et les performances, notamment pour les tâches graphiques, tout en réduisant la taille physique et les coûts de fabrication des systèmes. Cependant, les performances graphiques d'une APU sont généralement inférieures à celles d'un GPU dédié.` })
                            ]}));
                        } 
                    })
                ]})
            ]}),
            createEntireElement('div', { class: 'cnt box', child: [
                createEntireElement('h2', { innerText: "Un peu d'histoire" }),
                createEntireElement('div', { child: [
                    createEntireElement('p', { innerText: `Les CPU ont évolué au fil des décennies, des premiers ordinateurs utilisant des tubes à vide dans les années 1940, aux processeurs modernes basés sur des transistors. L'innovation clé a été l'introduction des microprocesseurs dans les années 1970, qui ont permis de miniaturiser les ordinateurs et de les rendre accessibles au grand public. Intel et AMD ont dominé le marché des CPU avec des architectures comme le x86.`}),
                    createEntireElement('p', { innerText: `Les APU sont des processeurs intégrant à la fois un CPU et un GPU (processeur graphique) sur une même puce. Cette intégration a permis d'améliorer les performances graphiques tout en réduisant la consommation d'énergie. AMD a été un pionnier avec ses premières APU en 2011, permettant de combiner la puissance de calcul et la gestion graphique dans un même processeur.`}),
                    createEntireElement('p', { child: [
                        createEntireElement('span', { innerText: `D'après IBM qui à retracer l'histoire des CPU `}),
                        createEntireElement('a', { href: 'https://www.ibm.com/fr-fr/think/topics/central-processing-unit-history', innerText: `ici `, child: [
                            createEntireElement('i', { class: 'fa-solid fa-arrow-up-right-from-square'})
                        ]}),
                        createEntireElement('span', {innerText: ` !`})
                    ]})
                ]})
            ]}),            
            createEntireElement('div', { class: 'cnt box', child: [
                createEntireElement('h2', { innerText: "Et maintenant ?" }),
                createEntireElement('div', { child: [
                    createEntireElement('p', { class: '', child: [
                        createEntireElement('span', { innerText: `L'architecture Zen 5 d'AMD, attendue pour 2024-2025, marque un bond technologique majeur avec des améliorations significatives par rapport à Zen 4. Elle utilise des procédés de gravure en 4nm et 3nm, offrant une densité de transistors accrue et une meilleure efficacité énergétique. Les processeurs incluront des cœurs Zen 5 "Nirvana" pour des performances accrues, ainsi que des cœurs basse consommation Zen 5c pour des configurations hybrides. Un moteur IA dédié, ` }),
                        createEntireElement('a', { innerText: `XDNA 2 `, child: [ createEntireElement('i', { class: 'fa-solid fa-arrow-up-right-from-square' }) ], 
                            onclick: (e) => { 
                                createModal('xdna-modal', 'XDNA', createEntireElement('div', { child: [
                                    createEntireElement('p', { innerText: `XDNA est un moteur d'intelligence artificielle (IA) développé par AMD, conçu pour être intégré aux architectures Zen 5. Il permet d'accélérer des tâches liées à l'IA, telles que l'apprentissage machine et les analyses de données. Ce moteur vise à offrir des performances accrues dans les applications IA, tout en optimisant l'efficacité énergétique. Dans le cadre de Zen 5, AMD introduit la deuxième génération de ce moteur, XDNA 2, pour renforcer les capacités de traitement AI dans les CPU et APU de nouvelle génération.` })
                                ]}));
                            } 
                        }),
                        createEntireElement('span', { class: '', innerText: `, permettra de performer dans des applications liées à l'intelligence artificielle. Les gammes concernent les PC de bureau, serveurs, et ordinateurs portables.`})
                    ]}),
                    createEntireElement('p', { class: '', child: [
                        createEntireElement('span', { innerText: `L'article au complet est ` }),
                        createEntireElement('a', { href: 'https://pausehardware.com/architecture-zen-5-cpu-et-apu-amd-2024/', innerText: `ici `, child: [
                            createEntireElement('i', { class: 'fa-solid fa-arrow-up-right-from-square' })
                        ]}),
                        createEntireElement('span', { class: '', innerText: '.' })
                    ]}),

                ]})
            ]})
            //TODO: une conclusion ?
            // createEntireElement('div', { class: 'cnt box', child: [
            //     createEntireElement('h2', { innerText: "En conclusion" }),
            //     createEntireElement('div', { child: [
            //         createEntireElement('p', { innerText: ``})
            //     ]})
            // ]})
        ]})
    );
}

content();