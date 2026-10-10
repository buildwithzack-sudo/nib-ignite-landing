import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Users, Trophy, AlertCircle, Brain, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AICompetition() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16">
        <Link to="/">
          <Button variant="ghost" className="mb-6 hover:bg-muted">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs sm:text-sm font-semibold mb-4">
            <Brain className="w-4 h-4" />
            <span>Artificial Intelligence Competition</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            AI Innovation <span className="text-gradient">Challenge</span>
          </h1>

          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Showcase your artificial intelligence capabilities, problem-solving prowess, and machine learning models in a national arena.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <Card className="p-6 bg-card border-border">
              <Calendar className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-1 text-foreground">Round 1 Deadline</h3>
              <p className="text-sm text-muted-foreground">October 26th, 2026</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <Trophy className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-semibold mb-1 text-foreground">Round 2 Finale</h3>
              <p className="text-sm text-muted-foreground">November 29th, 2026 (Lucknow)</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-1 text-foreground">Categories</h3>
              <p className="text-sm text-muted-foreground">Junior (4-7) & Senior (8-12)</p>
            </Card>
          </div>

          <Card className="p-6 sm:p-8 mb-8 bg-card border-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Competition Structure</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The competition is conducted across two evaluation stages: online submission of AI models / logic and an in-person finale in Lucknow.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg sm:text-xl mb-1 text-foreground">Round 1 – Online AI Idea Submission (Deadline: Oct 26, Results: Nov 1)</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Teams submit their AI problem statement, dataset approach, and proposed algorithm / prototype online. Teams are evaluated purely on innovation, ethical AI principles, and impact.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-bold text-lg sm:text-xl mb-1 text-foreground">Round 2 – Grand Finale in Lucknow (November 29th, 2026)</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Shortlisted teams travel to Lucknow to present and demonstrate their working AI models, applications, or prototypes before national judges and industry mentors.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 mb-8 bg-card border-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">General Rules & Guidelines</h2>
            <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Every team must register online through the official registration portal before the deadline.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Projects can include computer vision, natural language processing, predictive analytics, or generative AI applied to real-world problems.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Plagiarism or pre-packaged commercial software passed off as original work will result in disqualification.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Judges' decisions regarding round advancement and winners are final.
              </li>
            </ul>
          </Card>

          <Card className="p-6 sm:p-8 mb-8 bg-card border-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Code of Conduct</h2>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-5 mb-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-destructive mb-1 text-sm sm:text-base">Important Notice</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    All participants are expected to maintain professional conduct, academic integrity, and sportsmanship. Any unauthorized external assistance during on-site evaluations is strictly prohibited.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 bg-primary/5 border-primary">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">Ready to Showcase Your AI Solution?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Register your team today for the AI Innovation Challenge at National Innovators Battle 2026!
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto glow-primary font-semibold"
              onClick={() => {
                navigate("/registration");
                window.scrollTo(0, 0);
              }}
            >
              Register Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
