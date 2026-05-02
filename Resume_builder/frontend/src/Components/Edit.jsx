import React from 'react'
import { FaRegEdit } from 'react-icons/fa';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
    maxHeight: '90vh',
};
function Edit() {

    const skillsSuggestionArray = ["REACT", "JAVASCRIPT", "PYTHON", "DJANGO", 'MONGODB', "HTML", "CSS"]
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
           <Link > <button onClick={handleOpen} className='btn btn-primary'><FaRegEdit /></button></Link>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Your Resume
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            <h1>Personal Details</h1>
                            <div className='row p-3'>
                                <TextField id="full-name" label="Full Name" variant="standard" />
                                <TextField id="job-title" label="Job Title" variant="standard" />
                                <TextField id="location" label="Location" variant="standard" />

                            </div>


                        </div>
                        <div>
                            <h1>Contact Details</h1>
                            <div className='row p-3'>
                                <TextField id="email" label="Email" variant="standard" />
                                <TextField id="phone" label="Phone" variant="standard" />
                                <TextField id="github" label="Git Profile Link" variant="standard" />
                                <TextField id="linkedin" label="Linkedin Profile Link" variant="standard" />
                                <TextField id="portfolio" label="Portfolio Profile Link" variant="standard" />


                            </div>
                        </div>

                        <div>
                            <h1>Education Details</h1>
                            <div className='row p-3'>
                                <TextField id="course-name" label="Course Name" variant="standard" />
                                <TextField id="college-name" label="College Name" variant="standard" />
                                <TextField id="university" label="University" variant="standard" />
                                <TextField id="year-of-passout" label="Year Of Passout" variant="standard" />


                            </div>
                        </div>
                        <div>
                            <h1>Professional Details</h1>
                            <div className='row p-3'>
                                <TextField id="job-or-intern" label="Job-Or-Intern" variant="standard" />
                                <TextField id="company-name" label="Company-Name" variant="standard" />
                                <TextField id="location" label="Location" variant="standard" />
                                <TextField id="duration" label="Duration" variant="standard" />



                            </div>
                        </div>

                        <div>
                            <h1>Skills</h1>
                            <div className='row p-3'>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <TextField sx={{ width: "350px" }} id="summary" label="Enter Skills" variant="standard" />
                                <Button variant='outlined'>ADD</Button>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h4>Suggestions :</h4>
                                <div className='d-flex gap-2 flex-wrap mt-3'>
                                    {skillsSuggestionArray.map((userSkill) => (
                                        <Button key={userSkill} variant='contained'>{userSkill}</Button>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-3'>
                                <h4>Added Skills :</h4>
                                <div className='mt-2'>
                                    <span className='btn btn-primary me-3'>REACT <button className='text light btn'>X</button></span>
                                </div>
                            </div>

                        </div>
                        <div>
                            <h1>Professional Summary</h1>
                            <div className='row p-3'>
                                <TextField multiline rows={5} id="summary" label="Write a short note on yourself" variant="standard" />




                            </div>
                        </div>
                        <div className='d-flex justify-content-end gap-3'>
                            <Button variant='outlined'>Cancel</Button>
                            <Button variant='contained'>Update</Button>
                        </div>


                    </Typography>
                </Box>
            </Modal>

        </>
    )
}

export default Edit
