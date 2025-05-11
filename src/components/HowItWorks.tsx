
import { motion } from "framer-motion";
import { 
  Workflow, 
  Settings, 
  BarChart3, 
  Upload 
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Connect",
    description:
      "Connect JANA.AI to your business channels including website, social media, and phone systems.",
    icon: Upload,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    title: "Configure",
    description:
      "Customize your AI assistant's responses, personality, and business logic to match your brand.",
    icon: Settings,
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 3,
    title: "Go Live",
    description:
      "Deploy your AI assistant across all channels to start handling customer interactions instantly.",
    icon: Workflow,
    color: "bg-green-100 text-green-600"
  },
  {
    id: 4,
    title: "Track",
    description:
      "Monitor performance metrics and customer satisfaction to continuously improve your AI assistant.",
    icon: BarChart3,
    color: "bg-amber-100 text-amber-600"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden icon-bg">
      <MovingDots />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes it easy to get your AI assistant up and running in no time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-xl p-6 shadow-md border border-gray-100"
            >
              <div className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-jana-DEFAULT/10 flex items-center justify-center text-jana-DEFAULT font-bold">
                {step.id}
              </div>
              <div className={`rounded-full h-14 w-14 flex items-center justify-center ${step.color} mb-5 mt-2`}>
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-medium mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
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

export default HowItWorks;
