
export const lang = 'de'
export const head = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./styles/tpl1.css">
    `
export const menu = (v) =>{
    let m = [
        ['Startseite', ''],
        ['Über uns', 'about'],
        // ['Kontakt', 'contact']
    ]
    let menu = m.map((i)=>{
        console.log(i)

        return `<li><a href="${i[1] == '' ? '/dist' : '/dist/' + i[1]}"${v == i[0] ? ' class="active"' : ''}>${i[0]}</a></li>`
    })
    return menu
}
export const pages = [
    {
        name: 'index.html',
        template: 'T1',
        lang: lang,
        title: 'Home',
        head: head,
        script: './styles/tpl1.css',
        menu: 'Startseite',
        body: 'Dies ist ein Test',
        content: [
            ['h1', 'Überscrift 1'],
            ['p', 'Dies ist ein Absatz 1'],
            ['p', 'Dies ist noch ein ein Absatz 1'],
        ],
    },
    {
        name: 'about/index.html',
        template: 'T1',
        lang: lang,
        title: 'About',
        head: head,
        script: '../styles/tpl2.css',
        menu: 'Über uns',
        body: 'Dies ist noch ein Test',
        content: [
            ['h1', 'Überscrift 2'],
            ['p', 'Dies ist ein Absatz 2'],
            ['p', 'Dies ist noch ein ein Absatz 2'],
        ],
    }
]
let each = (v) => {
    let m = v.map((i)=>{
       return `<${i[0]}>${i[1]}</${i[0]}>`
    })
    // console.log(m)
    return m.join('')
}
export const templates = {
    T1(d){
        return `
    <head>
        ${d.head}
        <title>${d.title}</title>
        <link rel="stylesheet" href="${d.script}">
    </head>
    <style>
        .active {background-color: red}
    </style>
    <header>
        <p>${d.name}</p>
        <nav>
            ${menu(d.menu)}
        </nav>
    </header>
    <main>
        <p>
        ${ d.body }
        ${ each( d.content ) }
        </p>
    </main>
    `
    }

}







