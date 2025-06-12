import { Shield, AlertTriangle } from "lucide-react"

const partners = [
  { name: "Ansvarligt Spil", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Spillemyndigheden", logo: "/placeholder.svg?height=60&width=120" },
  { name: "StopSpillet", logo: "/placeholder.svg?height=60&width=120" },
  { name: "ROFUS", logo: "/placeholder.svg?height=60&width=120" },
  { name: "GambleAware", logo: "/placeholder.svg?height=60&width=120" },
  { name: "GameCare", logo: "/placeholder.svg?height=60&width=120" },
]

export default function SafeGambling() {
  return (
    <section className="section-gradient py-12 md:py-16 lg:py-20 relative breathing-bg">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <Shield className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3 text-[#fbbf24]" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Vi støtter <span className="text-neon">ansvarligt spil</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 md:px-0">
            Sikker og ansvarlig betting er vores højeste prioritet. Lær hvordan du kan spille sikkert og undgå
            problemer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="card-dark p-6 md:p-8 text-center">
            <h3 className="text-lg md:text-xl font-bold text-[#fbbf24] mb-3 md:mb-4">Sæt grænser</h3>
            <p className="text-sm md:text-base text-gray-300">
              Bestem på forhånd hvor meget tid og penge du vil bruge på betting. Hold dig til disse grænser, uanset om
              du vinder eller taber.
            </p>
          </div>

          <div className="card-dark p-6 md:p-8 text-center">
            <h3 className="text-lg md:text-xl font-bold text-[#fbbf24] mb-3 md:mb-4">Spil kun for sjov</h3>
            <p className="text-sm md:text-base text-gray-300">
              Betting skal være underholdning, ikke en måde at tjene penge på. Spil aldrig med penge, du har brug for
              til andre ting.
            </p>
          </div>

          <div className="card-dark p-6 md:p-8 text-center">
            <h3 className="text-lg md:text-xl font-bold text-[#fbbf24] mb-3 md:mb-4">Tag pauser</h3>
            <p className="text-sm md:text-base text-gray-300">
              Regelmæssige pauser hjælper dig med at holde perspektivet. Spil aldrig når du er stresset, ked af det
              eller påvirket.
            </p>
          </div>

          <div className="card-dark p-6 md:p-8 text-center">
            <h3 className="text-lg md:text-xl font-bold text-[#fbbf24] mb-3 md:mb-4">Kend tegnene</h3>
            <p className="text-sm md:text-base text-gray-300">
              Vær opmærksom på tegn på problemspil: jagt af tab, løgne om spil, eller at spil påvirker dit arbejde eller
              forhold.
            </p>
          </div>

          <div className="card-dark p-6 md:p-8 text-center">
            <h3 className="text-lg md:text-xl font-bold text-[#fbbf24] mb-3 md:mb-4">Brug værktøjer</h3>
            <p className="text-sm md:text-base text-gray-300">
              Alle licenserede betting sider tilbyder værktøjer som indskudsgrænser, tidsgrænser og selvudelukkelse.
            </p>
          </div>

          <div className="card-dark p-6 md:p-8 text-center">
            <h3 className="text-lg md:text-xl font-bold text-[#fbbf24] mb-3 md:mb-4">Søg hjælp</h3>
            <p className="text-sm md:text-base text-gray-300">
              Hvis du oplever problemer med dit spil, er der altid hjælp at få. Professionel støtte er tilgængelig
              døgnet rundt.
            </p>
          </div>
        </div>

        <div className="red-neon-border bg-gradient-to-r from-[#dc2626]/20 to-[#fbbf24]/20 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-[#dc2626] mr-3" />
            <p className="text-2xl font-bold text-[#dc2626]">Vigtigt at huske</p>
          </div>
          <p className="text-lg text-gray-300 mb-6">
            Gambling kan være vanedannende. Spil kun med penge du har råd til at tabe. Kun for personer over 18 år.
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
            <a
              href="https://www.stopspillet.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              StopSpillet.dk
            </a>
            <a
              href="https://www.rofus.nu/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#333333] hover:bg-[#444444] text-[#fbbf24] font-semibold py-3 px-6 rounded-lg transition-colors border border-[#fbbf24]/30"
            >
              ROFUS.nu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
