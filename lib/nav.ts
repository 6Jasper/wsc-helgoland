export const navGroups = [
  {
    label: "Verein",
    items: [
      { href: "/vorstand", label: "Vorstand & Ansprechpartner" },
      { href: "/satzung", label: "Satzung" },
      { href: "/mitgliedschaft", label: "Mitgliedschaft" },
      { href: "/arbeitsdienst", label: "Arbeitsdienst" },
    ],
  },
  {
    label: "Hafen",
    items: [
      { href: "/haefen", label: "Häfen Helgolands" },
      { href: "/gastlieger", label: "Gastlieger" },
      { href: "/regeln", label: "Hafenregeln" },
      { href: "/clubhaus", label: "Clubhaus" },
    ],
  },
  {
    label: "Segeln",
    items: [
      { href: "/regatten", label: "Regatten" },
    ],
  },
];

export const flatNav = [
  { href: "/haefen", label: "Häfen" },
  { href: "/gastlieger", label: "Gastlieger" },
  { href: "/mitgliedschaft", label: "Mitgliedschaft" },
  { href: "/regatten", label: "Regatten" },
  { href: "/clubhaus", label: "Clubhaus" },
  { href: "/vorstand", label: "Vorstand" },
  { href: "/kontakt", label: "Kontakt" },
];

export const club = {
  name: "Wassersportclub Helgoland e.V.",
  shortName: "WSCH",
  longShortName: "WSC Helgoland",
  tagline: "Segeln, Ankommen, Dazugehören. Auf Deutschlands einziger Hochseeinsel.",
  address: {
    street: "Postfach 1125",
    zip: "27498",
    city: "Helgoland",
  },
  email: "kontakt@wsc-helgoland.de",
  founded: 1965,
  register: {
    court: "Amtsgericht Pinneberg",
    number: "VR 591 PI",
  },
  taxNumber: "18/291/72014",
};
