import { motion } from "motion/react";
import { Zap, ShieldCheck, TrendingUp, Users, Star, Award } from "lucide-react";

const features = [
  {
    title: "Super Fast Performance",
    description:
      "Rapid IT support and optimized solutions, maximizing efficiency and minimizing downtime.",
    icon: Zap,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Outstanding Support",
    description:
      "Expert IT support, troubleshooting, and technical assistance ensuring seamless operations.",
    icon: ShieldCheck,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Proven Growth",
    description:
      "Designed for client growth, our services adhere to quality standards, ensuring efficiency.",
    icon: TrendingUp,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Expert Team",
    description:
      "Backed by a skilled team, we excel in Database Management, Back Office, and Technical Support.",
    icon: Users,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
];

const stats = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "1000+", label: "Happy Clients", icon: Users },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -left-64 w-96 h-96 bg-gradient-to-r from-brand-100 to-transparent rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-32 -right-64 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-brand-50 to-blue-50 border border-brand-100 text-brand-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
            >
              <Star className="w-4 h-4" />
              <span>Why Choose Us?</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              We Bring Innovation and 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600">
                Creative Freedom
              </span>
            </motion.h2>

            {/* Description Paragraphs */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-600 mb-5 sm:mb-6 leading-relaxed font-light"
            >
              Established in 2009 at Bhopal, Madhya Pradesh, India, <span className="font-semibold text-gray-800">Vocal Heart Infotech Private Limited</span> has achieved tremendous success in Database Management, Back Office, Internet Marketing, and Technical Support Services.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed font-light"
            >
              We take pride in our success across diverse domains, offering top-tier software development solutions and result-driven digital marketing strategies. Our training and placement services bridge the gap between job seekers and employers, fostering personal and professional development.
            </motion.p>

            {/* Features Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="group flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white hover:bg-gradient-to-br hover:from-slate-50 hover:to-white border border-gray-100 hover:border-brand-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-0.5">
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{ duration: 0.3 }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${feature.bgColor} flex items-center justify-center transition-all duration-300`}
                    >
                      <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${feature.color}`} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-brand-600 transition-colors duration-300 leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 leading-relaxed transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-gray-200"
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-50 to-blue-50 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <motion.div 
              whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
              className="relative aspect-square rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden shadow-2xl shadow-gray-900/20 border border-white/40"
            >
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern office workspace"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />

              {/* Quote Card - Bottom */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8"
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 md:p-8 text-white hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3 sm:mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 leading-snug">
                    "Excellent performance and career growth guidance."
                  </p>
                  <p className="text-xs sm:text-sm text-white/80 font-medium">— Our Promise</p>
                </div>
              </motion.div>

              {/* Floating accent element */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, 10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-brand-300/30 to-blue-300/30 rounded-full blur-3xl pointer-events-none"
              />
            </motion.div>

            {/* Decorative corner accent */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 20, repeat: Infinity, linear: true }}
              className="absolute -bottom-12 -left-12 w-32 h-32 border-2 border-brand-200/30 rounded-full pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}