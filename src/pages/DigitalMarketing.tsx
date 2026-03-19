import { motion } from "motion/react";
import { Search, Share2, PenTool, Mail, MousePointerClick, ShieldCheck } from "lucide-react";
import Contact from "../components/Contact";

export default function DigitalMarketing() {
  const features = [
    {
      title: "SEO (Search engine optimization)",
      description: "Enhancing brand visibility and engagement across social platforms.",
      icon: Search,
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Targeted ads to drive traffic and increase conversions.",
      icon: MousePointerClick,
    },
    {
      title: "Email Marketing",
      description: "Personalized campaigns to engage and retain customers.",
      icon: Mail,
    },
    {
      title: "Content Marketing",
      description: "Creating valuable content to attract and retain customers.",
      icon: PenTool,
    },
    {
      title: "Online Reputation Management",
      description: "Building and maintaining a positive brand image.",
      icon: ShieldCheck,
    },
    {
      title: "Social Media Marketing",
      description: "Enhancing brand visibility and engagement across social platforms.",
      icon: Share2,
    },
  ];

  return (
    <main className="pt-24">
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Digital Marketing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            At Vocal Heart Infotech, our Digital Marketing services boost your online presence and business growth.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Trust the Experience</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
