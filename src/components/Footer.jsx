import React from 'react';

// Custom social SVG components to avoid lucide-react brand missing issues
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-10a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
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
    <footer className="bg-dark text-gray-300 py-12 md:py-16 relative overflow-hidden border-t border-white/5" dir="rtl">
      {/* Decorative Premium Orbs */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-12">

          {/* Logo & Desc Column */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-start text-right">
            <div className="mb-4">
              <img src="/logo.png" alt="الهيئة العربية للتحكيم الهندسي" className="h-20 w-auto object-contain drop-shadow-md hover:opacity-90 transition-opacity" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              إحدى الهيئات التخصصية في اتحاد المهندسين العرب والتي تأسست بناءً على قرار المجلس الأعلى للاتحاد سنة (2010).
            </p>
          </div>

          {/* Important Links Column */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-start text-right">
            <h4 className="text-lg font-bold text-white mb-4">روابط مهمة</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
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

          {/* Contact & Address Column */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-start text-right">
            <h4 className="text-lg font-bold text-white mb-4">تواصل معنا</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full text-sm text-gray-400 mb-6">
              {/* Address */}
              <div className="sm:col-span-2 flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary shrink-0 mt-0.5"><MapPinIcon /></span>
                <div>
                  <span className="text-white font-semibold block mb-1">العنوان:</span>
                  <span className="leading-relaxed">شارع رمسيس – القاهرة – جمهورية مصر العربية – ص. ب: (9) الفجالة</span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary shrink-0 mt-0.5"><PhoneIcon /></span>
                <div className="space-y-1">
                  <span className="text-white font-semibold block mb-1">أرقام الهاتف والفاكس:</span>
                  <div dir="ltr" className="text-right tracking-wider font-mono text-xs sm:text-sm whitespace-nowrap">+966 50 555 5840</div>
                  <div dir="ltr" className="text-right tracking-wider font-mono text-xs sm:text-sm whitespace-nowrap">Tel: +202 27735 610</div>
                  <div dir="ltr" className="text-right tracking-wider font-mono text-xs sm:text-sm whitespace-nowrap">Fax: +202 25749404 30</div>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary shrink-0 mt-0.5"><MailIcon /></span>
                <div className="space-y-1">
                  <span className="text-white font-semibold block mb-1">البريد الإلكتروني:</span>
                  <div dir="ltr" className="text-right text-xs sm:text-sm hover:text-white transition-colors">
                    <a href="mailto:info@aeab.sa.com" className="block">info@aeab.sa.com</a>
                  </div>
                  <div dir="ltr" className="text-right text-xs sm:text-sm hover:text-white transition-colors">
                    <a href="mailto:arabengs@arabfedeng.org" className="block">arabengs@arabfedeng.org</a>
                  </div>
                  <div dir="ltr" className="text-right text-xs sm:text-sm hover:text-white transition-colors">
                    <a href="mailto:arabengs@hotmail.com" className="block">arabengs@hotmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-gray-400">تابعنا على:</span>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/p/%D8%A7%D9%84%D9%87%D9%8A%D8%A6%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D9%84%D9%84%D8%AA%D8%AD%D9%83%D9%8A%D9%85-%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A-100078255623161/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:scale-110 hover:text-white transition-all duration-300 text-gray-400"
                >
                  <FacebookIcon />
                </a>
                <a 
                  href="https://eg.linkedin.com/company/%D8%A7%D9%84%D9%87%D9%8A%D8%A6%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D9%84%D9%84%D8%AA%D8%AD%D9%83%D9%8A%D9%85-%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-110 hover:text-white transition-all duration-300 text-gray-400"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© جميع الحقوق محفوظة للهيئة العربية للتحكيم الهندسي</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
