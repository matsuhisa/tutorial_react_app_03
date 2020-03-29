import React, {FC} from 'react'

export interface CounterProps {
  count?: number
  add?: (acmout: number) => void
  decriment?: () => void
  increment?: () => void
}

const Counter: FC<CounterProps> = ({
  count = 0,
  add = () => {},
  decriment = () => {},
  increment = () => {},
}) => (
  <>
    <div>count: {count}</div>
    <div onClick={decriment}>-1</div>
    <div onClick={increment}>+1</div>
    <div onClick={() => add(10)}>+10</div>
  </>
)

export default Counter