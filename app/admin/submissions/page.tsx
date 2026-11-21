"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState([
    { id: 1, user: "Rahim", task: "YouTube ভিডিও দেখা", proof: "ভিডিও দেখার প্রমাণ জমা দিয়েছে", status: "Pending" },
    { id: 2, user: "Karim", task: "ওয়েবসাইট ভিজিট", proof: "ওয়েবসাইট ভিজিটের প্রমাণ", status: "Pending" },
    { id: 3, user: "Sakib", task: "অ্যাপ রিভিউ", proof: "রিভিউ জমা দিয়েছে", status: "Pending" },
  ]);

  function updateStatus(id: number, status: string) {
    setSubmissions((old) =>
      old.map((item) => item.id === id ? { ...item, status } : item)
    );
  }

  return (
    <main style={{ maxWidth: "900px", margin: "30px auto", padding: "20px" }}>
      <h1>Task Submissions</h1>
      <p>ইউজারদের জমা দেওয়া কাজ যাচাই করো।</p>

      <Link href="/admin">← Admin Dashboard</Link>

      <hr style={{ margin: "20px 0" }} />

      <h2>সব সাবমিশন ({submissions.length})</h2>

      {submissions.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            margin: "15px 0",
          }}
        >
          <h3>{item.task}</h3>
          <p>ইউজার: {item.user}</p>
          <p>প্রমাণ: {item.proof}</p>
          <p>স্ট্যাটাস: <strong>{item.status}</strong></p>

          {item.status === "Pending" && (
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button
                onClick={() => updateStatus(item.id, "Approved")}
                style={{ padding: "10px", cursor: "pointer" }}
              >
                Approve
              </button>

              <button
                onClick={() => updateStatus(item.id, "Rejected")}
                style={{ padding: "10px", cursor: "pointer" }}
              >
                Reject
              </button>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}