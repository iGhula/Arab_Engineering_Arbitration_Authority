import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import VisionMissionPage from './pages/VisionMissionPage';

import CommitteePage from './pages/CommitteePage';

import ArbitrationServicesPage from './pages/ArbitrationServicesPage';
import BooksPage from './pages/BooksPage';
import ArticlesPage from './pages/ArticlesPage';
import QualifyingProgramsPage from './pages/QualifyingProgramsPage';
import ArbitratorsPage from './pages/ArbitratorsPage';
import ExpertsPage from './pages/ExpertsPage';
import ArabEngineersFederationPage from './pages/ArabEngineersFederationPage';
import ContactUsPage from './pages/ContactUsPage';
import MembershipsPage from './pages/MembershipsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import AgreementsPage from './pages/AgreementsPage';
import AffiliatedCentersPage from './pages/AffiliatedCentersPage';
import MagazinePage from './pages/MagazinePage';
import PublicationsPage from './pages/PublicationsPage';
import CoursesPage from './pages/CoursesPage';

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
    case '/magazine':
      Component = MagazinePage;
      break;
    case '/publications':
      Component = PublicationsPage;
      break;
    case '/courses':
      Component = CoursesPage;
      break;
    case '/contact-us':
      Component = ContactUsPage;
      break;
    case '/memberships':
      Component = MembershipsPage;
      break;
    case '/activities':
      Component = ActivitiesPage;
      break;
    case '/agreements':
      Component = AgreementsPage;
      break;
    case '/affiliated-centers':
      Component = AffiliatedCentersPage;
      break;
    default:
      Component = Home;
  }

  return <Component />;
}

export default App;
