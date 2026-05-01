import Image from "next/image";
import InteractiveSection from "@/components/InteractiveSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="relative bg-warrior-blue px-4 py-16 text-center md:px-8 md:py-24 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-8 overflow-hidden rounded-xl border-4 border-warrior-gold shadow-2xl md:mb-12">
            <Image
              src="/t-ville.jpg"
              alt="Taylorsville, Utah"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
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

      {/* Video Section */}
      <section className="bg-warrior-blue/95 px-4 py-10 md:px-8 md:py-14 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="relative w-full overflow-hidden rounded-xl border-2 border-warrior-gold/30 shadow-xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/-YK58fNZbfY?autoplay=1&mute=1&loop=1&playlist=-YK58fNZbfY"
              title="THS Class of 2001"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
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
              <p className="text-sm text-gray-500 italic">5:00 PM</p>
            </div>
            <div className="rounded-xl bg-warrior-blue/5 border border-warrior-blue/10 p-6">
              <div className="text-2xl mb-2">&#x1F4CD;</div>
              <h3 className="font-semibold text-warrior-blue text-lg">Location</h3>
              <p className="mt-1 text-gray-700">Taylorsville High School</p>
              <p className="text-sm text-gray-500 italic">5400 S. Redwood Rd.</p>
            </div>
            <div className="rounded-xl bg-warrior-blue/5 border border-warrior-blue/10 p-6">
              <div className="text-2xl mb-2">&#x1F372;</div>
              <h3 className="font-semibold text-warrior-blue text-lg">Food - Potluck style</h3>
              <p className="mt-1 text-gray-700">Pulled pork sandwiches/drinks provided</p>
              <p className="text-sm text-gray-500">Sign up for what you&apos;re bringing below</p>
            </div>
            <div className="rounded-xl bg-warrior-blue/5 border border-warrior-blue/10 p-6">
              <div className="text-2xl mb-2">&#x1F393;</div>
              <h3 className="font-semibold text-warrior-blue text-lg">Who</h3>
              <p className="mt-1 text-gray-700">Taylorsville High School</p>
              <p className="text-sm text-gray-500 italic">Class of 2001 & +1 adult</p>
            </div>
          </div>
        </div>
      </section>

      <InteractiveSection />

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
            Questions? Reach out to any of us:
          </p>
          <ul className="mt-3 flex flex-col items-center gap-1 text-sm">
            <li>
              <a
                href="mailto:chalisefarr2@gmail.com"
                className="text-warrior-gold hover:underline"
              >
                Chalise Farr
              </a>
            </li>
            <li>
              <a
                href="mailto:ed.st.louis@gmail.com"
                className="text-warrior-gold hover:underline"
              >
                Ed St. Louis
              </a>
            </li>
            <li>
              <a
                href="mailto:heidiabrown@gmail.com"
                className="text-warrior-gold hover:underline"
              >
                Heidi Brown
              </a>
            </li>
            <li>
              <a
                href="mailto:tessac422@gmail.com"
                className="text-warrior-gold hover:underline"
              >
                Tessa Cutler
              </a>
            </li>
          </ul>
          <div className="mt-4 h-px w-16 mx-auto bg-warrior-gold/40" />
          <p className="mt-4 text-warrior-white/50 text-xs">
            Made with love for the Class of 2001
          </p>
        </div>
      </footer>
    </div>
  );
}
