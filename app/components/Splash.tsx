'use client'

import { useEffect, useState } from 'react'

export default function Splash() {
  console.log('[Splash] mounted v3') // για να δεις ότι φορτώνεται ΑΥΤΟ

  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [showPowered, setShowPowered] = useState(false)

  useEffect(() => {
    const tPowered = setTimeout(() => setShowPowered(true), 900)
    const tFade = setTimeout(() => setFadeOut(true), 2600)
    const tClose = setTimeout(() => setVisible(false), 3000)
    return () => { clearTimeout(tPowered); clearTimeout(tFade); clearTimeout(tClose) }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#f8dd67] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Κεντρικό cafe logo */}
      <div className="flex flex-col items-center justify-center">
        <img
          src="/logos/cafe_logo.svg?v=3"   // cache-bust
          alt="Cafe Logo"
          width={220}
          height={48}
          className="block centerLogo"
          onError={(e) => {
            console.warn('cafe_logo.svg not found'); 
            (e.currentTarget as HTMLImageElement).src = '/logos/CML_logo_black.svg'
          }}
        />
      </div>

      {/* Κάτω: powered by + CML */}
      <div className="absolute left-0 right-0 bottom-6 flex flex-col items-center justify-center">
        <div
          className={`text-[11px] md:text-xs tracking-wide opacity-70 lowercase transition-opacity duration-500 ${
            showPowered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ marginBottom: 6 }}
        >
          powered by
        </div>
        <img
          src="/logos/CML_logo_black.svg?v=3"
          alt="City Media Lab"
          width={140}
          height={28}
          className={`block transition-opacity duration-500 ${
            showPowered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.96); }
          60% { opacity: 1; transform: scale(1.02); }
          100% { opacity: 1; transform: scale(1); }
        }
        .centerLogo {
          opacity: 0;
          animation: fadeInScale 700ms ease-out forwards;
        }
      `}</style>
    </div>
  )
}
