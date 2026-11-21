import Link from "next/link";

export default function WalletPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-5">
      <div className="mx-auto max-w-3xl">

        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-green-700">
            My Wallet
          </h1>

          <Link href="/dashboard" className="rounded-lg bg-gray-800 px-4 py-2 text-white">
            Dashboard
          </Link>
        </div>

        <div className="rounded-xl bg-green-700 p-6 text-white">
          <p className="text-lg">Available Balance</p>
          <h2 className="mt-2 text-4xl font-bold">৳0.00</h2>
          <p className="mt-2 text-sm">Demo Wallet Balance</p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-gray-500">Pending Balance</p>
            <h3 className="mt-2 text-2xl font-bold text-orange-500">
              ৳0.00
            </h3>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-gray-500">Total Earnings</p>
            <h3 className="mt-2 text-2xl font-bold text-green-700">
              ৳0.00
            </h3>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-white p-5 shadow">
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            Wallet Menu
          </h2>

          <div className="grid gap-3">
            <Link href="/deposit" className="rounded-lg bg-green-50 p-4 font-semibold text-green-700">
              Deposit
            </Link>

            <Link href="/withdraw" className="rounded-lg bg-blue-50 p-4 font-semibold text-blue-700">
              Withdraw
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          এটি Demo Wallet। কোনো বাস্তব টাকা জমা বা উত্তোলন হয় না।
        </p>

      </div>
    </main>
  );
}