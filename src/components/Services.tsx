import { motion } from "motion/react";
import {
  Code,
  Megaphone,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Software Development",
    description:
      "We specialize in mobile app and web design, crafting user-friendly, visually appealing, and responsive designs that enhance user engagement and drive business success.",
    icon: Code,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    borderColor: "border-indigo-100",
    hoverBg: "hover:from-indigo-50 hover:to-blue-50",
    href: "/software-development",
  },
  {
    title: "Digital Marketing",
    description:
      "We offer expert Digital Marketing services, including SEO, social media management, PPC, content marketing, and email campaigns, designed to boost online visibility, drive traffic, and enhance brand growth.",
    icon: Megaphone,
    color: "text-rose-600",
    bg: "bg-rose-50",
    borderColor: "border-rose-100",
    hoverBg: "hover:from-rose-50 hover:to-pink-50",
    href: "/digital-marketing",
  },
  {
    title: "Training & Placement",
    description:
      "Our Training & Placement services provide comprehensive skill development and career guidance, preparing candidates for industry challenges. We offer tailored training programs and connect graduates with top employers, ensuring successful placements and career growth.",
    icon: GraduationCap,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    borderColor: "border-emerald-100",
    hoverBg: "hover:from-emerald-50 hover:to-teal-50",
    href: "/training-placement",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section 
      id="services" 
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Gradient blobs */}
        <motion.div
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-100 to-transparent rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-l from-rose-100 to-transparent rounded-full blur-3xl opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-indigo-50 to-rose-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Our Expertise</span>
          </motion.div>

          {/* Main heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            Comprehensive Solutions for Your 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600">
              Business Growth
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg text-gray-600 font-light leading-relaxed"
          >
            We provide end-to-end services designed to accelerate your growth,
            streamline operations, and build a stronger future.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border ${service.borderColor} hover:border-brand-200 shadow-sm hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-300 overflow-hidden`}
            >
              {/* Decorative background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              {/* Content wrapper */}
              <div className="relative z-10">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${service.bg} flex items-center justify-center mb-5 sm:mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.color}`} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-brand-600 transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base font-light">
                  {service.description}
                </p>

                {/* CTA Link */}
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-brand-600 hover:text-brand-700 group/link transition-all duration-300"
                >
                  <span className="relative">
                    Learn more
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 group-hover/link:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>

                {/* Floating accent */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-brand-200 to-transparent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                />
              </div>

              {/* Border glow effect on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-brand-400/10 to-transparent pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
            Ready to transform your business?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-brand-600 hover:to-brand-700 text-white font-semibold rounded-full shadow-lg shadow-gray-900/20 hover:shadow-xl hover:shadow-brand-600/30 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base group"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}