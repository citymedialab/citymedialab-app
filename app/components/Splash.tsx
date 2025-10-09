'use client'

import { useEffect, useState } from 'react'

export default function Splash() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 2600) // ξεκίνα fade λίγο πριν
    const t2 = setTimeout(() => setVisible(false), 3000) // κλείσιμο στα 3s
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#f8dd67] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <img
        src="/logos/CML_logo_black.svg"
        alt="City Media Lab"
        width={220}
        height={48}
        style={{ display: 'block' }}
      />
    </div>
  )
}
