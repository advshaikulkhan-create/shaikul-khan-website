export default function ContactButtons() {
  return (
    <div className="w-full max-w-md mx-auto mt-6 space-y-4">

      <a
        href="tel:+9198955002298"
        className="flex items-center justify-center gap-3 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg py-4 rounded-2xl shadow-lg transition-all duration-300 active:scale-95"
      >
        <span className="text-2xl">📞</span>
        <span>Call for Urgent Legal Help</span>
      </a>

      <a
        href="https://wa.me/9198955002298"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-3 w-full bg-[#0f0f0f] border border-green-500/40 hover:border-green-400 hover:bg-[#151515] text-white font-bold text-lg py-4 rounded-2xl shadow-lg transition-all duration-300 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-400">
  <path d="M12 2a10 10 0 00-8.66 15l-1.2 4.4 4.5-1.18A10 10 0 1012 2zm5.16 14.34c-.22.62-1.3 1.18-1.8 1.26-.46.08-1.03.12-1.66-.08-.38-.12-.88-.29-1.52-.56-2.68-1.16-4.42-3.88-4.56-4.06-.14-.18-1.08-1.44-1.08-2.74 0-1.3.68-1.94.92-2.2.24-.26.52-.32.7-.32h.5c.16 0 .38-.06.6.46.22.52.74 1.8.8 1.94.06.14.1.3.02.48-.08.18-.12.3-.24.46-.12.16-.26.36-.38.48-.12.12-.24.24-.1.46.14.22.62 1.02 1.34 1.66.92.82 1.7 1.08 1.94 1.2.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.38.66 1.62.78.24.12.4.18.46.28.06.1.06.58-.16 1.2z"/>
</svg>
        <span>WhatsApp Consultation</span>
      </a>

      <a
        href="/ask-ai"
        className="flex items-center justify-center gap-3 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg py-4 rounded-2xl shadow-lg transition-all duration-300 active:scale-95"
      >
        <span className="text-2xl">🤖</span>
        <span>Ask AI Advocate</span>
      </a>

    </div>
  );
}
