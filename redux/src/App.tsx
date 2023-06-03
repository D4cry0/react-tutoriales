import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice'
import { getPokemons } from './store/slices/pokemon/thunks'

function App() {

  const { value } = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()
  

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <span>count is {value}</span>
        <button onClick={() => dispatch( increment() )}>
          +1
        </button>
        <button onClick={() => dispatch( incrementByAmount(4) )}>
          +4
        </button>
        <button onClick={() => dispatch( decrement() )}>
          -1
        </button>
        
      </div>

    </div>
  )
}

export default App
