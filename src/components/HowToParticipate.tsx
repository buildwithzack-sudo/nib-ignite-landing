import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, CheckCircle2, Trophy, Calendar, MapPin, ArrowRight, Sparkles, Laptop, Swords, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stages = [
  {
    stage: "Round 1",
    badge: "Stage 01 • Online",
    badgeColor: "bg-primary/20 text-primary border-primary/30",
    icon: Laptop,
    title: "Online Idea Submission",
    date: "Last Date: 22nd November 2026",
    dateIcon: Calendar,
    description:
      "Submit your project idea, problem statement, and proposed technical solution online under the theme 'Society Welfare'. Participation is open to all eligible students.",
    keyPoints: [
      "Theme: Society Welfare",
      "Round 1 Fee: ₹100 per team",
      "100% online idea submission",
      "Judged purely on idea merit & innovation",
    ],
    highlight: "Deadline: 22nd Nov",
  },
  {
    stage: "Evaluation",
    badge: "Milestone • Announcement",
    badgeColor: "bg-amber-500/20 text-amber-500 border-amber-500/30",
    icon: CheckCircle2,
    title: "Result Declaration",
    date: "25th November 2026",
    dateIcon: Calendar,
    description:
      "The expert evaluation jury reviews all submitted ideas. Shortlisted teams advancing to the physical round in Lucknow will be declared.",
    keyPoints: [
      "Rigorous & fair expert evaluation",
      "Shortlisted teams announced publicly",
      "Official invitations & guidelines issued",
    ],
    highlight: "Results on 25th Nov",
  },
  {
    stage: "Round 2",
    badge: "Stage 02 • Physical Finale",
    badgeColor: "bg-secondary/20 text-secondary border-secondary/30",
    icon: Trophy,
    title: "Grand Finale in Lucknow",
    date: "Form Deadline: 17th Dec • Finale: 20th Dec 2026",
    dateIcon: Calendar,
    description:
      "Selected teams complete form filling by 17th December and travel to Lucknow to bring their physical working project / prototype for live presentation & demonstration before national judges.",
    keyPoints: [
      "Form Filling Last Date: 17th December 2026",
      "Grand Finale Event: 20th December 2026 (Lucknow)",
      "Round 2 Fee: ₹1,500 (for shortlisted teams)",
      "Robo Rugby teams enter directly (No Round 1 needed)",
      "Compete for trophies & ₹50,000 cash prizes",
    ],
    highlight: "Form Deadline: 17th Dec • Finale: 20th Dec",
  },
];

const evaluationCriteria = [
  {
    sn: 1,
    title: "Innovation & Originality",
    marks: "20 Marks",
    description: "Novelty of the concept, unique perspective, and creative distinction from existing solutions.",
  },
  {
    sn: 2,
    title: "Social Impact & Public Welfare",
    marks: "20 Marks",
    description: "Alignment with the 'Society Welfare' theme, direct positive community benefit, and meaningful real-world utility.",
  },
  {
    sn: 3,
    title: "Problem Identification & Understanding",
    marks: "15 Marks",
    description: "Clarity in defining the root problem, depth of background research, and identification of affected stakeholders.",
  },
  {
    sn: 4,
    title: "Practicality & Feasibility",
    marks: "15 Marks",
    description: "Viability of implementation, realistic resource requirements, and ease of deployment in real-world scenarios.",
  },
  {
    sn: 5,
    title: "Technical Application & Understanding",
    marks: "10 Marks",
    description: "Sound grasp and practical application of relevant technologies, hardware, software, sensors, or algorithms.",
  },
  {
    sn: 6,
    title: "Creativity & Problem-Solving Approach",
    marks: "10 Marks",
    description: "Ingenuity in overcoming technical challenges, thoughtful design trade-offs, and critical problem-solving.",
  },
  {
    sn: 7,
    title: "Idea Explanation & Presentation",
    marks: "10 Marks",
    description: "Structure, clarity, persuasiveness, and coherence of the written idea submission and technical description.",
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

        {/* Round 1 Judgement & Evaluation Criteria */}
        <motion.div
          id="judgement-criteria"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="scroll-mt-28 mb-16 max-w-5xl mx-auto"
        >
          <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-border/70">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
                  <Award className="w-3.5 h-3.5" />
                  <span>Jury Scoring Matrix</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Overall Judgement Criteria
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-2xl">
                  All projects are evaluated objectively by our expert jury across these 7 core parameters throughout the competition — from Round 1 idea shortlisting to the Grand Finale live demonstration in Lucknow.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3 bg-primary/10 border border-primary/20 px-5 py-3 rounded-2xl">
                <div className="text-right">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">Total Weightage</div>
                  <div className="text-2xl font-black text-primary">100 Marks</div>
                </div>
              </div>
            </div>

            {/* Criteria Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {evaluationCriteria.map((item) => (
                <div
                  key={item.sn}
                  className="p-4 sm:p-5 rounded-2xl bg-background/60 border border-border/80 hover:border-primary/40 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                        {item.sn}
                      </span>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <span className="shrink-0 px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary font-bold text-xs whitespace-nowrap">
                      {item.marks}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground pl-8">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom summary note */}
            <div className="mt-6 pt-4 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Theme Focus: <strong>"Society Welfare"</strong> carries high weightage (Social Impact & Innovation = 40% combined).</span>
              </span>
              <span className="text-foreground/70 font-medium">Applies to Round 1 & Grand Finale (20th Dec 2026)</span>
            </div>
          </div>
        </motion.div>

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

            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              Participation begins with the <strong className="text-foreground">online idea submission round</strong> closing on <strong className="text-primary">22nd November 2026</strong> under the theme <strong className="text-foreground">"Society Welfare"</strong> (Round 1 Fee: ₹100). Our evaluation panel will review all ideas and announce the results on <strong className="text-primary">25th November 2026</strong>. Only the selected teams advance to Round 2 (Round 2 Fee: ₹1,500). Finalist teams must complete their registration form by <strong className="text-amber-500">17th December 2026</strong> and participate physically in <strong className="text-secondary font-semibold">Lucknow on 20th December 2026</strong>, bringing their physical working project to compete for the national title and ₹50,000 cash prizes!
            </p>

            <div className="max-w-2xl mx-auto mb-8 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left flex items-start gap-3 shadow-sm">
              <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                <Swords className="w-5 h-5" />
              </span>
              <div>
                <h4 className="font-bold text-foreground text-sm sm:text-base flex items-center gap-2">
                  <span>Fast-Track for Robo Rugby</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase">
                    Direct Finale Entry
                  </span>
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                  Since Robo Rugby bot dimensions and arena match rules are standardized, participants <strong>bypass the Round 1 online idea submission</strong>. Build your bot to specifications and participate directly in the Lucknow Grand Finale on 20th December (Registration Fee: ₹1,500)!
                </p>
              </div>
            </div>

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

