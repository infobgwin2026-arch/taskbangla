"use client";

import Link from "next/link";
import { useState } from "react";

const demoUsers = [
  { id: 1, name: "Rahim Ahmed", email: "rahim@example.com", status: "Active" },
  { id: 2, name: "Karim Hasan", email: "karim@example.com", status: "Pending" },
  { id: 3, name: "Sakib Islam", email: "sakib@example.com", status: "Active" },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState(demoUsers);

  function changeStatus(id: number) {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Blocked" : "Active",
            }
          : user
      )
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-5">
      <div className="mx-auto max-w-5xl">

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold text-green-700">
              User Management
            </h1>
            <p className="text-gray-500">Admin Panel</p>
          </div>

          <Link
            href="/admin"
            className="rounded-lg bg-gray-800 px-4 py-2 text-white"
          >
            Admin Dashboard
          </Link>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-gray-500">Total Users</p>
            <h2 className="mt-2 text-3xl font-bold text-green-700">
              {users.length}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-gray-500">Active Users</p>
            <h2 className="mt-2 text-3xl font-bold text-green-700">
              {users.filter((u) => u.status === "Active").length}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-5 shadow">
            <p className="text-gray-500">Blocked Users</p>
            <h2 className="mt-2 text-3xl font-bold text-red-600">
              {users.filter((u) => u.status === "Blocked").length}
            </h2>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl bg-white p-5 shadow">
          <h2 className="mb-5 text-xl font-bold text-gray-800">
            All Users
          </h2>

          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="border-b bg-gray-50 text-gray-600">
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-3">{user.id}</td>
                  <td className="p-3 font-semibold text-gray-800">
                    {user.name}
                  </td>
                  <td className="p-3 text-gray-600">{user.email}</td>
                  <td className="p-3">
                    <span className={`rounded-full px-3 py-1 text-sm ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : user.status === "Blocked"
                        ? "bg-red-100 text-red-700"
                        : "bg-orange-100 text-orange-700"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      type="button"
                      onClick={() => changeStatus(user.id)}
                      className="rounded-lg bg-gray-800 px-3 py-2 text-sm text-white"
                    >
                      {user.status === "Blocked" ? "Unblock" : "Change Status"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-center text-sm text-gray-500">
          Demo User Management — নমুনা তথ্য। কোনো বাস্তব ইউজার ডেটাবেজ যুক্ত নেই।
        </p>

      </div>
    </main>
  );
}