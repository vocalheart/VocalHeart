import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import Contact from "../components/Contact";

export default function Clients() {
  const clients = [
    { name: "Raj Darbar", logoUrl: "https://rdarbar.com/images/logo.png", link: "https://rdarbar.com/" },
    { name: "Ready Mealz", logoUrl: "https://logo.clearbit.com/readymealz.in", link: "https://www.readymealz.in" },
    { name: "TechCorp Global", logo: "TC" },
    { name: "HealthPlus Systems", logo: "HP" },
    { name: "EduLearn Network", logo: "EN" },
    { name: "RetailGiant Inc.", logo: "RG" },
    { name: "Fintech Solutions", logo: "FS" },
    { name: "InnovateTech", logo: "IT" },
  ];

  const testimonials = [
    {
      quote: "Vocal Heart Infotech completely transformed our digital presence. Their team delivered a robust, scalable platform that exceeded all our expectations.",
      author: "Sarah Jenkins",
      role: "CTO, TechCorp Global",
      rating: 5,
    },
    {
      quote: "The digital marketing strategies implemented by Vocal Heart resulted in a massive increase in our online orders and footfall. Highly recommended!",
      author: "Raj Darbar Management",
      role: "Raj Darbar",
      rating: 5,
    },
    {
      quote: "They developed a seamless subscription platform for our tiffin service. The user experience is fantastic, and it has streamlined our daily operations significantly.",
      author: "Ready Mealz Team",
      role: "Ready Mealz",
      rating: 5,
    },
  ];

  return (
    <main className="pt-24">
      {/* Header Section */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Clients
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We are proud to partner with innovative companies across the globe, helping them achieve their digital transformation goals.
          </motion.p>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 mt-4">Join our growing list of satisfied partners.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => {
              const content = (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-brand-50 transition-colors border border-gray-100 h-full"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-brand-600 shadow-sm mb-4 overflow-hidden">
                    {client.logoUrl ? (
                      <img src={client.logoUrl} alt={`${client.name} logo`} className="w-full h-full object-contain p-2" referrerPolicy="no-referrer" />
                    ) : (
                      client.logo
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900">{client.name}</h3>
                </motion.div>
              );

              return client.link ? (
                <a href={client.link} target="_blank" rel="noopener noreferrer" key={index} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
              >
                <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-100" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
