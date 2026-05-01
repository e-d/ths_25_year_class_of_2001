"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function FoodSignupForm({ onSuccess }: { onSuccess?: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [item, setItem] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const res = await fetch("/api/food-signups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name.trim(), item: item.trim() }),
    });

    if (res.ok) {
      setStatus("success");
      setItem("");
      onSuccess?.();
      setTimeout(() => setStatus("idle"), 2000);
      return;
    }

    const data = await res.json().catch(() => null);
    setStatus("error");
    setErrorMsg(data?.error ?? "Something went wrong. Please try again.");
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg text-left space-y-4">
      {status === "error" && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      {status === "success" && (
        <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-sm text-green-700">
          Added! Sign up another dish below, or you&apos;re all set.
        </div>
      )}

      <div>
        <label htmlFor="foodName" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="foodName"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Jane Smith"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-warrior-blue focus:ring-2 focus:ring-warrior-blue/20 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="foodItem" className="block text-sm font-medium text-gray-700 mb-1">
          What are you bringing? <span className="text-red-500">*</span>
        </label>
        <input
          id="foodItem"
          type="text"
          required
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="e.g. Pasta salad"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-warrior-blue focus:ring-2 focus:ring-warrior-blue/20 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-warrior-gold px-6 py-3 text-sm font-bold text-warrior-blue shadow-md transition hover:bg-warrior-gold/90 active:scale-[0.98] disabled:opacity-60"
      >
        {status === "submitting" ? "Adding..." : "Sign Up to Bring This"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Bringing more than one dish? Submit again for each item.
      </p>
    </form>
  );
}
