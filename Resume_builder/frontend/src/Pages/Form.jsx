
import Steps from '../Components/Steps'
import Preview from '../Components/Preview'
import React, { useState } from 'react'
function Form() {

  const [userInput, setUserInput] = useState({
    professionalData: {
      name: "",
      jobTitle: "",
      location: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      portfolio: "",


    },
    educationalData: {
      course: "",
      college: "",
      university: "",
      year: ""
    },
    experience: {
      jobrole: "",
      company: "",
      joblocation: "",
      duration: ""
    },
    skills: [],
    summary: ""

  })
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6 mt-5 p-4'>
            <Steps setUserInput={setUserInput} userInput={userInput}/>

          </div>
          <div className='col-6'>

            <Preview userInput={userInput}/>
          </div>

        </div>

      </div>


    </>
  )
}

export default Form

