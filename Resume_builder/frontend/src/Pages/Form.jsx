import React from 'react'
import Steps from '../Components/Steps'
import Preview from '../Components/Preview'
function Form() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6 mt-5 p-4'>
            <Steps />

          </div>
          <div className='col-6'>
            
            <Preview />
          </div>

        </div>

      </div>


    </>
  )
}

export default Form

 