import React, { useEffect, useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const {name, price} = state

  useEffect(()=> {
    console.log('useEffect is called')
  })

  useEffect(()=> {
    console.log('useEffect')
  }, [])

  useEffect(()=> {
    console.log('callback name')
  }, [name])

  return (
    <>
      <p>
        Current: {name}
        Price: {price} yen
      </p>
      <button onClick={() => setState({...state, price: price + 1}) }>+1</button>
      <button onClick={() => setState({...state, price: price - 1}) }>-1</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  )

}
App.defaultProps = {
  name: '',
  price: 1000,
}

export default App