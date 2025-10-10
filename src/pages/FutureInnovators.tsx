import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Users, Trophy, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function FutureInnovators() {
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
            Future Innovators <span className="text-gradient">(Junior & Senior)</span>
          </h1>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Card className="p-6">
              <Calendar className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Registration Deadline</h3>
              <p className="text-muted-foreground">November 13th, 2025</p>
            </Card>
            <Card className="p-6">
              <Trophy className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Finale</h3>
              <p className="text-muted-foreground">November 19th, 2025</p>
            </Card>
            <Card className="p-6">
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Categories</h3>
              <p className="text-muted-foreground">Junior (3-6) & Senior (7-12)</p>
            </Card>
          </div>

          <Card className="p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Structure</h2>
            <p className="text-muted-foreground mb-6">
              The competition will be held in two stages followed by the final presentations at National Innovators Battle (NIB).
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl mb-2">Round 1 – Live Project Presentation</h3>
                <p className="text-muted-foreground">
                  Teams describe their problem statement, proposed solution, background, and potential impact at their School event.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-bold text-xl mb-2">Round 2 – Detailed Report & Working Prototype</h3>
                <p className="text-muted-foreground">
                  Shortlisted teams present their project, highlighting the design, functionality, scalability, and viability of their idea.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl mb-2">Final Presentations</h3>
                <p className="text-muted-foreground">
                  Top teams present their solutions at National Innovators Battle before a panel of judges, where the winners will be announced.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">General Rules</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Every team has to register online on the official www.vigyanpathshala.com website or registration link provided at your school for the competition.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                A Team ID will be allocated to the team on registration, which shall be used for future references.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                The decision of the organizers or judges shall be treated as final and binding on all.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                No responsibility will be held by NIB, Prayagraj for any late, lost, or misdirected entries.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Note that at any point in time the latest information will be that which is on the website; however, registered participants will be informed through mail about any changes.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                All modes of official communication will be through the Nation Innovators Battle's (NIB) e-mail; participants are advised to keep track of all folders in their e-mail account.
              </li>
            </ul>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Code of Conduct</h2>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-destructive mb-2">Important Notice</h3>
                  <p className="text-sm text-muted-foreground">
                    Participants, Coaches, and Accompanying persons shall not indulge in behavior and practices that are not aligned with the spirit of the competition. Such actions shall lead to immediate disqualification of the team, immediate removal of all the participants and accompanying persons from the game venue.
                  </p>
                </div>
              </div>
            </div>
            <h3 className="font-bold text-xl mb-4">Prohibited Behaviors Include:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                Misbehaving with any participants, accompanying persons, visitors, organizers, and judges.
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                Causing problems or difficulties for other teams.
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                Disrupting the proceedings and normal flow of the competition.
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                Illegal interaction by the team coach or accompanying person with the student participants when restrictions are in force.
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">✗</span>
                Attempting to illegally support the team by passing a program or solution when restrictions are in force.
              </li>
            </ul>
          </Card>

          <Card className="p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Device & Equipment Rules</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl mb-2">Devices</h3>
                <p className="text-muted-foreground mb-2">
                  Laptops, mobile phones, tablets, USB drive/data transfer devices, hotspots, and other digital devices shall not be allowed to be brought into Arena Hall by the accompanying persons or team coaches.
                </p>
                <p className="text-primary font-semibold">Two Laptops per team are allowed by the participants inside the competition hall.</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-bold text-xl mb-2">No Bags Policy</h3>
                <p className="text-muted-foreground">
                  No bags shall be allowed to be brought into the hall or the pit area by participants, accompanying persons, or team coaches. However, participants can carry their water bottles with them.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-xl mb-2">Laptop Rules</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Team participants will be allowed to carry their robot kits and a maximum of two (2) laptops + chargers (without bag) per participant into the pit area and booths.</li>
                  <li>• Laptops cannot be removed from the pit areas or booths after the surprise rule announcement till the end of the game time.</li>
                  <li>• Laptop swapping with any other team member, coaches, and accompanying persons shall not be allowed.</li>
                  <li>• The laptop should not be connected to the internet. If found connected to the internet, it will lead to disqualification of that particular team.</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-primary/5 border-primary">
            <h2 className="text-2xl font-bold mb-4">Ready to Participate?</h2>
            <p className="text-muted-foreground mb-6">
              Register your team now and showcase your innovative solutions at NIB 2025!
            </p>
            <Button size="lg" className="w-full md:w-auto">
              Register (Coming Soon)
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
