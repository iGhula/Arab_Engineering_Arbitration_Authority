import fs from 'fs';
import path from 'path';

// Mapping of Arabic filenames to ASCII-safe filenames
const renameMap = {
  // Images
  'عادل الحديثي.jpeg': 'adel_hadithi.jpeg',
  'محمد ماجد خلوصي.jpeg': 'mohammed_khalousi.jpeg',
  'داوود خلف.jpeg': 'dawood_khalaf.jpeg',
  'جودت يغمور.jpeg': 'joudat_yaghmour.jpeg',
  'فؤاد الكندي.jpeg': 'fouad_kindi.jpeg',
  'فيصل الشريف.jpeg': 'faisal_sharif.jpeg',
  'شادي بن خليفة.jpeg': 'shadi_khalifa.jpeg',
  'طارق العتماوي.jpg': 'tariq_atmawi.jpg',
  'عمر سلام.jpeg': 'omar_salam.jpeg',
  'معتز طلبه.jpg': 'moataz_talba.jpg',
  'توفيق سنان.jpg': 'tawfiq_sinan.jpg',

  // PDFs
  'اجراءات وقواعد التحكيم الهندسي.pdf': 'arbitration_procedures_rules.pdf',
  'مدونة_السلوك_المهني_للهيئة.pdf': 'professional_code_of_conduct.pdf',
  'دليل دورة التحكيم الهندسي 2026.pdf': 'course_guide_2026.pdf',
  'دليل دورة التحكيم الهندسي 01.pdf': 'course_guide_01.pdf',
  'تصور_انتساب_مراكز_ومؤسسات_التحكيم_والوساطة.pdf': 'centers_affiliation_concept.pdf',
  'نموذج_طلب_انتساب_الجهات_للهيئة.docx': 'affiliation_request_form.docx',
  'الحقيبة التدريبية للدورة اونلاين.pdf': 'training_kit_online.pdf',
  'عقد-المقاولة-العربي-الموحد--preview.pdf': 'arab_contract_preview.pdf',
  'عقد-المقاولة-العربي-الموحد-.pdf': 'arab_contract_full.pdf',
  'منهج تأهيل واعداد المحكم الهندسي 01-preview.pdf': 'arbitrator_curriculum_preview.pdf',
  'منهج تأهيل واعداد المحكم الهندسي 01.pdf': 'arbitrator_curriculum_full.pdf',
  'الدليل-العملي-للمحكم-الهندسي-preview.pdf': 'practical_guide_ar_preview.pdf',
  'الدليل العملي للمحكم الهندسي.pdf': 'practical_guide_ar_full.pdf',
  'اثر-الوسائل-البديلة-في-انجاح-المشروعات.pdf': 'alternative_methods_article.pdf',
  'مقال - العقود الهندسية.pdf': 'engineering_contracts_article.pdf',
  'تقرير عام عن نشاط الهيئة 15 يوليو 2026.pdf': 'activity_report_2026.pdf',
  'تقرير عام عن نشاط الهيئة.pdf': 'activity_report.pdf',
  'التحكيم الهندسي.pdf': 'engineering_arbitration_book.pdf',
  'إستمارة الحصول على هوية الهيئة العربية للتحكيم الهندسي.pdf': 'identity_application_form.pdf',
  'القوائم الموحدة للمحكمين.xlsx': 'unified_arbitrators_list.xlsx',
};

const publicDir = path.resolve('public');

// Step 1: Rename files in public/
console.log('=== Renaming files in public/ ===');
let renamedCount = 0;
for (const [oldName, newName] of Object.entries(renameMap)) {
  const oldPath = path.join(publicDir, oldName);
  const newPath = path.join(publicDir, newName);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`  ✓ ${oldName} → ${newName}`);
    renamedCount++;
  } else {
    console.log(`  ⚠ Not found: ${oldName}`);
  }
}
console.log(`\nRenamed ${renamedCount} files.\n`);

// Step 2: Update source code references
console.log('=== Updating source code references ===');
const srcDir = path.resolve('src');

function walkDir(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(fullPath));
    } else if (/\.(jsx?|tsx?|css|html)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

// Also include index.html at root
const sourceFiles = [...walkDir(srcDir), path.resolve('index.html')];
let updatedFiles = 0;

for (const filePath of sourceFiles) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  for (const [oldName, newName] of Object.entries(renameMap)) {
    // Replace all variations: "/oldName", "/oldName#toolbar=0", etc.
    if (content.includes(oldName)) {
      content = content.replaceAll(oldName, newName);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✓ Updated: ${path.relative(process.cwd(), filePath)}`);
    updatedFiles++;
  }
}

console.log(`\nUpdated ${updatedFiles} source files.`);
console.log('\n✅ Done! All Arabic filenames have been replaced with ASCII-safe names.');
