import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm'

import AppContext from '../contexts/AppContext'

import Events from './Events';
import reducer from '../reducers/index.js';

console.log({AppContext})
const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={'heooo'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch}/>
        <Events state={state} dispatch={dispatch}/>
      </div>
    </AppContext.Provider>
  )
}

export default App