import { motion } from "motion/react";
import Leadership from "../components/Leadership";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function About() {
  return (
    <main className="pt-24">
      {/* About Header */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Welcome to Vocal Heart Infotech Private Limited.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Who Are We</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Vocal Heart Infotech, established in 2009 in Bhopal, is a leading IT solutions company. We specialize in Data Management, Internet Marketing, and Technical Support, serving global clients in Banking, Insurance, and Telecom sectors. Our mission is to deliver excellence through innovation and quality.
              </p>

              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                In a rapidly changing market, our mission is to provide quality training and placement opportunities to rural and urban youth, enhancing individual and societal living standards. Our flexible modular structure empowers participants to develop computer-based skills at their own pace.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-3xl"
            >
              <h2 className="text-3xl font-bold mb-6">What We Do</h2>
              <ul className="space-y-4">
                {[
                  "Software Development",
                  "Digital Marketing",
                  "Training & Placement",
                  "Tech Support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Leadership />
      <Services />
      <Contact />
    </main>
  );
}
