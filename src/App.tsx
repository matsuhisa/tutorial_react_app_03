import React, { FC, useState } from 'react';

const App: FC = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount( count + 1)
  }

  const decrement = () => {
    setCount( count - 1 )
  }

  return(
    <div>
      <h1>カウンター</h1>
      <h2>count：{count}</h2>
      <div onClick={decrement} > マイナス </div>
      <div onClick={increment} > 追加 </div>
    </div>
  )
}

export default App