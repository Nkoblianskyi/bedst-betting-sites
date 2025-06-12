import AboutUs from "@/components/AboutUs"

export default function About() {
  return (
    <div className="bg-[#0a0a0a]">
      <AboutUs />

      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Vores <span className="text-neon">Mission</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-[#1a1a1a] p-6 rounded-lg border border-[#333333] hover:border-[#fbbf24] transition-all duration-300">
                <div className="bg-[#dc2626] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-[#fbbf24] mb-3">Sikkerhed Først</h3>
                <p className="text-gray-300">
                  Vi anbefaler kun licenserede og sikre betting sider, der overholder danske regler.
                </p>
              </div>

              <div className="text-center bg-[#1a1a1a] p-6 rounded-lg border border-[#333333] hover:border-[#fbbf24] transition-all duration-300">
                <div className="bg-[#dc2626] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-[#fbbf24] mb-3">Uafhængige Tests</h3>
                <p className="text-gray-300">Vores eksperter tester hver betting side grundigt før vi anbefaler dem.</p>
              </div>

              <div className="text-center bg-[#1a1a1a] p-6 rounded-lg border border-[#333333] hover:border-[#fbbf24] transition-all duration-300">
                <div className="bg-[#dc2626] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-[#fbbf24] mb-3">Opdateret Indhold</h3>
                <p className="text-gray-300">
                  Vi opdaterer vores anmeldelser og bonusser månedligt for at sikre aktualitet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
