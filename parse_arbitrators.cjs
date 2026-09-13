const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const officialFile = path.join(__dirname, 'public', 'القوائم الموحدة للمحكمين.xlsx');
const dataDir = path.join(__dirname, 'src', 'data');

const normalizeCountry = (country) => {
  if (!country) return '';
  const c = country.toString().trim();
  const map = {
    'اردني': 'الأردن',
    'أردني': 'الأردن',
    'اردنى': 'الأردن',
    'أردنى': 'الأردن',
    'عراقي': 'العراق',
    'عراقى': 'العراق',
    'مصري': 'مصر',
    'مصرى': 'مصر',
    'لبناني': 'لبنان',
    'لبنانى': 'لبنان',
    'فلسطيني': 'فلسطين',
    'فلسطينى': 'فلسطين',
    'سعودي': 'السعودية',
    'سعودى': 'السعودية',
    'كويتي': 'الكويت',
    'كويتى': 'الكويت',
    'ليبي': 'ليبيا',
    'ليبى': 'ليبيا',
    'عماني': 'عُمان',
    'عمانى': 'عُمان',
    'سوري': 'سوريا',
    'سورى': 'سوريا',
    'تونسي': 'تونس',
    'تونسى': 'تونس',
    'مغربي': 'المغرب',
    'مغربى': 'المغرب',
    'جزائري': 'الجزائر',
    'جزائرى': 'الجزائر',
    'سوداني': 'السودان',
    'سودانى': 'السودان',
    'بحريني': 'البحرين',
    'بحرينى': 'البحرين',
    'قطري': 'قطر',
    'قطرى': 'قطر',
    'اماراتي': 'الإمارات',
    'اماراتى': 'الإمارات',
    'امريكي': 'أمريكا',
    'أمريكي': 'أمريكا'
  };
  return map[c] || c;
};

const workbook = xlsx.readFile(officialFile);

// 1. Parse Category A
const sheetA = workbook.Sheets['محكمون فئة (أ)'];
const rowsA = xlsx.utils.sheet_to_json(sheetA, { header: 1 }).slice(1);
const catAData = [];
const seenA = new Set();

rowsA.forEach((row) => {
  if (typeof row[0] !== 'number' || !row[1]) return;
  const name = row[1].toString().trim();
  if (seenA.has(name)) return; // prevent any duplicate
  seenA.add(name);

  catAData.push({
    id: `arb-a-${row[0]}`,
    name: name,
    country: normalizeCountry(row[2]),
    category: 'فئة أ',
    specialty: row[3] ? row[3].toString().trim() : ''
  });
});

// 2. Parse Category B
const sheetB = workbook.Sheets['محكمون فئة (ب)'];
const rowsB = xlsx.utils.sheet_to_json(sheetB, { header: 1 }).slice(2);
const catBData = [];
const seenB = new Set();

rowsB.forEach((row) => {
  if (typeof row[0] !== 'number' || !row[1]) return;
  const name = row[1].toString().trim();
  if (seenB.has(name)) return; // prevent any duplicate
  seenB.add(name);

  catBData.push({
    id: `arb-b-${row[0]}`,
    name: name,
    country: normalizeCountry(row[3]),
    category: 'فئة ب',
    specialty: row[4] ? row[4].toString().trim() : ''
  });
});

const combined = [...catAData, ...catBData];

fs.writeFileSync(path.join(dataDir, 'parsed_arbitrators.json'), JSON.stringify(combined, null, 2));
console.log(`Parsed ${catAData.length} unique from Category A and ${catBData.length} unique from Category B (Total: ${combined.length})`);
