import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { addResumeApi } from '../../service/allAPI';
import Swal from 'sweetalert2'

const steps = ['Basic Information', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];
const skillsSuggestionArray = ["REACT", "JAVASCRIPT", "PYTHON", "DJANGO", 'MONGODB', "HTML", "CSS"]

function Steps({ userInput, setUserInput,SetResumeAdded,setIsResumeId }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const [inputSkill, setInputSkill] = useState("")

    
    




    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const addSkill = (inputSkill) => {
        console.log("user input skill :" + inputSkill);
        if (inputSkill) {
            if (userInput.skills.includes(inputSkill)) {
                alert("Given Skill Already Exists....Add New skills")
            }
            else {
                setUserInput({ ...userInput, skills: [...userInput.skills, inputSkill] })
            }
        }


    }
    const removeSkill = (skills) => {
        console.log(skill);
        setUserInput({ ...userInput, skills: userInput.skills.filter(item => item != skills) })

    }

    const renderStepArrayContent = (stepCount) => {
        switch (stepCount) {
            case 0: return (
                <div>
                    <h1>Personal Details</h1>
                    <div className='row p-3'>
                        <TextField value={userInput.professionalData.name} onChange={(e) => setUserInput({ ...userInput, professionalData: { ...userInput.professionalData, name: e.target.value } })} id="full-name" label="Full Name" variant="standard" />
                        <TextField value={userInput.professionalData.jobTitle} onChange={(e) => setUserInput({ ...userInput, professionalData: { ...userInput.professionalData, jobTitle: e.target.value } })} id="job-title" label="Job Title" variant="standard" />
                        <TextField value={userInput.professionalData.location} onChange={(e) => setUserInput({ ...userInput, professionalData: { ...userInput.professionalData, location: e.target.value } })} id="location" label="Location" variant="standard" />

                    </div>
                </div>
            )
            case 1: return (
                <div>
                    <h1>Contact Details</h1>
                    <div className='row p-3'>
                        <TextField value={userInput.professionalData.email} onChange={(e) => setUserInput({ ...userInput, professionalData: { ...userInput.professionalData, email: e.target.value } })} id="email" label="Email" variant="standard" />
                        <TextField value={userInput.professionalData.phone} onChange={(e) => setUserInput({ ...userInput, professionalData: { ...userInput.professionalData, phone: e.target.value } })} id="phone" label="Phone" variant="standard" />
                        <TextField value={userInput.professionalData.github} onChange={(e) => setUserInput({ ...userInput, professionalData: { ...userInput.professionalData, github: e.target.value } })} id="github" label="Git Profile Link" variant="standard" />
                        <TextField value={userInput.professionalData.linkedin} onChange={(e) => setUserInput({ ...userInput, professionalData: { ...userInput.professionalData, linkedin: e.target.value } })} id="linkedin" label="Linkedin Profile Link" variant="standard" />
                        <TextField value={userInput.professionalData.portfolio} onChange={(e) => setUserInput({ ...userInput, professionalData: { ...userInput.professionalData, portfolio: e.target.value } })} id="portfolio" label="Portfolio Profile Link" variant="standard" />


                    </div>
                </div>


            )
            case 2: return (
                <div>
                    <h1>Education Details</h1>
                    <div className='row p-3'>
                        <TextField value={userInput.educationalData.course} onChange={(e) => setUserInput({ ...userInput, educationalData: { ...userInput.educationalData, course: e.target.value } })} id="course-name" label="Course Name" variant="standard" />
                        <TextField value={userInput.educationalData.college} onChange={(e) => setUserInput({ ...userInput, educationalData: { ...userInput.educationalData, college: e.target.value } })} id="college-name" label="College Name" variant="standard" />
                        <TextField value={userInput.educationalData.university} onChange={(e) => setUserInput({ ...userInput, educationalData: { ...userInput.educationalData, university: e.target.value } })} id="university" label="University" variant="standard" />
                        <TextField value={userInput.educationalData.year} onChange={(e) => setUserInput({ ...userInput, educationalData: { ...userInput.educationalData, year: e.target.value } })} id="year-of-passout" label="Year Of Passout" variant="standard" />


                    </div>
                </div>


            )
            case 3: return (
                <div>
                    <h1>Professional Details</h1>
                    <div className='row p-3'>
                        <TextField value={userInput.experience.jobrole} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, jobrole: e.target.value } })} id="job-or-intern" label="Job-Or-Intern" variant="standard" />
                        <TextField value={userInput.experience.company} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} id="company-name" label="Company-Name" variant="standard" />
                        <TextField value={userInput.experience.joblocation} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, joblocation: e.target.value } })} id="location" label="Location" variant="standard" />
                        <TextField value={userInput.experience.duration} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} id="duration" label="Duration" variant="standard" />



                    </div>
                </div>


            )
            case 4: return (
                <div>
                    <h1>Skills</h1>
                    <div className='row p-3'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <TextField onChange={(e) => setInputSkill(e.target.value)} id="skill" sx={{ width: "350px" }} label="Enter Skills" variant="standard" />
                            <Button value={inputSkill} onClick={() => addSkill(inputSkill)} variant='outlined'>ADD</Button>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h4>Suggestions :</h4>
                        <div className='d-flex gap-2 flex-wrap mt-3'>
                            {skillsSuggestionArray.map((userSkill) => (
                                <Button key={userSkill} onClick={() => addSkill(userSkill)} variant='contained'>{userSkill}</Button>
                            ))}
                        </div>
                    </div>
                    <div className='mt-3'>
                        <h4>Added Skills :</h4>
                        {
                            userInput.skills.map((item) => (
                                <span key={item} className='btn btn-primary me-3 mb-2' ><button className='text-light btn' onClick={() => removeSkill(item)}>{item}  X</button></span>
                            ))
                        }

                    </div>

                </div>
            )
            case 5: return (
                <div>
                    <h1>Professional Summary</h1>
                    <div className='row p-3'>
                        <TextField value={userInput.summary.summary} onChange={(e) => setUserInput({ ...userInput, summary: e.target.value })} multiline rows={5} id="summary" label="Write a short note on yourself" variant="standard" />




                    </div>
                </div>


            )
        }
    }
    const handleAddResume = async () => {

        const { professionalData, educationalData, experience, skills, summary } = userInput

        const { name, jobTitle, location, email, phone } = professionalData
        const { course, college, university, year } = educationalData
        const { jobrole, company, joblocation, duration } = experience


        if (
            !name || !jobTitle || !location ||
            !email || !phone ||
            !course || !college || !university || !year ||
            !jobrole || !company || !joblocation || !duration ||
            skills.length === 0 ||
            !summary
        ) 
            
        {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill all fields properly!",

            });
            return
        }

        //  API call
        try {
            const result = await addResumeApi(userInput)
            console.log(result)
            SetResumeAdded(true)
            // console.log(result.data.id);
            setIsResumeId(result.data.id)
            
            Swal.fire({
                title: "Good job!",
                text: "Resume Added Successfully!",
                icon: "success"
            });
           
        } catch (err) {
            console.log(err)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",

            });
        }
    }

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep} sx={{
                    padding: "0px",
                    '& .MuiStep-root': {
                        paddingLeft: "2px",
                        paddingRight: "2px"
                    },
                    '& .MuiStepLabel-label': {
                        fontSize: "11px"
                    }
                }}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                            <Button variant='contained' className='ms-5' onClick={handleAddResume}>Add Resume</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        {renderStepArrayContent(activeStep)}

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </>
    )
}

export default Steps
