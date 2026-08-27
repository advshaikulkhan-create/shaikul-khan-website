'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AskAIPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user'|'ai', text: string}[]>([
    { role: 'ai', text: 'नमस्कार! मैं Ask AI Advocate हूँ। आप मुझसे हिंदी या English में कानूनी सवाल पूछ सकते हैं।' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim();
    if (!query || loading) return;

    // यूजर का सवाल तुरंत स्क्रीन पर जोड़ें
    setMessages(prev => [...prev, { role: 'user', text: query }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: query })
      });

      const data = await res.json();
      const aiReply = data.reply || "क्षमा करें, उत्तर प्राप्त नहीं हुआ।";

      setMessages(prev => [...prev, { role: 'ai', text: aiReply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "कनेक्शन एरर। कृपया सीधे WhatsApp पर संपर्क करें।" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-800 text-white flex flex-col justify-between px-4 py-6">
      
      {/* HEADER */}
      <header className="flex items-center justify-between border-b border-yellow-500/20 pb-4 max-w-2xl mx-auto w-full">
        <Link href="/" className="text-yellow-400 font-bold text-xs uppercase tracking-wider">
          ← Back to Home
        </Link>
        <div className="text-center">
          <h1 className="text-sm font-black uppercase text-white">Ask AI Advocate</h1>
          <p className="text-[10px] text-yellow-500 uppercase tracking-widest">Bilingual Legal Guidance (हिंदी / English)</p>
        </div>
        <div className="w-16"></div>
      </header>

      {/* CHAT CONTAINER */}
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col justify-between py-6 overflow-hidden">
        
        {/* MESSAGES AREA */}
        <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${msg.role === 'user' ? 'bg-zinc-700 text-white' : 'bg-yellow-500 text-white'}`}>
                {msg.role === 'user' ? 'U' : 'AI'}
              </div>
              <div className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line max-w-[80%] ${msg.role === 'user' ? 'bg-yellow-500/10 border border-yellow-500/30 text-white rounded-tr-none' : 'bg-zinc-900 border border-yellow-500/20 text-zinc-200 rounded-tl-none'}`}>
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
                AI
              </div>
              <div className="bg-zinc-900 border border-yellow-500/20 p-4 rounded-2xl rounded-tl-none text-xs text-zinc-400 animate-pulse">
                कानूनी सलाह तैयार की जा रही है...
              </div>
            </div>
          )}
        </div>

        {/* INPUT BOX AREA */}
        <form onSubmit={handleSend} className="mt-6">
          <div className="flex items-center gap-2 bg-slate-900 border-2 border-yellow-500/40 rounded-2xl p-2 shadow-[0_0_20px_rgba(234,179,8,0.15)]">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="कानूनी सवाल यहाँ पूछें..." 
              className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none"
            />
            <button type="submit" className="bg-yellow-500 text-white font-black px-5 py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-yellow-400 transition shrink-0">
              Ask
            </button>
          </div>
          <p className="text-[10px] text-center text-zinc-500 mt-2 uppercase tracking-widest">
            Disclaimer: AI provides preliminary legal information and is not a substitute for professional legal advice or court representation.
          </p>
        </form>

      </div>

      {/* FOOTER */}
      <footer className="text-center border-t border-yellow-500/10 pt-4 text-[10px] text-zinc-600 uppercase tracking-widest">
        © {new Date().getFullYear()} Advocate Shaikul Khan. All rights reserved.
      </footer>

    </main>
  );
}
