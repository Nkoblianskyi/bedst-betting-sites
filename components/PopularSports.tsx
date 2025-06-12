const popularSports = [
  {
    icon: "⚽",
    name: "Fodbold",
    description:
      "Den mest populære sportsgren at spille på i Danmark. Superligaen, Premier League og Champions League er favoritter.",
    popularity: "95%",
  },
  {
    icon: "🎾",
    name: "Tennis",
    description: "Mange danskere spiller på de store Grand Slam-turneringer samt ATP og WTA-turneringer.",
    popularity: "78%",
  },
  {
    icon: "🤾",
    name: "Håndbold",
    description: "Særlig populært blandt danske spillere, især under VM, EM og OL.",
    popularity: "85%",
  },
  {
    icon: "🏒",
    name: "Ishockey",
    description: "Dansk Metal Ligaen samt NHL tiltrækker mange væddemål.",
    popularity: "65%",
  },
  {
    icon: "🎮",
    name: "eSport",
    description: "CS:GO, League of Legends og Dota 2 har vundet stor popularitet blandt yngre spillere.",
    popularity: "72%",
  },
  {
    icon: "🏀",
    name: "Basketball",
    description: "NBA er en af de mest spillede ligaer internationalt også blandt danskere.",
    popularity: "58%",
  },
]

export default function PopularSports() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-[#fbbf24] rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-3/4 right-1/5 w-1 h-1 bg-[#dc2626] rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-[#fbbf24] rounded-full animate-bounce opacity-20"></div>
      </div>
    </section>
  )
}
