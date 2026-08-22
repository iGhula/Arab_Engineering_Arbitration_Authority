import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname + window.location.hash);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname + window.location.hash);
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  const navigate = (e, path) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);

    if (path.includes('#')) {
      const id = path.split('#')[1];
      // Small timeout to allow page transition before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const isActive = (path) => currentPath === path;
  const isParentActive = (paths) => {
    const basePath = currentPath.split('#')[0];
    return paths.includes(basePath);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 text-white border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            
            {/* Right side: Mobile Menu Toggle & Logo */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button - Top Right (RTL context) */}
              <button 
                className="lg:hidden text-white hover:text-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-7 h-7" />
              </button>

              {/* Logo */}
              <div 
                className="flex items-center gap-3 cursor-pointer"
                onClick={(e) => navigate(e, '/')}
              >
                <img src="/logo.png" alt="الهيئة العربية للتحكيم الهندسي" className="h-16 w-auto object-contain drop-shadow-md" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-6 items-center text-sm font-semibold">
              <a href="/" onClick={(e) => navigate(e, '/')} className={`hover:text-secondary transition-colors ${isActive('/') ? 'text-secondary' : ''}`}>الرئيسية</a>
              
              {/* About Dropdown */}
              <div 
                className="relative py-8"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 hover:text-secondary transition-colors ${isParentActive(['/vision-mission', '/committee']) ? 'text-secondary' : ''}`}>
                  عن الهيئة <ChevronDown className="w-3 h-3" />
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute top-full right-0 w-48 bg-primary shadow-lg border-t-2 border-secondary">
                    <div className="flex flex-col py-2">
                      <a href="/vision-mission" onClick={(e) => navigate(e, '/vision-mission')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/vision-mission') ? 'text-secondary font-bold' : ''}`}>الرؤية والرسالة</a>
                      <a href="/vision-mission#goals" onClick={(e) => navigate(e, '/vision-mission#goals')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/vision-mission#goals') ? 'text-secondary font-bold' : ''}`}>أهداف الهيئة</a>
                      <a href="/vision-mission#report" onClick={(e) => navigate(e, '/vision-mission#report')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/vision-mission#report') ? 'text-secondary font-bold' : ''}`}>تقرير عام 2026</a>
                      <a href="/committee" onClick={(e) => navigate(e, '/committee')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/committee') ? 'text-secondary font-bold' : ''}`}>أعضاء اللجنة التنفيذية</a>
                    </div>
                  </div>
                )}
              </div>

              <a href="/arbitration-services" onClick={(e) => navigate(e, '/arbitration-services')} className={`hover:text-secondary transition-colors ${isActive('/arbitration-services') ? 'text-secondary' : ''}`}>الصلح والوساطة والتحكيم</a>
              <a href="/memberships" onClick={(e) => navigate(e, '/memberships')} className={`hover:text-secondary transition-colors ${isActive('/memberships') ? 'text-secondary' : ''}`}>عضويات</a>
              
              {/* Activities Dropdown */}
              <div 
                className="relative py-8"
                onMouseEnter={() => handleMouseEnter('activities')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 hover:text-secondary transition-colors ${isParentActive(['/activities']) ? 'text-secondary' : ''}`}>
                  نشاطات <ChevronDown className="w-3 h-3" />
                </button>
                {activeDropdown === 'activities' && (
                  <div className="absolute top-full right-0 w-48 bg-primary shadow-lg border-t-2 border-secondary">
                    <div className="flex flex-col py-2">
                      <a href="/activities" onClick={(e) => navigate(e, '/activities')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/activities') ? 'text-secondary font-bold' : ''}`}>النشاطات</a>
                      <a href="/vision-mission#report" onClick={(e) => navigate(e, '/vision-mission#report')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/vision-mission#report') ? 'text-secondary font-bold' : ''}`}>تقرير عام 2026</a>
                      <a href="/activities#conferences" onClick={(e) => navigate(e, '/activities#conferences')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/activities#conferences') ? 'text-secondary font-bold' : ''}`}>المؤتمرات والملتقيات</a>
                      <a href="/activities#seminars" onClick={(e) => navigate(e, '/activities#seminars')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/activities#seminars') ? 'text-secondary font-bold' : ''}`}>الندوات</a>
                      <a href="/activities#gallery" onClick={(e) => navigate(e, '/activities#gallery')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/activities#gallery') ? 'text-secondary font-bold' : ''}`}>معرض الصور</a>
                    </div>
                  </div>
                )}
              </div>

              <a href="/agreements" onClick={(e) => navigate(e, '/agreements')} className={`hover:text-secondary transition-colors ${isActive('/agreements') ? 'text-secondary' : ''}`}>اتفاقيات</a>

              {/* Offerings Dropdown */}
              <div 
                className="relative py-8"
                onMouseEnter={() => handleMouseEnter('offerings')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 hover:text-secondary transition-colors ${isParentActive(['/publications', '/books', '/articles', '/magazine']) ? 'text-secondary' : ''}`}>
                  ما نقدمه <ChevronDown className="w-3 h-3" />
                </button>
                {activeDropdown === 'offerings' && (
                  <div className="absolute top-full right-0 w-48 bg-primary shadow-lg border-t-2 border-secondary">
                    <div className="flex flex-col py-2">
                      <a href="/publications" onClick={(e) => navigate(e, '/publications')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/publications') ? 'text-secondary font-bold' : ''}`}>إصدارات الهيئة</a>
                      <a href="/books" onClick={(e) => navigate(e, '/books')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/books') ? 'text-secondary font-bold' : ''}`}>الكتب</a>
                      <a href="/articles" onClick={(e) => navigate(e, '/articles')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/articles') ? 'text-secondary font-bold' : ''}`}>المقالات</a>
                      <a href="/magazine" onClick={(e) => navigate(e, '/magazine')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/magazine') ? 'text-secondary font-bold' : ''}`}>المجلة</a>
                    </div>
                  </div>
                )}
              </div>


              <a href="/courses" onClick={(e) => navigate(e, '/courses')} className={`hover:text-secondary transition-colors ${isActive('/courses') ? 'text-secondary' : ''}`}>الدورات التدريبية</a>
              <a href="/qualifying-programs" onClick={(e) => navigate(e, '/qualifying-programs')} className={`hover:text-secondary transition-colors ${isActive('/qualifying-programs') ? 'text-secondary' : ''}`}>البرامج التأهيلية</a>
              <a href="/arbitrators" onClick={(e) => navigate(e, '/arbitrators')} className={`hover:text-secondary transition-colors ${isActive('/arbitrators') ? 'text-secondary' : ''}`}>المحكمين</a>
              <a href="/experts" onClick={(e) => navigate(e, '/experts')} className={`hover:text-secondary transition-colors ${isActive('/experts') ? 'text-secondary' : ''}`}>الخبراء</a>

              {/* Links Dropdown */}
              <div 
                className="relative py-8"
                onMouseEnter={() => handleMouseEnter('links')}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 hover:text-secondary transition-colors ${isParentActive(['/arab-engineers-federation']) ? 'text-secondary' : ''}`}>
                  روابط مهمة <ChevronDown className="w-3 h-3" />
                </button>
                {activeDropdown === 'links' && (
                  <div className="absolute top-full right-0 w-56 bg-primary shadow-lg border-t-2 border-secondary">
                    <div className="flex flex-col py-2">
                      <a href="/arab-engineers-federation" onClick={(e) => navigate(e, '/arab-engineers-federation')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/arab-engineers-federation') ? 'text-secondary font-bold' : ''}`}>اتحاد المهندسين العرب</a>
                      <a href="/affiliated-centers" onClick={(e) => navigate(e, '/affiliated-centers')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/affiliated-centers') ? 'text-secondary font-bold' : ''}`}>مراكز منتسبة للهيئة</a>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button onClick={(e) => navigate(e, '/contact-us')} className="hidden sm:flex bg-secondary hover:bg-secondary/90 text-white transition-all duration-300 px-6 py-2 rounded-xl text-sm font-bold flex-col items-center leading-tight shadow-[0_4px_15px_rgba(200,149,63,0.3)] hover:shadow-[0_6px_20px_rgba(200,149,63,0.5)] hover:-translate-y-0.5 border border-secondary/50">
                <span>تواصل</span>
                <span>معنا</span>
              </button>
              

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[60] lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-72 bg-dark z-[70] transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        dir="rtl"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
            <img src="/logo.png" alt="الهيئة العربية للتحكيم الهندسي" className="h-12 w-auto object-contain" />
            <button 
              className="text-gray-400 hover:text-white bg-white/5 p-2 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 text-white">
            <a href="/" onClick={(e) => navigate(e, '/')} className={`py-3 px-4 rounded-lg hover:bg-primary/20 transition-colors ${isActive('/') ? 'bg-primary/20 text-secondary font-bold' : ''}`}>الرئيسية</a>
            
            <div className="py-2">
              <div className="px-4 py-2 text-sm text-gray-500 font-bold mb-1">عن الهيئة</div>
              <a href="/vision-mission" onClick={(e) => navigate(e, '/vision-mission')} className={`block py-2 px-6 rounded-lg hover:bg-primary/10 ${isActive('/vision-mission') ? 'bg-primary/20 text-secondary font-bold' : 'text-gray-300'}`}>الرؤية والرسالة</a>
              <a href="/vision-mission#report" onClick={(e) => navigate(e, '/vision-mission#report')} className={`block py-2 px-6 rounded-lg hover:bg-primary/10 ${isActive('/vision-mission#report') ? 'bg-primary/20 text-secondary font-bold' : 'text-gray-300'}`}>تقرير عام 2026</a>
              <a href="/committee" onClick={(e) => navigate(e, '/committee')} className={`block py-2 px-6 rounded-lg hover:bg-primary/10 ${isActive('/committee') ? 'bg-primary/20 text-secondary font-bold' : 'text-gray-300'}`}>أعضاء اللجنة التنفيذية</a>
            </div>

            <a href="/arbitration-services" onClick={(e) => navigate(e, '/arbitration-services')} className={`py-3 px-4 rounded-lg hover:bg-primary/20 transition-colors ${isActive('/arbitration-services') ? 'bg-primary/20 text-secondary font-bold' : ''}`}>الصلح والوساطة والتحكيم</a>
            <a href="/memberships" onClick={(e) => navigate(e, '/memberships')} className={`py-3 px-4 rounded-lg hover:bg-primary/20 transition-colors ${isActive('/memberships') ? 'bg-primary/20 text-secondary font-bold' : ''}`}>عضويات</a>
            
            <div className="py-2">
              <div className="px-4 py-2 text-sm text-gray-500 font-bold mb-1">نشاطات</div>
              <a href="/activities" onClick={(e) => navigate(e, '/activities')} className={`block py-2 px-6 rounded-lg hover:bg-primary/10 ${isActive('/activities') ? 'bg-primary/20 text-secondary font-bold' : 'text-gray-300'}`}>النشاطات</a>
              <a href="/vision-mission#report" onClick={(e) => navigate(e, '/vision-mission#report')} className={`block py-2 px-6 rounded-lg hover:bg-primary/10 ${isActive('/vision-mission#report') ? 'bg-primary/20 text-secondary font-bold' : 'text-gray-300'}`}>تقرير عام 2026</a>
              <a href="/activities#conferences" onClick={(e) => navigate(e, '/activities#conferences')} className={`block py-2 px-6 rounded-lg hover:bg-primary/10 ${isActive('/activities#conferences') ? 'bg-primary/20 text-secondary font-bold' : 'text-gray-300'}`}>المؤتمرات والملتقيات</a>
              <a href="/activities#seminars" onClick={(e) => navigate(e, '/activities#seminars')} className={`block py-2 px-6 rounded-lg hover:bg-primary/10 ${isActive('/activities#seminars') ? 'bg-primary/20 text-secondary font-bold' : 'text-gray-300'}`}>الندوات</a>
              <a href="/activities#gallery" onClick={(e) => navigate(e, '/activities#gallery')} className={`block py-2 px-6 rounded-lg hover:bg-primary/10 ${isActive('/activities#gallery') ? 'bg-primary/20 text-secondary font-bold' : 'text-gray-300'}`}>معرض الصور</a>
            </div>

            <a href="/agreements" onClick={(e) => navigate(e, '/agreements')} className={`py-3 px-4 rounded-lg hover:bg-primary/20 transition-colors ${isActive('/agreements') ? 'bg-primary/20 text-secondary font-bold' : ''}`}>اتفاقيات</a>

            <div className="py-2">
              <div className="px-4 py-2 text-sm text-gray-500 font-bold mb-1">ما نقدمه</div>
              <a href="/publications" onClick={(e) => navigate(e, '/publications')} className={`block py-2 px-6 rounded-lg hover:bg-primary/10 ${isActive('/publications') ? 'bg-primary/20 text-secondary font-bold' : 'text-gray-300'}`}>إصدارات الهيئة</a>
              <a href="/books" onClick={(e) => navigate(e, '/books')} className={`block py-2 px-6 rounded-lg hover:bg-primary/10 ${isActive('/books') ? 'bg-primary/20 text-secondary font-bold' : 'text-gray-300'}`}>الكتب</a>
              <a href="/articles" onClick={(e) => navigate(e, '/articles')} className={`block py-2 px-6 rounded-lg hover:bg-primary/10 ${isActive('/articles') ? 'bg-primary/20 text-secondary font-bold' : 'text-gray-300'}`}>المقالات</a>
              <a href="/magazine" onClick={(e) => navigate(e, '/magazine')} className={`block py-2 px-6 rounded-lg hover:bg-primary/10 ${isActive('/magazine') ? 'bg-primary/20 text-secondary font-bold' : 'text-gray-300'}`}>المجلة</a>
            </div>


            <a href="/courses" onClick={(e) => navigate(e, '/courses')} className={`py-3 px-4 rounded-lg hover:bg-primary/20 transition-colors ${isActive('/courses') ? 'bg-primary/20 text-secondary font-bold' : ''}`}>الدورات التدريبية</a>
            <a href="/qualifying-programs" onClick={(e) => navigate(e, '/qualifying-programs')} className={`py-3 px-4 rounded-lg hover:bg-primary/20 transition-colors ${isActive('/qualifying-programs') ? 'bg-primary/20 text-secondary font-bold' : ''}`}>البرامج التأهيلية</a>
            <a href="/arbitrators" onClick={(e) => navigate(e, '/arbitrators')} className={`py-3 px-4 rounded-lg hover:bg-primary/20 transition-colors ${isActive('/arbitrators') ? 'bg-primary/20 text-secondary font-bold' : ''}`}>المحكمين</a>
            <a href="/experts" onClick={(e) => navigate(e, '/experts')} className={`py-3 px-4 rounded-lg hover:bg-primary/20 transition-colors ${isActive('/experts') ? 'bg-primary/20 text-secondary font-bold' : ''}`}>الخبراء</a>
            
            <div className="py-2 border-t border-white/10 mt-4 pt-4">
              <a href="/arab-engineers-federation" onClick={(e) => navigate(e, '/arab-engineers-federation')} className={`block py-2 px-4 rounded-lg hover:bg-primary/10 ${isActive('/arab-engineers-federation') ? 'bg-primary/20 text-secondary font-bold' : 'text-gray-300'}`}>اتحاد المهندسين العرب</a>
              <a href="/affiliated-centers" onClick={(e) => navigate(e, '/affiliated-centers')} className={`block py-2 px-4 rounded-lg hover:bg-primary/10 ${isActive('/affiliated-centers') ? 'bg-primary/20 text-secondary font-bold' : 'text-gray-300'}`}>مراكز منتسبة للهيئة</a>
            </div>

            <button onClick={(e) => navigate(e, '/contact-us')} className="mt-6 w-full border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors py-3 rounded-lg font-bold flex items-center justify-center gap-2">
              تواصل معنا
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
