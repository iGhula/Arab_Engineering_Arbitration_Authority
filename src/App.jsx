import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import VisionMissionPage from './pages/VisionMissionPage';
import FunctionsPage from './pages/FunctionsPage';
import CommitteePage from './pages/CommitteePage';
import ArbitrationServicesPage from './pages/ArbitrationServicesPage';
import BooksPage from './pages/BooksPage';
import ArticlesPage from './pages/ArticlesPage';
import QualifyingProgramsPage from './pages/QualifyingProgramsPage';
import ArbitratorsPage from './pages/ArbitratorsPage';
import ExpertsPage from './pages/ExpertsPage';
import ArabEngineersFederationPage from './pages/ArabEngineersFederationPage';
import ArabArbitrationCenterPage from './pages/ArabArbitrationCenterPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  let Component;
  switch (currentPath) {
    case '/vision-mission':
      Component = VisionMissionPage;
      break;
    case '/functions':
      Component = FunctionsPage;
      break;
    case '/committee':
      Component = CommitteePage;
      break;
    case '/arbitration-services':
      Component = ArbitrationServicesPage;
      break;
    case '/books':
      Component = BooksPage;
      break;
    case '/articles':
      Component = ArticlesPage;
      break;
    case '/qualifying-programs':
      Component = QualifyingProgramsPage;
      break;
    case '/arbitrators':
      Component = ArbitratorsPage;
      break;
    case '/experts':
      Component = ExpertsPage;
      break;
    case '/arab-engineers-federation':
      Component = ArabEngineersFederationPage;
      break;
    case '/arab-arbitration-center':
      Component = ArabArbitrationCenterPage;
      break;
    default:
      Component = Home;
  }

  return <Component />;
}

export default App;
