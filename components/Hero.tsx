"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">
      <div className="flex-1">
        <p className="mb-4 uppercase tracking-[8px] text-yellow-500">
          Criminal Defence • Cyber Crime
        </p>

        <h1 className="text-5xl font-extrabold leading-tight text-white">
          Advocate
          <span className="block text-yellow-500">
            Shaikul Khan
          </span>
        </h1>

        <p className="mt-8 text-xl leading-9 text-gray-300">
          Rajasthan High Court & Sessions Court Criminal Defence Lawyer
          specialising in Cyber Crime, Digital Evidence, Banking Account
          Debit Freeze, Bail Matters, FIR Quashing and IT Act cases.
        </p>

        <div className="mt-12 flex flex-wrap gap-5">
          <button className="rounded-xl bg-yellow-500 px-8 py-4 text-lg font-bold text-black">
            Book Consultation
          </button>

          <button className="rounded-xl border border-yellow-500 px-8 py-4 text-lg font-semibold text-yellow-400">
            WhatsApp Now
          </button>
        </div>
      </div>

      <div className="flex flex-1 justify-center">
        <Image
          src="/images/logo.png"
          alt="Advocate Shaikul Khan"
          width={520}
          height={520}
          priority
          className="w-full max-w-[520px] object-contain drop-shadow-[0_0_60px_rgba(234,179,8,0.45)]"
        />
      </div>
    </section>
  );
}