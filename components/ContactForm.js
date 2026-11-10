"use client";
import { useState } from "react";

const field = "w-full border border-line rounded-xl px-4 py-3 text-sm focus:border-ink outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("sending");
    try {
      // POST ke route handler; simpan ke Supabase dikerjakan di app/api/contact/route.js
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <label className="block text-sm">Name
        <input name="name" required className={`${field} mt-1`} />
      </label>
      <label className="block text-sm">Email
        <input name="email" type="email" required className={`${field} mt-1`} />
      </label>
      <label className="block text-sm">Message
        <textarea name="message" required rows={5} className={`${field} mt-1`} />
      </label>
      <button disabled={status === "sending"} className="bg-brand text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-ink transition-colors disabled:opacity-50">
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" && <p role="status" className="text-sm">Message sent. We will reply by email.</p>}
      {status === "error" && <p role="alert" className="text-sm text-brand">Message could not be sent. Try again or email us directly.</p>}
    </form>
  );
}
