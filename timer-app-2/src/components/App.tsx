import React, { FC } from 'react'

interface AppProps {
  timeLeft: number;
  reset: () => void;
}

const AppComponent: FC<AppProps> = ({ timeLeft, reset }) => (
  <div>
    <p>{timeLeft}</p>
    <p onClick={reset}>reset</p>
  </div>
)

export default AppComponent