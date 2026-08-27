import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),

  title: {
    default: "Advocate Shaikul Khan | Rajasthan High Court",
    template: "%s | Advocate Shaikul Khan",
  },

  description: "Premium Legal Services & Cyber Crime Defence.",

  openGraph: {
    type: "website",
    title: "Advocate Shaikul Khan | Rajasthan High Court",
    description: "Premium Legal Services & Cyber Crime Defence.",
    siteName: "Advocate Shaikul Khan",
    images: [
      {
        url: "/brand/Premium-logo.png",
        width: 1200,
        height: 630,
        alt: "Advocate Shaikul Khan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Advocate Shaikul Khan | Rajasthan High Court",
    description: "Premium Legal Services & Cyber Crime Defence.",
    images: ["/brand/Premium-logo.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#374151] text-white antialiased">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/#person`,
          "name": "Advocate Shaikul Khan",
          "jobTitle": "Advocate",
          "description": "Criminal defence and cyber crime advocate."
        },
        {
          "@type": "WebSite",
          "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/#website`,
          "name": "Advocate Shaikul Khan",
          "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
          "publisher": {
            "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/#person`
          }
        },
        {
          "@type": "WebPage",
          "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/#webpage`,
          "url": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
          "name": "Advocate Shaikul Khan | Rajasthan High Court",
          "isPartOf": {
            "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/#website`
          }
        }
      ]
    })
  }}
/>
        <header className="fixed top-0 w-full z-50 bg-[#374151]/60 backdrop-blur-lg border-b border-yellow-500/20">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-widest text-white uppercase">
                Shaikul <span className="text-yellow-500">Khan</span>
              </span>
              <span className="text-[10px] md:text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">Rajasthan High Court</span>
            </Link>
            <nav className="hidden md:flex gap-8 items-center font-bold text-sm uppercase tracking-wider">
              <Link href="/" className="text-gray-300 hover:text-yellow-500 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-yellow-500 transition-colors">About</Link>
              <Link href="/team" className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">Our Team</Link>
              <Link href="/knowledge-centre" className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">Knowledge Centre</Link>
              <Link href="/practice-areas/cyber-crime" className="text-yellow-500 border-b-2 border-yellow-500 pb-1">Cyber Crime</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/consultation">
                <button className="hidden md:block bg-yellow-500 text-black px-6 py-2.5 rounded-lg font-black uppercase tracking-wider text-xs hover:bg-yellow-400 transition-all shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                  Contact Now
                </button>
              </Link>
              <details className="relative md:hidden">
  <summary className="list-none cursor-pointer text-yellow-500 font-bold tracking-widest text-sm border border-yellow-500/30 px-3 py-2 rounded bg-[#374151]/50">
    MENU ≡
  </summary>

  <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
    <Link href="/" className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
      Home
    </Link>

    <Link href="/about" className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
      About
    </Link>

    <Link href="/team" className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">Our Team</Link>
              <Link href="/knowledge-centre" className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">Knowledge Centre</Link>
              <Link href="/practice-areas/cyber-crime" className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
      Cyber Crime
    </Link>

    <Link href="/consultation" className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100">
      Consultation
    </Link>
  </div>
</details>
            </div>
          </div>
        </header>
        <main className="pt-20">{children}</main>

      {/* PROFESSIONAL LEGAL FOOTER */}
      <footer className="border-t border-slate-200 bg-[#0F172A] text-slate-300 font-sans">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* COLUMN 1: CHAMBER IDENTITY */}
            <div className="md:col-span-2">
              <div className="text-lg font-black tracking-wider text-white">
                SHAIKUL <span className="text-[#D4AF37]">KHAN</span>
              </div>
              <p className="text-xs font-medium tracking-widest text-[#D4AF37] uppercase mt-0.5">
                Advocate • Rajasthan High Court
              </p>
              <p className="mt-4 text-xs leading-relaxed text-slate-400 max-w-md">
                Strategic criminal defence, financial cyber-fraud representation, electronic evidence analysis, NDPS litigation, and bail jurisprudence across Rajasthan High Court, Haryana, and regional District Courts.
              </p>
              <div className="mt-4 text-xs text-slate-300 space-y-1">
                <p>📍 Haji Deenu Niwas, Ubhaka, Pahadi, Deeg, Rajasthan - 321204</p>
                <p>📞 +91 89550 02298 | ✉️ advshaikulkhan@gmail.com</p>
              </div>
            </div>

            {/* COLUMN 2: QUICK NAVIGATION */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Navigation</h4>
              <ul className="mt-3 space-y-2 text-xs">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About Counsel</a></li>
                <li><a href="/team" className="hover:text-white transition-colors">Our Legal Team</a></li>
                <li><a href="/knowledge-centre" className="hover:text-white transition-colors">Knowledge Centre</a></li>
                <li><a href="/practice-areas/cyber-crime" className="hover:text-white transition-colors">Cyber Crime Desk</a></li>
              </ul>
            </div>

            {/* COLUMN 3: LEGAL COMPLIANCE & POLICIES */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Legal & Compliance</h4>
              <ul className="mt-3 space-y-2 text-xs">
                <li><a href="/disclaimer" className="hover:text-white transition-colors">BCI Disclaimer</a></li>
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/knowledge-centre/bns/mapping" className="hover:text-white transition-colors">IPC ⇄ BNS Matrix</a></li>
              </ul>
            </div>
          </div>

          {/* BCI MANDATORY NOTICE STRIP */}
          <div className="mt-10 border-t border-white/10 pt-6 text-[11px] leading-relaxed text-slate-400">
            <p>
              <strong>Bar Council of India Notice:</strong> This website is designed solely for informational and research purposes. In compliance with the rules of the Bar Council of India, this website does not solicit work or advertise. Any action taken based on the information herein is at the user's discretion.
            </p>
          </div>

          {/* COPYRIGHT & ALL RIGHTS RESERVED */}
          <div className="mt-6 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <p>© 2026 Advocate Shaikul Khan & Associates. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-500">Litigation & Cyber Defence Practice • Protected Content</p>
          </div>
        </div>
      </footer>

{/* Floating WhatsApp */}
<a
  href="https://wa.me/9198955002298"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-5 right-5 z-50"
>
  <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-70 animate-pulse" />

  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500 border-4 border-white shadow-[0_0_30px_rgba(34,197,94,0.8)] transition-all duration-300 hover:scale-110">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
      <path d="M12 2a10 10 0 00-8.66 15l-1.2 4.4 4.5-1.18A10 10 0 1012 2z"/>
    </svg>
  </div>
</a>
      </body>
    </html>
  );
}
