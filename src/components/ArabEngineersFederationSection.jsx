import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Users, Briefcase, FileSignature, ExternalLink } from 'lucide-react';

const ArabEngineersFederationSection = () => {

  return (
    <div className="bg-white min-h-screen">
      
      {/* Premium Hero Section */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[45vh]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920" alt="Arab Engineers Federation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-primary/80 to-dark/90"></div>
        </div>
        
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-8 drop-shadow-2xl"
          >
            إتحاد المهندسين العرب
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
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0"></div>
              
              <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=800" alt="Construction Collaboration" className="rounded-2xl shadow-2xl w-full relative z-10" />
              
              {/* Floating Decorative Badge */}
              <div className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-xl z-20 border-t-4 border-secondary hidden md:block">
                <div className="w-16 h-16 bg-primary/5 rounded-lg flex items-center justify-center">
                  <img src="/eee.jpeg" alt="Icon" className="w-12 h-12 object-contain rounded-lg" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-right"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                نبذة عن <span className="text-secondary">إتحاد المهندسين العرب</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8 text-justify">
                إن اتحاد المهندسين العرب هو منظمة هندسية عربية توحد الأهداف والعمل المستقبلي والتعاون لكل المهندسين العرب. التعاون والتنسيق هو الهدف الرئيسي للاتحاد الهندسي العربي ولغرض زيادة حالة المهندسين العرب ومهنتهم بخدمة المجتمع العربي وقضاياه المختلفة سواء إن كانت علمياً ، تكنولوجياً أو تعليمياً وخدمة هدف الأمة العربية في بناء وحدتها ، والاستقلال السياسي والاقتصادي.
              </p>
              <a 
                href="https://arabfedeng.org/%d8%b9%d9%86-%d8%a7%d9%84%d8%a7%d8%aa%d8%ad%d8%a7%d8%af/"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-secondary transition-colors duration-300 group"
              >
                <span>إذهب إلى الموقع</span>
                <ExternalLink className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              كيف تم <span className="text-secondary">تأسيس</span> الإتحاد
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-10"></div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-justify max-w-4xl mx-auto">
              <p>
                منذ ان عقد المؤتمر الهندسي الأول فى الاسكندرية خلال الفترة من 15 الى 18 اذار (مارس ) 1945 بدعوة من جمعية المهندسين المصرية بالأسكندرية كان الشعور قويا و عاماً بأهمية تأسيس اتحاد يضم النقابات و الجمعيات و الهيئات الهندسية العربية فى كيان واحد متين وكانت أولى المحطات الأساسية هى تشكيل لجنة تحضيرية دائمة للمؤتمرات الهندسية فى المشرق العربى تضم ممثلين عن جميع أقطار المشرق العربى وذلك كما جاء فى ديباجة مقررات وتوصيات المؤتمر الهندسى العربى الثانى والذى عقد فى القاهرة عام 1946م وظل الشعور يتجدد مع إنعقاد كل مؤتمر هندسى عربى ، دون ان تتخذ الخطوات التنفيذية اللازمة لمثل هذا التأسيس الى ان عقد المؤتمر الهندسى العربى السابع فى بيروت خلال شهر آب (اغسطس ) 1959 بدعوة من نقابة المهندسين فى لبنان ، ففى تلك الاونة كانت جهود تكوين نقابات للمهندسين قد تنشطت فى معظم الدول العربية ، وكذلك جهود انشاء جمعيات للمهندسين بالدول العربية التى لم يصل عدد المهندسين بها الى الحد الكافى لتكوين نقابات ، وكان بعضها قد تم تأسيسه وقت انعقاد المؤتمر السابع ، والباقى فى طريق التأسيس .
              </p>
              <p>
                وبعد عقد هذا المؤتمر ، تلقت الامانة العامة للجنة الدائمة للمؤتمرات اقتراحا من المهندس اديب الجادر نقيب المهندسين العراقيين عام 1961 بتكوين اتحاد المهندسين العرب ، وكلفت نقابة المهندسين العراقيين بالتقدم بمشروع النظام الاساسى للاتحاد وفعلا قدم نقيب المهندسين العراقيين وقتئذ المشروع الذى تكونت لدراسته لجنة من ممثلين لكل من العراق وسوريا ومصر ، وذلك قبل عرضه على اللجنة الدائمة للمؤتمرات التى عقدت إجتماعات متتالية فى آذار (مارس) و تموز (يوليو) عام 1962 بيروت وفى آذار (مارس) عام 1963 بالقاهرة حضرتها وفود من كل من الاردن و العراق و الكويت وسوريا ولبنان و مصر ، حيث تم وضع النظام الأساسى للاتحاد فى صيغته النهائية .
              </p>
            </div>
          </motion.div>
        </div>
      </section>



    </div>
  );
};

export default ArabEngineersFederationSection;
