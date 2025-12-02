import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Presentation, Trophy, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const events = [
  {
    icon: Presentation,
    title: "Future Innovators",
    category: "Exhibition",
    description: "Platform for innovative students to present ideas in AI and IoT. Create software or hardware-based applications.",
    grades: "Junior (3-6) & Senior (7-12)",
    color: "primary",
    link: "/events/future-innovators",
  },
  {
    icon: Brain,
    title: "AI Competition",
    category: "Artificial Intelligence",
    description: "Showcase your AI skills and knowledge. Compete in challenges that test your understanding of artificial intelligence concepts and applications.",
    grades: "Junior (3-6) & Senior (7-12)",
    color: "secondary",
    link: "/events/ai-competition",
  },
  {
    icon: Trophy,
    title: "Robo Fight",
    category: "Combat & Strategy",
    description: "Witness robots in one-on-one combat. Build innovative weapons and strategies. Wired bots allowed!",
    grades: "Senior (7-12)",
    color: "primary",
    link: "/events/robo-fight",
  },
];

export const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Competition <span className="text-gradient">Events</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from exciting categories designed to challenge your innovation and technical prowess
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={event.link} onClick={() => window.scrollTo(0, 0)}>
                <Card className="group h-full bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden cursor-pointer">
                  <div className={`h-2 bg-gradient-to-r ${event.color === 'primary'
                      ? 'from-primary to-primary/50'
                      : 'from-secondary to-secondary/50'
                    }`} />

                  <div className="p-8">
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <event.icon className={`w-10 h-10 ${event.color === 'primary' ? 'text-primary' : 'text-secondary'
                        }`} />
                    </div>

                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{event.title}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${event.color === 'primary'
                          ? 'bg-primary/20 text-primary'
                          : 'bg-secondary/20 text-secondary'
                        }`}>
                        {event.category}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{event.grades}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center bg-card border border-border rounded-2xl p-8"
        >
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Note:</strong> Participants can register for multiple events.
            Tentative arena details will be uploaded on the website soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);
