import React, { FC, useEffect, useState } from 'react'

const LIMIT = 60

const App: FC = () => {
  const [timeLeft, setTimeLeft] = useState(LIMIT)

  const reset = () => {
    setTimeLeft(LIMIT)
  }

  const tick = () => {
    setTimeLeft(foo => (foo === 0 ? LIMIT : foo - 1))
  }

  useEffect(() => {
    const timerId = setInterval(tick, 1000)
    return () => clearInterval(timerId)
  }, [] )

  return (
    <div>
      <h1>タイマー</h1>
      <p>time {timeLeft}</p>
      <div onClick={reset}>rest</div>
    </div>
  )
}

export default App;
