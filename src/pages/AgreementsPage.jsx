import React, { useEffect } from 'react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import { Handshake, Calendar, Building2, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const agreements = [
  {
    id: 1,
    entity: "المنظمة العربية للتنمية البشرية",
    nature: "اعتماد بروتوكول تعاون مقدّم من المنظمة لإعادة دراسة بنود محددة",
    date: "2013/01/13",
    status: "completed"
  },
  {
    id: 2,
    entity: "المعهد القانوني الدولي للمحكمين الدوليين (CIArb) - لندن",
    nature: "اتفاقية تعاون وتبادل خبرات؛ ترجمة وطباعة النماذج المشتركة",
    date: "أقرت 2017",
    status: "completed"
  },
  {
    id: 3,
    entity: "الأكاديمية الدولية للوساطة والتحكيم",
    nature: "مشاركة الهيئة في فعاليات ودورات الأكاديمية بالقاهرة",
    date: "ديسمبر 2018",
    status: "highlighted"
  },
  {
    id: 4,
    entity: "وزارة التخطيط العراقية",
    nature: "مذكرة تعاون لعقد دورات وورش عمل وندوات في مجال التحكيم الدولي وإعداد محكمين عراقيين معتمدين",
    date: "2018/07/16",
    status: "completed"
  },
  {
    id: 5,
    entity: "مركز التحكيم التجاري لدول مجلس التعاون الخليجي",
    nature: "مذكرة تفاهم للتعاون بين الهيئة والمركز",
    date: "اعتُمدت 2024",
    status: "highlighted"
  },
  {
    id: 6,
    entity: "مركز المحكمين الدوليين",
    nature: "مفاوضات جارية على مسودة اتفاقية تعاون مماثلة لاتفاقية مركز التحكيم الخليجي",
    date: "قيد التفاوض 2024",
    status: "pending"
  }
];

const AgreementsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-light min-h-screen flex flex-col relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-dark z-40 shadow-md"></div>
      <Header />
      
      <main className="flex-grow pt-24 bg-gray-50 relative z-10">
        <PageHero tag="اتفاقيات" title="اتفاقيات ومذكرات التفاهم" />
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">شركاء النجاح والتعاون المشترك</h2>
              <div className="h-1 w-24 bg-secondary mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                تسعى الهيئة العربية للتحكيم الهندسي لتعزيز التعاون المشترك مع مختلف الهيئات والمؤسسات المحلية والدولية لتبادل الخبرات وتطوير آليات التحكيم.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {agreements.map((agreement, index) => (
                <motion.div
                  key={agreement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative overflow-hidden rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col ${
                    agreement.status === 'highlighted' ? 'bg-cyan-50/50' : 'bg-white'
                  }`}
                >
                  {agreement.status === 'highlighted' && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400"></div>
                  )}
                  {agreement.status === 'pending' && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400"></div>
                  )}
                  {agreement.status === 'completed' && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-primary transition-colors"></div>
                  )}

                  <div className="flex items-start justify-between mb-6 border-b border-gray-100 pb-6 gap-4">
                    <div className="flex items-center gap-4 flex-grow">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-colors ${
                        agreement.status === 'highlighted' ? 'bg-cyan-100 text-cyan-700' : 
                        agreement.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-50 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary'
                      }`}>
                        <Building2 className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-dark leading-tight">{agreement.entity}</h3>
                    </div>
                  </div>

                  <div className="flex-grow space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-50 p-2 rounded-lg shrink-0 mt-0.5">
                        <Handshake className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1 font-bold">طبيعة التعاون</p>
                        <p className="text-gray-700 leading-relaxed font-medium">{agreement.nature}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 bg-gray-50 px-4 py-2 rounded-xl">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <span className="font-bold">{agreement.date}</span>
                    </div>

                    <div>
                      {agreement.status === 'completed' && (
                        <div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-3 py-1.5 rounded-lg text-sm font-bold">
                          <CheckCircle2 className="w-4 h-4" /> معتمدة
                        </div>
                      )}
                      {agreement.status === 'highlighted' && (
                        <div className="flex items-center gap-1.5 text-cyan-700 bg-cyan-100 px-3 py-1.5 rounded-lg text-sm font-bold">
                          <Sparkles className="w-4 h-4" /> تعاون استراتيجي
                        </div>
                      )}
                      {agreement.status === 'pending' && (
                        <div className="flex items-center gap-1.5 text-yellow-700 bg-yellow-100 px-3 py-1.5 rounded-lg text-sm font-bold">
                          <Clock className="w-4 h-4" /> قيد التفاوض
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AgreementsPage;
