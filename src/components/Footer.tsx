
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="#" className="flex items-center space-x-2 mb-4">
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                <rect width="48" height="48" rx="8" fill="#6366f1"/>
                <path d="M31 15C31 21.6274 25.6274 27 19 27C17.5287 27 16.1264 26.7177 14.8429 26.2051C12.7376 34.7471 22 40 22 40C22 40 10 37 10 25C10 19.4772 14.4772 15 20 15H31Z" fill="white"/>
              </svg>
              <span className="text-xl font-bold text-gray-900">JANA.AI</span>
            </a>
            <p className="text-gray-600 mb-4">Smart AI agents that help businesses automate conversations and customer interactions.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-jana-DEFAULT transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-jana-DEFAULT transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-jana-DEFAULT transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-jana-DEFAULT transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-jana-DEFAULT transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-jana-DEFAULT transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-jana-DEFAULT transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-jana-DEFAULT transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-jana-DEFAULT transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-jana-DEFAULT transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-jana-DEFAULT transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-jana-DEFAULT transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-600 hover:text-jana-DEFAULT transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-jana-DEFAULT transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-jana-DEFAULT transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-jana-DEFAULT transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-jana-DEFAULT transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">© {new Date().getFullYear()} JANA.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
