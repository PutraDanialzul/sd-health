"use client";

import { useState } from "react";
import { Bot, Send, User } from "lucide-react";

export default function ChatbotPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm the SD Health AI Assistant. How can I help you today?",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    const aiMessage = {
      role: "assistant",
      content:
        "Based on the information provided, I recommend monitoring your symptoms and consulting a healthcare professional if they worsen. Remember that this is not a medical diagnosis.",
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      aiMessage,
    ]);

    setMessage("");
  };

  return (
    <div className="flex h-[calc(100vh-180px)] flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          AI Health Assistant
        </h1>

        <p className="mt-2 text-slate-500">
          Ask health-related questions and receive
          AI-assisted guidance.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto rounded-3xl border border-slate-200 bg-white p-4">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-3xl p-4 ${
                  message.role === "user"
                    ? "bg-[#005BAC] text-white"
                    : "bg-slate-100"
                }`}
              >
                <div className="mb-2 flex items-center gap-2">
                  {message.role === "assistant" ? (
                    <Bot size={16} />
                  ) : (
                    <User size={16} />
                  )}

                  <span className="text-sm font-semibold">
                    {message.role === "assistant"
                      ? "SD Health AI"
                      : "You"}
                  </span>
                </div>

                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            placeholder="Ask a health question..."
            className="flex-1 rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#005BAC]"
          />

          <button
            onClick={sendMessage}
            className="flex items-center gap-2 rounded-2xl bg-[#005BAC] px-5 py-3 font-semibold text-white"
          >
            <Send size={18} />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() =>
              setMessage("I have a headache.")
            }
            className="rounded-full bg-slate-100 px-4 py-2 text-sm"
          >
            I have a headache
          </button>

          <button
            onClick={() =>
              setMessage("How much water should I drink?")
            }
            className="rounded-full bg-slate-100 px-4 py-2 text-sm"
          >
            Water intake
          </button>

          <button
            onClick={() =>
              setMessage("What should I do if I have flu symptoms?")
            }
            className="rounded-full bg-slate-100 px-4 py-2 text-sm"
          >
            Flu symptoms
          </button>
        </div>
      </div>
    </div>
  );
}