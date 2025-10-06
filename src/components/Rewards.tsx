import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Gift } from "lucide-react";

const rewards = [
  {
    icon: Trophy,
    title: "Cash Prizes",
    amount: "₹5,000 - ₹10,000",
    description: "Substantial cash rewards for winners across all categories",
    color: "primary",
  },
  {
    icon: Medal,
    title: "Medals",
    description: "Gold, Silver, and Bronze medals for top performers",
    color: "secondary",
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Recognition certificates for all participants and winners",
    color: "primary",
  },
  {
    icon: Gift,
    title: "Special Recognition",
    description: "Additional awards for innovation and creativity",
    color: "secondary",
  },
];

export const Rewards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="rewards" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Prizes & <span className="text-gradient">Rewards</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Compete for exciting rewards and recognition at the national level
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <div className={`mb-6 inline-flex p-5 rounded-full ${
                  reward.color === 'primary' 
                    ? 'bg-primary/10 group-hover:bg-primary/20' 
                    : 'bg-secondary/10 group-hover:bg-secondary/20'
                } transition-colors`}>
                  <reward.icon className={`w-10 h-10 ${
                    reward.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{reward.title}</h3>
                {reward.amount && (
                  <p className="text-2xl font-bold text-gradient mb-3">{reward.amount}</p>
                )}
                <p className="text-muted-foreground text-sm leading-relaxed">{reward.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
          <div className="relative bg-card border-2 border-primary/50 rounded-3xl p-8 md:p-12 text-center">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Win Big at NIB 2025!
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Every participant receives a certificate of participation. Winners take home cash prizes, 
              medals, and the pride of national recognition. Multiple awards across different categories!
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Fair Judging</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>Multiple Categories</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>National Recognition</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
