"use client";

import Link from "next/link";
import { useState } from "react";

export default function DepositPage() {
  const [method, setMethod] = useState("bKash");
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!amount || !transactionId.trim()) {
      setMessage("সব তথ্য পূরণ করুন।");
      return;
    }

    setMessage("Demo Request জমা হয়েছে। কোনো টাকা লেনদেন হয়নি।");
    setAmount("");
    setTransactionId("");
  }

  return (
    <main className="min-h-screen bg-slate-100 p-5">
      <div className="mx-auto max-w-xl">

        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-green-700">
            Deposit
          </h1>
          <Link href="/dashboard" className="rounded-lg bg-gray-800 px-4 py-2 text-white">
            Dashboard
          </Link>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-5 text-xl font-bold text-gray-800">
            Payment Method
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setMethod("bKash")}
              className={`rounded-xl border-2 p-4 font-bold ${
                method === "bKash"
                  ? "border-pink-600 bg-pink-50 text-pink-700"
                  : "border-gray-200 text-gray-600"
              }`}
            >
              bKash
            </button>

            <button
              type="button"
              onClick={() => setMethod("Nagad")}
              className={`rounded-xl border-2 p-4 font-bold ${
                method === "Nagad"
                  ? "border-orange-500 bg-orange-50 text-orange-700"
                  : "border-gray-200 text-gray-600"
              }`}
            >
              Nagad
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Amount (Demo)
              </label>
              <input
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full rounded-lg border p-3 text-gray-800"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Demo Transaction ID
              </label>
              <input
                type="text"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                placeholder="Example: DEMO12345"
                className="w-full rounded-lg border p-3 text-gray-800"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-700 p-3 font-bold text-white"
            >
              Submit Demo Request
            </button>
          </form>

          {message && (
            <p className="mt-4 rounded-lg bg-green-50 p-3 text-center text-green-700">
              {message}
            </p>
          )}
        </div>

        <p className="mt-5 text-center text-sm text-gray-500">
          এটি শুধুমাত্র UI Demo। কোনো বাস্তব পেমেন্ট, টাকা জমা বা লেনদেন হয় না।
        </p>

      </div>
    </main>
  );
}