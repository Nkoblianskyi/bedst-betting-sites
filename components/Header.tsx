"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Main Header */}
      <header
        className={`bg-[#0a0a0a] border-b-2 border-[#333333] transition-all duration-300 ${isSticky
            ? "fixed top-0 left-0 right-0 z-50 shadow-lg shadow-[#fbbf24]/20 backdrop-blur-md bg-[#0a0a0a]/95"
            : ""
          }`}
      >
        <div className="container mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center py-2 sm:py-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={60} height={60} className="mb-2" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neon hover:text-white transition-colors duration-300">
                BedstBettingSites
              </h3>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <Link
                href="/"
                className="text-white hover:text-[#fbbf24] transition-colors duration-300 font-medium text-sm xl:text-base link-hover"
              >
                Home
              </Link>
              <Link
                href="/safe-gambling"
                className="text-white hover:text-[#fbbf24] transition-colors duration-300 font-medium text-sm xl:text-base link-hover"
              >
                Safe Gambling
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-[#fbbf24] transition-colors duration-300 font-medium text-sm xl:text-base link-hover"
              >
                About Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-[#fbbf24] hover:text-white transition-colors duration-300 p-2 flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden py-3 sm:py-4 border-t border-[#333333] bg-[#0a0a0a]">
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="text-white hover:text-[#fbbf24] transition-colors duration-300 font-medium py-3 px-3 rounded-md hover:bg-[#1a1a1a] text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/safe-gambling"
                  className="text-white hover:text-[#fbbf24] transition-colors duration-300 font-medium py-3 px-3 rounded-md hover:bg-[#1a1a1a] text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Safe Gambling
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-[#fbbf24] transition-colors duration-300 font-medium py-3 px-3 rounded-md hover:bg-[#1a1a1a] text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}
