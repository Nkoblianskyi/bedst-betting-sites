"use client"

import { useState } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [showAgeModal, setShowAgeModal] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)

  const scrollToTop5 = () => {
    const element = document.getElementById("top-5-section")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-4 sm:py-4 md:py-8 lg:py-8 relative overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-[350px] lg:min-h-[350px] flex items-center hero-gradient floating-particles">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/5 w-1 h-1 sm:w-2 sm:h-2 bg-[#fbbf24] rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-[#dc2626] rounded-full opacity-40 animate-bounce"></div>
        <div
          className="absolute top-1/4 right-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-[#fbbf24] rounded-full opacity-30"
          style={{ animation: "float 4s ease-in-out infinite" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#dc2626] rounded-full opacity-50"
          style={{ animation: "float 6s ease-in-out infinite reverse" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-1 h-1 sm:w-2 sm:h-2 bg-[#fbbf24] rounded-full opacity-20"
          style={{ animation: "float 5s ease-in-out infinite" }}
        ></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10 w-full">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2 sm:px-0">
            Find de <span className="text-neon">bedste betting sider</span> i{" "}
            <span className="text-red-neon">Danmark</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed px-3 sm:px-4 md:px-0 max-w-4xl mx-auto">
            Opdateret liste over de sikreste og bedste danske betting sider - sammenlign bonusser og find din favorit!
          </p>

          {/* Mobile-first button layout */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8 px-3 sm:px-4 md:px-0 max-w-4xl mx-auto">
            <button
              onClick={() => setShowAgeModal(true)}
              className="w-full sm:w-auto bg-[#dc2626] hover:bg-[#b91c1c] text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm md:text-base font-semibold transition-colors duration-300 flex items-center justify-center gap-1 sm:gap-2 min-h-[40px] sm:min-h-[44px]"
            >
              <span className="text-sm sm:text-base">⚠️</span>
              <span className="whitespace-nowrap">18+ | Spil ansvarligt!</span>
            </button>

            <button
              onClick={() => setShowTermsModal(true)}
              className="w-full sm:w-auto bg-[#333333] hover:bg-[#444444] text-[#fbbf24] px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm md:text-base font-semibold transition-colors duration-300 border border-[#fbbf24]/30 hover:border-[#fbbf24] min-h-[40px] sm:min-h-[44px] flex items-center justify-center"
            >
              <span className="whitespace-nowrap text-center">Regler og vilkår gælder</span>
            </button>

            <div className="w-full sm:w-auto bg-[#fbbf24] text-black px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg text-xs sm:text-sm md:text-base font-semibold flex items-center justify-center gap-1 sm:gap-2 hover:bg-[#f59e0b] transition-colors duration-300 min-h-[40px] sm:min-h-[44px]">
              <Image src="/flag.png" alt="Danish Flag" width={20} height={20} />
              <span className="whitespace-nowrap">Dansk licens garanteret</span>
            </div>
          </div>
        </div>
      </div>

      {/* Age Restriction Modal */}
      {showAgeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-[#1a1a1a] rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg p-4 sm:p-6 relative border border-[#333333] max-h-[90vh] overflow-y-auto mx-3">
            <button
              onClick={() => setShowAgeModal(false)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-white transition-colors duration-300 text-lg sm:text-xl"
            >
              ✕
            </button>

            <div className="text-center mb-4 sm:mb-6 pr-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⚠️</div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#dc2626] mb-2">18+ Kun for voksne</h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">
              <p className="hover:text-white transition-colors duration-300">
                <strong className="text-[#fbbf24]">Aldersgrænse:</strong> Du skal være mindst 18 år for at deltage i
                gambling aktiviteter på danske licenserede sider.
              </p>

              <p className="hover:text-white transition-colors duration-300">
                <strong className="text-[#fbbf24]">Ansvarligt spil:</strong> Gambling skal være underholdning, ikke en
                måde at tjene penge på. Spil kun med beløb, du har råd til at tabe.
              </p>

              <p className="hover:text-white transition-colors duration-300">
                <strong className="text-[#fbbf24]">Sæt grænser:</strong> Brug de værktøjer, som betting sider tilbyder
                til at sætte indskuds-, tab- og tidsgrænser.
              </p>

              <div className="bg-[#dc2626]/20 border border-[#dc2626] rounded-lg p-3 sm:p-4 mt-4 hover:bg-[#dc2626]/30 transition-colors duration-300">
                <p className="text-[#dc2626] font-semibold mb-2 text-sm sm:text-base">Har du brug for hjælp?</p>
                <p className="text-xs sm:text-sm">Kontakt disse organisationer:</p>
                <div className="mt-2 space-y-1">
                  <p className="hover:text-white transition-colors duration-300 text-xs sm:text-sm">
                    • <strong>StopSpillet.dk</strong> - Gratis rådgivning
                  </p>
                  <p className="hover:text-white transition-colors duration-300 text-xs sm:text-sm">
                    • <strong>ROFUS.nu</strong> - Behandling af spilleproblemer
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowAgeModal(false)}
              className="w-full mt-4 sm:mt-6 bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-semibold py-3 rounded-lg transition-colors duration-300 text-sm sm:text-base"
            >
              Forstået
            </button>
          </div>
        </div>
      )}

      {/* Terms and Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-[#1a1a1a] rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg p-4 sm:p-6 relative border border-[#333333] max-h-[90vh] overflow-y-auto mx-3">
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-white transition-colors duration-300 text-lg sm:text-xl"
            >
              ✕
            </button>

            <div className="text-center mb-4 sm:mb-6 pr-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📋</div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#fbbf24] mb-2">Regler og Vilkår</h2>
            </div>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-300">
              <div className="hover:bg-[#2a2a2a] p-3 rounded-lg transition-colors duration-300">
                <h3 className="text-[#fbbf24] font-semibold mb-2 text-sm sm:text-base">Generelle betingelser</h3>
                <p className="text-xs sm:text-sm">
                  Alle anbefalede betting sider er licenserede af Spillemyndigheden i Danmark og overholder danske love
                  og regler.
                </p>
              </div>

              <div className="hover:bg-[#2a2a2a] p-3 rounded-lg transition-colors duration-300">
                <h3 className="text-[#fbbf24] font-semibold mb-2 text-sm sm:text-base">Bonusvilkår</h3>
                <div className="text-xs sm:text-sm space-y-1">
                  <p>• Alle velkomstbonusser har omsætningskrav mellem 1x-10x</p>
                  <p>• Bonusser skal bruges inden for angivet tidsramme</p>
                  <p>• Læs altid de fulde vilkår på den enkelte betting side</p>
                </div>
              </div>

              <div className="hover:bg-[#2a2a2a] p-3 rounded-lg transition-colors duration-300">
                <h3 className="text-[#fbbf24] font-semibold mb-2 text-sm sm:text-base">Udbetaling og verifikation</h3>
                <div className="text-xs sm:text-sm space-y-1">
                  <p>• Alle gevinster udbetales efter succesfuld identitetsverifikation</p>
                  <p>• Udbetalingstider varierer mellem 1-5 arbejdsdage</p>
                  <p>• Dokumentation kan kræves ved første udbetaling</p>
                </div>
              </div>

              <div className="hover:bg-[#2a2a2a] p-3 rounded-lg transition-colors duration-300">
                <h3 className="text-[#fbbf24] font-semibold mb-2 text-sm sm:text-base">Kundeservice</h3>
                <div className="text-xs sm:text-sm space-y-1">
                  <p>• Kontakt betting sidens support ved tekniske problemer</p>
                  <p>• Dansk kundeservice tilgængelig på alle anbefalede sider</p>
                  <p>• Support via live chat, email eller telefon</p>
                </div>
              </div>

              <div className="bg-[#dc2626]/20 border border-[#dc2626] rounded-lg p-3 sm:p-4 hover:bg-[#dc2626]/30 transition-colors duration-300">
                <h3 className="text-[#dc2626] font-semibold mb-2 text-sm sm:text-base">Ansvarligt spil ressourcer</h3>
                <p className="mb-2 text-xs sm:text-sm">Hvis du oplever problemer med dit spil:</p>
                <div className="space-y-1 text-xs sm:text-sm">
                  <p className="hover:text-white transition-colors duration-300">
                    • <strong>StopSpillet.dk</strong> - National hotline og chat
                  </p>
                  <p className="hover:text-white transition-colors duration-300">
                    • <strong>ROFUS.nu</strong> - Professionel behandling
                  </p>
                  <p className="hover:text-white transition-colors duration-300">
                    • <strong>Spillemyndigheden.dk</strong> - Officiel information
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowTermsModal(false)}
              className="w-full mt-4 sm:mt-6 bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-semibold py-3 rounded-lg transition-colors duration-300 text-sm sm:text-base"
            >
              Acceptér og luk
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
