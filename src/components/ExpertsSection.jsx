import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, UserCheck } from 'lucide-react';

// Google Form URL for Experts registration:
const GOOGLE_FORM_EXPERT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfmnth_XsehuIHkx5HMEiILd1w-MORfYleVIBJMSxICNeYrrA/viewform?usp=publish-editor";

const ExpertsSection = () => {
  const [activeTab, setActiveTab] = useState('الكل');

  const experts = [
    {
      id: "new-0",
      name: "هيثم علي عياد",
      specialty: "هندسة معمارية - ليبيا",
      role: "عضو مجلس نزاع",
    },
    {
      id: "new-1",
      name: "مصطفى محمد الهمالي",
      specialty: "هندسة مدنية - ليبيا",
      role: "عضو مجلس نزاع",
    },
    {
      id: "new-2",
      name: "محمد احمد ابوعجيلة",
      specialty: "هندسة مدنية - ليبيا",
      role: "عضو مجلس نزاع",
    },
    {
      id: "new-3",
      name: "المهدي احمد المهدي كرواد",
      specialty: "هندسة مدنية - ليبيا",
      role: "عضو مجلس نزاع",
    },
    {
      id: "new-4",
      name: "الناجح عمر صالح عمر",
      specialty: "هندسة طرق - ليبيا",
      role: "عضو مجلس نزاع",
    },
    {
      id: "new-5",
      name: "علي احمد الطاس",
      specialty: "هندسة مدنية - ليبيا",
      role: "عضو مجلس نزاع",
    },
    {
      id: "new-6",
      name: "عصام مفتاح الجانكو",
      specialty: "ليبيا",
      role: "عضو مجلس نزاع",
    },
    {
      id: "new-7",
      name: "سليمان عبدالله الشريمي",
      specialty: "هندسة بحرية - ليبيا",
      role: "عضو مجلس نزاع",
    },
    {
      id: "new-8",
      name: "عبدالله محمد المنفي",
      specialty: "هندسة انشاءات - ليبيا",
      role: "عضو مجلس نزاع",
    }
  ];

  const roles = ["الكل", "خبير هندسي فني", "خبير عقود", "عضو مجلس نزاع", "وسيط"];

  const filteredExperts = activeTab === 'الكل' 
    ? experts 
    : experts.filter(e => e.role === activeTab);

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Premium Hero Section */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[45vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920" alt="Experts Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-primary/80 to-dark/90"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 drop-shadow-2xl"
          >
            قوائم الخبراء
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-32 h-1.5 bg-secondary mx-auto rounded-full shadow-[0_0_15px_rgba(202,138,4,0.5)]"
          ></motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 -mt-24 relative z-20">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Registration CTA Banner */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-right" dir="rtl">
            <div>
              <h3 className="text-xl font-bold text-primary mb-1">تقديم طلب تسجيل في قوائم الخبراء</h3>
              <p className="text-gray-500 text-sm">يمكنك ملء الاستمارة الإلكترونية لطلب الانضمام إلى قائمة الخبراء المعتمدين (الرسوم: 100 دولار سنوياً تدفع بعد موافقة اللجنة التنفيذية).</p>
            </div>
            <a 
              href={GOOGLE_FORM_EXPERT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-secondary text-white font-bold rounded-xl hover:bg-primary transition-colors duration-300 shrink-0 text-sm shadow-md"
            >
              استمارة طلب تسجيل الخبراء
            </a>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {roles.map((role, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(role)}
                className={`px-8 py-3 rounded-md font-bold transition-all duration-300 text-lg ${
                  activeTab === role 
                    ? 'bg-primary text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Experts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredExperts.map((expert) => (
                <motion.div
                  layout
                  key={expert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row-reverse hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  {/* Image Area (Right Side) */}
                  <div className="sm:w-2/5 bg-gray-100 flex items-center justify-center p-8 border-b sm:border-b-0 sm:border-l border-gray-200 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 opacity-50"></div>
                    {expert.image ? (
                      <img src={expert.image} alt={expert.name} className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <UserCheck className="w-32 h-32 text-gray-300 group-hover:scale-110 transition-transform duration-500 relative z-10" strokeWidth={1} />
                    )}
                  </div>

                  {/* Content Area (Left Side) */}
                  <div className="sm:w-3/5 p-8 flex flex-col text-right">
                    <h3 className="text-2xl font-bold text-primary mb-2 leading-tight">
                      {expert.name}
                    </h3>
                    <div className="text-secondary font-medium mb-4">
                      {expert.specialty}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                      {expert.desc}
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-end gap-3 mt-auto">
                      <button className="w-10 h-10 bg-primary hover:bg-secondary text-white rounded flex items-center justify-center transition-colors duration-300">
                        <Phone className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-primary hover:bg-secondary text-white rounded flex items-center justify-center transition-colors duration-300">
                        <Mail className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredExperts.length === 0 && (
            <div className="text-center py-20 text-gray-400 text-xl font-bold">
              لا يوجد خبراء متاحين في هذا التخصص حالياً.
            </div>
          )}

        </div>
      </section>

    </div>
  );
};

export default ExpertsSection;
