const lang = 'de';

const path = 'https://www.netbattalion.de/burat/test/'

const head = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
`;

export const template = 'main';

export const pages = [
    {
        title: 'Startseite',
        folder: '',
        content: [
            {
                tag: [
                    'img',
                    { src: '#', alt: '', width: '250', height: '250' },
                ],
            },
            {
                tag: ['a', { href: '#' }],
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
            },
            {
                tag: ['p', { class: 'red' }],
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
            },
        ],
        // template: 'main',
    },
    {
        title: 'Projekte',
        folder: '',
        content: [
            {
                tag: [
                    'img',
                    { src: '#', alt: '', width: '250', height: '250' },
                ],
            },
            {
                tag: ['a', { href: '#' }],
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
            },
            {
                tag: ['p', { class: 'red' }],
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
            },
        ],
        children: [
            {
                title: '2P2ghgrfx3',
                folder: '',
                content: [
                    {
                        tag: [
                            'img',
                            { src: '#', alt: '', width: '250', height: '250' },
                        ],
                    },
                    {
                        tag: ['a', { href: '#' }],
                        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                    },
                    {
                        tag: ['p', { class: 'red' }],
                        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                    },
                ],
            },
            {
                title: 'Two',
                folder: '',
                content: [
                    {
                        tag: [
                            'img',
                            { src: '#', alt: '', width: '250', height: '250' },
                        ],
                    },
                    {
                        tag: ['a', { href: '#' }],
                        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                    },
                    {
                        tag: ['p', { class: 'red' }],
                        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                    },
                ],
                children: [
                    {
                        title: 'Three4',
                        folder: '',
                        content: [
                            {
                                tag: [
                                    'img',
                                    {
                                        src: '#',
                                        alt: '',
                                        width: '250',
                                        height: '250',
                                    },
                                ],
                            },
                            {
                                tag: ['a', { href: '#' }],
                                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                            },
                            {
                                tag: ['p', { class: 'red' }],
                                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                            },
                        ],
                    },
                    {
                        title: '3P3335',
                        folder: '',
                        content: [
                            {
                                tag: [
                                    'img',
                                    {
                                        src: '#',
                                        alt: '',
                                        width: '250',
                                        height: '250',
                                    },
                                ],
                            },
                            {
                                tag: ['a', { href: '#' }],
                                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                            },
                            {
                                tag: ['p', { class: 'red' }],
                                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                            },
                        ],
                    },
                ],
            },
            {
                title: '2P2246',
                folder: '',
                content: [
                    {
                        tag: [
                            'img',
                            { src: '#', alt: '', width: '250', height: '250' },
                        ],
                    },
                    {
                        tag: ['a', { href: '#' }],
                        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                    },
                    {
                        tag: ['p', { class: 'red' }],
                        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                    },
                ],
            },
            {
                title: '2P26',
                folder: '',
                content: [
                    {
                        tag: [
                            'img',
                            { src: '#', alt: '', width: '250', height: '250' },
                        ],
                    },
                    {
                        tag: ['a', { href: '#' }],
                        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                    },
                    {
                        tag: ['p', { class: 'red' }],
                        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                    },
                ],
            },
        ],
    },
    {
        title: 'Kontakt',
        gallery: [
            {
                a: 'https://www.netbattalion.de/site/assets/files/1015/meinroboter.jpg',
                img: 'https://www.netbattalion.de/site/assets/files/1015/meinroboter.200x200.jpg',
                alt: 'Mein Roboter',
                p: '',
            },
            {
                a: 'https://www.netbattalion.de/site/assets/files/1015/meinroboter.jpg',
                img: 'https://www.netbattalion.de/site/assets/files/1015/meinroboter.200x200.jpg',
                alt: 'Mein Roboter',
                p: '',
            },
            {
                a: 'https://www.netbattalion.de/site/assets/files/1015/meinroboter.jpg',
                img: 'https://www.netbattalion.de/site/assets/files/1015/meinroboter.200x200.jpg',
                alt: 'Mein Roboter',
                p: '',
            },
        ],
        content: [
            {
                tag: [
                    'img',
                    { src: 'https://www.netbattalion.de/site/assets/files/1015/meinroboter.200x200.jpg', alt: '', width: '250', height: '250' },
                ],
            },
            {
                tag: ['a', { href: '#' }],
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
            },
            {
                tag: ['p', { class: 'red' }],
                text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
            },
        ],
    },
];


// ------------------------------------------------------ create menu ---------------------------------------

// ---------------------------------------------------------------------------------

function menu(v, t, l = path , f = 4, c = 0) {
    c++
    let y = new Array(c*f).fill(' ').join('')
    let x = v.map(v=>{
        let m = l
        if (v.title == 'Startseite') {
            m = l
        } else { m = '' + l + v.title.replaceAll(' ', '-').toLowerCase()}
            // l += v.title == 'Startseite' ? '.' : v.title + '/'
        if (v.children) {
            // l += v.title
            return `
${y}${y}            <li>
${y}${y}                <a href="${m}">${v.title}</a>${menu(v.children, t, m + '/', f,c)}
${y}${y}            </li>`
        }
        return `
${y}${y}            <li><a href="${m}">${v.title}</a></li>`
    })
    return `
${y}${y}        <ul>${x.join('')}
${y}${y}        </ul>`
}
console.log(menu(pages))

// ------------------------------------------------------ create menu ---------------------------------------

// ------------------------------------------------------ loop through content ------------------------------
let loopContent = (v) => {
    let m = v.content.map((i) => {
        let att = '';
        for (const [k, v] of Object.entries(i.tag[1])) {
            att += ` ${k}="${v}"`;
        }
        if (i.tag[0] == 'img') {
            return `
                <${i.tag[0]}${att} />`;
        }
        return `
                <${i.tag[0]}${att}>${i.text ? i.text : ''}</${i.tag[0]}>`;
    });
    return m.join('');
};
// console.log(loopContent(pages[2]))
// ------------------------------------------------------ loop through content ------------------------------

// ------------------------------------------------------ loop through gallery ------------------------------
let loopGallery = (v) => {
    let m = v.gallery.map((i) => {
        return `                    <div>
                        <a href="${i.a}">
                            <img src="${i.img}"
                        </a>
                    <div>
`;
    });
    return m.join('');
};
// console.log(loopGallery(pages[2]))
// ------------------------------------------------------ loop through content ------------------------------

// mapMenu
// loopContent
// loopGallery
// ------------------------------------------------------ templates -----------------------------------------
export const templates = {
    main(d) {
        return `<html lang="de">
    ${head}
    <title>${d.title}</title>
    <link rel="stylesheet" href="https://www.netbattalion.de/burat/test/styles/style.css">
    </head>
    <body>
        <header>
            <nav id="desktop">${menu(pages)}
            </nav>
            <nav id="mobile" class="toggle">${menu(pages, d.title)}
            </nav>
        </header>
        <main>
            <section>            ${loopContent(d)}
            </section>${
                d.gallery
                    ? `
            <ssection>
                <div class="nb-gallery">            
${loopGallery(d)}                </div>
            </section>`
                    : ''
            }           
        </main>
        <script src="https://www.netbattalion.de/burat/test//scripts/nlight.23.min.js"></script>
        <link rel="stylesheet" href="https://www.netbattalion.de/burat/test/styles/nlight.23.min.css" />
    </body>
</html>`;
    },
};
console.log(templates.main(pages[2]))
// ------------------------------------------------------ templates -----------------------------------------
