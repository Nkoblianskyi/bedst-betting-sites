import { bettingSites } from "@/data/bettingSites"
import { Star, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function Top5BettingSites() {
  return (
    <section id="top-5-section" className="section-dark py-8 sm:py-12 md:py-16 lg:py-20 relative pulsing-glow">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <div className="grid gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {bettingSites.map((site, index) => (
            <div key={site.id} className="betting-card p-3 sm:p-4 md:p-6 lg:p-8 relative hover-lift">
              <div className="absolute top-2 sm:top-3 md:top-4 lg:top-6 right-2 sm:right-3 md:right-4 lg:right-6 bg-gradient-to-r from-[#dc2626] to-[#fbbf24] text-black rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg z-10">
                #{index + 1}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center pt-6 sm:pt-8 md:pt-4 lg:pt-0">
                <div className="md:col-span-1 text-center">
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={`${site.name} logo`}
                    width={120}
                    height={60}
                    className="mx-auto mb-2 md:mb-4 filter brightness-110 hover:brightness-125 transition-all duration-300 max-w-[100px] sm:max-w-[120px] h-auto"
                  />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-[#fbbf24] transition-colors duration-300">
                    {site.name}
                  </h3>
                </div>

                <div className="md:col-span-1">
                  <div className="flex items-center justify-center md:justify-start mb-2 md:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors duration-300 ${
                          i < Math.floor(site.rating) ? "text-[#fbbf24] fill-current" : "text-gray-600"
                        }`}
                      />
                    ))}
                    <span className="ml-2 md:ml-3 font-bold text-[#fbbf24] text-sm sm:text-base md:text-lg">
                      {site.rating}/5
                    </span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start text-gray-300 hover:text-white transition-colors duration-300">
                    <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-[#fbbf24]" />
                    <span className="text-xs md:text-sm">{site.votes.toLocaleString()} opkald</span>
                  </div>
                </div>

                <div className="md:col-span-1 text-center md:text-left">
                  <div className="neon-border bg-gradient-to-r from-[#fbbf24]/20 to-[#dc2626]/20 text-[#fbbf24] px-2 sm:px-3 md:px-4 py-2 md:py-3 rounded-lg font-bold mb-3 md:mb-4 text-sm sm:text-base md:text-lg hover:bg-[#fbbf24]/10 transition-colors duration-300">
                    {site.bonus}
                  </div>
                  <div className="flex flex-wrap gap-1 md:gap-2 justify-center md:justify-start">
                    {site.features.slice(0, 2).map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#333333] text-[#fbbf24] px-2 md:px-3 py-1 md:py-2 rounded-full border border-[#fbbf24]/30 hover:bg-[#444444] transition-colors duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-1 text-center">
                  <button className="btn-primary w-full mb-2 md:mb-3 text-sm sm:text-base md:text-lg font-bold py-3 md:py-4">
                    Hent Bonus
                  </button>
                  <p className="text-xs text-gray-400 hover:text-gray-300 transition-colors duration-300">
                    18+ | Spil ansvarligt
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
