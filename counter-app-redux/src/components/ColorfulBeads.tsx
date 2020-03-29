import React, {FC} from 'react'

const range = (n: number) => ( n < 0 ? [] : Array.from(Array(n), (_, i) => i) )
// const colors: SemanticCOLORS[] = [
//   'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue',
//   'violet', 'purple', 'pink', 'brown', 'grey', 'black',
// ]
const colors: string[] = [
  'red', 'orange', 'green'
]

export interface ColorfulBeadsProps {
  counter?: number
}

const ColorfulBeads: FC<ColorfulBeadsProps> = ({counter = 0}) => (
  <span>
    {range(counter).map((i: number) => (
      <span key={i}>{colors[i % colors.length]}</span>
    ))}
  </span>
)

export default ColorfulBeads 