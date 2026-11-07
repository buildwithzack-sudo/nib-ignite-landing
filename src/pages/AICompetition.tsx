import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Users, Trophy, AlertCircle, Brain, ArrowRight, Award, Sparkles } from "lucide-react";
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
              <p className="text-sm text-muted-foreground">November 22nd, 2026</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <Trophy className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-semibold mb-1 text-foreground">Round 2 Finale</h3>
              <p className="text-sm text-muted-foreground">December 20th, 2026 (Lucknow)</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-1 text-foreground">Categories & Theme</h3>
              <p className="text-sm text-muted-foreground">Junior (4-7) & Senior (8-12) • Theme: Society Welfare</p>
            </Card>
          </div>

          <Card className="p-6 sm:p-8 mb-8 bg-card border-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Competition Structure</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The competition is conducted across two evaluation stages: online submission of AI models / logic and an in-person finale in Lucknow.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg sm:text-xl mb-1 text-foreground">Round 1 – Online AI Idea Submission (Deadline: Nov 22, Results: Nov 25)</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Teams submit their AI problem statement, dataset approach, and proposed algorithm / prototype online under the theme <strong>"Society Welfare"</strong> (Round 1 Fee: ₹100). Teams are evaluated purely on innovation, ethical AI principles, and community impact.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-bold text-lg sm:text-xl mb-1 text-foreground">Round 2 – Grand Finale in Lucknow (December 20th, 2026)</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Shortlisted teams travel to Lucknow to present and demonstrate their working AI models, applications, or prototypes before national judges and industry mentors (Round 2 Fee: ₹1,500).
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 sm:p-8 mb-8 bg-card border-primary/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>Judgement Matrix</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Overall Judgement Criteria</h2>
              </div>
              <div className="bg-primary/10 border border-primary/20 px-4 py-2 rounded-xl text-right shrink-0">
                <span className="text-xs text-muted-foreground block font-medium">Total Weightage</span>
                <span className="text-2xl font-black text-primary">100 Marks</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              All AI projects are reviewed and scored by the jury panel across the following 7 parameters throughout the competition (governing both Round 1 online shortlisting and the Grand Finale in Lucknow):
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border text-xs sm:text-sm text-foreground/80 font-semibold bg-muted/30">
                    <th className="py-3 px-4">#</th>
                    <th className="py-3 px-4">Evaluation Criteria</th>
                    <th className="py-3 px-4 text-right">Weightage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-xs sm:text-sm">
                  <tr className="hover:bg-muted/20">
                    <td className="py-3.5 px-4 font-semibold text-muted-foreground">01</td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-foreground block">Innovation & Originality</span>
                      <span className="text-xs text-muted-foreground">Novelty of the AI application, algorithmic uniqueness, and distinction from pre-built models.</span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-primary whitespace-nowrap">20 Marks</td>
                  </tr>
                  <tr className="hover:bg-muted/20">
                    <td className="py-3.5 px-4 font-semibold text-muted-foreground">02</td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-foreground block">Social Impact & Public Welfare</span>
                      <span className="text-xs text-muted-foreground">Relevance to the "Society Welfare" theme and meaningful, ethical benefits for community problems.</span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-primary whitespace-nowrap">20 Marks</td>
                  </tr>
                  <tr className="hover:bg-muted/20">
                    <td className="py-3.5 px-4 font-semibold text-muted-foreground">03</td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-foreground block">Problem Identification & Understanding</span>
                      <span className="text-xs text-muted-foreground">Precision in defining the specific societal problem and identifying the target user group.</span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-primary whitespace-nowrap">15 Marks</td>
                  </tr>
                  <tr className="hover:bg-muted/20">
                    <td className="py-3.5 px-4 font-semibold text-muted-foreground">04</td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-foreground block">Practicality & Feasibility</span>
                      <span className="text-xs text-muted-foreground">Realistic dataset availability, inference efficiency, and real-world deployment viability.</span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-primary whitespace-nowrap">15 Marks</td>
                  </tr>
                  <tr className="hover:bg-muted/20">
                    <td className="py-3.5 px-4 font-semibold text-muted-foreground">05</td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-foreground block">Technical Application & Understanding</span>
                      <span className="text-xs text-muted-foreground">Grasp of AI/ML concepts, training logic, pipeline architecture, and tool choice.</span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-primary whitespace-nowrap">10 Marks</td>
                  </tr>
                  <tr className="hover:bg-muted/20">
                    <td className="py-3.5 px-4 font-semibold text-muted-foreground">06</td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-foreground block">Creativity & Problem-Solving Approach</span>
                      <span className="text-xs text-muted-foreground">Clever feature engineering, handling data limitations, and critical AI trade-offs.</span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-primary whitespace-nowrap">10 Marks</td>
                  </tr>
                  <tr className="hover:bg-muted/20">
                    <td className="py-3.5 px-4 font-semibold text-muted-foreground">07</td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-foreground block">Idea Explanation & Presentation</span>
                      <span className="text-xs text-muted-foreground">Clarity, logical structure, and overall presentation of the submitted AI proposal.</span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-primary whitespace-nowrap">10 Marks</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-primary/30 font-bold bg-primary/5">
                    <td className="py-3.5 px-4" colSpan={2}>
                      <span className="text-foreground">Total Cumulative Score</span>
                    </td>
                    <td className="py-3.5 px-4 text-right text-primary text-base">
                      100 Marks
                    </td>
                  </tr>
                </tfoot>
              </table>
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
