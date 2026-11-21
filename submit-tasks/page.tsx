"use client";

import Link from "next/link";
import { useState } from "react";

export default function SubmitTaskPage() {
  const [taskName, setTaskName] = useState("");
  const [proof, setProof] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!taskName || !proof.trim()) {
      setMessage("সব তথ্য পূরণ করুন।");
      return;
    }

    setMessage("Demo: আপনার কাজের তথ্য গ্রহণ করা হয়েছে।");
    setTaskName("");
    setProof("");
  }

  return (
    <main className="min-h-screen bg-slate-100 p-5">
      <div className="mx-auto max-w-xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-700">
            Submit Task
          </h1>
          <Link href="/dashboard" className="rounded-lg bg-gray-800 px-4 py-2 text-white">
            Dashboard
          </Link>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-5 text-xl font-bold text-gray-800">
            কাজ জমা দিন
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                কাজ নির্বাচন করুন
              </label>
              <select
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="w-full rounded-lg border p-3 text-gray-800"
              >
                <option value="">কাজ নির্বাচন করুন</option>
                <option value="ভিডিও দেখে মতামত">ভিডিও দেখে মতামত</option>
                <option value="ওয়েবসাইট ভিজিট">ওয়েবসাইট ভিজিট</option>
                <option value="ছোট সার্ভে">ছোট সার্ভে</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                কাজের প্রমাণ / বিবরণ
              </label>
              <textarea
                value={proof}
                onChange={(e) => setProof(e.target.value)}
                placeholder="আপনার কাজের বিবরণ লিখুন..."
                rows={5}
                className="w-full rounded-lg border p-3 text-gray-800"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-700 p-3 font-semibold text-white hover:bg-green-800"
            >
              কাজ জমা দিন
            </button>
          </form>

          {message && (
            <p className="mt-4 rounded-lg bg-green-50 p-3 text-center text-green-700">
              {message}
            </p>
          )}
        </div>

        <p className="mt-5 text-center text-sm text-gray-500">
          এটি Demo Submission। তথ্য এখনো ডেটাবেজে সংরক্ষণ হয় না।
        </p>
      </div>
    </main>
  );
}