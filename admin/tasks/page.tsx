"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminTasksPage() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "YouTube ভিডিও দেখা", reward: 10, status: "Active" },
    { id: 2, title: "ওয়েবসাইট ভিজিট", reward: 15, status: "Active" },
    { id: 3, title: "অ্যাপ রিভিউ", reward: 20, status: "Inactive" },
  ]);

  const [title, setTitle] = useState("");
  const [reward, setReward] = useState("");

  function addTask() {
    if (!title.trim() || !reward || Number(reward) <= 0) {
      alert("টাস্কের নাম ও সঠিক রিওয়ার্ড দাও");
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: title,
        reward: Number(reward),
        status: "Active",
      },
    ]);

    setTitle("");
    setReward("");
    alert("Demo task যোগ হয়েছে!");
  }

  function toggleTask(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Active" ? "Inactive" : "Active",
            }
          : task
      )
    );
  }

  return (
    <main style={{ maxWidth: "900px", margin: "30px auto", padding: "20px" }}>
      <h1>Admin Task Management</h1>
      <p>এখান থেকে টাস্ক তৈরি ও নিয়ন্ত্রণ করতে পারবে।</p>

      <Link href="/admin">← Admin Dashboard</Link>

      <hr style={{ margin: "20px 0" }} />

      <h2>নতুন টাস্ক তৈরি করো</h2>

      <input
        placeholder="টাস্কের নাম"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", padding: "12px", width: "100%", margin: "10px 0" }}
      />

      <input
        type="number"
        placeholder="রিওয়ার্ড (৳)"
        value={reward}
        onChange={(e) => setReward(e.target.value)}
        style={{ display: "block", padding: "12px", width: "100%", margin: "10px 0" }}
      />

      <button onClick={addTask} style={{ padding: "12px 20px", cursor: "pointer" }}>
        + Add Task
      </button>

      <hr style={{ margin: "25px 0" }} />

      <h2>সব টাস্ক ({tasks.length})</h2>

      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            margin: "12px 0",
          }}
        >
          <h3>{task.title}</h3>
          <p>রিওয়ার্ড: ৳{task.reward}</p>
          <p>স্ট্যাটাস: {task.status}</p>

          <button
            onClick={() => toggleTask(task.id)}
            style={{ padding: "9px 15px", cursor: "pointer" }}
          >
            {task.status === "Active" ? "Deactivate" : "Activate"}
          </button>
        </div>
      ))}
    </main>
  );
}