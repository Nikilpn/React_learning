import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
function History() {
  return (
    <>
      <div>
        <div>
          <h1 className='text-center mt-5'>Downloaded Resume History</h1>
          <Link to={'/'} style={{ marginTop: "-50px" }} className='float-end me-5'>Back</Link>
          <Box component="section" className='containerl-fluid'>
            <div className='row mt-5'>
              <div className='col-md-4'>

                <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
                  <div className='d-flex align-items-center justify-content-center'>
                    <h6>Review At :<br />2/5/2026 ,7.22 pm <span></span></h6>
                  </div>
                  <div className='shadow p-3 mt-3'>
                       <h2>Graceson J</h2>
                  <h6>Web Developer</h6>
                  <p><span>Kakkanad</span> | <span>graceson@gmail.com</span> | <span>7894561238</span></p>

                  <div className='d-flex gap-3 justify-content-center'>
                    <Link href={""}>GITHUB</Link> |
                    <Link href={""}>LINKEDIN</Link> |
                    <Link href={""}>PORTFOLIO</Link>
                  </div>

                  <Divider sx={{ marginTop: "20px" }}>SUMMARY</Divider>

                  <p style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto, suscipit. Voluptates ipsa unde corrupti veniam rerum praesentium exercitationem!
                    Aliquam libero delectus ab nesciunt voluptatibus, vel labore numquam ducimus explicabo ea!
                  </p>

                  <Divider sx={{ marginTop: "20px" }}>Education</Divider>

                  <h4>B.tech</h4>
                  <p>SRM COLLEGE | SRM UNIVERSITY | 2025</p>

                  <Divider sx={{ marginTop: "20px" }}>Professional Experience</Divider>

                  <h4>MERN FULL STACK</h4>
                  <p>Luminar Technolab | Kakkanad | 6months</p>

                  <Divider sx={{ marginTop: "20px" }}>Skills</Divider>
                  <Stack spacing={2} direction={"row"} sx={{ flexWrap: "wrap", gap: "10px" }}>
                    <Button variant='contained'>REACT</Button>
                  </Stack>
                  </div>
               


                </Paper>

              </div>

            </div>
          </Box>
        </div>
      </div>

    </>
  )
}

export default History
