import React, { useEffect, useState } from 'react'

function Counter() {
    const[count,setCount]= useState(0)

    const decrementCount=()=>{
        setCount(count-1)
    }
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },1000)

    },[count])




  return (
    <>
      <div className='d-flex justify-content-center align-items-center border border-2 bg-secondary container p-5 rounded rounded-5 w-75'>
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <h1 className='text-white'>Counter Component</h1>
          <h1 className='' style={{fontSize:"100px"}}>{count}</h1>
          <div className='d-flex mt-5 gap-5'>
            <button onClick={decrementCount} className='btn btn-primary' >Decrement</button>
            <button onClick={()=>setCount(0)} className='btn btn-danger' >Reset</button>
            <button onClick={()=>setCount(count+1)} className='btn btn-success' >Increment</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter