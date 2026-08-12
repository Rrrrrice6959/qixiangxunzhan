const fs = require('fs');
const path = require('path');

function scan(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
        .filter(f => /\.(jpg|jpeg|png|gif|webp|bmp)$/i.test(f))
        .map(f => ({ file: dir.replace(/\\/g, '/') + '/' + f, name: path.parse(f).name }));
}

const data = { a: scan('images/A'), b: scan('images/B') };
fs.writeFileSync('images.json', JSON.stringify(data, null, 2));
console.log('images.json 已生成，共 A:' + data.a.length + ' 张, B:' + data.b.length + ' 张');