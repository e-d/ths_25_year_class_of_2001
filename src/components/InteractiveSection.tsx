"use client";

import { useState } from "react";
import RsvpForm from "./RsvpForm";
import GuestList from "./GuestList";
import FoodSignupForm from "./FoodSignupForm";
import FoodSignups from "./FoodSignups";

export default function InteractiveSection() {
  const [guestRefreshKey, setGuestRefreshKey] = useState(0);
  const [foodRefreshKey, setFoodRefreshKey] = useState(0);

  return (
    <>
      {/* RSVP Section */}
      <section className="bg-warrior-gold/10 px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-warrior-blue mb-6 sm:text-4xl">
            RSVP
          </h2>
          <RsvpForm onSuccess={() => setGuestRefreshKey((k) => k + 1)} />
        </div>
      </section>

      {/* Guest List Section */}
      <section className="bg-warrior-white px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-warrior-blue mb-6 sm:text-4xl">
            Guest List
          </h2>
          <GuestList refreshKey={guestRefreshKey} />
        </div>
      </section>

      {/* Food Signup Form Section */}
      <section className="bg-warrior-gold/10 px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-warrior-blue mb-4 sm:text-4xl">
            Food Sign-Up
          </h2>
          <p className="text-gray-600 mb-6">
            Pulled pork sandwiches and drinks are provided. Sign up to bring a side dish, dessert, or anything else!
          </p>
          <FoodSignupForm onSuccess={() => setFoodRefreshKey((k) => k + 1)} />
        </div>
      </section>

      {/* Food Signups List Section */}
      <section className="bg-warrior-white px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-warrior-blue mb-6 sm:text-4xl">
            What People Are Bringing
          </h2>
          <FoodSignups refreshKey={foodRefreshKey} />
        </div>
      </section>
    </>
  );
}
