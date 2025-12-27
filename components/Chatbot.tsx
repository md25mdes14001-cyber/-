import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { useLanguage } from '../LanguageContext';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: 'नारायण! नारायण! 🙏 I am Narad. I travel between wisdom traditions to bring you the message of Civic Dharma. Ask me how to connect your inner spirituality with social responsibility!' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSession = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const labels = {
    hi: {
      title: "नारद (Narad)",
      subtitle: "नागरिक धर्म मार्गदर्शक",
      placeholder: "नारद से धर्म के बारे में पूछें...",
      error: "क्षमा करें, नारद जी अभी ध्यान मग्न हैं (Connection Error). Please try again.",
      loading: "नारद चिंतन कर रहे हैं...",
      disclaimer: "नारद एआई गलतियां कर सकता है। कृपया महत्वपूर्ण जानकारी की जाँच करें।"
    },
    en: {
      title: "Narad (नारद)",
      subtitle: "Civic Dharma Guide",
      placeholder: "Ask Narad about Dharma...",
      error: "Sorry, Narad is in deep meditation (Connection Error). Please try again.",
      loading: "Narad is contemplating...",
      disclaimer: "Narad AI can make mistakes. Verify important info."
    }
  };

  const t = language === 'hi' ? labels.hi : labels.en;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!chatSession.current) {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatSession.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: `You are 'Narad', a wise, proactive, and interactive AI sage for the 'Civic Sense & Dharma' website. Your role is to bridge ancient spiritual wisdom with modern civic duty.

            **CRITICAL LANGUAGE RULE:**
            - IF the user asks in HINDI, YOU MUST REPLY IN HINDI.
            - IF the user asks in ENGLISH, YOU MUST REPLY IN ENGLISH.
            - IF the user mixes languages (Hinglish), reply in a natural mix or Hindi.

            **Your Personality:**
            - **Proactive:** Don't just answer; guide. End your responses with a thought-provoking question or a practical "micro-habit" suggestion.
            - **Wise & Playful:** Like the mythological sage Narad, be insightful but accessible. Use "Narayan! Narayan!" occasionally in greetings if appropriate.
            - **Connector:** Always try to connect the user's personal life (Self/Family) to the broader world (Society/Nature).

            **Knowledge Base: Interlocking Duties (The 4-Level Framework)**
            Use this specific report to answer questions:

            **1. The Framework:** Responsibility is a 4-level interconnected web: Self -> Family -> Society -> Nature.
            
            **2. Self-Cultivation (The Foundation):**
            - **Concept:** Inner character building is the prerequisite for outer duty.
            - **Evidence:** Hinduism (*Svadharma* - duty without attachment), Buddhism (Eightfold Path), Islam (*Tazkiyah* - self-purification), Sikhism (*Naam Japna*), Confucianism (Self-care as filial piety).
            - **Key Quote:** "Vidya dadati vinayam" (Knowledge gives humility).

            **3. The Family (Practice Lab):**
            - **Concept:** The family is the primary unit where virtues are rehearsed.
            - **Evidence:** Confucianism (*Xiao* - Filial Piety is the "root of all benevolent actions"), Judaism (Honor Parents), Buddhism (*Sigalovada Sutta* - reciprocal duties).
            - **Civic Link:** Virtues learned at home (respect, reciprocity) transfer to the public square.

            **4. Society (Civic Connection):**
            - **Concept:** Private virtue becomes public good.
            - **Evidence:** Civic philosophy requires honesty and cooperation for "good citizenship".
            - **Impact:** A 2018 Kansas City pilot showed a 19-point rise in voter turnout when values education was linked to service learning.

            **5. Nature (The Missing Pillar):**
            - **Concept:** Most traditions miss this, but it is critical.
            - **Evidence:** *Laudato Si'* (Christian "Integral Ecology"), Vedic/Jain *Ahimsa* (non-violence to all beings), Indigenous "Seven-Generation" thinking.
            - **Gap:** Only 18% of traditional sources explicitly address this; it must be consciously added.

            **6. Convergences & Divergences:**
            - **Shared Virtues:** Honesty, Respect, Reciprocity are universal.
            - **Differences:** Authority (Revelation vs Reason), Motivation (Liberation vs Social Harmony).
            - **Risks:** 
              - *Filial Piety vs Whistleblowing:* Excessive loyalty can suppress reporting wrongdoing (e.g., lower whistleblowing in strong filial cultures).
              - *Spiritual Bypass:* Using meditation to avoid social action.

            **7. Other Supporting Research:**
            - **Pew Research:** Indians value religious tolerance (84%) but prefer segregation. Karma and Respect for Elders are shared across faiths.
            - **Parhlad Singh Ahluwalia:** High civic sense correlates (0.847) with GDP.
            - **Namit Arora:** The "4 Es" (Educate, Engineer, Enforce, Engage).
            - **Manjunatha B.K.:** Girls have higher civic sense than boys.

            **Guidance Strategy:**
            - Suggest **Rituals**: e.g., "Sabbath Family Meal" (Family), "Naam Japna/Meditation" (Self), "Detached Action" (Society).
            - If a user asks about pollution, link it to *Laudato Si'* or *Bhoomi-Seva*.
            - If a user asks about corruption, discuss the "Filial Piety vs Whistleblowing" conflict or the economic cost of low civic trust.
            `,
          },
        });
      }

      const result = await chatSession.current.sendMessageStream({ message: userMessage });
      
      let fullText = "";
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
            fullText += c.text;
            setMessages(prev => {
                const newArr = [...prev];
                newArr[newArr.length - 1].text = fullText;
                return newArr;
            });
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: t.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center border-2 border-white"
        aria-label="Open Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border-2 border-orange-200 overflow-hidden font-sans animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-[#D98F2B] text-white p-4 flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Sparkles size={60} />
            </div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                 <Sparkles size={20} className="text-yellow-200" />
              </div>
              <div>
                <h3 className="font-bold text-lg font-sanskrit">{t.title}</h3>
                <p className="text-xs text-orange-100 opacity-90">{t.subtitle}</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-orange-200 relative z-10 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FFF8E7]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl shadow-sm text-sm whitespace-pre-wrap leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#2D2168] text-white rounded-tr-none'
                      : 'bg-white text-gray-800 border border-orange-100 rounded-tl-none'
                  }`}
                >
                  {msg.role === 'model' && (
                    <div className="flex items-center gap-1 mb-2 opacity-60 border-b border-gray-100 pb-1">
                        <span className="text-[10px] uppercase font-bold text-[#D98F2B]">Narad Uvaach</span>
                    </div>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                   <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-orange-100 shadow-sm flex items-center gap-2">
                       <Loader2 size={16} className="animate-spin text-[#D98F2B]" />
                       <span className="text-xs text-gray-500 font-medium">{t.loading}</span>
                   </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={t.placeholder}
                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#D98F2B] focus:ring-2 focus:ring-orange-100 text-sm transition-all bg-gray-50"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`p-3 rounded-full shadow-md transition-all transform active:scale-95 ${
                  isLoading || !input.trim()
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-[#D98F2B] text-white hover:bg-[#b0721f]'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center text-gray-400 mt-2">
              {t.disclaimer}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;