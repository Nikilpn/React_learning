import React from 'react'
import Stack from '@mui/material/Stack';
import { FaFileDownload } from 'react-icons/fa';
import { FaHistory } from 'react-icons/fa';
import Paper from '@mui/material/Paper';
import { Box, Link } from '@mui/material';
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider';
import Edit from './Edit';


function Preview({userInput}) {
    console.log(userInput);
    
    return (
        <>
            <Stack direction={'row'} sx={{ display: "flex", justifyContent: "end", padding: "50px", gap: "10px" }}>
                {/*edit */}
                <Edit/>
                {/* <button className='btn btn-primary'><FaRegEdit /></button> */}


                {/* Download*/}
               <p> <Link><button className='btn btn-primary'><FaFileDownload /></button></Link></p>

                {/* History*/}
               <p> <Link href={"/history"}><button className='btn btn-primary'><FaHistory /></button></Link></p>

                <Link href={'/'}><p  className='btn text-primary'>BACK</p></Link>


            </Stack>
            <Box sx={{ textAlign: 'center' }}>
                <Paper elevation={3} sx={{ p: 5 }}>
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

                    <div className='d-flex flex-wrap gap-3'>
                        <Button variant='outlined'> REACT </Button>
                    </div>
                </Paper>

            </Box>

        </>
    )
}

export default Preview
