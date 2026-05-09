import React, { useEffect, useState } from 'react'
import { getAllResumeApi,deleteResumeApi } from '../../service/allAPI'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



function History() {
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

    const getAllResume = async () => {
        const result = await getAllResumeApi()

        setUserInput(result?.data);
    }

    useEffect(() => {
        getAllResume()
    }, [])

    useEffect(() => {
        console.log(userInput);
    }, [userInput])

    const deleteResume = async (id) => {
        const result = await deleteResumeApi(id)
        console.log(result);
        getAllResume()


    }


    return (

        <div>
            <div>
                <h1 className='text-center mt-5'>Downloaded Resume History</h1>
                <Link to={'/'} style={{ marginTop: "-50px" }} className='float-end me-5'>Back</Link>
                <Box component="section" className='containerl-fluid'>
                    <div className='row mt-5'>
                        {userInput?.length > 0 ?
                            userInput?.map((item, index) => (
                                <div className='col-md-4' key={index}>

                                    <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <h6>Resume builder :{index + 1}</h6>
                                            <button onClick={()=>deleteResume(item?.id)} type='button' className='btn btn-danger'>x</button>

                                        </div>
                                        <div className='shadow p-3 mt-3'>
                                            <h2>{item?.professionalData.name}</h2>
                                            <h6>{item?.professionalData.jobTitle}</h6>
                                            <p><span>{item?.professionalData.location}</span> |
                                                <span>{item?.professionalData.phone}</span> |
                                                <span>{item?.professionalData.email}</span></p>


                                        </div>



                                    </Paper>

                                </div>

                            ))




                            : <h1>No Resumes Added </h1>
                        }
                    </div>


                </Box>
            </div>


        </div>
    )
}

export default History
