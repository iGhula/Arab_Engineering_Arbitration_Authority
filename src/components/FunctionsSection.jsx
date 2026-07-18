import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const FunctionsSection = ({ hideTitle = true }) => {
  const functionsList = [
    {
      title: "دراسة الموضوعات و القضايا الهندسية المشتركة",
      subtitle: "لجنة التوجيه والإرشاد",
      desc: "مدير مكتب فني لقسم تركيبات هما أنظمة متخصصة في غلق النوافذ و المساحات المفتوحة بالداخل أو الخارج الانظمة المونيوم وزجاج إدارة العمليات منذ استلام طلب العميل إلى تسليمه تطوير فرق التركيب وادارتها الاشراف على التسليم والتأكد من جودة عملية التركيب التمتع بروح القيادة وحسن إدارة الناس"
    },
    {
      title: "التنسيق والتعاون مع المنظمات العربية",
      subtitle: "لجنة الموارد",
      desc: "مدير مكتب فني لقسم تركيبات هما أنظمة متخصصة في غلق النوافذ و المساحات المفتوحة بالداخل أو الخارج الانظمة المونيوم وزجاج إدارة العمليات منذ استلام طلب العميل إلى تسليمه تطوير فرق التركيب وادارتها الاشراف على التسليم والتأكد من جودة عملية التركيب التمتع بروح القيادة وحسن إدارة الناس"
    },
    {
      title: "رفع شأن مهنة الهندسة وتنظيم قواعد مزاولتها",
      subtitle: "لجنة البيئة",
      desc: "مدير مكتب فني لقسم تركيبات هما أنظمة متخصصة في غلق النوافذ و المساحات المفتوحة بالداخل أو الخارج الانظمة المونيوم وزجاج إدارة العمليات منذ استلام طلب العميل إلى تسليمه تطوير فرق التركيب وادارتها الاشراف على التسليم والتأكد من جودة عملية التركيب التمتع بروح القيادة وحسن إدارة الناس"
    },
    {
      title: "تشجيع البحوث العلمية والعربية",
      subtitle: "لجنة النقل والمواصلات",
      desc: "مدير مكتب فني لقسم تركيبات هما أنظمة متخصصة في غلق النوافذ و المساحات المفتوحة بالداخل أو الخارج الانظمة المونيوم وزجاج إدارة العمليات منذ استلام طلب العميل إلى تسليمه تطوير فرق التركيب وادارتها الاشراف على التسليم والتأكد من جودة عملية التركيب التمتع بروح القيادة وحسن إدارة الناس"
    },
    {
      title: "دعم ومساندة المنظمات الهندسية",
      subtitle: "لجنة القضايا القومية",
      desc: "مدير مكتب فني لقسم تركيبات هما أنظمة متخصصة في غلق النوافذ و المساحات المفتوحة بالداخل أو الخارج الانظمة المونيوم وزجاج إدارة العمليات منذ استلام طلب العميل إلى تسليمه تطوير فرق التركيب وادارتها الاشراف على التسليم والتأكد من جودة عملية التركيب التمتع بروح القيادة وحسن إدارة الناس"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {!hideTitle && (
          <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            وظائف <span className="text-secondary">الهيئة</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </motion.div>
        )}

        <div className="space-y-6">
          {functionsList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-secondary/30 transition-all duration-300 group flex flex-col md:flex-row gap-6 items-start md:items-center text-right"
            >
              
              <div className="flex-grow w-full order-2 md:order-1">
                <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h3>
                <h4 className="text-secondary font-semibold text-sm mb-4">{item.subtitle}</h4>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>

              <div className="order-1 md:order-2 flex-shrink-0 mb-4 md:mb-0 w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors duration-300">
                <CheckCircle2 className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionsSection;
