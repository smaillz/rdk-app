const AdmZip = require('adm-zip');
const path = require('path');
const zip = new AdmZip();

const targetPath = path.resolve(__dirname, '../dist');
const arcName = 'rdk-app.zip';
console.log('============================');
console.log('Start compress folder dist ');
zip.addLocalFolder(targetPath);
zip.writeZip(path.resolve(__dirname, `../${arcName}`));
console.log(`${arcName} archive created!`);
console.log('============================');

