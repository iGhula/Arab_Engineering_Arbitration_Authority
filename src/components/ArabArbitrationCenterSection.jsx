import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, User } from 'lucide-react';

const ArabArbitrationCenterSection = () => {
  const members = [
    {
      id: 1,
      name: "د.مريم العوا",
      title: "معهد المحكمين المعتمدين بلندن",
      image: "/members/m_elawa.png"
    },
    {
      id: 2,
      name: "د.عمر عزام",
      title: "رئيس قسم العقود وإدارة المشروعات",
      image: "/members/o_azzam.png"
    },
    {
      id: 3,
      name: "د.نبيل عباس",
      title: "مدير شركة عباس للاستشارات الهندسية",
      image: "/members/n_abbas.png"
    },
    {
      id: 4,
      name: "أ.محمد غولة",
      title: "عضو لجنة التعريب عقود فيديك",
      image: "/members/m_ghoula.png"
    },
    {
      id: 5,
      name: "د.ماجد خلوصي",
      title: "نقيب مهندسي مصر الأسبق",
      image: "/members/m_khalousi.png"
    },
    {
      id: 6,
      name: "د.سليم العوا",
      title: "مدير مكتب سليم العوا محاماة",
      image: "/members/s_elawa.png"
    },
    {
      id: 7,
      name: "د.وليد النمر",
      title: "رئيس منطقة الشرق الأوسط (DRBF)",
      image: "/members/w_elnemr.png"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Premium Hero Section - Matching Arbitrators Page */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[45vh]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920" alt="Arab Arbitration Center Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04111d]/95 via-[#0b4b7a]/80 to-[#04111d]/90"></div>
        </div>
        
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-5 py-1.5 rounded-full bg-white/10 text-secondary border border-secondary/30 backdrop-blur-md text-sm font-bold tracking-wider"
          >
            روابط مهمة
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-8 drop-shadow-2xl leading-tight"
          >
            المركز العربي للتحكيم الهندسي
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-32 h-1.5 bg-secondary mx-auto rounded-full shadow-[0_0_15px_rgba(202,138,4,0.5)]"
          ></motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 -mt-10 relative z-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#0b4b7a]/10 rounded-full blur-3xl z-0"></div>
              
              <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl">
                <img src="/members/acarea_group.jpg" alt="ACAREA Group History" className="rounded-2xl w-full object-cover" />
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-right"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                نبذة عن <span className="text-secondary">المركز العربي للتحكيم</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8 text-justify">
                أول مركز تحكيم هندسي في الشرق الأوسط أسس عام ١٩٩٠ وثاني مركز تحكيم تجاري في الشرق الأوسط. يختص المركز بالنظر في منازعات العقود الهندسية بين المهندسين والمقاولين وأرباب الأعمال بالدول العربية.
              </p>

              <h3 className="text-xl font-bold text-secondary mb-4">رسالة المركز</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-10 text-justify">
                المساهمة الفعالة في آليات فض النزاعات بطريقة حضارية متميزة وبناء الإنسان قياديا وإداريا وتربويا وفنيا في هذا المجال وفق قيم هذه الأمة الأصيلة متبنون أفضل وآخر ما أنتجه الفكر الإنساني المتطور في مجال العقود والأساليب الحديثة لفض النزاعات ، متخذون أحدث وأبدع الوسائل والأساليب العلمية والتقنية لتقديم خدمات تدريبية وتعليمية واستشارية ذات جودة فائقة و متميزة.
              </p>

              <a 
                href="https://acarea.com.eg/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0b4b7a] text-white px-8 py-3 rounded-lg font-bold hover:bg-secondary transition-colors duration-300 group shadow-lg shadow-[#0b4b7a]/30"
              >
                <span>إذهب إلي الموقع</span>
                <ExternalLink className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              <span className="text-secondary">أعضاء</span> المركز العربي للتحكيم
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-50 overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Image Area */}
                <div className="w-full aspect-square bg-gray-100 relative overflow-hidden flex items-center justify-center">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <User className="w-24 h-24 text-gray-300" strokeWidth={1} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04111d]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Area */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#0b4b7a] mb-2">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ArabArbitrationCenterSection;
