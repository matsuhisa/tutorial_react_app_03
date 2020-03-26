import React, { FC, useEffect, useState } from 'react'
import AppComponents from '../components/App'

// Custom Hook
const useTimer = (limitSec: number): [number, () => void] => {
  const [timeLeft, setTimeLeft] = useState(limitSec)

  const reset = () => {
    setTimeLeft(limitSec)
  }

  const tick = () => {
    setTimeLeft(prevTime => (prevTime === 0 ? limitSec : prevTime - 1))
  }

  useEffect( () => {
    const timerId = setInterval(tick, 1000)
    return () => clearInterval(timerId)
  }, [] )

  return [timeLeft, reset]
}

const AppContaner: FC = () => {
  const LIMIT = 60;
  const [timeLeft, reset] = useTimer(LIMIT)

  return <AppComponents timeLeft={timeLeft} reset={reset} />
}

export default AppContaner