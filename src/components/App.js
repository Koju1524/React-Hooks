import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fluid">
      <h4>Event Form</h4>
      <form>
        <div className= "form-group">
          <label htmlFor="FormEvenTitle">Title</label>
          <input className="form-control" id="FormEvenTitle"></input>
        </div>

        <div className= "form-group">
          <label htmlFor="FormEvenBody">Body</label>
          <textarea className="form-control" id="FormEvenBody"></textarea>
        </div>

        <button className="btn btn-primary">Create Event</button>
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