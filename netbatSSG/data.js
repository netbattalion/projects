
let data = [
    {
        name: 'index.html',
        template: 'tpl1',
        head: {
            title: 'Titel 1',
            scripts: [],
            links: ['./styles/tpl1.css'],
        },
        title:'Titel',
        content: 'Dies ist der Inhalt',
        array: [
            {t: 'Titel 1', c: 'Text 1'},
            {t: 'Titel 2', c: 'Text 2'},
            {t: 'Titel 3', c: 'Text 3'},
            {t: 'Titel 4', c: 'Text 4'},
        ]
    },
    {
        
        name: 'eins.html',
        template: 'tpl2',
        head: {
            title: 'Titel 2',
            links: ['./styles/tpl2.css']
        },
        title:'Titel 2',
        content: '<h1>Dies ist der Inhalt 2</h1>',
        scripts: ['https://www.netbattalion.de/site/templates/scripts/nbl-lightbox.min.js'],
        links: ['https://www.netbattalion.de/site/templates/styles/nbl-lightbox.css']
    },
    {
        name: 'zwei.html',
        template: 'tpl3',
        head: {
            title: 'Titeeeeel',
            links: ['./styles/tpl3.css']
        },
        titel:'Titel 3',
        seiteninhalt: 'Dies ist der Inhalt 3'
    }
]

// ------------------- LOOP Function --------------

, each = ( x, f ) => {
    let h = ''
    x.forEach( i => h += f( i ) )
    return h
}

, templ = ( v ) => `
    <h1>${ v. t }</h1>
    <p>${ v. c }</p>`

// ------------------- LOOP Function --------------

, templates = {
    tpl1(d){
        return `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${d.head.title}}</title>
</head>
<body>
    <header>
        <p>${d.content}</p>
    </header>
    <nav>
        <h1>${d.title}</h1>
    </nav>
    <main>
        <p>
        ${ d.content }
        ${ each( d.array, templ ) }
        </p>
    </main></body>
`
    },
    tpl2(d){
        let h = `        
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${d.head.title}}</title>
</head>
<body>
    <header></header>
    <main>    
        <h1>${d.title}</h1>
        <p>${d.content}</p>
        <div class="nb-gallery">
            <div class='w3-card-1'>
                <a rel='g1' href='https://www.netbattalion.de/site/assets/files/1015/architektur.jpg' title='Architekturvisualisierung'>
                    <img src='https://www.netbattalion.de/site/assets/files/1015/architektur.200x200.jpg' title='Architekturvisualisierung' alt='Architekturvisualisierung'>
                </a>
            </div>
            <div class='w3-card-1'>
                <a rel='g1' href='https://www.netbattalion.de/site/assets/files/1015/meinroboter.jpg' title='Spaziergang'>
                    <img src='https://www.netbattalion.de/site/assets/files/1015/meinroboter.200x200.jpg' title='Spaziergang' alt='Spaziergang'>
                </a>
            </div>
        </div>
    </main>
    <footer>Footer</footer></body>
`
        return h
    },
    tpl3(d){
        return `      
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${d.head.title}}</title>
</head>
<body>
    <header>${d.titel}</header>
    <nav></nav>
    <main>${d.seiteninhalt}</main>
    <footer></footer></body>
`
    }
}
