import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Lightbulb, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Next-Gen Technology",
    description: "Promoting cutting-edge innovation in AI, IoT, and Robotics",
  },
  {
    icon: Lightbulb,
    title: "Future Innovation",
    description: "Platform for engineering and science students to conduct research",
  },
  {
    icon: Trophy,
    title: "National Platform",
    description: "Recognized center of innovation with competitive events",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Connect with bright minds and showcase technical skills",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What is <span className="text-gradient">NIB</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            NIB is a National-Level platform for engineering and science students to conduct research 
            of the highest standard. Recognized as a center of innovation, we promote next-gen 
            technology, future innovation, and forward-thinking solutions while opening doors to the 
            world of Robo-games.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center bg-card border border-border rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
            Annual Regional Technical Fest
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            National Innovators Battle organizes an annual event where bright minds come together 
            and showcase their creativity along with their technical skills. Join us for an 
            unforgettable experience of innovation and competition.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
