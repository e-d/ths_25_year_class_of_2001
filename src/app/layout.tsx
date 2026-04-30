import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "THS Class of 2001 — 25-Year Reunion",
  description:
    "Join the Timpview High School Class of 2001 for our 25-year reunion on Saturday, June 20, 2026 in Taylorsville, UT. RSVP, donate, and reconnect.",
  openGraph: {
    title: "THS Class of 2001 — 25-Year Reunion",
    description:
      "Saturday, June 20, 2026 in Taylorsville, UT. Come celebrate 25 years with the Timpview Warriors!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
