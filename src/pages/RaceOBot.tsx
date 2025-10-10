import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Users, Trophy, AlertCircle, Ruler, Battery, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function RaceOBot() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Race-O-Bot <span className="text-gradient">(Robo Race)</span>
          </h1>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Card className="p-6">
              <Calendar className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-semibold mb-2">Registration Deadline</h3>
              <p className="text-muted-foreground">November 13th, 2025</p>
            </Card>
            <Card className="p-6">
              <Trophy className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-semibold mb-2">Finale</h3>
              <p className="text-muted-foreground">November 19th, 2025</p>
            </Card>
            <Card className="p-6">
              <Users className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-semibold mb-2">Categories</h3>
              <p className="text-muted-foreground">Senior (7-12)</p>
            </Card>
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Structure</h2>
            <p className="text-muted-foreground mb-6">
              The competition will be held in two stages followed by the final presentations at National Innovators Battle (NIB), 2025.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-bold text-xl mb-2">Round 1 – Live Project Presentation</h3>
                <p className="text-muted-foreground">
                  Teams present their Race-O-Bot at their School event.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl mb-2">Round 2 – Working Prototype</h3>
                <p className="text-muted-foreground">
                  Shortlisted teams with working prototypes will proceed to Final for competition at National Innovators Battle before a panel of judges, where the winners will be announced.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Competition Rules</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Team can make Wireless or Mobile controlled bots for playing Race-O-Bot.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                In wireless case - Any team will be disqualified if they are unable to change their wireless module's frequency (if asked to do so).
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                The team with minimum time taken out of 2 runs after adding penalty time will be declared as winner.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                On every touch, 5 seconds will be added to final timing (e.g., if a team takes 2 min with 3 touches, total timing will be 135 seconds or 2 min 15 sec).
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Compensation time will be given at the discretion of referee.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                The break time would be 1-2 minutes.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Timeouts will be at the discretion of the referee.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Dead bots are not allowed.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                All bots will be checked at the start of every round that they are moving.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Claiming is allowed but none should stop the game till referee stops the game.
              </li>
            </ul>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Warnings & Penalties</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-xl mb-4 text-secondary">Warnings</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    Bot must not move before the whistle and after the 3, 2, 1 count begins.
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    Touching (any kind of interruption) the bot without asking referee.
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                    In case of any discrepancy, referee's decisions would be final.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4 text-destructive">Penalties</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">⚠</span>
                    Second warning is a penalty (+10 sec).
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">⚠</span>
                    Intentionally damaging the arena will lead to disqualification of team.
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Arena Specifications</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Ruler className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Arena Width</h3>
                  <p className="text-muted-foreground">The arena width will be 1ft to 1.5ft approximately.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertCircle className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Arena Length</h3>
                  <p className="text-muted-foreground">The arena length will be disclosed at the time of event.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Zap className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Obstacles</h3>
                  <p className="text-muted-foreground">Arena will have some hurdles (like inclination, curves, etc.).</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Bot Specifications</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <Ruler className="h-6 w-6 text-secondary" />
                  Dimensions and Weight
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• The robot should not be more than 250mm × 250mm × 300mm (length × breadth × height) in size at any time during gameplay.</li>
                  <li>• Bot can be of at-most 5 Kg.</li>
                  <li>• Teams have to show and declare ALL of their bots before their first match itself.</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl mb-3">Mobility</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• All robots must have easily visible and controlled mobility in order to compete.</li>
                  <li>• Flying is not allowed.</li>
                </ul>
              </div>

              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <Battery className="h-6 w-6 text-secondary" />
                  Batteries and Power
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Each team must have batteries to power their bots (Note: backup battery will be provided by NIB at arena to the teams in case of emergency).</li>
                  <li>• The battery will be taken into consideration for the measurement to be made for the machine dimension and the weight.</li>
                  <li>• The only permitted batteries are ones that cannot spill or spray any of their contents when damaged or inverted.</li>
                  <li>• The maximum allowed battery voltage is 12 volts. No external power supply will be provided.</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-secondary/5 border-secondary">
            <h2 className="text-2xl font-bold mb-4">Ready to Participate?</h2>
            <p className="text-muted-foreground mb-6">
              Build your Race-O-Bot and compete at NIB 2025!
            </p>
            <Button size="lg" variant="secondary" className="w-full md:w-auto">
              Register (Coming Soon)
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
