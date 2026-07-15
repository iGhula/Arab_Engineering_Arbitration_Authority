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
  return (
    <footer className="bg-[#04111d] text-gray-300 py-20 relative overflow-hidden border-t border-white/5">
      {/* Decorative Premium Orbs */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-right">
          
          {/* Right Column: Logo & Desc (Spans 2 columns for premium layout) */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center justify-end gap-4">
              <div className="flex flex-col items-end leading-tight">
                <span>الهيئة العربية</span>
                <span className="text-secondary">للتحكيم الهندسي</span>
              </div>
              <span className="w-10 h-10 rounded bg-secondary flex items-center justify-center rotate-45 shadow-[0_0_20px_rgba(200,149,63,0.3)]">
                 <span className="w-5 h-5 bg-white -rotate-45"></span>
              </span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md ml-auto">
              احدى الهيئات التخصصية في اتحاد المهندسين العرب والتي تأسست بناءا على قرار المجلس الاعلى للاتحاد سنة (2010) وتولى رئاسة اللجنة التنفيذية للهيئة عدد من الزملاء
            </p>
          </div>

          {/* Middle Column: Links */}
          <div className="flex flex-col items-end">
            <h4 className="text-lg font-bold text-white mb-6">روابط مهمة</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-secondary hover:translate-x-[-4px] transition-all flex items-center justify-end gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> الرئيسية</a></li>
              <li><a href="#" className="hover:text-secondary hover:translate-x-[-4px] transition-all flex items-center justify-end gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> الدورات التدريبية</a></li>
              <li><a href="#" className="hover:text-secondary hover:translate-x-[-4px] transition-all flex items-center justify-end gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> إصدارات الهيئة</a></li>
              <li><a href="#" className="hover:text-secondary hover:translate-x-[-4px] transition-all flex items-center justify-end gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> المؤتمرات والملتقيات</a></li>
              <li><a href="#" className="hover:text-secondary hover:translate-x-[-4px] transition-all flex items-center justify-end gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> الصلح والوساطة والتحكيم</a></li>
            </ul>
          </div>

          {/* Left Column: Contact & Socials */}
          <div className="flex flex-col items-end">
            <h4 className="text-lg font-bold text-white mb-6">تواصل معنا</h4>
            <ul className="space-y-4 text-sm text-gray-400 mb-8 w-full flex flex-col items-end">
              <li className="flex items-center justify-end gap-3 w-full hover:text-white transition-colors cursor-pointer">
                <span dir="ltr" className="tracking-wider">info@aeab.sa.com</span>
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary"><MailIcon /></span>
              </li>
              <li className="flex items-center justify-end gap-3 w-full hover:text-white transition-colors cursor-pointer">
                <span dir="ltr" className="tracking-wider font-mono">+966 50 555 5840</span>
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-secondary"><PhoneIcon /></span>
              </li>
            </ul>

            <h4 className="text-sm font-bold text-gray-500 mb-4">تابعنا علي</h4>
            <div className="flex gap-3 justify-end w-full">
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
          <p>جميع الحقوق محفوظة الهيئة العربية للتحكيم الهندسي © 2024 تصميم الحسام للبرمجيات</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
