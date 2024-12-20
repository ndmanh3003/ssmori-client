'use client'
import { useState } from 'react'

enum CardType {
  M = 'mem',
  S = 'silver',
  G = 'gold'
}

export default function Card({ type }: { type: 'M' | 'S' | 'G' }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <>
      <button onClick={handleFlip}>
        <img alt='card' className='w-full h-full max-h-[300px]' src={CardType[type] + '-' + (isFlipped ? 'front' : 'back') + '.svg'} />
      </button>
    </>
  )
}
