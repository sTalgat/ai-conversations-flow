
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 relative overflow-hidden icon-bg">
      <MovingDots />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Born to <span className="text-jana-DEFAULT">automate</span>.<br />
              Built to <span className="text-jana-DEFAULT">connect</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Smart AI agents that help businesses automate conversations, reservations, and customer interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-jana-DEFAULT hover:bg-jana-dark text-white font-medium px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-jana-DEFAULT text-jana-DEFAULT hover:bg-jana-light/20">
                See Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-jana-DEFAULT/20 to-jana-secondary/20 rounded-xl blur-3xl"></div>
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-6 bg-jana-DEFAULT/5">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-jana-DEFAULT flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31 15C31 21.6274 25.6274 27 19 27C17.5287 27 16.1264 26.7177 14.8429 26.2051C12.7376 34.7471 22 40 22 40C22 40 10 37 10 25C10 19.4772 14.4772 15 20 15H31Z" fill="white"/>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium text-gray-900">JANA Assistant</h3>
                      <p className="text-sm text-gray-500">Online now</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                      <p className="text-sm">Hello! How can I help you today with your restaurant reservations?</p>
                    </div>
                    <div className="bg-jana-DEFAULT/10 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto">
                      <p className="text-sm">Hi, I'd like to book a table for 4 people tomorrow at 7 PM</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                      <p className="text-sm">Perfect! I've checked availability and can confirm a table for 4 tomorrow at 7 PM. Would you like me to complete this reservation for you?</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-1 focus:outline-none text-sm"
                    />
                    <button className="text-jana-DEFAULT">
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
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
      {[...Array(15)].map((_, i) => {
        // Random size between 5-15px
        const size = 5 + Math.random() * 10;
        
        // Random positions
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random animation duration between 15-30s
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

export default Hero;
