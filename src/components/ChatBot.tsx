
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hi there! 👋 I'm JANA, your AI assistant. How can I help you today?",
      isBot: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      content: inputValue,
      isBot: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help you with that!",
        "That's a great question. JANA.AI can definitely assist with automated customer interactions.",
        "Thanks for your interest! Would you like to know more about our services?",
        "I can help you set up a demo of our AI assistant. Would you like that?",
        "Our AI can integrate with various platforms including websites, WhatsApp, and social media."
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage = {
        id: messages.length + 2,
        content: randomResponse,
        isBot: true
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Chat toggle button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className={`flex items-center justify-center w-14 h-14 rounded-full bg-jana-DEFAULT shadow-lg hover:bg-jana-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jana-DEFAULT ${
            isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
          style={{ transition: "all 0.3s ease-in-out" }}
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Chat header */}
            <div className="bg-jana-DEFAULT p-4 text-white flex justify-between items-center">
              <div className="flex items-center">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2">
                  <rect width="48" height="48" rx="8" fill="white" fillOpacity="0.2"/>
                  <path d="M31 15C31 21.6274 25.6274 27 19 27C17.5287 27 16.1264 26.7177 14.8429 26.2051C12.7376 34.7471 22 40 22 40C22 40 10 37 10 25C10 19.4772 14.4772 15 20 15H31Z" fill="white"/>
                </svg>
                <div>
                  <div className="font-medium">JANA AI Assistant</div>
                  <div className="text-xs text-white/80">Online | Typically replies in a minute</div>
                </div>
              </div>
              <button 
                onClick={toggleChat}
                className="text-white/80 hover:text-white focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isBot
                        ? "bg-white text-gray-800 shadow-sm border border-gray-100"
                        : "bg-jana-DEFAULT text-white"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <div className="p-3 border-t border-gray-200">
              <div className="flex rounded-lg border border-gray-200 overflow-hidden focus-within:ring-1 focus-within:ring-jana-DEFAULT focus-within:border-jana-DEFAULT">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 py-2 px-3 focus:outline-none text-sm"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-jana-DEFAULT hover:bg-jana-dark text-white m-1 px-3"
                  size="sm"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-xs text-center mt-2 text-gray-400">
                Powered by JANA.AI
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
