const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const workbook = xlsx.readFile(path.join(__dirname, 'public', 'القوائم الموحدة للمحكمين.xlsx'));
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

fs.writeFileSync(path.join(__dirname, 'public', 'arbitrators.json'), JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully written arbitrators.json');
