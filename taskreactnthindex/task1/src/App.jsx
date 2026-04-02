import { useState } from 'react'

import './App.css'
import Task1 from './components/Task/task1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Task1 />

    </>
  )
}

export default App
