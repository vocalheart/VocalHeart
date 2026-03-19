import { motion } from "motion/react";
import { Facebook, Linkedin, Twitter, Instagram, Sparkles } from "lucide-react";

const leaders = [
  {
    name: "Mayank Saxena",
    role: "Founder & CEO",
    bio: "Visionary leader with 15+ years of expertise",
    image:
      "https://vocalheart.com/wp-content/uploads/2024/12/Untitled-design-1.png",
    socials: [
      { name: "Facebook", icon: Facebook, href: "#leadership" },
      { name: "LinkedIn", icon: Linkedin, href: "#leadership" },
      { name: "Twitter", icon: Twitter, href: "#leadership" },
    ],
  },
  {
    name: "Dhruv Saxena",
    role: "Founder & CEO",
    bio: "Strategic innovator driving digital transformation",
    image:
      "https://vocalheart.com/wp-content/uploads/2024/12/463378476_7999892483444296_5819007611463411413_n.png",
    socials: [
      { name: "Facebook", icon: Facebook, href: "#leadership" },
      { name: "LinkedIn", icon: Linkedin, href: "#leadership" },
      { name: "Twitter", icon: Twitter, href: "#leadership" },
      { name: "Instagram", icon: Instagram, href: "#leadership" },
    ],
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

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-r from-brand-100 to-transparent rounded-full blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-l from-blue-100 to-transparent rounded-full blur-3xl opacity-30"
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
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-brand-50 to-blue-50 border border-brand-100 text-brand-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>Our Leadership</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            Meet Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-600">
              Leadership Team
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
            A group of visionary leaders, dedicated to driving innovation, fostering growth, and ensuring excellence in every aspect of our business. With their expertise, passion, and strategic foresight, they guide our company towards achieving new milestones and delivering exceptional value to our clients.
          </motion.p>
        </motion.div>

        {/* Leaders Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-5xl mx-auto"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group flex flex-col items-center"
            >
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 mx-auto mb-6 sm:mb-8 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/20 border-4 sm:border-4 border-white/60 backdrop-blur-sm"
              >
                {/* Image */}
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Icons - Appears on Hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {leader.socials.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <social.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </motion.a>
                  ))}
                </motion.div>

                {/* Decorative accent */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 20, repeat: Infinity, linear: true }}
                  className="absolute -inset-1 rounded-3xl border-2 border-brand-200/30 pointer-events-none group-hover:border-brand-300/50 transition-colors"
                />
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="text-center w-full"
              >
                {/* Name */}
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-brand-600 transition-colors duration-300">
                  {leader.name}
                </h3>

                {/* Role */}
                <p className="text-brand-600 font-semibold uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4">
                  {leader.role}
                </p>

                {/* Bio */}
                <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed max-w-sm mx-auto">
                  {leader.bio}
                </p>

                {/* Stats or Skills (Optional) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  className="mt-5 sm:mt-6 flex gap-3 sm:gap-4 justify-center text-xs sm:text-sm"
                >
                  <div className="px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-medium">
                    15+ Years
                  </div>
                  <div className="px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-medium">
                    Expert Leader
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating accent element */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -z-10 w-full h-full top-8 left-4 bg-gradient-to-br from-brand-200/20 to-transparent rounded-3xl blur-2xl pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-gray-600 mb-6 text-base sm:text-lg font-light">
            Interested in joining our leadership journey?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-brand-600 hover:to-brand-700 text-white font-semibold rounded-full shadow-lg shadow-gray-900/20 hover:shadow-xl hover:shadow-brand-600/30 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base group"
          >
            <span>Get in Touch</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}