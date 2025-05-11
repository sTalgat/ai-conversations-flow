
import { motion } from "framer-motion";
import { Clock, Check, Plug, Layers } from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "24/7 Response",
    description: "Never miss a customer inquiry with round-the-clock availability that human teams can't match.",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    id: 2,
    title: "No Human Error",
    description: "Provide consistent, accurate information every time without the inconsistencies of human agents.",
    icon: <Check className="h-6 w-6" />,
  },
  {
    id: 3,
    title: "Easy to Integrate",
    description: "Connect JANA.AI to your existing tools and platforms with minimal technical knowledge required.",
    icon: <Plug className="h-6 w-6" />,
  },
  {
    id: 4,
    title: "Works Across Platforms",
    description: "Deploy one AI solution across all customer touchpoints - web, mobile, social, and voice.",
    icon: <Layers className="h-6 w-6" />,
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-jana-DEFAULT/5 relative overflow-hidden">
      <MovingDots />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why JANA.AI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI platform offers unique advantages that transform how businesses handle customer communications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex"
            >
              <div className="rounded-full h-12 w-12 bg-jana-DEFAULT flex items-center justify-center text-white shrink-0 mr-5">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-40 w-40 bg-jana-light rounded-full opacity-20"></div>
          <div className="relative">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your customer interactions?</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses already using JANA.AI to provide exceptional service at scale.
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <a 
                  href="#contact" 
                  className="bg-jana-DEFAULT hover:bg-jana-dark text-white font-medium px-8 py-3 rounded-md text-lg inline-block transition-colors"
                >
                  Start Your Free Trial
                </a>
              </motion.div>
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

export default Benefits;
