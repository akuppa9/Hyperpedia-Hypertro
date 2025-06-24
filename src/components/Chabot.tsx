import React, { useState, FormEvent } from "react";

interface Message {
  text: string;
  fromUser: boolean;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! my name is Hypertro, your personal hypertrophy assistant. I am here to assist you with any hypertrophy and weightlifting related inquiries. **NOTE**: First response may take up to 45 seconds to generate due to server spin-up time.",
      fromUser: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleMessageSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message: string = e.currentTarget.message.value.trim();
    if (!message) return;

    setMessages((prevMessages: Message[]) => [
      ...prevMessages,
      { text: message, fromUser: true },
    ]);

    e.currentTarget.reset();

    setTimeout(() => {
      setIsLoading(true);

      setTimeout(() => {
        fetch("http://localhost:10000/" + message).then(
          (response) => {
            response.text().then((output: string) => {
              setMessages((prevMessages: Message[]) => [
                ...prevMessages,
                {
                  text: output,
                  fromUser: false,
                },
              ]);
              setIsLoading(false);
            });
          }
        );
      }, 1000);
    }, 500);
  };

  return (
    <div className="flex flex-col h-[75vh] bg-black">
      <div className="flex-1 p-1 overflow-y-auto">
        {messages.map((msg: Message, index: number) => (
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
                      src="images/HypertroIcon.jpeg"
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
        {isLoading && (
          <div className="chat chat-start items-start">
            <div className="flex items-center justify-start chat-bubble bg-gradient-to-r from-cyan-500 to-blue-500 text-white max-w-xs mb-2">
              <div className="chat-image avatar mr-2">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="images/HypertroIcon.jpeg"
                  />
                </div>
              </div>
              <div className="flex-grow text-left">answering...</div>
            </div>
          </div>
        )}
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
