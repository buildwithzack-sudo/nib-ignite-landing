import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Presentation, Brain, Swords } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const events = [
  {
    icon: Presentation,
    title: "Future Innovators",
    category: "Exhibition",
    badge: "Theme: Society Welfare",
    badgeColor: "bg-primary/20 text-primary border-primary/30",
    description: "Platform for innovative students to present ideas in AI and IoT. Create software or hardware applications solving societal challenges.",
    grades: "Junior (4-7) & Senior (8-12)",
    color: "primary",
    link: "/events/future-innovators",
  },
  {
    icon: Brain,
    title: "AI Innovation Challenge",
    category: "Artificial Intelligence",
    badge: "Theme: Society Welfare",
    badgeColor: "bg-secondary/20 text-secondary border-secondary/30",
    description: "Showcase your AI skills and knowledge. Compete in challenges testing machine learning concepts, computer vision, and predictive models.",
    grades: "Junior (4-7) & Senior (8-12)",
    color: "secondary",
    link: "/events/ai-competition",
  },
  {
    icon: Swords,
    title: "Robo Rugby",
    category: "Combat & Arena",
    badge: "Direct Finale Entry • No Round 1",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/40",
    description: "Build wired or wireless combat bots to battle in the arena and score goals. Bot specs are pre-defined — bypass Round 1 and compete directly in Lucknow (Fee: ₹1,500)!",
    grades: "Senior (7-12) • Fee: ₹1,500",
    color: "amber",
    link: "/events/robo-rugby",
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
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Competition <span className="text-gradient">Events</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Choose from exciting categories designed to challenge your innovation and technical prowess
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={event.link} onClick={() => window.scrollTo(0, 0)}>
                <Card className="group h-full bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between">
                  <div>
                    <div className={`h-2 bg-gradient-to-r ${
                      event.color === 'primary'
                        ? 'from-primary to-primary/50'
                        : event.color === 'secondary'
                        ? 'from-secondary to-secondary/50'
                        : 'from-amber-400 to-amber-600'
                    }`} />

                    <div className="p-7">
                      <div className="flex items-center justify-between mb-5">
                        <div className={`inline-flex p-3.5 rounded-xl ${
                          event.color === 'primary'
                            ? 'bg-primary/10 text-primary group-hover:bg-primary/20'
                            : event.color === 'secondary'
                            ? 'bg-secondary/10 text-secondary group-hover:bg-secondary/20'
                            : 'bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20'
                        } transition-colors`}>
                          <event.icon className="w-8 h-8" />
                        </div>

                        {event.badge && (
                          <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${event.badgeColor}`}>
                            {event.badge}
                          </span>
                        )}
                      </div>

                      <div className="mb-3">
                        <h3 className="text-2xl font-bold mb-1.5 text-foreground">{event.title}</h3>
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          event.color === 'primary'
                            ? 'bg-primary/20 text-primary'
                            : event.color === 'secondary'
                            ? 'bg-secondary/20 text-secondary'
                            : 'bg-amber-500/20 text-amber-400'
                        }`}>
                          {event.category}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-7 pb-6 pt-0 border-t border-border/40 mt-auto flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5 pt-3">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.grades}</span>
                    </div>
                    <span className="text-primary font-semibold pt-3 group-hover:translate-x-1 transition-transform">
                      Learn More →
                    </span>
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
          className="mt-12 text-center bg-card border border-border rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto"
        >
          <p className="text-base sm:text-lg text-muted-foreground">
            <strong className="text-foreground">Note:</strong> Participants can register for multiple events. For Robo Rugby, bots compete directly in the Lucknow Arena without requiring Round 1 online idea evaluation.
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
