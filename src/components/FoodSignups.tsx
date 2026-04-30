"use client";

import { useEffect, useState, useCallback } from "react";

type Signup = {
  firstName: string;
  bringing: string;
};

export default function FoodSignups({ refreshKey }: { refreshKey?: number }) {
  const [signups, setSignups] = useState<Signup[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSignups = useCallback(async () => {
    const res = await fetch("/api/food-signups");
    if (res.ok) {
      setSignups(await res.json());
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchSignups();
  }, [fetchSignups, refreshKey]);

  if (loading) {
    return <p className="text-gray-400 text-sm">Loading food signups…</p>;
  }

  if (signups.length === 0) {
    return (
      <p className="text-gray-500">
        No food signups yet — RSVP above and let us know what you&apos;re bringing!
      </p>
    );
  }

  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {signups.map((s) => (
        <li
          key={`${s.firstName}-${s.bringing}`}
          className="rounded-lg bg-warrior-gold/10 border border-warrior-gold/30 px-4 py-2 text-sm text-gray-800"
        >
          <span className="font-medium">{s.firstName}</span>{" "}
          <span className="text-gray-500">— {s.bringing}</span>
        </li>
      ))}
    </ul>
  );
}
