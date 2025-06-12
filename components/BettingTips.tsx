const bettingTips = [
  {
    title: "Forstå oddsene",
    description:
      "Lær forskellen mellem decimalodds og andre odds-formater. Forstå hvordan odds afspejler sandsynlighed.",
  },
  {
    title: "Sæt et budget",
    description: "Spil aldrig for mere, end du har råd til at tabe. Bestem dit månedlige betting-budget på forhånd.",
  },
  {
    title: "Lav research",
    description: "Kend holdenes form og statistik, før du placerer dit væddemål. Information er din bedste ven.",
  },
  {
    title: "Undgå jagt af tab",
    description:
      "Tabt væddemål? Lad være med at forsøge at 'vinde det tilbage' hurtigt. Det fører sjældent til succes.",
  },
  {
    title: "Hold styr på dine væddemål",
    description: "Brug en betting journal eller app til at tracke dine væddemål og analysere din performance.",
  },
]

export default function BettingTips() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#0a0a0a] relative floating-particles">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/30 to-[#0a0a0a] opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Bliv <span className="text-neon">bedre</span> til betting — enkle tips til{" "}
            <span className="text-red-neon">begyndere</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 md:px-0">
            Hvis du er ny inden for online betting, kan disse tips hjælpe dig med at få en bedre oplevelse og undgå
            almindelige faldgruber.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12 md:mb-16">
          {bettingTips.map((tip, index) => (
            <div
              key={index}
              className="card-dark p-6 md:p-8 text-center relative overflow-hidden group hover:border-[#fbbf24] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#fbbf24]/5 to-[#dc2626]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#dc2626] to-[#fbbf24] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-lg md:text-2xl">
                  {index + 1}
                </div>

                <h3 className="text-lg md:text-xl font-bold text-[#fbbf24] mb-3 md:mb-4 group-hover:text-white transition-colors">
                  {tip.title}
                </h3>

                <p className="text-sm md:text-base text-gray-300 leading-relaxed">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 border border-[#333333]">
            <h3 className="text-xl md:text-2xl font-bold text-[#fbbf24] mb-3 md:mb-4">Vigtige principper</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-3 mt-1">•</span>
                <span>Betting skal være underholdning, ikke en indkomstkilde</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-3 mt-1">•</span>
                <span>Start med små indsatser, mens du lærer</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-3 mt-1">•</span>
                <span>Fokuser på sportsgrene, du kender godt</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-3 mt-1">•</span>
                <span>Tag pauser og spil ikke når du er påvirket</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] rounded-xl p-6 md:p-8 border border-[#333333]">
            <h3 className="text-xl md:text-2xl font-bold text-[#fbbf24] mb-3 md:mb-4">Almindelige fejl at undgå</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-3 mt-1">•</span>
                <span>At spille på for mange forskellige markeder</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-3 mt-1">•</span>
                <span>At ignorere bankroll management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-3 mt-1">•</span>
                <span>At spille baseret på følelser frem for logik</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#dc2626] mr-3 mt-1">•</span>
                <span>At ikke læse bonusvilkår grundigt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#dc2626]/20 to-[#fbbf24]/20 rounded-xl p-8 border border-[#fbbf24]/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Husk altid ansvarligt spil</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Betting skal være sjovt og spændende. Hvis du nogensinde føler, at dit spil er ude af kontrol, så søg
              hjælp med det samme. Der er altid professionel hjælp tilgængelig.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                StopSpillet.dk
              </a>
              <a
                href="#"
                className="bg-[#333333] hover:bg-[#444444] text-[#fbbf24] px-6 py-3 rounded-lg font-semibold transition-colors border border-[#fbbf24]/30"
              >
                ROFUS.nu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
