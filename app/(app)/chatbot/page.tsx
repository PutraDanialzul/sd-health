"use client";

import { useState } from "react";
import { Bot, Send, User, Sparkles } from "lucide-react";

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
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl bg-gradient-to-r from-[#005BAC] to-[#00A3E0] p-6 text-white">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
            <Sparkles size={26} />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              AI Health Assistant
            </h1>

            <p className="mt-2 max-w-2xl text-blue-50">
              Ask health-related questions and receive
              AI-assisted healthcare guidance anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Window */}
      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex h-[500px] flex-col">
          <div className="flex-1 space-y-5 overflow-y-auto p-6">
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
                  className={`max-w-[85%] rounded-3xl p-4 ${
                    message.role === "user"
                      ? "bg-[#005BAC] text-white"
                      : "border border-slate-200 bg-slate-50 text-slate-800"
                  }`}
                >
                  <div className="mb-3 flex items-center gap-2">
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

                  <p className="leading-relaxed">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="border-t border-slate-100 px-6 py-4">
            <div className="mb-4 flex flex-wrap gap-2">
              <button
                onClick={() =>
                  setMessage("I have a headache.")
                }
                className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#005BAC] transition hover:bg-blue-100"
              >
                Headache
              </button>

              <button
                onClick={() =>
                  setMessage(
                    "How much water should I drink?"
                  )
                }
                className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#005BAC] transition hover:bg-blue-100"
              >
                Water Intake
              </button>

              <button
                onClick={() =>
                  setMessage(
                    "What should I do if I have flu symptoms?"
                  )
                }
                className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#005BAC] transition hover:bg-blue-100"
              >
                Flu Symptoms
              </button>
            </div>

            {/* Input */}
            <div className="flex gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask a health question..."
                className="flex-1 rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#005BAC]"
              />

              <button
                onClick={sendMessage}
                className="flex items-center gap-2 rounded-2xl bg-[#005BAC] px-5 py-3 font-semibold text-white transition hover:bg-[#004b8c]"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
        <p className="text-sm text-amber-700">
          The AI Assistant provides informational
          guidance only and should not be considered
          a medical diagnosis. Please consult a
          qualified healthcare professional for
          medical advice.
        </p>
      </section>
    </div>
  );
}