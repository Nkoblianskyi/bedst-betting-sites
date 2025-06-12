import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t-2 border-[#333333] text-white py-8 sm:py-12 md:py-16 animated-bg">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center  mb-3 sm:mb-4 md:mb-6 gap-2">
              <Image src="/logo.png" alt="Logo" width={60} height={60} className="mb-2"/>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neon hover:text-white transition-colors duration-300">
                BedstBettingSites
              </h3>
            </Link>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-3 sm:mb-4 md:mb-6 leading-relaxed hover:text-gray-300 transition-colors duration-300">
              Danmarks mest pålidelige guide til betting sider og bonusser.
            </p>
            <div className="flex items-center gap-2">
              <Image src="/flag.png" alt="Dansk" width={30} height={30} />
              <span className="text-xs sm:text-sm md:text-base text-[#fbbf24] font-semibold hover:text-white transition-colors duration-300">
                Dansk licenserede sider
              </span>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 md:mb-6 text-[#fbbf24] hover:text-white transition-colors duration-300">
              Navigation
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-[#fbbf24] transition-colors duration-300 text-xs sm:text-sm md:text-base block py-1 link-hover"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#fbbf24] transition-colors duration-300 text-xs sm:text-sm md:text-base block py-1 link-hover"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="sm:col-span-1">
            <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 md:mb-6 text-[#fbbf24] hover:text-white transition-colors duration-300">
              Juridisk
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-400 hover:text-[#fbbf24] transition-colors duration-300 text-xs sm:text-sm md:text-base block py-1 link-hover"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-[#fbbf24] transition-colors duration-300 text-xs sm:text-sm md:text-base block py-1 link-hover"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#333333] pt-4 sm:pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="order-2 sm:order-1">
              <p className="text-xs md:text-sm text-gray-400 text-center sm:text-left hover:text-gray-300 transition-colors duration-300">
                © 2025 BedstBettingSites.com. Alle rettigheder forbeholdes.
              </p>
            </div>

            <div className="text-center order-1 sm:order-2">
              <p className="text-sm sm:text-base md:text-lg text-[#dc2626] font-bold mb-1 md:mb-2">
                ⚠️ Gambling kan være vanedannende
              </p>
              <p className="text-xs md:text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">
                Spil ansvarligt. Kun for personer over 18 år.
              </p>
            </div>
          </div>
        </div>

        {/* Responsible Gaming Logos */}
        <div className="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 border-t border-[#333333]">
          <div className="text-center">
            <p className="text-xs sm:text-sm md:text-base text-[#fbbf24] font-semibold mb-3 sm:mb-4 hover:text-white transition-colors duration-300">
              Ansvarligt Spil:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 ">
              <a
                href="https://www.spillemyndigheden.dk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-300 hover-lift bg-white p-2 rounded"
              >
                <img
                  src="/spillemyn.svg"
                  alt="Spillemyndigheden"
                  className="h-6 sm:h-8 md:h-10 w-auto"
                />
              </a>
              <a
                href="https://www.stopspillet.dk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-300 hover-lift"
              >
                <img
                  src="/stopsillet.svg"
                  alt="StopSpillet"
                  className="h-6 sm:h-8 md:h-10 w-auto"
                />
              </a>
              <a
                href="https://www.rofus.nu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-300 hover-lift"
              >
                <img src="/rofus.png" alt="ROFUS" className="h-6 sm:h-8 md:h-10 w-auto" />
              </a>
              <a
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-300 hover-lift bg-white p-2 rounded"
              >
                <img
                  src="/gamble.webp"
                  alt="GambleAware"
                  className="h-6 sm:h-8 md:h-10 w-auto"
                />
              </a>
              <a
                href="https://www.gamcare.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-300 hover-lift bg-white p-2 rounded"
              >
                <img
                  src="/gamecare.svg"
                  alt="GamCare"
                  className="h-6 sm:h-8 md:h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
