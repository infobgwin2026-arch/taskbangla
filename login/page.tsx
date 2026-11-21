"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!mobile || !password) {
      setMessage("সব তথ্য পূরণ করুন।");
      return;
    }

    setMessage("Demo Login: আসল লগইন সিস্টেম এখনো যুক্ত হয়নি।");
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

        <h2 className="mt-3 text-2xl font-bold">Welcome Back!</h2>
        <p className="mt-2 text-slate-400">
          আপনার অ্যাকাউন্টে লগইন করুন।
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm">Mobile Number</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="01XXXXXXXXX"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-emerald-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none focus:border-emerald-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-500 p-4 font-bold text-slate-950 hover:bg-emerald-400"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="mt-5 rounded-lg bg-slate-800 p-3 text-center text-sm text-emerald-300">
            {message}
          </p>
        )}

        <p className="mt-7 text-center text-sm text-slate-400">
          নতুন ইউজার?
          <Link href="/register" className="ml-2 font-semibold text-emerald-400">
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}
