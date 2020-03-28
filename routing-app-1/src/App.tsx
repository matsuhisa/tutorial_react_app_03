import React, { FC } from 'react'
import { Redirect, Route, Switch, Router } from 'react-router'

import Home from './components/Home'
import Characters from './components/Characters'

const App: FC<{}> = () => (
  <div>
    <Switch>
      <Route path="/characters/:code" component={Characters} ></Route>
      <Route path="/" component={Home} ></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  </div>
)

export default App
