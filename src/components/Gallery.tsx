import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

// Import all gallery images
import event1 from "@/assets/gallery/event-1.jpeg";
import event2 from "@/assets/gallery/event-2.jpeg";
import event3 from "@/assets/gallery/event-3.jpeg";
import event4 from "@/assets/gallery/event-4.jpeg";
import event5 from "@/assets/gallery/event-5.jpeg";
import event6 from "@/assets/gallery/event-6.jpeg";
import event7 from "@/assets/gallery/event-7.jpeg";
import event8 from "@/assets/gallery/event-8.jpeg";
import event9 from "@/assets/gallery/event-9.jpeg";
import event10 from "@/assets/gallery/event-10.jpeg";

const galleryImages = [
  { src: event1, alt: "Robo Rugby competition arena" },
  { src: event2, alt: "NIB event participants with Robo War display" },
  { src: event3, alt: "Robot demonstration at NIB event" },
  { src: event4, alt: "Robo Rugby robots in action" },
  { src: event5, alt: "Line Follower Robot competition arena" },
  { src: event6, alt: "Students participating in robot competition" },
  { src: event7, alt: "Outdoor robot competition arena" },
  { src: event8, alt: "Student teams at NIB event" },
  { src: event9, alt: "Robot racing competition setup" },
  { src: event10, alt: "Teams controlling robots at NIB" },
];

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Past <span className="text-gradient">Events</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Glimpses from previous NIB competitions showcasing innovation, teamwork, and robotics excellence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden border-border bg-card group cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
