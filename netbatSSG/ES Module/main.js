
import fs from 'fs'
import { pages, templates } from './src/data.js'

for (let item of pages) {
    let qwertz = templates[item.template](item)   
    try {
    fs.writeFileSync('./dist/' + item .name, qwertz);
    } catch (err) {
    console.error(err);
    }
    console.log('SUCCESS')
}
