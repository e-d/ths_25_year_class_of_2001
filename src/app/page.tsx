import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="relative bg-warrior-blue px-4 py-16 text-center md:px-8 md:py-24 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-8 overflow-hidden rounded-xl border-4 border-warrior-gold shadow-2xl md:mb-12">
            {/* Replace school-photo-placeholder.svg with school-photo.jpg when available */}
            <Image
              src="/school-photo-placeholder.svg"
              alt="THS Class of 2001 school photo"
              width={800}
              height={500}
              className="w-full h-auto"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-warrior-gold sm:text-5xl md:text-6xl">
            THS Class of 2001
          </h1>
          <p className="mt-3 text-xl text-warrior-white sm:text-2xl md:text-3xl">
            25-Year Reunion
          </p>
          <p className="mt-4 text-lg text-warrior-gold/80 font-medium sm:text-xl">
            Saturday, June 20, 2026
          </p>
          <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-warrior-gold" />
        </div>
      </section>

      {/* Event Details Section */}
      <section className="bg-warrior-white px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-warrior-blue text-center mb-8 sm:text-4xl">
            Event Details
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-warrior-blue/5 border border-warrior-blue/10 p-6">
              <div className="text-2xl mb-2">&#x1F4C5;</div>
              <h3 className="font-semibold text-warrior-blue text-lg">Date & Time</h3>
              <p className="mt-1 text-gray-700">Saturday, June 20, 2026</p>
              <p className="text-gray-700">6:00 PM</p>
            </div>
            <div className="rounded-xl bg-warrior-blue/5 border border-warrior-blue/10 p-6">
              <div className="text-2xl mb-2">&#x1F4CD;</div>
              <h3 className="font-semibold text-warrior-blue text-lg">Location</h3>
              <p className="mt-1 text-gray-700">Taylorsville, UT</p>
              <p className="text-sm text-gray-500 italic">Venue details coming soon</p>
            </div>
            <div className="rounded-xl bg-warrior-blue/5 border border-warrior-blue/10 p-6">
              <div className="text-2xl mb-2">&#x1F372;</div>
              <h3 className="font-semibold text-warrior-blue text-lg">Food</h3>
              <p className="mt-1 text-gray-700">Potluck style</p>
              <p className="text-sm text-gray-500">Sign up for what you&apos;re bringing below</p>
            </div>
            <div className="rounded-xl bg-warrior-blue/5 border border-warrior-blue/10 p-6">
              <div className="text-2xl mb-2">&#x1F393;</div>
              <h3 className="font-semibold text-warrior-blue text-lg">Who</h3>
              <p className="mt-1 text-gray-700">Timpview High School</p>
              <p className="text-gray-700">Class of 2001 & guests</p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Placeholder Section */}
      <section className="bg-warrior-gold/10 px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-warrior-blue mb-4 sm:text-4xl">
            RSVP
          </h2>
          <div className="rounded-xl border-2 border-dashed border-warrior-blue/20 bg-warrior-white p-8 md:p-12">
            <p className="text-xl font-semibold text-warrior-blue">RSVP Coming Soon</p>
            <p className="mt-2 text-gray-500">
              We&apos;re setting up the RSVP form. Check back shortly!
            </p>
            {/* S02: RSVP form component will replace this placeholder */}
          </div>
        </div>
      </section>

      {/* Guest List Placeholder Section */}
      <section className="bg-warrior-white px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-warrior-blue mb-4 sm:text-4xl">
            Guest List
          </h2>
          <div className="rounded-xl border-2 border-dashed border-warrior-blue/20 bg-warrior-blue/5 p-8 md:p-12">
            <p className="text-lg text-gray-500">
              Guest list will appear here once RSVPs open.
            </p>
            {/* S02: Guest list component will replace this placeholder */}
          </div>
        </div>
      </section>

      {/* Food Signups Placeholder Section */}
      <section className="bg-warrior-gold/10 px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-warrior-blue mb-4 sm:text-4xl">
            Food Signups
          </h2>
          <div className="rounded-xl border-2 border-dashed border-warrior-blue/20 bg-warrior-white p-8 md:p-12">
            <p className="text-lg text-gray-500">
              Food signup list will appear here. Potluck style — bring your best dish!
            </p>
            {/* S02: Food signups component will replace this placeholder */}
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="bg-warrior-blue px-4 py-12 md:px-8 md:py-16 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-warrior-gold mb-4 sm:text-4xl">
            Help Us Make It Happen
          </h2>
          <p className="text-warrior-white/90 text-lg max-w-xl mx-auto mb-6">
            We&apos;re keeping costs low, but there are still expenses for the venue,
            supplies, and making this night special. If you&apos;d like to chip in,
            we suggest <span className="font-semibold text-warrior-gold">$20 per couple</span> — but
            any amount helps, and it&apos;s totally optional.
          </p>
          <a
            href="https://venmo.com/u/EdStLouis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-warrior-gold px-8 py-4 text-lg font-bold text-warrior-blue shadow-lg transition hover:bg-warrior-gold/90 hover:shadow-xl active:scale-[0.98]"
          >
            Donate via Venmo
          </a>
          <p className="mt-4 text-sm text-warrior-white/60">
            Venmo: @EdStLouis
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warrior-blue/95 px-4 py-8 text-center md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-warrior-white/80 text-sm">
            Questions? Reach out at{" "}
            <a
              href="mailto:ed.st.louis@gmail.com"
              className="text-warrior-gold hover:underline"
            >
              ed.st.louis@gmail.com
            </a>
          </p>
          <div className="mt-4 h-px w-16 mx-auto bg-warrior-gold/40" />
          <p className="mt-4 text-warrior-white/50 text-xs">
            Made with love for the Class of 2001
          </p>
        </div>
      </footer>
    </div>
  );
}
