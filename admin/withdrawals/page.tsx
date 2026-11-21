"use client";

import { useState } from "react";
import Link from "next/link";

type Withdrawal = {
  id: number;
  name: string;
  method: string;
  number: string;
  amount: number;
  date: string;
  status: "Pending" | "Paid" | "Rejected";
};

export default function AdminWithdrawalsPage() {
  const [requests, setRequests] = useState<Withdrawal[]>([
    { id: 1, name: "Rahim Ahmed", method: "bKash", number: "01XXXXXXXX1", amount: 500, date: "22 Nov 2026", status: "Pending" },
    { id: 2, name: "Karim Hasan", method: "Nagad", number: "01XXXXXXXX2", amount: 800, date: "22 Nov 2026", status: "Pending" },
    { id: 3, name: "Sakib Islam", method: "bKash", number: "01XXXXXXXX3", amount: 300, date: "21 Nov 2026", status: "Paid" },
    { id: 4, name: "Fahim Rahman", method: "Nagad", number: "01XXXXXXXX4", amount: 600, date: "21 Nov 2026", status: "Rejected" },
  ]);

  const [filter, setFilter] = useState("All");

  function updateStatus(id: number, status: "Paid" | "Rejected") {
    setRequests((old) =>
      old.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  }

  const filtered = requests.filter(
    (item) => filter === "All" || item.status === filter
  );

  const pending = requests.filter((r) => r.status === "Pending").length;
  const paid = requests.filter((r) => r.status === "Paid").length;
  const paidAmount = requests
    .filter((r) => r.status === "Paid")
    .reduce((sum, r) => sum + r.amount, 0);

  const cardStyle = {
    background: "#111827",
    border: "1px solid #263449",
    borderRadius: "16px",
    padding: "20px",
    color: "#fff",
  } as const;

  return (
    <main style={{
      minHeight: "100vh",
      background: "#080d19",
      color: "#f8fafc",
      padding: "25px",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{ maxWidth: "1150px", margin: "auto" }}>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px"
        }}>
          <div>
            <p style={{ color: "#38bdf8", fontSize: "12px", letterSpacing: "2px" }}>
              TASKBANGLA / ADMIN
            </p>
            <h1 style={{ fontSize: "30px", margin: "8px 0" }}>
              Withdrawal Management
            </h1>
            <p style={{ color: "#94a3b8" }}>
              Review and manage withdrawal requests
            </p>
          </div>

          <Link href="/admin" style={{
            background: "#1e293b",
            color: "#fff",
            padding: "12px 18px",
            borderRadius: "10px",
            textDecoration: "none"
          }}>
            ← Dashboard
          </Link>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
          gap: "15px",
          margin: "30px 0"
        }}>
          <div style={cardStyle}>
            <p style={{ color: "#94a3b8" }}>Total Requests</p>
            <h2 style={{ fontSize: "30px" }}>{requests.length}</h2>
          </div>

          <div style={cardStyle}>
            <p style={{ color: "#fbbf24" }}>Pending Requests</p>
            <h2 style={{ fontSize: "30px" }}>{pending}</h2>
          </div>

          <div style={cardStyle}>
            <p style={{ color: "#34d399" }}>Paid Requests</p>
            <h2 style={{ fontSize: "30px" }}>{paid}</h2>
          </div>

          <div style={cardStyle}>
            <p style={{ color: "#38bdf8" }}>Paid Demo Amount</p>
            <h2 style={{ fontSize: "30px" }}>৳{paidAmount}</h2>
          </div>
        </div>

        <section style={{
          background: "#111827",
          border: "1px solid #263449",
          borderRadius: "16px",
          padding: "20px"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
            marginBottom: "20px"
          }}>
            <h2 style={{ margin: 0 }}>Withdrawal Requests</h2>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{
                background: "#1e293b",
                color: "#fff",
                border: "1px solid #334155",
                borderRadius: "9px",
                padding: "11px"
              }}
            >
              <option value="All">All Requests</option>
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          {filtered.map((item) => (
            <div key={item.id} style={{
              background: "#0b1220",
              border: "1px solid #263449",
              borderRadius: "12px",
              padding: "18px",
              marginBottom: "14px"
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "12px"
              }}>
                <div>
                  <h3 style={{ margin: "0 0 8px" }}>{item.name}</h3>
                  <p style={{ color: "#94a3b8", margin: "5px 0" }}>
                    Method: {item.method}
                  </p>
                  <p style={{ color: "#94a3b8", margin: "5px 0" }}>
                    Account: {item.number}
                  </p>
                  <p style={{ color: "#64748b", fontSize: "13px" }}>
                    {item.date}
                  </p>
                </div>

                <div style={{ textAlign: "right" }}>
                  <h2 style={{ color: "#38bdf8", margin: "0 0 10px" }}>
                    ৳{item.amount}
                  </h2>

                  <span style={{
                    color: item.status === "Paid"
                      ? "#34d399"
                      : item.status === "Rejected"
                      ? "#f87171"
                      : "#fbbf24",
                    background: "#1e293b",
                    padding: "7px 12px",
                    borderRadius: "20px",
                    fontSize: "12px"
                  }}>
                    {item.status}
                  </span>
                </div>
              </div>

              {item.status === "Pending" && (
                <div style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "18px"
                }}>
                  <button
                    onClick={() => updateStatus(item.id, "Paid")}
                    style={{
                      background: "#059669",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "11px 18px",
                      cursor: "pointer"
                    }}
                  >
                    Mark as Paid
                  </button>

                  <button
                    onClick={() => updateStatus(item.id, "Rejected")}
                    style={{
                      background: "#dc2626",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "11px 18px",
                      cursor: "pointer"
                    }}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}

          {filtered.length === 0 && (
            <p style={{ color: "#94a3b8", textAlign: "center", padding: "30px" }}>
              No withdrawal requests found.
            </p>
          )}
        </section>

        <p style={{
          color: "#64748b",
          fontSize: "12px",
          textAlign: "center",
          marginTop: "25px"
        }}>
          TaskBangla Admin Panel • Demo Version
        </p>
      </div>
    </main>
  );
}