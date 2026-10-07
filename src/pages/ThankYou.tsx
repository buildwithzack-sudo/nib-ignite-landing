import { motion } from "framer-motion";
import { CheckCircle, Calendar, MapPin, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-full mb-8"
            >
              <CheckCircle className="w-12 h-12 text-primary" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Registration <span className="text-gradient">Successful!</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Thank you for registering for National Innovators Battle 2026.
              Your registration has been submitted successfully and we'll contact you soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Event Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-6 bg-muted/30 rounded-xl">
                <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Key Dates</h3>
                  <p className="text-sm text-muted-foreground">Results Declaration: <strong className="text-foreground">1st Nov 2026</strong></p>
                  <p className="text-sm text-muted-foreground">Physical Finale: <strong className="text-primary">29th Nov 2026</strong></p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-muted/30 rounded-xl">
                <MapPin className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Finale Venue</h3>
                  <p className="text-foreground font-medium">Lucknow, Uttar Pradesh</p>
                  <p className="text-muted-foreground text-xs">(In-person event for shortlisted teams)</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-primary">What's Next?</h3>
              <ul className="text-muted-foreground space-y-2 text-sm leading-relaxed">
                <li>• <strong>Round 1 Idea Evaluation:</strong> The jury will review all online idea submissions.</li>
                <li>• <strong>Results Announced:</strong> Shortlisted teams will be declared on <strong>1st November 2026</strong>.</li>
                <li>• <strong>Round 2 Finale (Lucknow):</strong> Qualified teams will bring their physical working project to Lucknow on <strong>29th November 2026</strong> for live demonstration.</li>
                <li>• Event guidelines, venue address, and reporting schedules will be sent via email.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 glow-primary group font-semibold"
                onClick={() => navigate('/')}
              >
                <Home className="mr-2 w-5 h-5" />
                Back to Home
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold"
                onClick={() => navigate('/#events')}
              >
                Explore Events
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThankYou;