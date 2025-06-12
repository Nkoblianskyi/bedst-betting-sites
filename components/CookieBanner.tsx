"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-3 sm:p-4 z-50 shadow-lg">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex-1 pr-0 sm:pr-4">
            <p className="text-xs sm:text-sm leading-relaxed hover:text-gray-200 transition-colors duration-300">
              Vi bruger cookies for at forbedre din oplevelse på vores hjemmeside.
              <Link
                href="/cookie-policy"
                className="text-[#D72828] hover:text-[#b91c1c] hover:underline ml-1 font-medium transition-colors duration-300"
              >
                Læs mere i vores Cookie Policy
              </Link>
            </p>
          </div>

          <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={declineCookies}
              className="flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm border border-gray-600 rounded hover:bg-gray-800 hover:border-gray-500 transition-colors duration-300"
            >
              Indstillinger
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm bg-[#D72828] hover:bg-[#b91c1c] rounded transition-colors duration-300 font-medium"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
