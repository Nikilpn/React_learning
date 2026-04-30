import React, { useRef } from 'react'

function Reffer() {

  const inputElement = useRef()

  const handleFocus = () => {
    inputElement.current.focus()
    alert(inputElement.current.value)
  }

  return (
    <>

      <div className='d-flex rounded m-5 p-3'>
        <input ref={inputElement} type="text" className='form-control'/>
        <button onClick={handleFocus} className='btn btn-primary ms-3'>Get Focused</button>
      </div>

    </>
  )
}

export default Reffer