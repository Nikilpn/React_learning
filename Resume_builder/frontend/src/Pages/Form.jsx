import React from 'react'
import Steps from '../Components/Steps'
import Preview from '../Components/Preview'
function Form() {
  return (
     <>
      <div className='container-fluid'>
        <div className='row'>

          {/* Left — Steps */}
          <div className='col-8 mt-5 p-4'>
            <Steps />
          </div>

          {/* Right — Preview */}
          <div className='col-4' style={{
            position: "sticky",
            top: "0px",
            height: "100vh",
            overflowY: "auto",
            borderLeft: "1px solid #ddd",
            backgroundColor: "#fff",
            padding: "20px"
          }}>
            <Preview />
          </div>

        </div>
      </div>
    </>
  )
}

export default Form
