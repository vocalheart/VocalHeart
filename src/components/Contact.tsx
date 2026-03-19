import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Mail, Phone, Send, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: (
        <>
          Plot N. 3, Third Floor, Bajaj Tower,
          <br />
          Raisen Rd, Lala Lajpat Rai Colony,
          <br />
          Bhopal, Madhya Pradesh 462023
        </>
      ),
      href: "#location",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "vocalheart.tech@gmail.com",
      href: "mailto:vocalheart.tech@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "07554937509",
      href: "tel:07554937509",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        {/* Animated blobs */}
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-64 w-96 h-96 bg-gradient-to-r from-brand-600/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-64 w-96 h-96 bg-gradient-to-l from-blue-600/30 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Header */}
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
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 border border-white/20 text-brand-300 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get in Touch</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Empowering Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-blue-400 to-cyan-400">
              Digital Journey
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg text-gray-400 font-light leading-relaxed"
          >
            Innovation at its core! Send us a message and let's discuss how we can help your business grow and achieve new heights.
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6 sm:space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="group flex items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-600/20 group-hover:shadow-2xl group-hover:shadow-brand-600/40 transition-all duration-300`}
                  >
                    <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-brand-300 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-200 leading-relaxed transition-colors duration-300 break-words">
                      {info.content}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-brand-300" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            {/* Form Container */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/20 backdrop-blur-xl hover:border-white/30 transition-all duration-300">
              {/* Decorative glow */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-0.5 bg-gradient-to-r from-brand-500/20 to-blue-500/20 rounded-2xl sm:rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              />

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <motion.div
                    onFocus={() => setFocusedField("firstName")}
                    onBlur={() => setFocusedField(null)}
                  >
                    <label
                      htmlFor="firstName"
                      className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3 uppercase tracking-wider"
                    >
                      First Name
                    </label>
                    <motion.input
                      type="text"
                      id="firstName"
                      required
                      animate={{
                        borderColor:
                          focusedField === "firstName"
                            ? "#60a5fa"
                            : "rgba(255, 255, 255, 0.1)",
                        boxShadow:
                          focusedField === "firstName"
                            ? "0 0 20px rgba(96, 165, 250, 0.3)"
                            : "none",
                      }}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                      placeholder="John"
                    />
                  </motion.div>

                  <motion.div
                    onFocus={() => setFocusedField("lastName")}
                    onBlur={() => setFocusedField(null)}
                  >
                    <label
                      htmlFor="lastName"
                      className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3 uppercase tracking-wider"
                    >
                      Last Name
                    </label>
                    <motion.input
                      type="text"
                      id="lastName"
                      required
                      animate={{
                        borderColor:
                          focusedField === "lastName"
                            ? "#60a5fa"
                            : "rgba(255, 255, 255, 0.1)",
                        boxShadow:
                          focusedField === "lastName"
                            ? "0 0 20px rgba(96, 165, 250, 0.3)"
                            : "none",
                      }}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                      placeholder="Doe"
                    />
                  </motion.div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <motion.div
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  >
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3 uppercase tracking-wider"
                    >
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      required
                      animate={{
                        borderColor:
                          focusedField === "email"
                            ? "#60a5fa"
                            : "rgba(255, 255, 255, 0.1)",
                        boxShadow:
                          focusedField === "email"
                            ? "0 0 20px rgba(96, 165, 250, 0.3)"
                            : "none",
                      }}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                  >
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3 uppercase tracking-wider"
                    >
                      Phone
                    </label>
                    <motion.input
                      type="tel"
                      id="phone"
                      required
                      animate={{
                        borderColor:
                          focusedField === "phone"
                            ? "#60a5fa"
                            : "rgba(255, 255, 255, 0.1)",
                        boxShadow:
                          focusedField === "phone"
                            ? "0 0 20px rgba(96, 165, 250, 0.3)"
                            : "none",
                      }}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                      placeholder="+91 98765 43210"
                    />
                  </motion.div>
                </div>

                {/* Subject */}
                <motion.div
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                >
                  <label
                    htmlFor="subject"
                    className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3 uppercase tracking-wider"
                  >
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    required
                    animate={{
                      borderColor:
                        focusedField === "subject"
                          ? "#60a5fa"
                          : "rgba(255, 255, 255, 0.1)",
                      boxShadow:
                        focusedField === "subject"
                          ? "0 0 20px rgba(96, 165, 250, 0.3)"
                          : "none",
                    }}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 text-sm sm:text-base"
                    placeholder="How can we help?"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                >
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2 sm:mb-3 uppercase tracking-wider"
                  >
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    rows={4}
                    required
                    animate={{
                      borderColor:
                        focusedField === "message"
                          ? "#60a5fa"
                          : "rgba(255, 255, 255, 0.1)",
                      boxShadow:
                        focusedField === "message"
                          ? "0 0 20px rgba(96, 165, 250, 0.3)"
                          : "none",
                    }}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Your message here..."
                  ></motion.textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 font-semibold py-4 sm:py-5 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all duration-300 text-sm sm:text-base mt-6 sm:mt-8 ${
                    isSent
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/30"
                      : "bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-700 hover:to-blue-700 shadow-lg shadow-brand-600/30 hover:shadow-xl hover:shadow-brand-600/40"
                  }`}
                >
                  <motion.div
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: isSent ? 2 : 0, repeat: Infinity }}
                    className="flex items-center gap-2"
                  >
                    <span>{isSent ? "Message Sent Successfully" : "Send Message"}</span>
                    {isSent ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </motion.div>
                </motion.button>

                {/* Success Message */}
                <AnimatePresence>
                  {isSent && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-200 text-sm sm:text-base font-medium text-center"
                    >
                      ✓ Thank you! We'll get back to you within 24 hours.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}