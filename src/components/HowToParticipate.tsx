import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, List, UserPlus } from "lucide-react";

const steps = [
  {
    icon: Globe,
    number: "01",
    title: "Visit Website",
    description: "Navigate to www.nibindia.org to explore all events and details",
  },
  {
    icon: List,
    title: "Choose Category",
    number: "02",
    description: "Select from Junior or Senior categories based on your grade level",
  },
  {
    icon: UserPlus,
    number: "03",
    title: "Register",
    description: "Complete the registration process. Participate in multiple events!",
  },
];

export const HowToParticipate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How to <span className="text-gradient">Participate</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started is simple! Follow these three easy steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
              )}

              <div className="relative bg-card border border-border rounded-2xl p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                {/* Number Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                <div className="mt-4 mb-6 inline-flex p-4 bg-primary/10 rounded-xl">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-8"
        >
          <p className="text-lg text-foreground font-medium mb-2">
            <span className="text-gradient font-bold">Multiple Events?</span> No Problem!
          </p>
          <p className="text-muted-foreground">
            You can participate in multiple events. Choose what excites you and register for all of them!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
