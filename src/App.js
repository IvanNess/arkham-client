import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import FactionBar from './faction-bar'
import MainWrapper from './main-wrapper'
import CycleBar from './cycle-bar'
import Comparators from './comparators'


import './App.scss'
import InvestigatorDisplay from './investigator-display'

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <MainWrapper>
          <div className='main-display'>
            <div className='main-display-margin'>
              <FactionBar />
              <CycleBar />
              <Comparators/>
            </div>
          </div>
          <InvestigatorDisplay />
        </MainWrapper>
      </Provider>
    </div>
  );
}

export default App
