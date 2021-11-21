import React, { useContext } from 'react'

import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = () => {
  const { state } = useContext(AppContext)

  return(
  <>
    {/* <div>{value}</div> */}
    <h4>Event Lists</h4>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>BODY</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { state.map((event, index) => (<Event key={index} event={event}/>))}
      </tbody>
    </table>
  </>
  )
}

export default Events
