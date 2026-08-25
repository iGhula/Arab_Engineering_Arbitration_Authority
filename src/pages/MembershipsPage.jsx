import React, { useEffect } from 'react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { AlertCircle, GraduationCap, Award, FileSignature, Users, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const MembershipsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-dark z-40 shadow-md"></div>
      <Header />
      
      <main className="flex-grow pt-24 relative z-10">
        <PageHero tag="عضويات" title="طلب عضوية الهيئة" />
        
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.05)] border-t-8 border-primary p-8 md:p-12 text-right">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold border border-secondary/20">
                    <FileSignature className="w-4 h-4" />
                    <span>طلب العضوية والهوية</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
                    استمارة الحصول على هوية الهيئة
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
                    يرجى تعبئة النموذج الإلكتروني المعتمد بدقة. كافة البيانات الواردة هي على مسئولية مقدم الطلب، والاسم باللغتين العربية والإنجليزية سيظهر في الهوية طبقاً للمسجل في الاستمارة.
                  </p>
                  <div className="bg-blue-50 text-blue-800 p-4 rounded-xl flex items-start gap-3 border border-blue-100 text-sm font-medium">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>يرجى التأكد من إرفاق جميع المستندات المطلوبة في الاستمارة الإلكترونية لتجنب تأخير معالجة الطلب.</p>
                  </div>
                </div>

                <div className="shrink-0 w-full md:w-auto">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfMpK3KG3X7HBGz-31HO3tpqEi9qEYWn1zxLp9ynhjxiJOLZg/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full md:w-auto px-8 py-5 bg-primary hover:bg-secondary text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span>تعبئة الاستمارة الإلكترونية</span>
                    <FileSignature className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How To Apply Section (Timeline) */}
        <section id="how-to-apply" className="py-24 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Timeline Steps */}
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

              {/* Intro Text */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-2/5 order-1 lg:order-2 text-right sticky top-32 h-fit"
              >
                <h2 className="text-4xl font-bold text-primary mb-6 leading-tight">
                  كيفية التقدم للعضوية <br/> <span className="text-secondary">بالهيئة</span>
                </h2>
                <div className="w-16 h-1 bg-secondary ml-auto mb-8 rounded-full"></div>

              </motion.div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default MembershipsPage;
