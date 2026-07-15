import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, Calendar, BookOpen, Users, GraduationCap, Award, FileSignature, Landmark, Building } from 'lucide-react';

const QualifyingProgramsSection = ({ hideTitle = true }) => {
  const dummyTextIntro = "المستهدفون بهذا البرنامج هم جميع أطراف العقد مثل المالك، المهندس، المقاول، العاملين في إدارة العقود، والمسؤولون عن حل المنازعات في العقود. ويتم في هذا البرنامج تدريب المشاركين على ما يلي :";
  
  const dummyList = [
    "استعمال وصياغة العقود النمطية",
    "فهم التزامات اطراف العقد",
    "تعلم كيفية تحليل وإدارة المطالبات والاوامر التغييرية",
    "التعرف على الوسائل البديلة لفض النزاع",
    "مجلس فض النزاع - تشكيله واجراءاته وصولا لاصدار قرار المجلس وطريقة انفاذه.",
    "تعلم أحكام وقواعد التحكيم",
    "الالمام بأنواع التحكيم وإجراءاته وصولاً لإصدار القرار التحكيمي.",
    "التعرف على دور القضاء في اجراءات وقضايا التحكيم",
    "تأثير السجلات المعاصرة والتقادم في التحكيم"
  ];

  const cards = [
    {
      title: "منهج التدريب",
      desc: "المستهدفون بهذا البرنامج هم جميع أطراف العقد مثل المالك ، المهندس ، المقاول",
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
      anchor: "#curriculum"
    },
    {
      title: "جدول مواعيد الدورات",
      desc: "المستهدفون بهذا البرنامج هم جميع أطراف العقد مثل المالك ، المهندس ، المقاول",
      icon: <Calendar className="w-8 h-8 text-secondary" />,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
      anchor: "#schedule"
    },
    {
      title: "كيفية الاشتراك في عضوية الهيئة",
      desc: "المستهدفون بهذا البرنامج هم جميع أطراف العقد مثل المالك ، المهندس ، المقاول",
      icon: <Users className="w-8 h-8 text-secondary" />,
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
      anchor: "#how-to-apply"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "الحصول على الشهادات الأكاديمية والخبرة العملية",
      desc: "يجب أن تكون مهندساً حاصلاً على شهادة جامعية في الهندسة أو في تخصص ذي صلة. من المهم أن تكون لديك سنوات كافية من الخبرة العملية في مجال الهندسة (غالباً ما تكون 10 سنوات أو أكثر).",
      icon: <GraduationCap className="w-6 h-6 text-white" />
    },
    {
      num: "02",
      title: "الحصول على دورات تدريبية متخصصة في التحكيم",
      desc: 'يجب أن تلتحق بدورات تدريبية متخصصة في مجال التحكيم الهندسي. تقدم بعض المنظمات والمؤسسات المعترف بها عالمياً مثل "مركز التحكيم التجاري الدولي" أو "جمعية المهندسين" دورات معتمدة في التحكيم الهندسي.',
      icon: <Award className="w-6 h-6 text-white" />
    },
    {
      num: "03",
      title: "اجتياز الامتحان التحريري",
      desc: "يجب أن تجتاز امتحاناً تحريرياً في مجال التحكيم الهندسي، ويهدف هذا الامتحان إلى تقييم مدى إلمامك بالمفاهيم النظرية والإجراءات العملية المرتبطة بالتحكيم. تُنظم هذه الامتحانات من قبل الجهات المعنية وتُعد من المتطلبات الأساسية لاعتمادك كمحكم معتمد.",
      icon: <FileSignature className="w-6 h-6 text-white" />
    },
    {
      num: "04",
      title: "الانضمام إلى جمعيات مهنية",
      desc: 'يُفضل أن تكون عضواً في جمعية مهنية للهندسة أو جمعية معترف بها في مجال التحكيم مثل "الجمعية المصرية للمهندسين" أو "جمعية التحكيم الهندسي الدولي".',
      icon: <Users className="w-6 h-6 text-white" />
    },
    {
      num: "05",
      title: "التسجيل في هيئات التحكيم الهندسي",
      desc: "بعد إتمام الدورات التدريبية، يمكن التقدم للتسجيل في هيئة تحكيم معترف بها. في مصر مثلاً، يمكنك التقدم للجنة التحكيم الهندسي التابعة لنقابة المهندسين أو هيئة التحكيم الهندسي الدولي.",
      icon: <Landmark className="w-6 h-6 text-white" />
    }
  ];

  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[45vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04111d]/95 via-[#0b4b7a]/80 to-[#04111d]/90"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-5 py-1.5 rounded-full bg-white/10 text-secondary border border-secondary/30 backdrop-blur-md text-sm font-bold tracking-wider"
          >
            البرامج التأهيلية
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 drop-shadow-2xl"
          >
            دورة التحكيم الهندسي
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-32 h-1.5 bg-secondary mx-auto rounded-full shadow-[0_0_15px_rgba(202,138,4,0.5)]"
          ></motion.div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 -mt-24 relative z-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-8 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-4">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{card.desc}</p>
                  <a 
                    href={card.anchor}
                    onClick={(e) => scrollTo(e, card.anchor)}
                    className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-2 rounded-lg font-bold transition-colors duration-300"
                  >
                    معرفة المزيد
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {!hideTitle && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary">منهج التدريب</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          </motion.div>
        )}

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" alt="Training" className="rounded-3xl shadow-2xl w-full" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-right"
            >
              <h3 className="text-3xl font-bold text-primary mb-6">برنامج تأهيل وإعداد <span className="text-secondary">المحكمين</span></h3>
              <p className="text-gray-500 leading-relaxed mb-8">{dummyTextIntro}</p>
              
              <ul className="space-y-4">
                {dummyList.map((item, idx) => (
                  <li key={idx} className="flex items-start justify-end gap-3 text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <span className="text-sm font-medium pt-0.5">{item}</span>
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary">جدول مواعيد الدورات</h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 text-right order-2 lg:order-1"
            >
              <h3 className="text-3xl font-bold text-primary mb-6">التقدم <span className="text-secondary">للتأهيل</span> بالهيئة</h3>
              <p className="text-gray-500 leading-relaxed mb-8">{dummyTextIntro}</p>
              
              <ul className="space-y-4">
                {dummyList.map((item, idx) => (
                  <li key={idx} className="flex items-start justify-end gap-3 text-gray-600 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                    <span className="text-sm font-medium pt-0.5">{item}</span>
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-1 lg:order-2 relative"
            >
              {/* Decorative block from screenshot */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary z-0"></div>
              <div className="absolute -bottom-8 right-40 w-24 h-24 bg-primary z-0"></div>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Applying" className="rounded-xl shadow-2xl w-full relative z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How To Apply Section (Timeline) */}
      <section id="how-to-apply" className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Timeline Steps (Left side visually, standard rendering) */}
            <div className="w-full lg:w-3/5 order-2 lg:order-1">
              <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[50%] lg:before:ml-auto lg:before:mr-[27px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent text-right">
                
                {steps.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative flex items-start justify-end gap-6 group"
                  >
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-md group-hover:border-primary/20 transition-all w-full lg:w-[calc(100%-80px)] text-right">
                      <h4 className="text-xl font-bold text-primary mb-3">{step.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg relative z-10 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                        {step.icon}
                      </div>
                      <div className="mt-2 text-primary font-black text-xl opacity-20">{step.num}</div>
                    </div>
                  </motion.div>
                ))}

              </div>
            </div>

            {/* Intro Text (Right side visually) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/5 order-1 lg:order-2 text-right sticky top-32 h-fit"
            >
              <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">
                كيفية التقدم للتأهيل <br/> <span className="text-secondary">بالهيئة</span>
              </h2>
              <div className="w-16 h-1 bg-secondary ml-auto mb-8 rounded-full"></div>
              <p className="text-gray-500 leading-relaxed text-lg">
                المستهدفون بهذا البرنامج هم جميع أطراف العقد مثل المالك ، المهندس ، المقاول ، العاملين في إدارة العقود ، والمسؤولون عن حل المنازعات في العقود. ويتم في هذا البرنامج تدريب المشاركين على ما يلي :
              </p>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default QualifyingProgramsSection;
