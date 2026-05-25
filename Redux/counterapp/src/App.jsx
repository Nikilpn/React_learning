import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {  useRef } from 'react'
import { decrement, increment, incrementByAmount, reset } from './redux/counterSlice'

function App() {


  const {count}=useSelector(state=>state.counterReducer)
  const dispatch=useDispatch()

  const inputRef=useRef()
const handleAmount = () => {
  const value = inputRef.current.value.trim()

  if (!value) {
    alert("Enter a valid amount")     
    return
  }

  if (isNaN(value)) {
    alert("Please enter a number")  
    return
  }

  dispatch(incrementByAmount(+value))
  inputRef.current.value = ""     
}
  return (
    <>
      <div className="container">
        <h1 className="counter-display">
          {count}
        </h1>
        <div className="button-group">
          <button onClick={() => dispatch(increment())} className="btn btn-success">Increment</button>
          <button onClick={() => dispatch(decrement())} className="btn btn-warning">Decrement</button>
          <button onClick={() => dispatch(reset())} className="btn btn-danger">Reset</button>
        </div>
        <div className="input-group">
          <input
          ref={inputRef}
            type="text"
            placeholder="Enter the number Range"
            className="form-control"
          />
          <button onClick={handleAmount} className="btn btn-primary">Increment By Amount</button>
        </div>
      </div>
    </>
  )
}

export default App