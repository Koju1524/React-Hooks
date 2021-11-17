import React, { useReducer, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/index.js';

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault();

    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })

    setTitle('')
    setBody('')

  }

  console.log({state})
  return (
    <div className="container-fluid">
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

        <button className="btn btn-primary" onClick={addEvent}>Create Event</button>
        <button className="btn btn-danger">Delete All Event</button>
      </form>

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
      </table>
    </div>
  )
}

export default App