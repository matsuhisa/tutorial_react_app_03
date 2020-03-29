import React, { FC } from 'react';

import ColorfulBeads from './containers/ColorfulBeads'
import Counter from './containers/Counter'

const App: FC = () => (
  <>
    <Counter />
    <ColorfulBeads />
  </>
)

export default App;
