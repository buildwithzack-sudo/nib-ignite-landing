import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Info, Trophy, Calendar, Award, Mail, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import nibLogo from "@/assets/nib-logo-original.png";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for desktop and mobile navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "#about", icon: Info, subtitle: "What is NIB" },
    { label: "Events", href: "#events", icon: Trophy, subtitle: "Competitions & details" },
    { label: "Timeline", href: "#timeline", icon: Calendar, subtitle: "Roadmap & schedule" },
    { label: "Rewards", href: "#rewards", icon: Award, subtitle: "Prizes up to ₹10,000" },
    { label: "Contact", href: "#contact", icon: Mail, subtitle: "Get in touch" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(`/${href}`);
      }
    } else {
      navigate(href);
    }
  };

  const isRegistrationPage = location.pathname === "/registration";

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/95 backdrop-blur-2xl border-b border-border/80 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div
              className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group select-none"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  navigate("/");
                }
              }}
            >
              <img
                src={nibLogo}
                alt="NIB Logo"
                className="h-9 w-9 sm:h-11 sm:w-11 object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-xl font-bold text-gradient leading-tight">
                  NIB India
                </span>
                <span className="text-[10px] text-muted-foreground tracking-wider font-medium uppercase sm:block">
                  Innovators Battle 2026
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors cursor-pointer py-1"
                >
                  {link.label}
                </button>
              ))}

              {isRegistrationPage ? (
                <Button
                  variant="outline"
                  size="default"
                  className="border-primary/40 hover:bg-primary/10 text-primary font-medium"
                  onClick={() => handleNavClick("#events")}
                >
                  View Events
                </Button>
              ) : (
                <Button
                  variant="default"
                  size="default"
                  className="glow-primary font-medium cursor-pointer"
                  onClick={() => navigate("/registration")}
                >
                  Register Now
                </Button>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-foreground hover:bg-muted/60 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop and Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-16 sm:top-20 bg-background/80 backdrop-blur-md z-40 md:hidden"
            />

            {/* Dropdown Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-16 sm:top-20 left-0 right-0 z-50 md:hidden bg-card/98 backdrop-blur-2xl border-b border-border shadow-2xl max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] overflow-y-auto px-4 py-4 space-y-3"
            >
              <div className="space-y-1.5">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={link.href}
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-background/50 hover:bg-muted active:bg-muted/80 border border-border/40 text-left transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm leading-tight">
                            {link.label}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {link.subtitle}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground/70" />
                    </button>
                  );
                })}
              </div>

              {/* Call to Action Button */}
              <div className="pt-2">
                {isRegistrationPage ? (
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full h-12 border-primary/50 text-primary hover:bg-primary/10 font-semibold text-sm"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate("/");
                    }}
                  >
                    ← Back to Home
                  </Button>
                ) : (
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full h-12 glow-primary font-semibold text-sm flex items-center justify-center gap-2"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate("/registration");
                    }}
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {/* Event Quick Notice */}
              <div className="pt-2 pb-1 border-t border-border/40 text-center">
                <p className="text-[11px] text-muted-foreground">
                  Round 1 Online Deadline: <span className="text-primary font-semibold">26th Oct 2026</span>
                  <br />
                  Grand Finale: <span className="text-secondary font-semibold">29th Nov 2026 (Lucknow)</span>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
