import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  const navigate = (e, path) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    setCurrentPath(path.split('#')[0]);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setActiveDropdown(null);

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
  const isParentActive = (paths) => paths.includes(currentPath);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={(e) => navigate(e, '/')}
          >
             <div className="flex gap-1">
                <div className="w-5 h-5 bg-white rotate-45"></div>
                <div className="w-5 h-5 bg-secondary rotate-45 flex items-center justify-center">
                  <span className="text-white text-[8px] -rotate-45">ع</span>
                </div>
                <div className="w-5 h-5 bg-white rotate-45"></div>
              </div>
            <span className="font-bold text-white text-lg leading-tight">الهيئة العربية<br/>للتحكيم الهندسي</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex gap-6 items-center text-sm font-semibold">
            <a href="/" onClick={(e) => navigate(e, '/')} className={`hover:text-secondary transition-colors ${isActive('/') ? 'text-secondary' : ''}`}>الرئيسية</a>
            
            {/* About Dropdown */}
            <div 
              className="relative py-8"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 hover:text-secondary transition-colors ${isParentActive(['/vision-mission', '/functions', '/committee']) ? 'text-secondary' : ''}`}>
                عن الهيئة <ChevronDown className="w-3 h-3" />
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full right-0 w-48 bg-[#0b4b7a] shadow-lg border-t-2 border-secondary">
                  <div className="flex flex-col py-2">
                    <a href="/vision-mission" onClick={(e) => navigate(e, '/vision-mission')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/vision-mission') ? 'text-secondary font-bold' : ''}`}>الرؤية والرسالة</a>
                    <a href="/vision-mission#goals" onClick={(e) => navigate(e, '/vision-mission#goals')} className="px-4 py-2 hover:bg-white/10 transition-colors text-right">أهداف الهيئة</a>
                    <a href="/functions" onClick={(e) => navigate(e, '/functions')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/functions') ? 'text-secondary font-bold' : ''}`}>وظائف الهيئة</a>
                    <a href="/committee" onClick={(e) => navigate(e, '/committee')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/committee') ? 'text-secondary font-bold' : ''}`}>أعضاء اللجنة التنفيذية</a>
                  </div>
                </div>
              )}
            </div>

            <a href="/arbitration-services" onClick={(e) => navigate(e, '/arbitration-services')} className={`hover:text-secondary transition-colors ${isActive('/arbitration-services') ? 'text-secondary' : ''}`}>الصلح والوساطة والتحكيم</a>

            {/* Offerings Dropdown */}
            <div 
              className="relative py-8"
              onMouseEnter={() => handleMouseEnter('offerings')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 hover:text-secondary transition-colors ${isParentActive(['/books', '/articles']) ? 'text-secondary' : ''}`}>
                ما نقدمه <ChevronDown className="w-3 h-3" />
              </button>
              {activeDropdown === 'offerings' && (
                <div className="absolute top-full right-0 w-48 bg-[#0b4b7a] shadow-lg border-t-2 border-secondary">
                  <div className="flex flex-col py-2">
                    <a href="#" className="px-4 py-2 hover:bg-white/10 transition-colors text-right">الدورات التدريبية</a>
                    <a href="#" className="px-4 py-2 hover:bg-white/10 transition-colors text-right">إصدارات الهيئة</a>
                    <a href="#" className="px-4 py-2 hover:bg-white/10 transition-colors text-right">المؤتمرات والملتقيات</a>
                    <a href="/books" onClick={(e) => navigate(e, '/books')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/books') ? 'text-secondary font-bold' : ''}`}>الكتب</a>
                    <a href="/articles" onClick={(e) => navigate(e, '/articles')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/articles') ? 'text-secondary font-bold' : ''}`}>المقالات</a>
                    <a href="#" className="px-4 py-2 hover:bg-white/10 transition-colors text-right">الندوات</a>
                    <a href="#" className="px-4 py-2 hover:bg-white/10 transition-colors text-right">المجلة</a>
                  </div>
                </div>
              )}
            </div>

            <a href="/qualifying-programs" onClick={(e) => navigate(e, '/qualifying-programs')} className={`hover:text-secondary transition-colors ${isActive('/qualifying-programs') ? 'text-secondary' : ''}`}>البرامج التأهيلية</a>
            <a href="/arbitrators" onClick={(e) => navigate(e, '/arbitrators')} className={`hover:text-secondary transition-colors ${isActive('/arbitrators') ? 'text-secondary' : ''}`}>المحكمين</a>
            <a href="/experts" onClick={(e) => navigate(e, '/experts')} className={`hover:text-secondary transition-colors ${isActive('/experts') ? 'text-secondary' : ''}`}>الخبراء</a>

            {/* Links Dropdown */}
            <div 
              className="relative py-8"
              onMouseEnter={() => handleMouseEnter('links')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 hover:text-secondary transition-colors ${isParentActive(['/arab-engineers-federation', '/arab-arbitration-center']) ? 'text-secondary' : ''}`}>
                روابط مهمة <ChevronDown className="w-3 h-3" />
              </button>
              {activeDropdown === 'links' && (
                <div className="absolute top-full right-0 w-56 bg-[#0b4b7a] shadow-lg border-t-2 border-secondary">
                  <div className="flex flex-col py-2">
                    <a href="/arab-engineers-federation" onClick={(e) => navigate(e, '/arab-engineers-federation')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/arab-engineers-federation') ? 'text-secondary font-bold' : ''}`}>اتحاد المهندسين العرب</a>
                    <a href="/arab-arbitration-center" onClick={(e) => navigate(e, '/arab-arbitration-center')} className={`px-4 py-2 hover:bg-white/10 transition-colors text-right ${isActive('/arab-arbitration-center') ? 'text-secondary font-bold' : ''}`}>المركز العربي للتحكيم الهندسي</a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button className="border border-white hover:bg-white hover:text-primary transition-colors px-6 py-2 text-sm font-bold flex flex-col items-center leading-tight">
              <span>تواصل</span>
              <span>معنا</span>
            </button>
            
            {/* EN Diamond */}
            <button className="w-10 h-10 bg-secondary/80 hover:bg-secondary transition-colors rotate-45 flex items-center justify-center">
              <span className="text-white text-xs font-bold -rotate-45">EN</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
