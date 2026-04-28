import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Wassersportclub Helgoland e.V.",
    template: "%s · WSC Helgoland",
  },
  description:
    "Der Wassersportclub Helgoland e.V. ist Heimathafen für Segler, Gastlieger und Freunde der Hochseeinsel. Zwei Häfen, Clubhaus, Nordseewoche.",
  metadataBase: new URL("https://wsc-helgoland.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Wassersportclub Helgoland e.V.",
    description:
      "Heimathafen für Segler und Gastlieger auf Helgoland. Zwei Häfen, Clubhaus, Nordseewoche.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
