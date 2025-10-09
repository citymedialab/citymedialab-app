'use client'

import { useEffect, useState } from 'react'

export default function Splash() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#f8dd67',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        transition: 'opacity 0.5s ease',
      }}
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
