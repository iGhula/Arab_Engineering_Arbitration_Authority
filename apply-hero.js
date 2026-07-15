import fs from 'fs';

const pagesToUpdate = [
  { file: 'src/pages/VisionMissionPage.jsx', tag: 'عن الهيئة', title: 'الرؤية والرسالة' },
  { file: 'src/pages/FunctionsPage.jsx', tag: 'عن الهيئة', title: 'مهام الهيئة' },
  { file: 'src/pages/CommitteePage.jsx', tag: 'عن الهيئة', title: 'اللجنة التنفيذية' },
  { file: 'src/pages/ArbitrationServicesPage.jsx', tag: 'الصلح والوساطة', title: 'خدمات التحكيم' },
  { file: 'src/pages/BooksPage.jsx', tag: 'ما نقدمه', title: 'الكتب والمراجع' },
  { file: 'src/pages/ArticlesPage.jsx', tag: 'ما نقدمه', title: 'المقالات والأبحاث' },
  { file: 'src/pages/QualifyingProgramsPage.jsx', tag: 'البرامج التأهيلية', title: 'البرامج التأهيلية' }
];

pagesToUpdate.forEach(page => {
  let content = fs.readFileSync(page.file, 'utf-8');
  
  if (!content.includes('PageHero')) {
    content = content.replace("import Header", "import Header from '../components/Header';\\nimport PageHero from '../components/PageHero';\\n// import Header");
    content = content.replace("import Header from '../components/Header';\\n// import Header", "");
    
    // Inject the hero right after <main className="...">
    content = content.replace(/(<main[^>]*>)/, `$1\\n        <PageHero tag="${page.tag}" title="${page.title}" />\\n        <div className="-mt-16 relative z-20">`);
    content = content.replace(/(<\/main>)/, `        </div>\\n      $1`);
    
    fs.writeFileSync(page.file, content);
    console.log('Updated ' + page.file);
  }
});

const sectionsToUpdate = [
  'src/components/VisionMissionSection.jsx',
  'src/components/FunctionsSection.jsx',
  'src/components/CommitteeSection.jsx',
  'src/components/ArbitrationServicesSection.jsx',
  'src/components/BooksSection.jsx',
  'src/components/ArticlesSection.jsx',
  'src/components/QualifyingProgramsSection.jsx'
];

sectionsToUpdate.forEach(sec => {
  let content = fs.readFileSync(sec, 'utf-8');
  
  // Convert standard component declaration to accept props
  content = content.replace(/const ([a-zA-Z]+) = \(\) => {/, "const $1 = ({ hideTitle = true }) => {");
  
  // Wrap existing titles in {!hideTitle && ...}
  // Titles are usually motion.div with mb-16, mb-20 or mb-24
  content = content.replace(/(<motion\.div[^>]*className="[^"]*mb-2[0468][^"]*"[^>]*>[\s\S]*?<h2[\s\S]*?<\/h2>[\s\S]*?<\/motion\.div>)/, 
    `{!hideTitle && (
          $1
        )}`
  );
  content = content.replace(/(<motion\.div[^>]*className="mb-[0-9]+ text-center"[^>]*>[\s\S]*?<h2[\s\S]*?<\/h2>[\s\S]*?<\/motion\.div>)/, 
    `{!hideTitle && (
          $1
        )}`
  );
  
  fs.writeFileSync(sec, content);
  console.log('Updated ' + sec);
});

// For Home.jsx, we need to pass hideTitle={false} to VisionMissionSection
let homeContent = fs.readFileSync('src/pages/Home.jsx', 'utf-8');
homeContent = homeContent.replace('<VisionMissionSection />', '<VisionMissionSection hideTitle={false} />');
fs.writeFileSync('src/pages/Home.jsx', homeContent);
console.log('Updated Home.jsx');
