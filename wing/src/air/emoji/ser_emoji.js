import fs from 'fs'
let f = fs.readFileSync('./emoji_src.txt')
f = f.toLocaleString()

f = f.replace(' ', '').replace('\r', '').replace('\n', '').replace('\t', '')
f = f.replace(/[ a-z ]/g, '')
f = f.replace(/[ A-Z ]/g, '')
f = f.replace(/[ 0-9 ]/g, '')
f = f.replace(/;/g, '').replace(/;/g, '').replace(/#/g, '').replace(/-/g, '').replace(/:/g, '')

f = f.split(/\n/)
f = f.map(e => {
    return e
})
console.log(f)
fs.writeFileSync('./emoji.txt', f.join('_'))