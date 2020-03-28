import React, {FC} from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'
import { parse } from 'query-string'
import Helmet from 'react-helmet'

import { characterData } from '../../characterData'
import Spinner from '../common/Spinner'
import CharacterList from './CharacterList'

type CharactersProps = {} & RouteComponentProps<{ code: string }>

const Characters: FC<CharactersProps> = ({ history, location, match }) => {
  const codes = Object.keys(characterData)
  const targetCode = match.params.code
  const isLoading = parse(location.search).loading === 'true'

  return codes.includes(targetCode) ? (
    <>
      <Helmet>
        <title></title>
      </Helmet>
      {isLoading ? (<Spinner></Spinner>):(
        <CharacterList school={characterData[targetCode].school} characters={characterData[targetCode].players}>
        </CharacterList>
      )}
      <div onClick={() => { history.push('/') }}>
        ホームへ
      </div>
    </>
  ):(
    <Redirect to="/" />
  )
}

export default withRouter(Characters)