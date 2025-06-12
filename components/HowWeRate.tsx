import { Shield, Gift, CreditCard, Target, Smartphone, Users, Headphones } from "lucide-react"

const criteria = [
  {
    icon: Shield,
    title: "Sikkerhed & Licens",
    description: "Vi tjekker altid at betting siden har gyldig dansk licens og følger alle regler.",
  },
  {
    icon: Gift,
    title: "Bonus & Kampagner",
    description: "Vi vurderer velkomstbonusser, løbende tilbud og deres vilkår og betingelser.",
  },
  {
    icon: CreditCard,
    title: "Betalingsmetoder",
    description: "Hurtige ind- og udbetalinger med populære danske betalingsmetoder.",
  },
  {
    icon: Target,
    title: "Spiludvalg & Odds",
    description: "Bredt udvalg af sportsgrene og konkurrencedygtige odds på alle markeder.",
  },
  {
    icon: Smartphone,
    title: "Mobilvenlighed",
    description: "Optimeret mobil oplevelse eller dedikeret app til iOS og Android.",
  },
  {
    icon: Users,
    title: "Brugeroplevelse",
    description: "Intuitiv navigation, hurtig loading og nem at finde rundt på siden.",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Dansk kundeservice med hurtige svartider via chat, email eller telefon.",
  },
]

export default function HowWeRate() {
  return (
    <section className="py-12 md:py-16 bg-[#0a0a0a] moving-gradient dots-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Sådan <span className="text-neon">vurderer</span> vi betting sider
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 md:px-0">
            Vores eksperter bruger 7 nøgleparametre til at vurdere og rangere de bedste betting sider
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {criteria.map((criterion, index) => (
            <div
              key={index}
              className="text-center p-4 md:p-6 rounded-lg border border-[#333333] bg-[#1a1a1a] hover:border-[#fbbf24] transition-all duration-300"
            >
              <div className="bg-[#dc2626] text-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4">
                <criterion.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#fbbf24] mb-2 md:mb-3">{criterion.title}</h3>
              <p className="text-sm md:text-base text-gray-300">{criterion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
