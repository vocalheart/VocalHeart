import { motion } from "motion/react";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

// Local image import (Vite me allowed hai)
import DhruvSaxenaImage from "../../public/DhruvSaxena.png";
import MayankSaxenaImage from "../../public/Mayank.png";

const leaders = [
  {
    name: "Mayank Saxena",
    role: "Founder & CEO",
    bio: "Visionary leader with 15+ years of expertise",
    image: MayankSaxenaImage,
    socials: [
      { name: "Facebook", icon: Facebook, href: "#" },
      { name: "LinkedIn", icon: Linkedin, href: "#" },
      { name: "Twitter", icon: Twitter, href: "#" },
    ],
  },
  {
    name: "Dhruv Saxena",
    role: "Founder & CEO",
    bio: "Strategic innovator driving digital transformation",
    image: DhruvSaxenaImage,
    socials: [
      { name: "Facebook", icon: Facebook, href: "#" },
      { name: "LinkedIn", icon: Linkedin, href: "#" },
      { name: "Twitter", icon: Twitter, href: "#" },
      { name: "Instagram", icon: Instagram, href: "#" },
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
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Leadership() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Meet Our <span className="text-blue-600">Leadership Team</span>
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-10"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              {/* Image FIX */}
              <div className="w-64 h-64 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold">{leader.name}</h3>

              {/* Role */}
              <p className="text-blue-600 font-semibold">{leader.role}</p>

              {/* Bio */}
              <p className="text-gray-600 mt-2">{leader.bio}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4">
                {leader.socials.map((social, i) => (
                  <a key={i} href={social.href}>
                    <social.icon className="w-5 h-5 hover:text-blue-600 transition" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}