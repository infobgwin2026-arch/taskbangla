"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !mobile || !password) {
      setMessage("সব তথ্য পূরণ করুন।");
      return;
    }

    if (password.length < 6) {
      setMessage("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।");
      return;
    }

    setMessage("Demo Registration সফল! আসল অ্যাকাউন্ট সিস্টেম পরে যুক্ত হবে।");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5 py-12 text-white">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <Link href="/" className="text-sm text-emerald-400">
          ← Home
        </Link>

        <h1 className="mt-7 text-3xl font-extrabold text-emerald-400">
          TaskBangla
        </h1>

        <h2 className="mt-3 text-2xl font-bold">Create Account</h2>
        <p className="mt-2 text-slate-400">
          নতুন অ্যাকাউন্ট তৈরি করুন।
        </p>

        <form onSubmit={handleRegister} className="mt-8 space-y-5">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-emerald-400"
          />

          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile Number"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-emerald-400"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create Password (6+ characters)"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-emerald-400"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-500 p-4 font-bold text-slate-950 hover:bg-emerald-400"
          >
            Create Account
          </button>
        </form>

        {message && (
          <p className="mt-5 rounded-lg bg-slate-800 p-3 text-center text-sm text-emerald-300">
            {message}
          </p>
        )}

        <p className="mt-7 text-center text-sm text-slate-400">
          Already have an account?
          <Link href="/login" className="ml-2 font-semibold text-emerald-400">
            Login
          </Link>
        </p>

        <p className="mt-5 text-center text-xs text-slate-500">
          Educational Demo — Real account creation will be added later.
        </p>
      </div>
    </main>
  );
}
