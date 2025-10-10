import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { Rewards } from "@/components/Rewards";
import { HowToParticipate } from "@/components/HowToParticipate";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Gallery />
      <Rewards />
      <HowToParticipate />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
