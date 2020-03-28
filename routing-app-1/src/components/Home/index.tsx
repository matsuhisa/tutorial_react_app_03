import React, { FC } from 'react'
// metaタグを調整するnpm
import Helmet from  'react-helmet'
import { Link } from 'react-router-dom'

import { characterData } from '../../characterData'

const codes = Object.keys(characterData)

const Home: FC<{}> = () => (
  <>
    <Helmet>
      <title>タイトル</title>
    </Helmet>
    <h1>Homeタイトル</h1>
    <ul>
      {codes.map(code => (
        <li>
          <Link to={`/characters/${code}`}>{characterData[code].school}</Link>
        </li>
      ))}
    </ul>
  </>
)

export default Home