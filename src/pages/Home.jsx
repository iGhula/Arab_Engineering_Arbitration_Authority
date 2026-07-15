import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, Building2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HistorySection from '../components/HistorySection';
import ArbitrationSection from '../components/ArbitrationSection';
import VisionMissionSection from '../components/VisionMissionSection';
import GoalsSection from '../components/GoalsSection';
import CoursesPublicationsSection from '../components/CoursesPublicationsSection';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#04111d] flex items-center pt-24">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b4b7a]/40 via-[#04111d] to-[#c8953f]/10"></div>
      
      {/* Animated Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#0b4b7a] blur-[120px] opacity-30"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-[#c8953f] blur-[150px] opacity-20"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content (Right side in RTL) */}
          <div className="lg:w-1/2 text-right">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-secondary text-sm font-semibold tracking-wider">الريادة في تسوية النزاعات الهندسية</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                الهيئة العربية<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">
                  للتحكيم الهندسي
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light">
                إحدى الهيئات التخصصية الرائدة في اتحاد المهندسين العرب، نضع معايير التميز والاحترافية في فض النزاعات الهندسية والإنشائية منذ عام 2010.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="group relative px-8 py-4 bg-secondary text-white font-bold rounded-lg overflow-hidden shadow-[0_0_40px_rgba(200,149,63,0.3)] hover:shadow-[0_0_60px_rgba(200,149,63,0.5)] transition-all">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                  <span className="relative flex items-center gap-2 justify-center">
                    تعرف علينا
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg border border-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2">
                  تواصل معنا
                </button>
              </div>
            </motion.div>
          </div>

          {/* Visual Elements (Left side in RTL) */}
          <div className="lg:w-1/2 relative w-full h-[500px] hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Premium Glassmorphism Card */}
              <div className="relative w-[400px] h-[450px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-2xl p-8 flex flex-col justify-between overflow-hidden group hover:border-secondary/50 transition-colors duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/40 transition-colors duration-500"></div>
                
                <div className="flex justify-between items-start relative z-10">
                   <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0b4b7a] to-[#04111d] border border-white/10 flex items-center justify-center shadow-lg">
                      <Scale className="w-7 h-7 text-secondary" />
                   </div>
                   <div className="text-right">
                      <span className="block text-secondary font-bold text-2xl">+14</span>
                      <span className="text-gray-400 text-xs">عاما من الخبرة</span>
                   </div>
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="h-2 w-1/3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                      className="h-full bg-secondary"
                    />
                  </div>
                  <h3 className="text-white text-xl font-bold">النزاهة والشفافية</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    نعتمد أفضل الممارسات العالمية لضمان تسوية عادلة وفعالة للنزاعات الهندسية.
                  </p>
                </div>
                

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="font-sans text-gray-800 bg-light min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <HistorySection />
        <ArbitrationSection />
        <GoalsSection preview={true} />
        <CoursesPublicationsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
