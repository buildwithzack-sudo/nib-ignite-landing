import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Clock, ChevronDown, Trophy } from "lucide-react";
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
          {/* Top Badges: Highlight Cash Prize & Deadline */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6 max-w-full"
          >
            {/* Highlighted 50,000 Cash Prize Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-primary/20 to-secondary/20 border-2 border-amber-400/60 text-foreground text-xs sm:text-sm font-bold shadow-lg shadow-amber-500/10 backdrop-blur-md">
              <Trophy className="w-4 h-4 text-amber-400 shrink-0 animate-bounce" />
              <span>
                Grand Cash Prize: <strong className="text-amber-400 font-extrabold text-sm sm:text-base">₹50,000</strong>
              </span>
            </div>

            {/* Deadline Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold shadow-sm">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>
                Round 1 Deadline: <strong className="text-foreground">22nd Nov 2026</strong>
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6"
          >
            <span className="text-gradient">National Innovators Battle</span>
            <span className="text-3xl sm:text-5xl md:text-6xl text-foreground mt-2 block font-extrabold">2026</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light leading-relaxed px-2"
          >
            A National Platform for Future Innovators in Technology and Robotics
          </motion.p>

          {/* Two-Round Overview Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto mb-8 sm:mb-10 grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 text-left"
          >
            {/* Round 1 Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-card/80 backdrop-blur-md border border-primary/30 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary font-bold text-xs tracking-wider uppercase">
                    Round 1 • Online
                  </span>
                  <span className="text-xs text-primary font-semibold">Results: 25th Nov</span>
                </div>
                <h4 className="font-bold text-foreground text-base mb-1">Online Idea Submission</h4>
                
                {/* Theme Tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/15 border border-primary/25 text-primary text-xs font-semibold my-1.5">
                  <span className="text-muted-foreground font-normal">Theme:</span>
                  <span className="font-bold text-foreground">Society Welfare</span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1">
                  Submit your project idea online by <strong className="text-foreground">22nd November</strong>. Teams are evaluated and selected purely based on their idea.
                </p>
              </div>

              {/* Registration Link and Fee in Rectangular Box */}
              <div className="pt-3 mt-3 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span className="text-xs text-muted-foreground font-medium">
                  Fee: <strong className="text-foreground font-semibold">₹100</strong>
                </span>
                <Button
                  size="sm"
                  className="w-full sm:w-auto h-8 text-xs font-semibold glow-primary cursor-pointer"
                  onClick={() => navigate('/registration')}
                >
                  Register Now
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>

            {/* Round 2 Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-card/80 backdrop-blur-md border border-secondary/30 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary font-bold text-xs tracking-wider uppercase">
                    Round 2 • Physical
                  </span>
                  <span className="text-xs text-secondary font-semibold">Lucknow</span>
                </div>
                <h4 className="font-bold text-foreground text-base mb-1">Grand Finale on 20th Dec</h4>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/15 border border-secondary/25 text-secondary text-xs font-semibold my-1.5">
                  <span className="text-muted-foreground font-normal">Venue:</span>
                  <span className="font-bold text-foreground">Lucknow (LKO)</span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1">
                  Selected teams from Round 1 travel to <strong className="text-foreground">Lucknow on 20th December</strong> to showcase their physical working project.
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                <span>Fee for Shortlisted Finalists:</span>
                <strong className="text-foreground font-semibold">₹1,500</strong>
              </div>
            </div>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-6 mb-8 sm:mb-12 text-muted-foreground text-sm sm:text-base"
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="font-medium">Round 1 Deadline: <span className="text-foreground font-semibold">22nd Nov 2026</span></span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="font-medium">Finale: <span className="text-foreground font-semibold">20th Dec 2026</span></span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
              <span className="font-medium">Lucknow (Physical Event)</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6 relative z-10 w-full max-w-sm sm:max-w-none mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 sm:h-14 text-base sm:text-lg px-8 sm:px-10 glow-primary group font-semibold cursor-pointer"
                onClick={() => {
                  document.getElementById('rewards')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 sm:h-14 text-base sm:text-lg px-8 sm:px-10 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold cursor-pointer"
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
        aria-label="Scroll down to Prizes & Rewards section"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer group p-2 focus:outline-none"
        onClick={() => {
          document.getElementById('rewards')?.scrollIntoView({ behavior: 'smooth' });
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
