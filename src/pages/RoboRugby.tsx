import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Users, Trophy, AlertCircle, Ruler, Battery, Zap, Swords, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RoboRugby() {
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
          {/* Direct Entry Highlight Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Swords className="w-4 h-4" />
            <span>Direct Finale Entry • No Round 1 Required</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Robo Rugby <span className="text-gradient">(Combat & Goals)</span>
          </h1>

          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Design and construct your battle-ready bot to push, score, and demolish opponents in an electrified rugby combat arena.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <Card className="p-6 bg-card border-border">
              <Calendar className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-semibold mb-1 text-foreground">Registration Deadline</h3>
              <p className="text-sm text-muted-foreground">November 22nd, 2026</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <Trophy className="h-8 w-8 text-amber-400 mb-3" />
              <h3 className="font-semibold mb-1 text-foreground">Grand Finale (Lucknow)</h3>
              <p className="text-sm text-muted-foreground">December 20th, 2026</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <Zap className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-1 text-foreground">Registration Fee</h3>
              <p className="text-sm font-bold text-gradient">₹1,500 (Direct Finale Entry)</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <Users className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-semibold mb-1 text-foreground">Category & Format</h3>
              <p className="text-sm text-muted-foreground">Senior (7-12) • Combat Arena</p>
            </Card>
          </div>

          {/* Direct Entry Notice Callout */}
          <Card className="p-6 sm:p-8 mb-8 bg-amber-500/10 border-2 border-amber-500/30 shadow-lg">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 bg-amber-500/20 rounded-xl text-amber-400 shrink-0">
                <Zap className="h-7 w-7" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-bold text-xl text-foreground">Direct Entry to Grand Finale</h3>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 uppercase">
                    Bypasses Round 1
                  </span>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/40">
                    Fee: ₹1,500
                  </span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Unlike open-theme innovation projects where students formulate unique problem statements, the <strong>Robo Rugby challenge is already standardized</strong> with strict bot dimensions, weight constraints, and arena gameplay. 
                  Therefore, <strong>there is no Round 1 online idea submission</strong>. Interested teams build their bot directly to the official technical specifications and register directly for the Grand Finale in Lucknow on <strong>December 20th, 2026 (Registration Fee: ₹1,500)</strong>!
                </p>
              </div>
            </div>
          </Card>

          {/* How to Participate Structure */}
          <Card className="p-6 sm:p-8 mb-8 bg-card border-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">How to Participate</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg sm:text-xl mb-1 text-foreground flex items-center gap-2">
                  <span>Step 1: Bot Engineering (Pre-Event)</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Build a wired or wireless bot according to the dimensions (max 550×550×650mm) and weight (max 20 kg). Equip your bot with mechanical flippers, cutters, pushers, or weapons for rugby combat.
                </p>
              </div>

              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="font-bold text-lg sm:text-xl mb-1 text-amber-400 flex items-center gap-2">
                  <span>Step 2: Direct Finale Registration (Fee: ₹1,500)</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 uppercase">
                    No Round 1 Screening
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Skip the online idea submission phase. Register your team and bot (Entry Fee: ₹1,500) to secure your official match slot directly for the Lucknow arena.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-bold text-lg sm:text-xl mb-1 text-foreground flex items-center gap-2">
                  <span>Step 3: Arena Battle in Lucknow (December 20th, 2026)</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Undergo technical inspection (dimensions, mobility, battery checks), then clash in head-to-head match rounds for goals, combat points, and national awards!
                </p>
              </div>
            </div>
          </Card>

          {/* Competition Rules */}
          <Card className="p-6 sm:p-8 mb-8 bg-card border-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Competition Rules</h2>
            <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <li className="flex items-start">
                <span className="text-secondary mr-2 font-bold">•</span>
                Teams can make Wired or Wireless bots with or without weapons for playing rugby and battling in the arena.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 font-bold">•</span>
                In the case of wireless bots, any team will be disqualified if they are unable to change their wireless module's frequency (if requested by referee).
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 font-bold">•</span>
                The team that scores maximum points wins: hits/damage/touch (20 points), toppling opponent out of arena (50 points), and goal (100 points).
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 font-bold">•</span>
                Simultaneous bot combat is allowed (any bot can engage the other using approved weapon mechanisms).
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 font-bold">•</span>
                Compensation time and timeouts are given at the discretion of the referee. Break time between rounds is 1–2 minutes.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 font-bold">•</span>
                For wired bots, control wires must be suspended at least 1 meter above the ground to prevent entanglement.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 font-bold">•</span>
                Dead bots are not allowed; if an inactive bot cannot move within the count, the opposing team is awarded the round.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 font-bold">•</span>
                All bots will be checked for responsive mobility at the start of every round.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 font-bold">•</span>
                Claims and protests can be made, but gameplay must not be halted until officially signaled by the referee.
              </li>
            </ul>
          </Card>

          {/* Allowed Combat Actions */}
          <Card className="p-6 sm:p-8 mb-8 bg-primary/5 border-primary">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <Swords className="h-7 w-7 text-primary" />
              Allowed Combat Actions
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Hitting, pushing, kicking, thrashing, or flipping the opponent bot.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Weapon engagement, lifting opponent, or toppling opponent out of the boundary.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Creative mechanical combat actions adhering to non-hazardous weapon rules.</span>
              </li>
            </ul>
          </Card>

          {/* Warnings & Penalties */}
          <Card className="p-6 sm:p-8 mb-8 bg-card border-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Warnings & Penalties</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-xl mb-4 text-secondary">Warnings</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    Bot must not move before the whistle or after the 3, 2, 1 countdown begins.
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    Touching or physical human intervention without referee permission.
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    Referee's decisions on fouls, points, and warnings are final and binding.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 text-destructive">Penalties</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-destructive mr-2 font-bold">⚠</span>
                    A second warning results in a penalty deduction (20 points).
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2 font-bold">⚠</span>
                    Intentionally damaging the arena surface or enclosure results in disqualification.
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2 font-bold">⚠</span>
                    Direct wire cutting of opposing wired bots is strictly prohibited and results in immediate disqualification.
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Arena Specifications */}
          <Card className="p-6 sm:p-8 mb-8 bg-card border-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Arena Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Ruler className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Arena Dimensions</h3>
                  <p className="text-sm text-muted-foreground">The playing arena size is approximately 8ft × 8ft enclosed with side borders and designated goal areas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertCircle className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">Obstacles & Surface</h3>
                  <p className="text-sm text-muted-foreground">The arena surface may include minor terrain challenges and obstacles to test driver agility.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Bot Specifications */}
          <Card className="p-6 sm:p-8 mb-8 bg-card border-border">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Bot Specifications</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2 text-foreground">
                  <Ruler className="h-6 w-6 text-secondary" />
                  Dimensions and Weight
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• The robot must not exceed <strong>550mm × 550mm × 650mm</strong> (length × breadth × height) at any time during gameplay.</li>
                  <li>• Maximum permissible bot weight is <strong>20 kg</strong> (including batteries and on-board weapons).</li>
                  <li>• Teams must declare and present all bots for dimension verification before their first match.</li>
                  <li>• No major alterations to weapon configurations are permitted following initial technical inspection.</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2 text-foreground">
                  <Zap className="h-6 w-6 text-primary" />
                  Weapon Systems
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Robots can be equipped with magnetic arms, mechanical flippers, lifting forks, spinning drums, or cutters adhering to safety bounds:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use of pneumatic or hydraulic systems is permitted.</li>
                  <li>• Pneumatic bots may use pressurized non-flammable gases with a maximum outlet nozzle pressure of 8 bar.</li>
                </ul>
              </div>

              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-bold text-xl mb-3 text-foreground">Mobility</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• All robots must exhibit clearly visible, controlled mobility on the arena surface.</li>
                  <li>• Flying and hopping mechanisms are strictly prohibited.</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2 text-foreground">
                  <Battery className="h-6 w-6 text-primary" />
                  Batteries and Power
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Each team must provide their own on-board power source (backup emergency batteries will be available at the arena).</li>
                  <li>• Battery weight and placement are factored into total bot weight and dimension compliance.</li>
                  <li>• Only sealed, spill-proof batteries (e.g. LiPo, sealed lead-acid, NiMH) are permitted.</li>
                  <li>• The maximum allowed battery voltage is <strong>24V</strong>. No external AC power cords are permitted.</li>
                </ul>
              </div>

              <div className="border-l-4 border-destructive pl-4">
                <h3 className="font-bold text-xl mb-3 text-destructive">Prohibited Equipment</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Liquid projectiles or flammable liquids.</li>
                  <li>• Explosives, pyrotechnics, or flame-based attachments.</li>
                  <li>• AC mains power, generators, or external power cords.</li>
                  <li>• Entanglement devices (nets, adhesive tape, glue, or loose strings).</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Call to Action */}
          <Card className="p-8 bg-gradient-to-r from-amber-500/10 via-secondary/10 to-primary/10 border-2 border-amber-500/40 text-center">
            <Swords className="w-12 h-12 text-amber-400 mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">Ready to Build and Battle?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6 text-sm sm:text-base">
              Start building your combat robot to official specifications today and prepare to battle for national recognition at the Lucknow Grand Finale!
            </p>
            <Button
              size="lg"
              className="text-base px-8 py-6 glow-primary font-semibold"
              onClick={() => {
                document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Link to="/">Back to All Events</Link>
            </Button>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
