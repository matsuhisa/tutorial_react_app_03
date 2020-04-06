import React, { FC } from 'react'
import capitalize from 'lodash/capitalize'

import { User } from '../services/github/models'
import HtmlTitle from './HtmlTitle'
import Spinner from './Spinner'

export interface MembersProps {
  companyName: string
  users: User[]
  isLoading?: boolean
}

const Members: FC<MembersProps> = ({
  companyName = '<会社名>',
  users = [],
  isLoading = false,
}) => {
  const title = `${capitalize(companyName)}のメンバー`

  return (
    <>
      <HtmlTitle title={title} />
      <div data-test={users}>
        <h2>{title}</h2>
        {isLoading ? (
          <Spinner />
        ):(
          <>
            {users.map(user => (
              <div key={user.id}>
                <img src={user.avatar_url} width={100} />
                <div>GitHub ID: {user.id}</div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default Members