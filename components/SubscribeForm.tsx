"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("You're subscribed. First digest coming next week.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm font-medium" style={{ color: "var(--gold)" }}>
        {message}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className="flex-1 px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-gray-400 disabled:opacity-50 bg-white"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-8 py-3 text-sm font-semibold text-white rounded transition-opacity hover:opacity-90 disabled:opacity-50 whitespace-nowrap"
        style={{ backgroundColor: "var(--gold)" }}
      >
        {status === "loading" ? "Subscribing…" : "Get the Briefing →"}
      </button>
      {status === "error" && (
        <p className="w-full text-xs text-red-500 mt-1">{message}</p>
      )}
    </form>
  );
}
