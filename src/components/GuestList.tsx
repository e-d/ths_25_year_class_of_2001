"use client";

import { useEffect, useState, useCallback } from "react";

type Guest = {
  firstName: string;
  lastName: string;
  plusOne: boolean;
  plusOneName: string | null;
};

export default function GuestList({ refreshKey }: { refreshKey?: number }) {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGuests = useCallback(async () => {
    const res = await fetch("/api/guests");
    if (res.ok) {
      setGuests(await res.json());
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchGuests();
  }, [fetchGuests, refreshKey]);

  if (loading) {
    return <p className="text-gray-400 text-sm">Loading guest list…</p>;
  }

  if (guests.length === 0) {
    return (
      <p className="text-gray-500">
        No RSVPs yet — be the first!
      </p>
    );
  }

  const totalCount = guests.reduce(
    (sum, g) => sum + 1 + (g.plusOne ? 1 : 0),
    0,
  );

  return (
    <div>
      <p className="mb-4 text-sm text-warrior-blue font-semibold">
        {totalCount} {totalCount === 1 ? "person" : "people"} attending
      </p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {guests.map((g) => (
          <li
            key={`${g.firstName}-${g.lastName}`}
            className="rounded-lg bg-warrior-blue/5 border border-warrior-blue/10 px-4 py-2 text-sm text-gray-800"
          >
            {g.firstName} {g.lastName}
            {g.plusOne && g.plusOneName && (
              <span className="text-gray-500"> &amp; {g.plusOneName}</span>
            )}
            {g.plusOne && !g.plusOneName && (
              <span className="text-gray-500"> +1</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
