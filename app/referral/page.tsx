import Link from "next/link";

export default function ReferralPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-5">
      <div className="mx-auto max-w-3xl">

        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-green-700">
            Referral Program
          </h1>

          <Link
            href="/dashboard"
            className="rounded-lg bg-gray-800 px-4 py-2 text-white"
          >
            Dashboard
          </Link>
        </div>

        <div className="rounded-xl bg-green-700 p-6 text-white">
          <h2 className="text-2xl font-bold">
            বন্ধুদের আমন্ত্রণ জানান!
          </h2>
          <p className="mt-3">
            বন্ধুদের সঙ্গে আপনার Referral Link শেয়ার করুন।
          </p>
          <h3 className="mt-5 text-3xl font-bold">৳50</h3>
          <p>প্রতি যোগ্য নতুন সদস্যের জন্য প্রস্তাবিত বোনাস</p>
        </div>

        <div className="mt-5 rounded-xl bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-gray-800">
            Your Referral Link
          </h2>

          <div className="mt-3 break-all rounded-lg bg-gray-100 p-3 text-gray-600">
            Demo: taskbangla.com/register?ref=DEMO123
          </div>

          <p className="mt-3 text-sm text-gray-500">
            এটি নমুনা লিংক। আসল Referral System এখনো যুক্ত হয়নি।
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-gray-500">Total Referrals</p>
            <h3 className="mt-2 text-2xl font-bold">0</h3>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-gray-500">Referral Earnings</p>
            <h3 className="mt-2 text-2xl font-bold text-green-700">
              ৳0.00
            </h3>
          </div>
        </div>

      </div>
    </main>
  );
}