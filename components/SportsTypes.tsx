const sportsTypes = [
  { icon: "⚽", name: "Football", description: "Superligaen, Champions League, VM" },
  { icon: "🎾", name: "Tennis", description: "Grand Slam, ATP, WTA turneringer" },
  { icon: "🏀", name: "Basketball", description: "NBA, EuroLeague, danske ligaer" },
  { icon: "🏒", name: "Ice Hockey", description: "NHL, Metal Ligaen, VM i ishockey" },
  { icon: "🏎️", name: "Motorsports", description: "Formel 1, MotoGP, rally" },
  { icon: "🎯", name: "eSports", description: "CS:GO, League of Legends, Dota 2" },
]

export default function SportsTypes() {
  return (
    <section className="py-12 md:py-16 bg-[#0a0a0a] relative section-neon diagonal-stripes">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Sportsgrene du kan <span className="text-red-neon">satse</span> på
          </h2>
          <p className="text-lg md:text-xl text-gray-300">Brede betting muligheder på alle populære sportsgrene</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {sportsTypes.map((sport, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg p-4 md:p-6 text-center border border-[#333333] hover:border-[#fbbf24] transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-2 md:mb-3">{sport.icon}</div>
              <h3 className="text-base md:text-lg font-bold text-[#fbbf24] mb-1 md:mb-2">{sport.name}</h3>
              <p className="text-xs md:text-sm text-gray-300">{sport.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
