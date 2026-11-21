"use client";

import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 px-6 py-5">
        <h1 className="text-2xl font-bold text-emerald-400">
          TaskBangla
        </h1>

        <div className="flex flex-wrap gap-3">
          <button onClick={() => setPage("home")} className="rounded-lg px-4 py-2 hover:bg-slate-800">
            Home
          </button>
          <button onClick={() => setPage("tasks")} className="rounded-lg px-4 py-2 hover:bg-slate-800">
            Tasks
          </button>
          <button onClick={() => setPage("login")} className="rounded-lg bg-emerald-500 px-5 py-2 font-semibold text-slate-950">
            Login
          </button>
        </div>
      </nav>

      {page === "home" && (
        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="mb-5 font-semibold text-emerald-400">
            BANGLADESH MICRO JOB PLATFORM
          </p>
          <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
            কাজ করুন, দক্ষতা বাড়ান,
            <span className="text-emerald-400"> আয় করুন</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            TaskBangla-তে ছোট ছোট অনলাইন কাজের মাধ্যমে নতুন অভিজ্ঞতা অর্জন করুন।
          </p>
          <button
            onClick={() => setPage("tasks")}
            className="mt-9 rounded-xl bg-emerald-500 px-8 py-4 font-bold text-slate-950 hover:bg-emerald-400"
          >
            কাজ শুরু করুন →
          </button>
        </section>
      )}

      {page === "tasks" && (
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-8 text-3xl font-bold">Available Tasks</h2>
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-7">
            <h3 className="text-xl font-bold">স্বাগতম TaskBangla-তে!</h3>
            <p className="mt-3 text-slate-400">
              শিগগিরই এখানে কাজের তালিকা যুক্ত করা হবে।
            </p>
            <button onClick={() => setPage("home")} className="mt-6 rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950">
              Home-এ ফিরে যান
            </button>
          </div>
        </section>
      )}

      {page === "login" && (
        <section className="mx-auto max-w-md px-6 py-16">
          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold">Login</h2>
            <p className="mt-2 text-slate-400">TaskBangla-তে স্বাগতম</p>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="mt-7 w-full rounded-lg border border-slate-700 bg-slate-950 p-4 outline-none focus:border-emerald-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-950 p-4 outline-none focus:border-emerald-400"
            />
            <button className="mt-6 w-full rounded-lg bg-emerald-500 p-4 font-bold text-slate-950">
              Login
            </button>
            <p className="mt-5 text-center text-sm text-slate-400">
              এটি এখন শুধু ডিজাইন। আসল লগইন পরে নিরাপদভাবে যুক্ত হবে।
            </p>
          </div>
        </section>
      )}

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 TaskBangla. All rights reserved.
      </footer>
    </main>
  );
}