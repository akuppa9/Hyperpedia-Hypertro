import React, { useState } from 'react';
import Chatbot from './Chabot';

const ChatbotPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={togglePopup}
        className="w-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-bold rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Chat with Hypertro
      </button>
      <div
        className={`fixed bottom-16 right-4 w-80 transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="mb-4 rounded-sm border border-gray-300 shadow-lg">
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default ChatbotPopup;
