'use client'

import Image from 'next/image'
import { useMemo } from 'react'
import { formatGreekDate } from '../../lib/date'

export default function Header() {
  const today = useMemo(() => formatGreekDate(), [])
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto flex items-center justify-between px-4 py-2 bg-[rgba(0,0,0,0.45)] backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Image
            src="/logos/CML_logo.svg" // ΛΕΥΚΟ λογότυπο
            alt="citymedialab"
            width={120}
            height={28}
            priority
          />
        </div>
        <div className="text-white text-sm md:text-base select-none">
          {today}
        </div>
      </div>
    </header>
  )
}
