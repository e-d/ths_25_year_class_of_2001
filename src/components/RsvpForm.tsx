"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error" | "duplicate";

export default function RsvpForm({ onSuccess }: { onSuccess?: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [maidenName, setMaidenName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plusOne, setPlusOne] = useState(false);
  const [plusOneName, setPlusOneName] = useState("");
  const [bringing, setBringing] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        maidenName: maidenName || undefined,
        email,
        phone,
        plusOne,
        plusOneName: plusOne ? plusOneName : undefined,
        bringing: bringing || undefined,
      }),
    });

    if (res.ok) {
      setStatus("success");
      onSuccess?.();
      return;
    }

    const data = await res.json().catch(() => null);
    if (res.status === 409) {
      setStatus("duplicate");
      setErrorMsg(data?.error ?? "This email has already been used to RSVP.");
    } else {
      setStatus("error");
      setErrorMsg(data?.error ?? "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-warrior-blue/5 border border-warrior-blue/20 p-8 text-center">
        <div className="text-4xl mb-3">&#x1F389;</div>
        <p className="text-xl font-semibold text-warrior-blue">You&apos;re in!</p>
        <p className="mt-2 text-gray-600">
          Thanks for RSVPing, {firstName}. We can&apos;t wait to see you on June 20th!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg text-left space-y-5">
      {(status === "error" || status === "duplicate") && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-warrior-blue focus:ring-2 focus:ring-warrior-blue/20 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-warrior-blue focus:ring-2 focus:ring-warrior-blue/20 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="maidenName" className="block text-sm font-medium text-gray-700 mb-1">
          Maiden Name <span className="text-gray-400 font-normal">(if applicable)</span>
        </label>
        <input
          id="maidenName"
          type="text"
          value={maidenName}
          onChange={(e) => setMaidenName(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-warrior-blue focus:ring-2 focus:ring-warrior-blue/20 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-warrior-blue focus:ring-2 focus:ring-warrior-blue/20 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-warrior-blue focus:ring-2 focus:ring-warrior-blue/20 focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          id="plusOne"
          type="checkbox"
          checked={plusOne}
          onChange={(e) => setPlusOne(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-warrior-blue focus:ring-warrior-blue/20"
        />
        <label htmlFor="plusOne" className="text-sm font-medium text-gray-700">
          Bringing a +1?
        </label>
      </div>

      {plusOne && (
        <div>
          <label htmlFor="plusOneName" className="block text-sm font-medium text-gray-700 mb-1">
            +1 Name
          </label>
          <input
            id="plusOneName"
            type="text"
            value={plusOneName}
            onChange={(e) => setPlusOneName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-warrior-blue focus:ring-2 focus:ring-warrior-blue/20 focus:outline-none"
          />
        </div>
      )}

      <div>
        <label htmlFor="bringing" className="block text-sm font-medium text-gray-700 mb-1">
          Bringing food? <span className="text-gray-400 font-normal">(optional — e.g. &quot;pasta salad&quot;)</span>
        </label>
        <input
          id="bringing"
          type="text"
          value={bringing}
          onChange={(e) => setBringing(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-warrior-blue focus:ring-2 focus:ring-warrior-blue/20 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-warrior-blue px-6 py-3 text-sm font-bold text-warrior-white shadow-md transition hover:bg-warrior-blue/90 active:scale-[0.98] disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Count Me In!"}
      </button>
    </form>
  );
}
