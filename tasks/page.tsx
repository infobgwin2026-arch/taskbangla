"use client";

import Link from "next/link";

const tasks = [
  {
    id: 1,
    title: "ভিডিও দেখে মতামত দিন",
    description: "একটি ছোট ভিডিও দেখে আপনার মতামত লিখুন।",
    reward: "৳10",
    time: "৫ মিনিট",
  },
  {
    id: 2,
    title: "ওয়েবসাইট ভিজিট করুন",
    description: "নির্দেশনা অনুযায়ী ওয়েবসাইটটি ভিজিট করুন।",
    reward: "৳15",
    time: "৩ মিনিট",
  },
  {
    id: 3,
    title: "ছোট সার্ভে সম্পন্ন করুন",
    description: "কয়েকটি প্রশ্নের উত্তর দিয়ে সার্ভে সম্পন্ন করুন।",
    reward: "৳20",
    time: "৭ মিনিট",
  },
];

export default function TasksPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-5">
      <div className="mx-auto max-w-4xl">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-green-700">
              TaskBangla
            </h1>
            <p className="text-gray-600">
              Available Tasks
            </p>
          </div>

          <Link
            href="/dashboard"
            className="rounded-lg bg-gray-800 px-4 py-2 text-white"
          >
            Dashboard
          </Link>
        </div>

        <div className="mb-6 rounded-xl bg-green-700 p-6 text-white">
          <h2 className="text-2xl font-bold">
            কাজ করে শিখুন
          </h2>
          <p className="mt-2">
            আপনার পছন্দের কাজ নির্বাচন করুন।
          </p>
        </div>

        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Available Tasks
        </h2>

        <div className="grid gap-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="rounded-xl bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {task.title}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {task.description}
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    সময়: {task.time}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-green-700">
                    {task.reward}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      alert(
                        "এটি Demo Task। আসল কাজের ব্যবস্থা এখনো যুক্ত হয়নি।"
                      );
                    }}
                    className="mt-3 rounded-lg bg-green-700 px-5 py-2 text-white hover:bg-green-800"
                  >
                    কাজ শুরু করুন
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/dashboard"
            className="font-semibold text-green-700"
          >
            ← Dashboard-এ ফিরে যান
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          TaskBangla Demo Version — এখানে এখনো বাস্তব কাজ বা পেমেন্ট চালু নেই।
        </p>

      </div>
    </main>
  );
}