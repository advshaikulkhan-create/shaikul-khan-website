import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-neutral-900 border-b border-amber-500/20 py-4 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-10 h-10 rounded-full border border-amber-400 overflow-hidden bg-slate-800 shadow-md flex items-center justify-center">
            <Image 
              src="/images/logo-sk.png" 
              alt="Advocate Shaikul Khan Logo" 
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xl font-bold tracking-wider text-white block">SHAIKUL <span className="text-amber-400">KHAN</span></span>
            <span className="text-[10px] tracking-widest text-neutral-400 uppercase block">Rajasthan High Court</span>
          </div>
        </Link>
        
        <div className="hidden md:flex space-x-6 text-sm font-medium text-neutral-300">
          <Link href="/" className="hover:text-amber-400 transition">HOME</Link>
          <Link href="/about" className="hover:text-amber-400 transition">ABOUT</Link>
          <Link href="/practice-areas/cyber-crime" className="hover:text-amber-400 transition">CYBER CRIME</Link>
        </div>

        <div>
          <Link href="/contact" className="bg-amber-400 text-black px-4 py-2 rounded-md font-bold text-xs uppercase tracking-wider hover:bg-amber-500 transition shadow-lg">
            Contact Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
