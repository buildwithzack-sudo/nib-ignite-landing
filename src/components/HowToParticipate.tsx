import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, CheckCircle2, Trophy, Calendar, MapPin, ArrowRight, Sparkles, Laptop } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stages = [
  {
    stage: "Round 1",
    badge: "Stage 01 • Online",
    badgeColor: "bg-primary/20 text-primary border-primary/30",
    icon: Laptop,
    title: "Online Idea Submission",
    date: "Last Date: 26th October 2026",
    dateIcon: Calendar,
    description:
      "Submit your project idea, problem statement, and proposed technical solution online. Participation is open to all eligible students.",
    keyPoints: [
      "100% online submission",
      "Judged purely on idea merit & innovation",
      "No physical travel required for Round 1",
    ],
    highlight: "Deadline: 26th Oct",
  },
  {
    stage: "Evaluation",
    badge: "Milestone • Announcement",
    badgeColor: "bg-amber-500/20 text-amber-500 border-amber-500/30",
    icon: CheckCircle2,
    title: "Result Declaration",
    date: "1st November 2026",
    dateIcon: Calendar,
    description:
      "The expert evaluation jury reviews all submitted ideas. Shortlisted teams advancing to the physical round in Lucknow will be declared.",
    keyPoints: [
      "Rigorous & fair expert evaluation",
      "Shortlisted teams announced publicly",
      "Official invitations & guidelines issued",
    ],
    highlight: "Results on 1st Nov",
  },
  {
    stage: "Round 2",
    badge: "Stage 02 • Physical Finale",
    badgeColor: "bg-secondary/20 text-secondary border-secondary/30",
    icon: Trophy,
    title: "Grand Finale in Lucknow",
    date: "29th November 2026",
    dateIcon: MapPin,
    description:
      "Selected teams travel to Lucknow to bring their physical working project / prototype for live presentation & demonstration before national judges.",
    keyPoints: [
      "Physical event in Lucknow",
      "Bring & demonstrate working project",
      "Compete for trophies & cash prizes up to ₹10,000",
    ],
    highlight: "Finale: 29th Nov",
  },
];

export const HowToParticipate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="timeline" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Event Roadmap & Format</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Competition <span className="text-gradient">Structure & Flow</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            The competition is conducted in two exciting stages — from online idea evaluation to the grand in-person showdown in Lucknow.
          </p>
        </motion.div>

        {/* 3 Connected Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-6xl mx-auto mb-16">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex flex-col"
            >
              {/* Connector line for desktop */}
              {index < stages.length - 1 && (
                <div className="hidden md:block absolute top-28 left-[calc(100%-1rem)] w-8 h-0.5 bg-gradient-to-r from-primary to-secondary z-0 opacity-40" />
              )}

              <div className="relative bg-card border border-border hover:border-primary/50 rounded-2xl p-7 flex-1 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group">
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${stage.badgeColor}`}>
                      {stage.badge}
                    </span>
                    <span className="text-2xl font-black text-muted-foreground/30 group-hover:text-primary/40 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-5 inline-flex p-3.5 bg-primary/10 group-hover:bg-primary/20 rounded-xl transition-colors">
                    <stage.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title & Date */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">{stage.title}</h3>

                  <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-4">
                    <stage.dateIcon className="w-4 h-4" />
                    <span>{stage.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {stage.description}
                  </p>
                </div>

                {/* Key Points */}
                <div className="pt-4 border-t border-border/60 space-y-2">
                  {stage.keyPoints.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-xs text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Explanation / Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-3xl p-8 md:p-10 bg-gradient-to-br from-card via-card/90 to-background border-2 border-primary/40 shadow-2xl text-center overflow-hidden"
        >
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              How the Selection Process Works
            </h3>

            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Participation begins with the <strong className="text-foreground">online idea submission round</strong> closing on <strong className="text-primary">26th October 2026</strong>. Our evaluation panel will review all ideas and announce the results on <strong className="text-primary">1st November 2026</strong>. Only the selected teams will advance to the second round, which will happen physically in <strong className="text-secondary font-semibold">Lucknow on 29th November 2026</strong>. Selected teams will bring their physical working project to Lucknow to compete for the national title!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="text-base px-8 py-6 glow-primary font-semibold"
                onClick={() => {
                  navigate("/registration");
                  window.scrollTo(0, 0);
                }}
              >
                Submit Your Idea Online
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 border-border hover:bg-muted font-medium"
                onClick={() => {
                  document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Competition Events
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

