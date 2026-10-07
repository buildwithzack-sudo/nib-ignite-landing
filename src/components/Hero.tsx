import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Clock, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20 sm:pb-24">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Last Date Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 shadow-sm"
          >
            <Clock className="w-4 h-4" />
            <span>Round 1: Online Idea Submission • Last Date: 26th October 2026</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="text-gradient">National Innovators Battle</span>
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl text-foreground mt-2 block">2026</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light"
          >
            A National Platform for Future Innovators in Technology and Robotics
          </motion.p>

          {/* Two-Round Overview Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
          >
            <div className="p-4 rounded-2xl bg-card/70 backdrop-blur-md border border-primary/30 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary font-bold text-xs tracking-wider uppercase">
                  Round 1 • Online
                </span>
                <span className="text-xs text-primary font-semibold">Results: 1st Nov</span>
              </div>
              <h4 className="font-bold text-foreground text-base mb-1">Online Idea Submission</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Submit your project idea online by <strong className="text-foreground">26th October</strong>. Teams are evaluated and selected purely based on their idea.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-card/70 backdrop-blur-md border border-secondary/30 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary font-bold text-xs tracking-wider uppercase">
                  Round 2 • Physical
                </span>
                <span className="text-xs text-secondary font-semibold">Lucknow</span>
              </div>
              <h4 className="font-bold text-foreground text-base mb-1">Grand Finale on 29th Nov</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Selected teams from Round 1 travel to <strong className="text-foreground">Lucknow on 29th November</strong> to showcase their physical working project.
              </p>
            </div>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium text-base">Round 1 Deadline: <span className="text-foreground font-semibold">26th Oct 2026</span></span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-medium text-base">Finale: <span className="text-foreground font-semibold">29th Nov 2026</span></span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" />
              <span className="font-medium text-base">Lucknow (Physical Event)</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="text-lg px-10 py-7 glow-primary group font-semibold"
                onClick={() => {
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold"
                onClick={() => navigate('/registration')}
              >
                Register Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Ultra-minimal floating chevron indicator pinned at the very bottom edge */}
      <motion.button
        type="button"
        aria-label="Scroll down to About section"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer group p-2 focus:outline-none"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground/60 group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
};
