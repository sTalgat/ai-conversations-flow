
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                <rect width="48" height="48" rx="8" fill="#6366f1"/>
                <path d="M31 15C31 21.6274 25.6274 27 19 27C17.5287 27 16.1264 26.7177 14.8429 26.2051C12.7376 34.7471 22 40 22 40C22 40 10 37 10 25C10 19.4772 14.4772 15 20 15H31Z" fill="white"/>
              </svg>
              <span className="text-xl font-bold text-gray-900">JANA.AI</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-jana-dark transition-colors">How it Works</a>
            <a href="#services" className="text-gray-600 hover:text-jana-dark transition-colors">Services</a>
            <a href="#benefits" className="text-gray-600 hover:text-jana-dark transition-colors">Why JANA.AI</a>
            <a href="#contact" className="text-gray-600 hover:text-jana-dark transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-jana-dark">Login</Button>
            <Button className="bg-jana-DEFAULT hover:bg-jana-dark text-white">Sign Up</Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-jana-DEFAULT"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-jana-DEFAULT hover:bg-gray-50">How it Works</a>
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-jana-DEFAULT hover:bg-gray-50">Services</a>
            <a href="#benefits" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-jana-DEFAULT hover:bg-gray-50">Why JANA.AI</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-jana-DEFAULT hover:bg-gray-50">Contact</a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5 space-x-2">
                <Button variant="ghost" className="w-full justify-center">Login</Button>
                <Button className="w-full justify-center bg-jana-DEFAULT hover:bg-jana-dark text-white">Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
