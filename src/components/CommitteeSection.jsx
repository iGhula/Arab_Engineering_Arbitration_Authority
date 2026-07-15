import React from 'react';
import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react';

const CommitteeSection = ({ hideTitle = true }) => {
  const members = [
    { name: "م. أمحمد غولة - ليبيا", role: "رئيس اللجنة التنفيذية", image: "/members/m_ghoula.png" },
    { name: "م. جودت يغمور - الاردن", role: "عضو اللجنة التنفيذية", image: null },
    { name: "م. فؤاد الكندي - عُمان", role: "عضو اللجنة التنفيذية", image: null },
    { name: "م. طارق العشماوي - فلسطين", role: "عضو اللجنة التنفيذية", image: null },
    { name: "م. توفيق سنان - لبنان", role: "عضو اللجنة التنفيذية", image: null },
    { name: "م. شادي بن خليفه - تونس", role: "عضو اللجنة التنفيذية", image: null },
    { name: "م. ناصر المطيري - الكويت", role: "عضو اللجنة التنفيذية", image: "/members/n_mutairi.jpg" },
    { name: "م. عمر سلام - العراق", role: "عضو اللجنة التنفيذية", image: null },
    { name: "م. معتز طلبه - مصر", role: "عضو اللجنة التنفيذية", image: null },
    { name: "م. فيصل الشريف - السعودية", role: "عضو اللجنة التنفيذية", image: null },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {!hideTitle && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              أعضاء اللجنة <span className="text-secondary">التنفيذية</span>
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </motion.div>
        )}

        {/* Chairman Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-0 mb-32"
        >
          {/* Chairman Image (Right side structurally, but visually left in RTL context depending on flex. Let's make it standard RTL) */}
          <div className="w-full md:w-1/3 z-20">
            <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
              {/* Placeholder for the chairman's image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img src="/members/m_ghoula.png" alt="م. أمحمد غولة" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Chairman Quote & Info */}
          <div className="w-full md:w-2/3 bg-primary rounded-3xl p-10 md:p-16 text-white shadow-2xl relative md:-mr-12 z-10">
            <Quote className="absolute top-10 right-10 w-16 h-16 text-white/10 rotate-180" />
            
            <div className="relative z-10 text-right">
              <h3 className="text-3xl font-bold mb-2">م. أمحمد غولة</h3>
              <p className="text-secondary font-semibold mb-8">رئيس مجلس الإدارة</p>
              
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base font-light">
                <p>
                  " السادة الأعضاء والزوار الكرام يسعدني أن أرحب بكم في الموقع الإلكتروني للهيئة العربية للتحكيم الهندسي والتي أتشرف بأنني رئيسا لها وخادما لمصالح المهندسين العرب في مجال التحكيم الهندسي.
                </p>
                <p>
                  اننا نطمح أن تكون هذه الهيئة والمراكز التحكيمية المنبثقة منها مؤسسة عربية قادرة على حل المشكلات في القطاع الهندسي وتطويره وتقليل العوائق امام الشركات الخاصة والعامة على حد سواء. ونحرص من خلال هذا الموقع الالكتروني على خلق فضاء هندسي قانوني متكامل وتوفير أحسن الخدمات والمعلومات للمهندسين العرب والمؤسسات والهيئات الهندسية بما يمكن من الاستخدام الأمثل للوسائل البديلة لحل النزاع في العقود والمشروعات الهندسية. "
                </p>
              </div>

              <div className="mt-8 font-signature text-2xl text-white/80">
                م. أمحمد غولة
              </div>
            </div>
          </div>
        </motion.div>

        {/* Committee Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group"
            >
              {/* Member Image Area */}
              <div className="w-full h-64 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                {/* Fallback silhouette if no image */}
                {!member.image ? (
                  <User className="w-24 h-24 text-gray-300" />
                ) : (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-secondary font-bold border border-secondary px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    عرض الملف
                  </span>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 text-center bg-white relative z-10">
                <h4 className="text-lg font-bold text-primary mb-1 group-hover:text-secondary transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CommitteeSection;
