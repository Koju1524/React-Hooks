import React from 'react'

import { DELETE_EVENT } from '../actions'

const Event = ({ dispatch, event }) => {
  const id = event.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(`Do you want to delete (id=${id}) this??`)
    if (result) dispatch({ type: 'DELETE_EVENT', id })
  };
  return (
  <tr>
    <td>{id}</td>
    <td>{event.title}</td>
    <td>{event.body}</td>
    <td><button type='button' className='btn btn-danger' onClick={handleClickDeleteButton}>Delete</button></td>
  </tr>)
}

export default Event