'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type Props = { durationMs?: number }

export default function Splash({ durationMs = 3000 }: Props) {
  const [visible, setVisible] = useState(true)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const t1 = setTimeout(() => setOpacity(0), durationMs - 350)
    const t2 = setTimeout(() => setVisible(false), durationMs)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [durationMs])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-yellow"
      style={{ opacity, transition: 'opacity 350ms ease' }}
      aria-label="Splash screen"
    >
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/logos/cafe_logo.svg"
          alt="Cafe"
          width={140}
          height={140}
          priority
        />
        <div className="flex items-center gap-2 text-black">
          <span className="uppercase tracking-wide text-xs">powered by</span>
          <Image
            src="/logos/CML_logo_black.svg"
            alt="citymedialab"
            width={130}
            height={30}
            priority
          />
        </div>
      </div>
    </div>
  )
}
