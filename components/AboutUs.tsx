export default function AboutUs() {
  return (
    <section className="py-12 md:py-16 bg-[#0a0a0a] relative pulsing-glow">
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-[#0a0a0a] opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8">
            Om <span className="text-neon">BedstBettingSites.com</span>
          </h2>

          <div className="text-base md:text-lg text-gray-300 space-y-4 md:space-y-6 mb-6 md:mb-8 px-4 md:px-0">
            <p>
              BedstBettingSites.com er en uafhængig guide til de bedste danske betting sider. Vi tester, vurderer og
              opdaterer vores lister månedligt for at sikre, at du altid får de mest aktuelle informationer.
            </p>

            <p>
              Vores team af eksperter har mange års erfaring inden for online betting og kender det danske marked til
              bunds. Vi prioriterer sikkerhed, pålidelighed og brugeroplevelse i alle vores anmeldelser.
            </p>
          </div>

          <div className="bg-[#1a1a1a] rounded-lg p-4 md:p-6 border-l-4 border-[#dc2626]">
            <h3 className="text-lg md:text-xl font-bold text-[#fbbf24] mb-2 md:mb-3">Vigtigt at vide</h3>
            <p className="text-sm md:text-base text-gray-300">
              Vi kan modtage kompensation, når du klikker på links og tilmelder dig, men vores anmeldelser er uafhængige
              og baseret på objektive kriterier. Vi anbefaler kun betting sider, som vi selv ville bruge.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
