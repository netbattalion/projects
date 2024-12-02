
import fs from 'fs'
import { pages, templates, template } from './src/data.js'

(function renderPage(pages, dir = 'index') {
    for (let page of pages){
        if (dir == 'index') dir = ''            
        let folder = page.title == 'Startseite' ? dir + '' : dir + `${page.title}/`        
        setTimeout(()=>{
            folder = folder.replaceAll(' ', '-').toLowerCase()
            if (page.children){
            renderPage(page.children, folder)
        }
        try {
            if (!fs.existsSync('./dist/' + folder.replaceAll(' ', '-').toLowerCase()) && '' != './dist/' + folder.replaceAll(' ', '-').toLowerCase()) {
                fs.mkdirSync('./dist/' + folder.replaceAll(' ', '-').toLowerCase())
        }
            fs.writeFileSync('./dist/' + folder.replaceAll(' ', '-').toLowerCase() + 'index.html', templates[template](page));
        } catch (err) {
            console.error(err);
        }
    },100)    
}})(pages)
