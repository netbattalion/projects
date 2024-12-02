
const lang = 'de'
const head = `<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">`
// const menu = (v) =>{
//     let m = [
//         ['Startseite', ''],
//         ['Über uns', 'about'],
//         // ['Kontakt', 'contact']
//     ]
//     let menu = m.map((i)=>{
//         // console.log(i)

//         return `<li><a href="${i[1] == '' ? '/dist' : '/dist/' + i[1]}"${v == i[0] ? ' class="active"' : ''}>${i[0]}</a></li>`
//     })
//     return menu
// }
export const render = [1,2,3,4] 
const menu = ( v ) => {
    let menu = pages.map((p)=>{
        return `<li><a href="${p.folder == '' ? '/dist' : '/dist/' + p.folder}"${v == p.menu ? ' class="active"' : ''}>${p.menu}</a></li>`
        
    })
    return menu.join('')
}


export const pages = [
    {
        title: 'Startseite',
        name: 'index.html',
        menu: 'Startseite',
        folder: '',
        template: 'T1',
        lang: lang,
        head: head,
        script: './styles/style.css',
        body: 'Dies ist ein Test',
        content: [
            ['h3', 'Überscrift 2'],
            ['p', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'],
            
            ['h3', 'Überscrift 2'],
            ['p', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'],
        ],
    },
    {
        title: 'Aktuell',
        name: 'index.html',
        menu: 'Aktuell',
        folder: 'aktuell',
        template: 'T1',
        lang: lang,
        head: head,
        script: '../styles/style.css',
        body: 'Dies ist noch ein Test',
        content: [
            ['h3', 'Überscrift 2'],
            ['p', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'],
            
            ['h3', 'Überscrift 2'],
            ['p', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'],
        ],
    },
    {
        title: 'Über uns',
        name: 'index.html',
        menu: 'Über uns',
        folder: 'wir',
        template: 'T1',
        lang: lang,
        head: head,
        script: '../styles/style.css',
        body: 'Dies ist noch ein Test',
        content: [
            ['h3', 'Überscrift 2'],
            ['p', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'],
            
            ['h3', 'Überscrift 2'],
            ['p', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'],
        ],
    },
    {
        title: 'Kontakt',
        name: 'index.html',
        menu: 'Kontakt',
        folder: 'kontakt',
        template: 'T1',
        lang: lang,
        head: head,
        script: '../styles/style.css',
        body: 'Dies ist noch ein Test',
        content: [
            ['h3', 'Überscrift 2'],
            ['p', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'],
            
            ['h3', 'Überscrift 2'],
            ['p', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'],
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
        return `<!DOCTYPE html>
<html lang="de">
    <head>
        ${d.head}
        <title>${d.title}</title>
        <link rel="stylesheet" href="${d.script}">
    </head>
    <style>
    </style>
    <header>
        <a href="">
            <img src="./styles/image.jpg" alt="">
        </a>
        <nav>
            <ul id="nav">
                ${menu(d.menu)}
            </ul>
        </nav>
    </header>
    <main>
        <h1>${d.title}</h1>
        <section>
            <h2>${d.title}</h2>
        ${ each( d.content ) }
        </section>
        <section>
            <h2>${d.title}</h2>
        ${ each( d.content ) }
        </section>
    </main>
        <footer>
        <ul>
            <li>
                <a href="#">
                Kontakt
                </a>
            </li>
            <li>
                <a>
                Impressum
                </a href="#">
            </li>
        </ul>
        </footer>
    </body>
</html>

    `
    }

}






