import React from 'react';

// Custom social SVG components to avoid lucide-react brand missing issues
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M20 4l-6.768 6.768" /></svg>
);
const YouTubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48L15.5 11.75z"></path></svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const Footer = () => {
  const navigate = (e, path) => {
    if (path === '#') return;
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    if (path.includes('#')) {
      const id = path.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-dark text-gray-300 py-16 md:py-20 relative overflow-hidden border-t border-white/5" dir="rtl">
      {/* Decorative Premium Orbs */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">

          {/* Logo & Desc Column (First on Mobile & Desktop Right) */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-right">
            <div className="mb-6">
              <img src="/logo.png" alt="الهيئة العربية للتحكيم الهندسي" className="h-20 md:h-24 w-auto object-contain drop-shadow-md hover:opacity-90 transition-opacity" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              إحدى الهيئات التخصصية في اتحاد المهندسين العرب والتي تأسست بناءً على قرار المجلس الأعلى للاتحاد سنة (2010)، وتولى رئاسة اللجنة التنفيذية للهيئة عدد من الزملاء.
            </p>
          </div>

          {/* Important Links Column */}
          <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-right">
            <h4 className="text-lg font-bold text-white mb-4 md:mb-6">روابط مهمة</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="/" onClick={(e) => navigate(e, '/')} className="hover:text-secondary transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> الرئيسية
                </a>
              </li>
              <li>
                <a href="/courses" onClick={(e) => navigate(e, '/courses')} className="hover:text-secondary transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> الدورات التدريبية
                </a>
              </li>
              <li>
                <a href="/publications" onClick={(e) => navigate(e, '/publications')} className="hover:text-secondary transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> إصدارات الهيئة
                </a>
              </li>
              <li>
                <a href="/activities#conferences" onClick={(e) => navigate(e, '/activities#conferences')} className="hover:text-secondary transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> المؤتمرات والملتقيات
                </a>
              </li>
              <li>
                <a href="/arbitration-services" onClick={(e) => navigate(e, '/arbitration-services')} className="hover:text-secondary transition-colors inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> الصلح والوساطة والتحكيم
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials Column */}
          <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-right">
            <h4 className="text-lg font-bold text-white mb-4 md:mb-6">تواصل معنا</h4>
            <ul className="space-y-4 text-sm text-gray-400 mb-6 w-full">
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors cursor-pointer">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary shrink-0"><MailIcon /></span>
                <span dir="ltr" className="tracking-wider">info@aeab.sa.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors cursor-pointer">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary shrink-0"><PhoneIcon /></span>
                <span dir="ltr" className="tracking-wider font-mono">+966 50 555 5840</span>
              </li>
            </ul>

            <h4 className="text-sm font-bold text-gray-500 mb-3">تابعنا على</h4>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] hover:scale-110 hover:text-white transition-all duration-300 text-gray-400">
                <YouTubeIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:border-white hover:scale-110 hover:text-black transition-all duration-300 text-gray-400">
                <XIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:scale-110 hover:text-white transition-all duration-300 text-gray-400">
                <FacebookIcon />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© جميع الحقوق محفوظة للهيئة العربية للتحكيم الهندسي</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
