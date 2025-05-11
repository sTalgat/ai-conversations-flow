
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle, Smartphone, Globe, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "Website Assistants",
    description: "Engage website visitors with intelligent chat assistants that answer questions and guide users.",
    icon: <Globe className="h-10 w-10" />,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    id: 2,
    title: "Restaurant Reservations",
    description: "Automate table bookings, manage waitlists, and handle special requests without human intervention.",
    icon: <MessageCircle className="h-10 w-10" />,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    id: 3,
    title: "Phone Call Bots",
    description: "Convert phone inquiries into seamless conversations with AI voice assistants that never miss a call.",
    icon: <Smartphone className="h-10 w-10" />,
    color: "bg-green-500/10 text-green-500"
  },
  {
    id: 4,
    title: "WhatsApp Automation",
    description: "Respond instantly to WhatsApp messages with personalized interactions that feel human.",
    icon: <MessageCircle className="h-10 w-10" />,
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    id: 5,
    title: "Facebook Messenger Bots",
    description: "Never miss a Facebook message with intelligent Messenger bots that engage and convert.",
    icon: <Facebook className="h-10 w-10" />,
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    id: 6,
    title: "Instagram DM Automation",
    description: "Handle Instagram inquiries at scale with smart DM responses that maintain your brand voice.",
    icon: <Instagram className="h-10 w-10" />,
    color: "bg-pink-500/10 text-pink-500"
  },
  {
    id: 7,
    title: "Twitter Engagement",
    description: "Respond to tweets and mentions automatically while keeping your Twitter presence active and engaged.",
    icon: <Twitter className="h-10 w-10" />,
    color: "bg-cyan-500/10 text-cyan-500"
  }
];

const Services = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      
      // Check after animation
      setTimeout(checkScroll, 400);
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden icon-bg">
      <MovingDots />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JANA.AI provides a comprehensive suite of AI automation tools for every customer touchpoint
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-end space-x-2 mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`rounded-full ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`rounded-full ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={checkScroll}
          >
            <div className="flex space-x-5 px-1">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="snap-start"
                >
                  <Card className="w-72 border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className={`rounded-full h-16 w-16 flex items-center justify-center ${service.color} mb-5`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-medium mb-3">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MovingDots = () => {
  return (
    <div className="absolute inset-0 z-0">
      {[...Array(10)].map((_, i) => {
        const size = 5 + Math.random() * 10;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = 15 + Math.random() * 15;
        
        return (
          <div
            key={i}
            className="dot animate-flow"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${x}%`,
              top: `${y}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Services;
