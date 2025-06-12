"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { bettingSites } from "@/data/bettingSites"

// Використовуємо перші 3 елементи з bettingSites
const topBonuses = bettingSites.slice(0, 3).map((site) => ({
  name: site.name,
  bonus: site.bonus,
  logo: site.logo,
  url: site.url, // Ensure url is included in the topBonuses array
}))

export default function BonusModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000) // Show modal after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
      <div className="bg-[#1a1a1a] rounded-lg w-full max-w-sm sm:max-w-md p-4 sm:p-6 relative border border-[#333333] mx-3 animate-in fade-in-0 zoom-in-95 duration-300 shadow-2xl shadow-[#fbbf24]/10">
        {/* Animated background effects */}
        <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#dc2626] via-[#fbbf24] to-[#dc2626] animate-pulse"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#fbbf24] rounded-full animate-ping opacity-30"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#dc2626] rounded-full animate-bounce opacity-40"></div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="text-center mb-4 sm:mb-6 pr-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#fbbf24] mb-2 animate-pulse">
            Top Betting Bonusser
          </h2>
          <p className="text-sm sm:text-base text-gray-300">Eksklusiv adgang til de bedste bonusser</p>
        </div>

        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          {topBonuses.map((bonus, index) => (
            <a
              key={index} // Added key property here
              href={bonus.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 sm:p-3 border border-[#333333] rounded-lg bg-[#0a0a0a] hover:border-[#fbbf24] hover:bg-[#1a1a1a] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#fbbf24]/20 group cursor-pointer"
            >
              <Image
                src={bonus.logo || "/placeholder.svg"}
                alt={`${bonus.name} logo`}
                width={80}
                height={30}
                className="mr-2 sm:mr-4 flex-shrink-0 group-hover:brightness-110 transition-all duration-300"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white text-sm sm:text-base truncate group-hover:text-[#fbbf24] transition-colors duration-300">
                  {bonus.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#fbbf24] font-medium group-hover:text-white transition-colors duration-300">
                  {bonus.bonus}
                </p>
              </div>
              <div className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-2 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm font-semibold transition-all duration-300 flex-shrink-0 group-hover:bg-[#fbbf24] group-hover:text-black group-hover:scale-110">
                Claim
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={() => setIsOpen(false)}
            className="flex-1 bg-[#333333] hover:bg-[#444444] text-gray-300 font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 text-sm sm:text-base hover:scale-105 hover:shadow-lg"
          >
            View Full List
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="flex-1 btn-primary text-sm sm:text-base py-2 sm:py-3 hover:scale-105 hover:shadow-xl hover:shadow-[#fbbf24]/30 transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
