export interface BettingSite {
  id: number
  name: string
  url: string
  bonus: string
  logo: string
  rating: number
  votes: number
  features: string[]
  description: string
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "GetLucky",
    url: "https://www.getlucky.com/",
    bonus: "Få et 100 kr. FREE BET",
    logo: "/lucky.png",
    rating: 5,
    votes: 31156,
    features: ["Free bets", "Daglige tilbud", "VIP program"],
    description: "GetLucky er kendt for deres generøse free bet tilbud og daglige kampagner for eksisterende kunder.",
  },
  {
    id: 2,
    name: "Betsson",
    url: "https://www.betsson.dk/betting",
    bonus: "Fodbold Kombi-boost op til 70%",
    logo: "/betsson.png",
    rating: 5,
    votes: 28971,
    features: ["Kombi-boost", "Cash out", "Live betting"],
    description:
      "Betsson tilbyder fantastiske kombi-boosts og har en af de bedste live betting oplevelser på markedet.",
  },
  {
    id: 3,
    name: "LeoVegas",
    url: "https://www.leovegas.dk/",
    bonus: "Få op til 1.000 kr. i kontanter",
    logo: "/lasvegas.svg",
    rating: 4.9,
    votes: 24987,
    features: ["Kontant bonus", "Mobil-optimeret", "24/7 support"],
    description: "LeoVegas er kongen af mobil betting med en fremragende app og hurtig kundeservice.",
  },
  {
    id: 4,
    name: "Expekt",
    url: "https://www.expekt.dk/",
    bonus: "Få 500 kr. live FREE BET",
    logo: "/expekt.png",
    rating: 4.8,
    votes: 22654,
    features: ["Live free bets", "Danske odds", "Erfaren operatør"],
    description:
      "Expekt har været på det danske marked i mange år og tilbyder pålidelig betting med fokus på danske sportsgrene.",
  },
]
