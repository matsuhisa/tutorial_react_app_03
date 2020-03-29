import React, {FC} from 'react'

const range = (n: number) => (n < 0 ? [] : Array.from(Array(n), (_, i) => i))
// const colors: SemanticCOLORS[] = [
//   'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
//   'violet', 'purple', 'pink', 'brown', 'grey', 'black',
// ]
const colors: string[] = [
  'red', 'orange', 'green'
]

export interface ColorfulBeadsProps {
  count?: number
}

const ColorfulBeads: FC<ColorfulBeadsProps> = ({count = 0}) => (
  <>
    {range(count).map((i: number) => (
      <span key={i}>ここです。{colors[i % colors.length]}</span>
    ))}
  </>
)

export default ColorfulBeads 