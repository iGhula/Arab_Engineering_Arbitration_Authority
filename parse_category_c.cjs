const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');
const catCFile = path.join(dataDir, 'category_c.xlsx');

const parseExcel = (filePath) => {
  if (!fs.existsSync(filePath)) return [];
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const rawData = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  
  // Skip header, assuming first row is header
  const data = rawData.slice(1).map((row, index) => {
    const name = row[0];
    const specialty = row[1];
    const country = row[2];
    if (!name) return null;
    return {
      id: `new-${index}`,
      name: name.toString().trim(),
      specialty: `${specialty ? specialty.toString().trim() + ' - ' : ''}${country ? country.toString().trim() : ''}`,
      role: "عضو مجلس نزاع",
      desc: ""
    };
  }).filter(Boolean);
  
  return data;
};

const catCData = parseExcel(catCFile);
fs.writeFileSync(path.join(dataDir, 'parsed_category_c.json'), JSON.stringify(catCData, null, 2));
console.log(`Parsed ${catCData.length} from Category C`);
