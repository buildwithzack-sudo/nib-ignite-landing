import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Globe, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nationalinnovatorsbattle@gmail.com",
    href: "mailto:nationalinnovatorsbattle@gmail.com",
    color: "primary",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.nibindia.org",
    href: "https://www.nibindia.org",
    color: "secondary",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 6391214330",
    href: "tel:+91 6391214330",
    color: "primary",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "100 Alopibagh, Allahabad - 211006",
    href: "https://maps.google.com/?q=Alopibagh+Allahabad",
    color: "secondary",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We're here to help! Reach out to us through any of these channels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label === "Website" ? "_blank" : undefined}
              rel={contact.label === "Website" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block"
            >
              <div className="bg-card border border-border rounded-2xl p-6 h-full text-center hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                <div className={`mb-4 inline-flex p-4 rounded-full ${
                  contact.color === 'primary' 
                    ? 'bg-primary/10 group-hover:bg-primary/20' 
                    : 'bg-secondary/10 group-hover:bg-secondary/20'
                } transition-colors`}>
                  <contact.icon className={`w-6 h-6 ${
                    contact.color === 'primary' ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">{contact.label}</h3>
                <p className="text-foreground font-medium break-words">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
          <div className="relative bg-card border-2 border-primary/50 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
              Event Venue
            </h3>
            <p className="text-lg text-foreground font-semibold mb-2">
              Rahi Ilawart Tourist Bungalow Hall
            </p>
            <p className="text-muted-foreground mb-4">
              Civil Lines, Prayagraj, India
            </p>
            <p className="text-muted-foreground mb-6">
              Join us on <span className="text-primary font-semibold">19th November 2025</span> for an unforgettable 
              experience of innovation, competition, and collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.nibindia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Globe className="w-5 h-5" />
                Visit Website
              </a>
              <a
                href="mailto:nationalinnovatorsbattle@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
