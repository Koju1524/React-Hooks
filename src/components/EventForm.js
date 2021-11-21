import React, { useContext, useState } from 'react'

import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS
} from '../actions'

import AppContext from '../contexts/AppContext'

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault();

    dispatch({
      type: CREATE_EVENT,
      title,
      body
    })

    setTitle('')
    setBody('')

  }

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('delete all events??')
    if (result) dispatch( {type: DELETE_ALL_EVENTS})
  }

  const unCreatable = title === '' || body === ''

  return(
  <>
    <h4>Event Form</h4>
      <form>
        <div className= "form-group">
          <label htmlFor="FormEvenTitle">Title</label>
          <input className="form-control" id="FormEvenTitle" value={title} onChange={e => setTitle(e.target.value) }/>
        </div>

        <div className= "form-group">
          <label htmlFor="FormEvenBody">Body</label>
          <textarea className="form-control" id="FormEvenBody" value={body} onChange={e =>setBody(e.target.value) }/>
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>Create Event</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>Delete All Event</button>
      </form>
  </>
  )
}

export default EventForm
