import fs from 'fs';
const pagesToUpdate = [
  'src/pages/VisionMissionPage.jsx',
  'src/pages/FunctionsPage.jsx',
  'src/pages/CommitteePage.jsx',
  'src/pages/ArbitrationServicesPage.jsx',
  'src/pages/BooksPage.jsx',
  'src/pages/ArticlesPage.jsx',
  'src/pages/QualifyingProgramsPage.jsx'
];

pagesToUpdate.forEach(page => {
  let content = fs.readFileSync(page, 'utf-8');
  content = content.replace(/\\n/g, '\n');
  fs.writeFileSync(page, content);
  console.log('Fixed newlines in ' + page);
});
