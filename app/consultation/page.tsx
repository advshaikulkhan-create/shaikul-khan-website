import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Consultation | Advocate Shaikul Khan",
  description: "Request a legal consultation with Advocate Shaikul Khan regarding criminal defence, cyber crime, digital evidence and related litigation matters.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Legal Consultation | Advocate Shaikul Khan",
    description: "Request a legal consultation with Advocate Shaikul Khan regarding criminal defence, cyber crime, digital evidence and related litigation matters.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Consultation | Advocate Shaikul Khan",
    description: "Request a legal consultation with Advocate Shaikul Khan regarding criminal defence, cyber crime, digital evidence and related litigation matters.",
  },
};

import Link from "next/link";

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-slate-800 text-white px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-white uppercase tracking-wider mb-2">Book <span className="text-yellow-500">Consultation</span></h1>
          <p className="text-gray-400 text-sm">Fill in the details below for a professional legal consultation.</p>
        </div>

        <form className="space-y-6">
          {/* Mobile Number */}
          <div>
            <label className="text-yellow-500 font-bold text-sm block mb-2">Mobile Number *</label>
            <input type="tel" required className="w-full bg-slate-800 border border-yellow-500/50 rounded-2xl p-4 text-white focus:outline-none focus:border-yellow-400" />
          </div>

          {/* Email Address */}
          <div>
            <label className="text-yellow-500 font-bold text-sm block mb-2">Email Address (Optional)</label>
            <input type="email" className="w-full bg-slate-800 border border-yellow-500/50 rounded-2xl p-4 text-white focus:outline-none focus:border-yellow-400" />
          </div>

          {/* City / State */}
          <div>
            <label className="text-yellow-500 font-bold text-sm block mb-2">City / State</label>
            <input type="text" className="w-full bg-slate-800 border border-yellow-500/50 rounded-2xl p-4 text-white focus:outline-none focus:border-yellow-400" />
          </div>

          {/* Case Type */}
          <div>
            <label className="text-yellow-500 font-bold text-sm block mb-2">Select Case Type</label>
            <select className="w-full bg-slate-800 border border-yellow-500/50 rounded-2xl p-4 text-white focus:outline-none focus:border-yellow-400 appearance-none">
              <option>Choose Your Case Type</option>
              <option>Cyber Crime IT ACT</option>
              <option>Bank Account Debit Freeze</option>
              <option>Regular Bail</option>
              <option>Anticipatory Bail</option>
              <option>Bail Jump Matters</option>
              <option>FIR Quashing</option>
              <option>Arms Act</option>
              <option>NDPS Case</option>
              <option>Juvenile Justice Matters</option>
              <option>Criminal Trial</option>
              <option>Criminal Appeal</option>
              <option>High Court Matter</option>
              <option>Other</option>
            </select>
          </div>

          {/* Brief Facts */}
          <div>
            <label className="text-yellow-500 font-bold text-sm block mb-2">Brief Facts of Your Case</label>
            <textarea rows={4} placeholder="Please briefly describe your legal issue..." className="w-full bg-slate-800 border border-yellow-500/50 rounded-2xl p-4 text-white focus:outline-none focus:border-yellow-400 resize-none"></textarea>
          </div>

          {/* Preferred Mode */}
          <div>
            <label className="text-yellow-500 font-bold text-sm block mb-3">Preferred Consultation Mode</label>
            <div className="space-y-3">
              <label className="flex items-center gap-6 border border-yellow-500/50 rounded-2xl p-4 cursor-pointer hover:bg-yellow-500/10 transition">
                <input type="radio" name="mode" value="Phone Call" className="w-5 h-5 accent-yellow-500" />
                <span className="font-bold text-gray-200">📞 Phone Call</span>
              </label>
              <label className="flex items-center gap-6 border border-yellow-500/50 rounded-2xl p-4 cursor-pointer hover:bg-yellow-500/10 transition">
                <input type="radio" name="mode" value="WhatsApp" className="w-5 h-5 accent-yellow-500" />
                <span className="font-bold text-gray-200">💬 WhatsApp</span>
              </label>
              <label className="flex items-center gap-6 border border-yellow-500/50 rounded-2xl p-4 cursor-pointer hover:bg-yellow-500/10 transition">
                <input type="radio" name="mode" value="Video Consultation" className="w-5 h-5 accent-yellow-500" />
                <span className="font-bold text-gray-200">🎥 Video Consultation</span>
              </label>
              <label className="flex items-center gap-6 border border-yellow-500/50 rounded-2xl p-4 cursor-pointer hover:bg-yellow-500/10 transition">
                <input type="radio" name="mode" value="Office Meeting" className="w-5 h-5 accent-yellow-500" />
                <span className="font-bold text-gray-200">🏢 Office Meeting</span>
              </label>
            </div>
          </div>

          {/* Preferred Time */}
          <div>
            <label className="text-yellow-500 font-bold text-sm block mb-2">Preferred Time</label>
            <select className="w-full bg-slate-800 border border-yellow-500/50 rounded-2xl p-4 text-white focus:outline-none focus:border-yellow-400 appearance-none">
              <option>Select Preferred Time</option>
              <option>Morning (10 AM - 1 PM)</option>
              <option>Afternoon (2 PM - 5 PM)</option>
              <option>Evening (6 PM - 9 PM)</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4 pb-10">
            <button type="button" className="w-full bg-yellow-500 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)]">
              Book Consultation
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
