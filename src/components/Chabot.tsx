import React, { useState } from "react";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<
    { text: string; fromUser: boolean }[]
  >([]);

  const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = e.currentTarget.message.value.trim();
    if (!message) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, fromUser: true },
    ]);

    setTimeout(() => {
      fetch("http://127.0.0.1:5001/"+message).then((response) => {
        response.text().then((output) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              text: output,
              fromUser: false,
            },
          ]);
        });
      });
    }, 1000); 
    e.currentTarget.reset();
  };

  return (
    <div className="flex flex-col h-[75vh] bg-black">
      <div className="flex-1 p-1 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat ${
              msg.fromUser ? "chat-end" : "chat-start"
            } items-${msg.fromUser ? "end" : "start"}`}
          >
            <div
              className={`flex items-center ${
                msg.fromUser ? "justify-end" : "justify-start"
              } chat-bubble bg-gradient-to-r from-cyan-500 to-blue-500 text-white max-w-xs mb-2`}
            >
              {!msg.fromUser && (
                <div className="chat-image avatar mr-2">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="src/images/HypertroIcon.jpeg"
                    />
                  </div>
                </div>
              )}
              <div
                className={`flex-grow ${
                  msg.fromUser ? "text-right" : "text-left"
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} className="p-4">
        <input
          type="text"
          name="message"
          placeholder="Ask Hypertro..."
          className="w-full p-2 rounded-lg border whitespace-normal break-words"
        />
      </form>
    </div>
  );
};

export default Chatbot;
