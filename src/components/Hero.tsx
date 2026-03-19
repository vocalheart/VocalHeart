import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full pt-20 pb-16 sm:pt-28 md:pt-32 lg:pt-48 md:pb-24 lg:pb-32 overflow-hidden"
    >
      {/* Background Elements with better responsiveness */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white">
        {/* Animated blob 1 */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 sm:top-0 sm:right-0 w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] bg-gradient-to-br from-brand-100 to-blue-100 rounded-full blur-3xl opacity-40 lg:opacity-50"
        />
        {/* Animated blob 2 */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-32 -left-32 sm:bottom-0 sm:left-0 w-96 h-96 sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-tr from-blue-100 to-slate-100 rounded-full blur-3xl opacity-40 lg:opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-8 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-brand-50 to-blue-50 border border-brand-100 text-brand-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 w-fit hover:shadow-md transition-shadow"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-600"></span>
              <span>Empowering Enterprises</span>
            </motion.div>

            {/* Main Heading - Better responsive */}
            <motion.h1 
              variants={itemVariants} 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-[1.15] lg:leading-[1.1]"
            >
              Innovation and 
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-blue-500 to-cyan-500">
                Creative Freedom
              </span>
            </motion.h1>

            {/* Description Text */}
            <motion.p 
              variants={itemVariants} 
              className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-xl font-light"
            >
              Vocal Heart Infotech provides complete solutions to help you build your career and business with confidence and innovation.
            </motion.p>

            {/* CTA Buttons - Better mobile layout */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-gray-900 to-gray-800 hover:from-brand-600 hover:to-brand-700 rounded-full transition-all duration-300 shadow-lg shadow-gray-900/20 hover:shadow-xl hover:shadow-brand-600/30 group hover:-translate-y-1"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-900 bg-white border-2 border-gray-200 hover:border-brand-300 hover:bg-brand-50 rounded-full transition-all duration-300 hover:shadow-lg group"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-brand-600 fill-brand-600 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </Link>
            </motion.div>

            {/* Stats/Reviews Section */}
            <motion.div 
              variants={itemVariants} 
              className="mt-8 sm:mt-10 flex flex-col xs:flex-row gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="font-medium">1000+ Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="font-medium">5/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual/Image Side - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative w-full h-auto max-w-lg mx-auto lg:mx-0 mt-8 lg:mt-0"
          >
            {/* Main Image Container */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-brand-900/20 border border-white/40 bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaborating"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge - Bottom Left */}
              <motion.div
                variants={badgeVariants}
                initial="hidden"
                animate="show"
                className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl shadow-gray-900/15 border border-gray-100 flex items-center gap-3 sm:gap-4 backdrop-blur-sm"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold text-lg sm:text-xl">
                    15+
                  </span>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                    Years Experience
                  </p>
                  <p className="text-xs text-gray-500">Since 2009</p>
                </div>
              </motion.div>

              {/* Decorative corner accent */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, linear: true }}
                className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-brand-200 to-blue-200 rounded-full blur-2xl opacity-30 pointer-events-none"
              />
            </motion.div>

            {/* Floating accent element */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="hidden lg:block absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-brand-300/30 to-blue-300/30 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-1 h-32 bg-gradient-to-b from-brand-300 to-transparent opacity-0 lg:opacity-20 pointer-events-none" />
    </section>
  );
}