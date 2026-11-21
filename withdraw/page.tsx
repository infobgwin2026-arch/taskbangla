"use client";

import Link from "next/link";
import { useState } from "react";

export default function WithdrawPage() {
  const [method, setMethod] = useState("bKash");
  const [amount, setAmount] = useState("");
  const [account, setAccount] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!amount || !account.trim()) {
      setMessage("সব তথ্য পূরণ করুন।");
      return;
    }

    setMessage("Demo Withdrawal Request গ্রহণ করা হয়েছে। কোনো টাকা পাঠানো হয়নি।");
    setAmount("");
    setAccount("");
  }

  return (
    <main className="min-h-screen bg-slate-100 p-5">
      <div className="mx-auto max-w-xl">

        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-green-700">
            Withdraw
          </h1>

          <Link href="/dashboard" className="rounded-lg bg-gray-800 px-4 py-2 text-white">
            Dashboard
          </Link>
        </div>

        <div className="mb-5 rounded-xl bg-green-700 p-6 text-white">
          <p>Available Balance (Demo)</p>
          <h2 className="mt-2 text-3xl font-bold">৳0.00</h2>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="mb-5 text-xl font-bold text-gray-800">
            Withdrawal Request
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
                className="w-full rounded-lg border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Demo Payment Account
              </label>

              <input
                type="text"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                placeholder="Example: 01XXXXXXXXX"
                className="w-full rounded-lg border p-3"
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
          এটি Demo Version। কোনো বাস্তব টাকা উত্তোলন হয় না।
        </p>

      </div>
    </main>
  );
}
