"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setMessage("Email এবং Password লিখুন।");
      return;
    }

    setMessage(
      "Demo Login: আসল Admin Authentication এখনো যুক্ত হয়নি।"
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-5">
      <div className="w-full max-w-md rounded-2xl bg-white p-7 shadow-lg">

        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
            🔐
          </div>

          <h1 className="text-3xl font-bold text-green-700">
            TaskBangla
          </h1>

          <h2 className="mt-2 text-xl font-bold text-gray-800">
            Admin Login
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Authorized Administrator Only
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Admin Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter admin email"
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-800 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full rounded-lg border border-gray-300 p-3 text-gray-800 outline-none focus:border-green-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 p-3 font-bold text-white hover:bg-green-800"
          >
            Login as Admin
          </button>

        </form>

        {message && (
          <p className="mt-5 rounded-lg bg-orange-50 p-3 text-center text-sm text-orange-700">
            {message}
          </p>
        )}

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm font-semibold text-green-700 hover:underline"
          >
            ← Back to Homepage
          </Link>
        </div>

        <p className="mt-5 text-center text-xs text-gray-400">
          TaskBangla Admin Panel — Demo Version
        </p>

      </div>
    </main>
  );
}