const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');
const catAFile = path.join(dataDir, 'category_a.xlsx');
const catBFile = path.join(dataDir, 'category_b.xlsx');

const normalizeCountry = (country) => {
  if (!country) return '';
  const c = country.trim();
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
    'اماراتى': 'الإمارات'
  };
  return map[c] || c;
};

const parseExcel = (filePath, category) => {
  if (!fs.existsSync(filePath)) return [];
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  // Parse as 2D array
  const rawData = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  
  // Skip header, assuming first row is header
  const data = rawData.slice(1).map((row, index) => {
    // Handling cases where columns might be mixed, but assuming [Name, Country]
    const name = row[0];
    const country = row[1];
    if (!name) return null;
    return {
      id: `arb-${category === 'فئة أ' ? 'a' : 'b'}-${index}`,
      name: name.toString().trim(),
      country: normalizeCountry(country ? country.toString() : ''),
      category: category,
      specialty: '' // They don't have specialty in these new files
    };
  }).filter(Boolean);
  
  return data;
};

const catAData = parseExcel(catAFile, 'فئة أ');
const catBData = parseExcel(catBFile, 'فئة ب');

const combined = [...catAData, ...catBData];

fs.writeFileSync(path.join(dataDir, 'parsed_arbitrators.json'), JSON.stringify(combined, null, 2));
console.log(`Parsed ${catAData.length} from Category A and ${catBData.length} from Category B`);
