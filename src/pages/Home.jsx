import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale, Users, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HistorySection from '../components/HistorySection';
import SecretaryMessageSection from '../components/SecretaryMessageSection';


const HeroSection = () => {
  const stats = [
    { icon: <Scale className="w-5 h-5" />, label: "تحكيم هندسي متخصص" },
    { icon: <Users className="w-5 h-5" />, label: "اتحاد المهندسين العرب" },
    { icon: <Award className="w-5 h-5" />, label: "منذ 2010" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-dark flex items-center pt-24">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-dark to-[#c8953f]/10"></div>
      
      {/* Animated Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-primary blur-[120px] opacity-25"
      />
      <motion.div 
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-[#c8953f] blur-[150px] opacity-15"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative"
          >
            {/* Logo Glow */}
            <div className="absolute inset-0 w-full h-full bg-secondary/20 blur-[60px] rounded-full scale-110"></div>
            <img 
              src="/logo.jpeg" 
              alt="الهيئة العربية للتحكيم الهندسي" 
              className="relative w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
              الهيئة العربية
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">
                للتحكيم الهندسي
              </span>
            </h1>
          </motion.div>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8 max-w-xl"
          >
            إحدى الهيئات التخصصية في اتحاد المهندسين العرب
          </motion.p>

          {/* Stat Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-gray-300 text-sm"
              >
                <span className="text-secondary">{stat.icon}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/vision-and-mission');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo(0, 0);
              }}
              className="group relative px-8 py-4 bg-secondary text-white font-bold rounded-lg overflow-hidden shadow-[0_0_40px_rgba(200,149,63,0.3)] hover:shadow-[0_0_60px_rgba(200,149,63,0.5)] transition-all"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              <span className="relative flex items-center gap-2 justify-center">
                تعرف علينا
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/contact-us');
              window.dispatchEvent(new PopStateEvent('popstate'));
              window.scrollTo(0, 0);
            }} className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg border border-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2">
              تواصل معنا
            </button>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="font-sans text-gray-800 bg-light min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <SecretaryMessageSection />
        <HistorySection />

      </main>

      <Footer />
    </div>
  );
};

export default Home;

