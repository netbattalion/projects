
import fs from 'fs'
import { render, pages, templates } from './src/data.js'

for (let item of render) {
    item--
    let folder = pages[item].folder    
    let qwertz = templates[pages[item].template](pages[item])   
    try {
        if (!fs.existsSync('./dist/' + folder) && ''!= './dist/' + folder) {
        fs.mkdirSync('./dist/' + folder);
      }
        console.log(pages[item].template)
        fs.writeFileSync('./dist/' + folder + '/' + pages[item] .name, qwertz);
    } catch (err) {
        console.error(err);
    }
    console.log('SUCCESS')
}
