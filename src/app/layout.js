import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://reporide.vercel.app"),
  title: {
    default: "Repo Ride Rentals | Premium Bike & Scooty Rentals in Varanasi",
    template: "%s | Repo Ride Rentals",
  },
  description: "Explore Kashi with freedom. Rent premium, well-maintained bikes and scooters online with Repo Ride Rentals in Varanasi. Instant booking, transparent pricing.",
  keywords: ["Bike rental Varanasi", "Scooty rental Kashi", "Rent bike Varanasi", "Repo Ride Rentals", "Varanasi travel", "Scooter on rent"],
  openGraph: {
    title: "Repo Ride Rentals | Premium Bike & Scooty Rentals in Varanasi",
    description: "Explore Kashi with freedom. Rent premium, well-maintained bikes and scooters online.",
    url: "https://reporiderentals.com",
    siteName: "Repo Ride Rentals",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Repo Ride Rentals Varanasi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div id="root-layout">
          {children}
        </div>
      </body>
    </html>
  );
}
