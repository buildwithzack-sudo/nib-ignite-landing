import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Users, Trophy, AlertCircle, Ruler, Battery, Zap, Swords } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function RoboRugby() {
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
            Robo Rugby <span className="text-gradient">(Combat & Goals)</span>
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
                  Teams present their RoboRugby bot at their School event.
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
                Team can make Wired and Wireless bot with or without weapon for playing Rugby with their bots.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                In wireless case - Any team will be disqualified if they are unable to change their wireless module's frequency (if asked to do so).
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                The team which scores maximum points: hits/damage/touch (20 points), toppling out of arena (50 points), and goal (100 points), will be declared as winner.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Robo war is also allowed simultaneously (i.e., any bot can fight with any other using any means).
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
                In case of wired bot, wires must be 1m above from ground.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Timeouts will be at the discretion of the referee.
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                Dead bots are not allowed, opponents team will be considered as winner.
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

          <Card className="p-8 mb-8 bg-primary/5 border-primary">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Swords className="h-8 w-8 text-primary" />
              Allowed Combat Actions
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2 text-xl">✓</span>
                Hitting OR Kicking OR Thrashing OR Flipping the other bot.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-xl">✓</span>
                Completely demolishing any other bot.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 text-xl">✓</span>
                Anything else that you can imagine!!!
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
                    Second warning is a penalty (20 points).
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">⚠</span>
                    Bots (striker + defender both) playing in the penalty should have played in the match.
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">⚠</span>
                    Intentionally damaging the arena will lead to disqualification of team.
                  </li>
                  <li className="flex items-start">
                    <span className="text-destructive mr-2">⚠</span>
                    Wire cutting of opposite is not allowed. Will lead to disqualification.
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Arena Specifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Ruler className="h-8 w-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Arena Size</h3>
                  <p className="text-muted-foreground">The arena size would be 8ft × 8ft approximately.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertCircle className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Obstacles</h3>
                  <p className="text-muted-foreground">Arena may have some hurdles.</p>
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
                  <li>• The robot should not be more than 550mm × 550mm × 650mm (length × breadth × height) in size at any time during gameplay.</li>
                  <li>• Bot can be of at-most 20 Kg.</li>
                  <li>• Teams have to show and declare ALL of their bots before their first match itself.</li>
                  <li>• No major changes in the weapon system etc. would be allowed after the above mentioned declaration.</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  Weapons System
                </h3>
                <p className="text-muted-foreground mb-3">
                  Robots can have any kind of magnetic weapons, cutters, flippers, saws, lifting devices, spinning hammers etc. as weapons along with:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Use of pneumatics and hydraulics are allowed.</li>
                  <li>• Pneumatics Robot can use pressurized non-inflammable gases to actuate pneumatic devices. Maximum allowed outlet nozzle pressure is 8 bar.</li>
                </ul>
              </div>

              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-bold text-xl mb-3">Mobility</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• All robots must have easily visible and controlled mobility in order to compete.</li>
                  <li>• Flying is not allowed.</li>
                  <li>• Hopping is not allowed.</li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <Battery className="h-6 w-6 text-primary" />
                  Batteries and Power
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Each team must have batteries to power their bots (Note: backup battery will be provided by NIB at arena to the teams in case of emergency).</li>
                  <li>• The battery will be taken into consideration for the measurement to be made for the machine dimension and the weight.</li>
                  <li>• The only permitted batteries are ones that cannot spill or spray any of their contents when damaged or inverted.</li>
                  <li>• The maximum allowed battery voltage is 24 volts. No external power supply will be provided.</li>
                </ul>
              </div>

              <div className="border-l-4 border-destructive pl-4">
                <h3 className="font-bold text-xl mb-3 text-destructive">Prohibited Items</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Liquid projectiles.</li>
                  <li>• Any kind of inflammable liquid or Explosive.</li>
                  <li>• Flame-based weapons, and Flammable liquids.</li>
                  <li>• Any kind of AC power (Generators or Inverters).</li>
                  <li>• Nets, tape, glue, or any other entanglement device.</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-secondary/5 border-secondary">
            <h2 className="text-2xl font-bold mb-4">Ready to Participate?</h2>
            <p className="text-muted-foreground mb-6">
              Build your combat bot and compete at NIB 2025!
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
