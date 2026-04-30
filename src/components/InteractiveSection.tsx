"use client";

import { useState } from "react";
import RsvpForm from "./RsvpForm";
import GuestList from "./GuestList";
import FoodSignups from "./FoodSignups";

export default function InteractiveSection() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <>
      {/* RSVP Section */}
      <section className="bg-warrior-gold/10 px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-warrior-blue mb-6 sm:text-4xl">
            RSVP
          </h2>
          <RsvpForm onSuccess={() => setRefreshKey((k) => k + 1)} />
        </div>
      </section>

      {/* Guest List Section */}
      <section className="bg-warrior-white px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-warrior-blue mb-6 sm:text-4xl">
            Guest List
          </h2>
          <GuestList refreshKey={refreshKey} />
        </div>
      </section>

      {/* Food Signups Section */}
      <section className="bg-warrior-gold/10 px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-warrior-blue mb-6 sm:text-4xl">
            Food Signups
          </h2>
          <FoodSignups refreshKey={refreshKey} />
        </div>
      </section>
    </>
  );
}
