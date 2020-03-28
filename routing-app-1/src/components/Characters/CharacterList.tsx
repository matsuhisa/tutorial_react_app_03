import * as React from 'react'

export interface Character {
  name: string
  age: number
  height?: number
}

interface CharacterListProps {
  school: string
  characters: Character[]
}

const CharacterList: React.SFC<CharacterListProps> = ({
  school = '校名不明',
  characters,
}) => (
  <>
    <div>{school}</div>
    {characters.map( (character, index) => (
      <div key={index}>
        <div>{character.name}</div>
        <div>{character.age}歳</div>
        <div>{character.height? character.height : '???'} cm</div>
      </div>
    ) )}
  </>
)

export default CharacterList