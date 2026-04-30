export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-warrior-white">
      <main className="flex flex-col items-center gap-8 px-6 py-24 text-center">
        <div className="rounded-2xl bg-warrior-blue px-8 py-6 shadow-lg">
          <h1 className="text-4xl font-bold tracking-tight text-warrior-gold sm:text-5xl">
            THS Class of 2001
          </h1>
          <p className="mt-2 text-lg text-warrior-white">25-Year Reunion</p>
        </div>
        <p className="max-w-md text-lg text-warrior-blue">
          Details coming soon. Stay tuned for date, time, location, and RSVP
          information.
        </p>
        <div className="h-1 w-24 rounded-full bg-warrior-gold" />
      </main>
    </div>
  );
}
