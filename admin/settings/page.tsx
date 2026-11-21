"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminSettingsPage() {
  const [websiteName, setWebsiteName] = useState("TaskBangla");
  const [description, setDescription] = useState("Bangladesh's trusted micro task platform.");
  const [supportEmail, setSupportEmail] = useState("support@taskbangla.com");
  const [referralBonus, setReferralBonus] = useState("50");
  const [minWithdraw, setMinWithdraw] = useState("100");
  const [maxWithdraw, setMaxWithdraw] = useState("5000");
  const [registration, setRegistration] = useState(true);
  const [maintenance, setMaintenance] = useState(false);
  const [notice, setNotice] = useState("");

  const saveSettings = () => {
    setNotice("Demo settings saved successfully!");
  };

  const card = {
    background: "#111827",
    border: "1px solid #263449",
    borderRadius: "16px",
    padding: "22px",
    marginBottom: "20px",
  } as const;

  const inputStyle = {
    width: "100%",
    boxSizing: "border-box" as const,
    padding: "13px",
    marginTop: "8px",
    background: "#0b1220",
    color: "#fff",
    border: "1px solid #334155",
    borderRadius: "9px",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    color: "#cbd5e1",
    marginTop: "17px",
    fontSize: "14px",
  } as const;

  const toggle = (enabled: boolean, setter: (value: boolean) => void) => (
    <button
      type="button"
      onClick={() => setter(!enabled)}
      style={{
        background: enabled ? "#059669" : "#334155",
        color: "#fff",
        border: "none",
        borderRadius: "30px",
        padding: "8px 16px",
        cursor: "pointer",
        minWidth: "95px",
      }}
    >
      {enabled ? "ON" : "OFF"}
    </button>
  );

  return (
    <main style={{
      minHeight: "100vh",
      background: "#080d19",
      color: "#f8fafc",
      padding: "25px",
      fontFamily: "Arial, sans-serif",
    }}>
      <div style={{ maxWidth: "1000px", margin: "auto" }}>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}>
          <div>
            <p style={{
              color: "#38bdf8",
              fontSize: "12px",
              letterSpacing: "2px",
            }}>
              TASKBANGLA / ADMIN
            </p>
            <h1 style={{ fontSize: "30px", margin: "8px 0" }}>
              Platform Settings
            </h1>
            <p style={{ color: "#94a3b8" }}>
              Manage your website configuration
            </p>
          </div>

          <Link href="/admin" style={{
            background: "#1e293b",
            color: "#fff",
            padding: "12px 18px",
            borderRadius: "10px",
            textDecoration: "none",
          }}>
            ← Dashboard
          </Link>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "15px",
          margin: "30px 0",
        }}>
          <div style={card}>
            <p style={{ color: "#94a3b8" }}>Platform</p>
            <h2>TaskBangla</h2>
            <span style={{ color: "#34d399", fontSize: "13px" }}>
              Demo Version
            </span>
          </div>

          <div style={card}>
            <p style={{ color: "#94a3b8" }}>Registration</p>
            <h2>{registration ? "Enabled" : "Disabled"}</h2>
          </div>

          <div style={card}>
            <p style={{ color: "#94a3b8" }}>Maintenance</p>
            <h2>{maintenance ? "Active" : "Inactive"}</h2>
          </div>
        </div>

        <section style={card}>
          <h2 style={{ marginTop: 0 }}>🌐 General Settings</h2>
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>
            Basic information about your platform
          </p>

          <label style={labelStyle}>Website Name</label>
          <input
            value={websiteName}
            onChange={(e) => setWebsiteName(e.target.value)}
            style={inputStyle}
          />

          <label style={labelStyle}>Website Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            style={{ ...inputStyle, resize: "vertical" }}
          />

          <label style={labelStyle}>Support Email</label>
          <input
            value={supportEmail}
            onChange={(e) => setSupportEmail(e.target.value)}
            style={inputStyle}
          />
        </section>

        <section style={card}>
          <h2 style={{ marginTop: 0 }}>⚙️ Platform Controls</h2>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            padding: "15px 0",
            borderBottom: "1px solid #263449",
          }}>
            <div>
              <strong>User Registration</strong>
              <p style={{ color: "#94a3b8", fontSize: "13px" }}>
                Allow new users to register
              </p>
            </div>
            {toggle(registration, setRegistration)}
          </div>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
            padding: "15px 0",
          }}>
            <div>
              <strong>Maintenance Mode</strong>
              <p style={{ color: "#94a3b8", fontSize: "13px" }}>
                Display maintenance status in the demo
              </p>
            </div>
            {toggle(maintenance, setMaintenance)}
          </div>
        </section>

        <section style={card}>
          <h2 style={{ marginTop: 0 }}>💰 Wallet & Referral Settings</h2>

          <label style={labelStyle}>Referral Bonus (৳)</label>
          <input
            type="number"
            min="0"
            value={referralBonus}
            onChange={(e) => setReferralBonus(e.target.value)}
            style={inputStyle}
          />

          <label style={labelStyle}>Minimum Withdrawal (৳)</label>
          <input
            type="number"
            min="0"
            value={minWithdraw}
            onChange={(e) => setMinWithdraw(e.target.value)}
            style={inputStyle}
          />

          <label style={labelStyle}>Maximum Withdrawal (৳)</label>
          <input
            type="number"
            min="0"
            value={maxWithdraw}
            onChange={(e) => setMaxWithdraw(e.target.value)}
            style={inputStyle}
          />

          <p style={{
            color: "#fbbf24",
            fontSize: "13px",
            marginTop: "15px",
          }}>
            Demo only: These settings do not change real balances or payments.
          </p>
        </section>

        <button
          onClick={saveSettings}
          style={{
            width: "100%",
            padding: "16px",
            background: "linear-gradient(90deg,#2563eb,#06b6d4)",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          💾 Save Settings
        </button>

        {notice && (
          <p style={{
            background: "#064e3b",
            color: "#6ee7b7",
            padding: "14px",
            borderRadius: "10px",
            marginTop: "15px",
            textAlign: "center",
          }}>
            {notice}
          </p>
        )}

        <p style={{
          color: "#64748b",
          fontSize: "12px",
          textAlign: "center",
          marginTop: "30px",
        }}>
          TaskBangla Admin Panel • Premium Demo UI
        </p>
      </div>
    </main>
  );
}