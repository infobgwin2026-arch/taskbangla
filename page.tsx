import Link from "next/link";

export default function AdminPage() {
  const menus = [
    { name: "Manage Users", link: "/admin/users" },
    { name: "Manage Tasks", link: "/admin/tasks" },
    { name: "Task Submissions", link: "/admin/submissions" },
    { name: "Deposit Requests", link: "/admin/deposits" },
    { name: "Withdrawal Requests", link: "/admin/withdrawals" },
    { name: "Website Settings", link: "/admin/settings" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-green-400">
          TaskBangla Admin Panel
        </h1>

        <p className="mt-2 text-slate-300">
          Welcome to the administration dashboard.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {menus.map((menu) => (
            <Link
              key={menu.link}
              href={menu.link}
              className="rounded-xl border border-slate-700 bg-slate-900 p-6 hover:border-green-400"
            >
              <h2 className="text-lg font-semibold">{menu.name}</h2>
              <p className="mt-2 text-sm text-green-400">
                Open Management →
              </p>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="mt-8 inline-block text-green-400 underline"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}