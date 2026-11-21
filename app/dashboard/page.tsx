"use client";

import Link from "next/link";

const stats = [
  { title: "Available Balance", amount: "৳0.00", icon: "💰" },
  { title: "Total Earnings", amount: "৳0.00", icon: "📈" },
  { title: "Completed Tasks", amount: "0", icon: "✅" },
  { title: "Pending Tasks", amount: "0", icon: "⏳" },
];

const menu = [
  { name: "Available Tasks", link: "/tasks", icon: "📋" },
  { name: "My Submissions", link: "/submit-task", icon: "📤" },
  { name: "My Wallet", link: "/wallet", icon: "💳" },
  { name: "Referral Program", link: "/referral", icon: "🎁" },
  { name: "Deposit", link: "/deposit", icon: "➕" },
  { name: "Withdraw", link: "/withdraw", icon: "💸" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 bg-slate-900 px-6 py-5">
        <Link href="/" className="text-2xl font-extrabold text-emerald-400">
          TaskBangla
        </Link>
        <Link href="/login" className="rounded-lg bg-slate-800 px-5 py-2">
          Logout
        </Link>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-10">
        <div>
          <p className="text-emerald-400">USER DASHBOARD</p>
          <h1 className="mt-2 text-3xl font-bold">
            Welcome to TaskBangla!
          </h1>
          <p className="mt-2 text-slate-400">
            আপনার কাজ ও আয়ের সারসংক্ষেপ এখানে দেখুন।
          </p>
        </div>

        <section className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-2xl">{item.icon}</p>
              <p className="mt-4 text-sm text-slate-400">{item.title}</p>
              <h2 className="mt-2 text-2xl font-bold">{item.amount}</h2>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-bold">Quick Menu</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-emerald-400 hover:bg-slate-800"
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="font-semibold">{item.name}</span>
                <span className="ml-auto text-emerald-400">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-7">
          <h2 className="text-xl font-bold">Recent Activity</h2>
          <p className="mt-4 text-slate-400">
            এখনো কোনো কাজ জমা দেওয়া হয়নি।
          </p>
        </section>
      </div>

      <footer className="border-t border-slate-800 p-6 text-center text-sm text-slate-500">
        TaskBangla © 2026 | Educational Demo
      </footer>
    </main>
  );
}