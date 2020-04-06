import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import capitalize from 'lodash/capitalize'

const companies = ['facebook', 'airbnb', 'netflix', 'rails']

const Home: FC = () => (
  <ul>
    {companies.map(companyName => (
      <li key={companyName}>
        <Link to={`/${companyName}/members`}>
          {capitalize(companyName)}のメンバー
        </Link>
      </li>
    ))}
  </ul>
)

export default Home