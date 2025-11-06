import { motion } from "motion/react";
import { MessageCircle, Instagram, Phone } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1587132164684-cfd0b8214d8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBwaWVjZXMlMjBwcmVtaXVtfGVufDF8fHx8MTc2MjQ1MzM4Mnww&ixlib=rb-4.1.0&q=80&w=1080')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            جاهز <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">لتجربة فريدة</span>؟
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12">
            اطلب الآن واستمتع بأفضل شوكولاتة بلجيكية في مصر 🍫
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-2xl shadow-green-500/50 flex items-center gap-3 text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              <span>واتساب</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-2xl shadow-pink-500/50 flex items-center gap-3 text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
              <span>إنستجرام</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full shadow-2xl shadow-amber-500/50 flex items-center gap-3 text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              <span>اتصل بنا</span>
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl"
          >
            <p className="text-white/80 text-lg leading-relaxed">
              🎁 <span className="text-amber-400">عروض خاصة</span> على الطلبات الكبيرة
              <br />
              🚚 <span className="text-amber-400">توصيل سريع</span> لجميع أنحاء القاهرة
              <br />
              💝 <span className="text-amber-400">تغليف هدايا فاخر</span> مجاناً
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
