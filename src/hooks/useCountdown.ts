import { useState, useEffect, useCallback } from 'react'

const useCountdown = (time: number = 30) => {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (isActive) {
      setSeconds(time)

      return
    }

    if (seconds <= 0) {
      setIsActive(false)

      return
    }

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive, seconds])

  const resetCountdown = useCallback(() => {
    setSeconds(time)
    setIsActive(false)
  }, [time])

  return { seconds, resetCountdown }
}

export default useCountdown
