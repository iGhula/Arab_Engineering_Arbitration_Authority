import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("جاري الإرسال...");
    const formData = new FormData(event.target);

    // TODO: Replace with your actual Web3Forms Access Key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Fetch Error", error);
      setResult("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
    }
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden min-h-[70vh]">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            <span className="text-secondary">تواصل</span> معنا
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-lg">
            نسعد بتواصلكم معنا والإجابة على استفساراتكم. فريقنا جاهز دائماً لتقديم الدعم والمساعدة في كل ما يتعلق بخدمات التحكيم الهندسي.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-right">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white p-8 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 mr-auto">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">العنوان</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                مقر اتحاد المهندسين العرب<br />
                القاهرة، جمهورية مصر العربية
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 mr-auto">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">رقم الهاتف</h3>
              <p className="text-gray-500 leading-relaxed text-sm" dir="ltr">
                +966 50 555 5840
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 mr-auto">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">البريد الإلكتروني</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                info@aeab.sa.com
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-10 rounded-3xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-primary mb-8">أرسل لنا رسالة</h3>
              
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">الاسم الكامل</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-right"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">البريد الإلكتروني</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-right text-left"
                      placeholder="example@domain.com"
                      dir="ltr"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">الموضوع</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-right"
                    placeholder="موضوع الرسالة"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">الرسالة</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-right resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>
                
                <button type="submit" className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
                  <span>إرسال الرسالة</span>
                  <Send className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                </button>
                
                {result && (
                  <p className={`text-center mt-4 font-medium text-sm ${result.includes('بنجاح') ? 'text-green-600' : result.includes('جاري') ? 'text-blue-600' : 'text-red-600'}`}>
                    {result}
                  </p>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
