import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, TrendingUp, Handshake, ShieldCheck, Scale, BookOpen, Building2 } from 'lucide-react';

const GoalsSection = ({ preview = false }) => {
  const allGoals = [
    {
      title: "تنظيم التحكيم في النزاعات الهندسية",
      desc: "تنظيم التحكيم في النزاعات الهندسية وتقديم المشورة في اختيار المحكمين والموفقين في مجال اختصاص الهيئة.",
      icon: <Scale className="w-8 h-8 text-secondary" />
    },
    {
      title: "وضع أسس قبول المحكمين",
      desc: "وضع أسس قبول المحكمين والموفقين واعتماد وإعداد قوائم بالمحكمين والموفقين المعتمدين من الهيئة",
      icon: <ShieldCheck className="w-8 h-8 text-secondary" />
    },
    {
      title: "تنظيم عملية تسوية النزاعات",
      desc: "المساهمة في تنظيم عملية تسوية النزاعات في العقود الهندسية والإنشائية عن طريق التحكيم أو أي من الوسائل الاخرى لتسوية النزاعات.",
      icon: <Gavel className="w-8 h-8 text-secondary" />
    },
    {
      title: "رفع شأن عملية تسوية النزاعات",
      desc: "رفع شأن عملية تسوية النزاعات وضمان تطورها وتوحيد الإجراءات المتبعة فيها .",
      icon: <TrendingUp className="w-8 h-8 text-secondary" />
    },
    {
      title: "تطوير قواعد التحكيم",
      desc: "تطوير قواعد التحكيم والوسائل البديلة لتسوية النزاعات من تحكيم وتوفيق وغير ذلك وتحديد الإجراءات المتبعة فيها",
      icon: <BookOpen className="w-8 h-8 text-secondary" />
    },
    {
      title: "تحديد أسس التعاون",
      desc: "تحديد أسس التعاون بين الهيئة والهيئات والمؤسسات الأخرى المعنية بشؤون التحكيم وفض النزاعات سواء العربية منها أو الأجنبية.",
      icon: <Handshake className="w-8 h-8 text-secondary" />
    },
    {
      title: "انشاء المراكز التحكيمية",
      desc: "انشاء المراكز التحكيمية ومراقبة ادائها",
      icon: <Building2 className="w-8 h-8 text-secondary" />
    }
  ];

  // In the old design, the preview showed exactly 5 specific goals.
  const goals = preview ? allGoals.slice(0, 5) : allGoals;

  const navigate = (e, path) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section id="goals" className="py-32 bg-dark relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-secondary">الأهداف</span> التي نسعى لها
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
            اقرت الجمعية العمومية للهيئة عدة اهداف منذ تاسيسها وتعمل دائما على تطويرها وتحقيقها
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-secondary/50 transition-all duration-300 relative overflow-hidden text-right flex flex-col h-full"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {goal.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{goal.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10 flex-grow">
                {goal.desc}
              </p>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-1 bg-secondary w-0 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {preview && (
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => navigate(e, '/vision-mission')}
            className="mx-auto bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-white px-10 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg"
          >
            جميع أهداف الهيئة
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default GoalsSection;
