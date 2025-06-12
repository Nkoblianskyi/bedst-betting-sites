import SafeGambling from "@/components/SafeGambling"

export default function SafeGamblingPage() {
  return (
    <div className="bg-[#0a0a0a]">
      <SafeGambling />

      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Tegn på <span className="text-red-neon">Problemspil</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1a1a1a] border border-[#dc2626] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#dc2626] mb-4">Advarselstegn</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Spiller for mere end du har råd til</li>
                  <li>• Lyver om dit spil overfor familie/venner</li>
                  <li>• Forsøger at vinde tabte penge tilbage</li>
                  <li>• Spil påvirker dit arbejde eller forhold</li>
                  <li>• Låner penge til at spille for</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] border border-[#fbbf24] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#fbbf24] mb-4">Ansvarligt Spil Tips</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Sæt et budget og hold dig til det</li>
                  <li>• Spil kun for underholdning</li>
                  <li>• Tag pauser fra spil</li>
                  <li>• Spil aldrig når du er påvirket</li>
                  <li>• Søg hjælp hvis du har problemer</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Har du brug for <span className="text-neon">hjælp?</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Der er altid hjælp at få. Kontakt en af disse organisationer:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="#"
                  className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  StopSpillet.dk
                </a>
                <a
                  href="#"
                  className="bg-[#1a1a1a] hover:bg-[#333333] text-[#fbbf24] font-semibold py-3 px-6 rounded-lg transition-colors border border-[#fbbf24]"
                >
                  Spillemyndigheden
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
