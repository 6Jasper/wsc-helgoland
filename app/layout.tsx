import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wassersportclub Helgoland e.V.",
    template: "%s | WSC Helgoland",
  },
  description:
    "Der Wassersportclub Helgoland e.V. organisiert seit 1965 den Sportbootverkehr auf Helgoland. Vereinsanlagen im Süd- und Nordosthafen, Helgoländer Herbstregatta, Mitveranstalter der Nordseewoche.",
  metadataBase: new URL("https://wsc-helgoland.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Wassersportclub Helgoland e.V.",
    description:
      "Segel- und Motorbootverein auf Helgoland. Vereinsanlagen im Süd- und Nordosthafen, Helgoländer Herbstregatta.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={openSans.variable}>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
