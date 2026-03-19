import { motion } from "motion/react";
import { GraduationCap, Briefcase, TrendingUp } from "lucide-react";
import Contact from "../components/Contact";

export default function TrainingPlacement() {
  const sections = [
    {
      title: "1. Why Choose Our Training Program?",
      description: "Our comprehensive curriculum is designed by industry experts to provide hands-on experience with the latest technologies. We focus on practical skills that employers demand.",
      icon: GraduationCap,
    },
    {
      title: "2. Placement Assistance.",
      description: "We offer dedicated placement support, including resume building, interview preparation, and direct connections with our network of hiring partners.",
      icon: Briefcase,
    },
    {
      title: "3. Transform your career today.",
      description: "Take the first step towards a rewarding career. Join our training programs and unlock new opportunities in the tech industry.",
      icon: TrendingUp,
    },
  ];

  return (
    <main className="pt-24">
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Training & Placement
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our Training & Placement services provide comprehensive skill development and career guidance, preparing candidates for industry challenges.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Empowering Students with Industry-Ready Skills</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe in bridging the gap between academic knowledge and industry expectations. Our Big Data and Cloud Computing Training Program is meticulously designed to equip students with in-demand technical skills, real-world project experience, and expert mentorship to thrive in today’s competitive job market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  <section.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
