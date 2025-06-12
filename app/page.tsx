import HeroSection from "@/components/HeroSection"
import Top5BettingSites from "@/components/Top5BettingSites"
import WeeklyBonuses from "@/components/WeeklyBonuses"
import SafeGambling from "@/components/SafeGambling"
import HowWeRate from "@/components/HowWeRate"
import SportsTypes from "@/components/SportsTypes"
import PopularSports from "@/components/PopularSports"
import BettingTips from "@/components/BettingTips"
import AboutUs from "@/components/AboutUs"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Top5BettingSites />
      <WeeklyBonuses />
      <SafeGambling />
      <HowWeRate />
      <SportsTypes />
      <PopularSports />
      <BettingTips />
      <AboutUs />
    </>
  )
}
