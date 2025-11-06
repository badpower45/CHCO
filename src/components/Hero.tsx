import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import logo from "figma:asset/17b5d1b868fd6daa6c5881e6c3409d4acf1ca5ff.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1613190924590-1e3d8f222269?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2hvY29sYXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjI0NTMzODN8MA&ixlib=rb-4.1.0&q=80&w=1080')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-pink-500/20 animate-pulse"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <img 
              src={logo} 
              alt="O.A Chocolate Logo" 
              className="w-40 h-40 md:w-56 md:h-56 mx-auto drop-shadow-2xl" 
            />
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tight">
              O.A <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-pink-500 bg-clip-text text-transparent">Chocolate</span>
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
              <p className="text-amber-400 tracking-[0.3em] uppercase text-sm md:text-base">Premium Belgian</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            تجربة فاخرة من الشوكولاتة البلجيكية الأصلية
            <br />
            <span className="text-amber-300">Callebaut</span> - طبيعية 100% بدون بدائل
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
            >
              اطلب الآن 🍫
            </button>
            <button 
              onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              اعرف أكثر
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
