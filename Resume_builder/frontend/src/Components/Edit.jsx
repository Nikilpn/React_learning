import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress"; 
import { Link } from "react-router-dom";
import { getResumeApi, updateResumeApi } from "../../service/allAPI";
import Swal from 'sweetalert2'

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
    maxHeight: "90vh",
};

function Edit({ resumeId, setUserInput }) {
    const [edituserInput, editsetUserInput] = useState({
        id: "",
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
            year: "",
        },
        experience: {
            jobrole: "",
            company: "",
            joblocation: "",
            duration: "",
        },
        skills: [],
        summary: "",
    });
    const [inputSkill, setInputSkill] = useState("");
    const [loading, setLoading] = useState(false); 

    const skillsSuggestionArray = [
        "REACT",
        "JAVASCRIPT",
        "PYTHON",
        "DJANGO",
        "MONGODB",
        "HTML",
        "CSS",
    ];
    const [open, setOpen] = React.useState(false);

    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    console.log(resumeId);

    const getAResume = async () => {
        try {
            const result = await getResumeApi(resumeId);
            console.log(result);
            editsetUserInput(result.data);
        } catch (err) {
            console.log("Error:", err);
        }
    };


    useEffect(() => {
        if (open) {
            getAResume();
        }
    }, [open]);

    console.log(edituserInput);


    const updateResume = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const result = await updateResumeApi(resumeId, edituserInput);
            console.log(result);

            if (result.status >= 200 && result.status < 300) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Resume Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Back'
                });
                setUserInput(result.data)
                handleClose();
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Error updating resume',
                    icon: 'error',
                    confirmButtonText: 'Back'
                });
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while updating the resume',
                icon: 'error',
                confirmButtonText: 'Back'
            });
        } finally {
            setLoading(false); 
        }
    };

    const addSkill = (inputSkill) => {
        console.log("user input skill :" + inputSkill);
        if (inputSkill) {
            if (edituserInput.skills.includes(inputSkill)) {
                alert("Given Skill Already Exists....Add New skills");
            } else {
                editsetUserInput({
                    ...edituserInput,
                    skills: [...edituserInput.skills, inputSkill],
                });
            }
        }
    };
    const removeSkill = (skills) => {
        console.log(skills);
        editsetUserInput({
            ...edituserInput,
            skills: edituserInput.skills.filter((item) => item !== skills),
        });
    };

    return (
        <>
            <Link>
                {" "}
                <button onClick={handleOpen} className="btn btn-primary">
                    <FaRegEdit />
                </button>
            </Link>
            <Modal
                open={open}
                onClose={handleClose}
                disableRestoreFocus
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Your Resume
                    </Typography>
                    <div id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            <h1>Personal Details</h1>
                            <div className="row p-3">
                                <TextField
                                    value={edituserInput.professionalData.name}
                                    onChange={(e) =>
                                        editsetUserInput({
                                            ...edituserInput,
                                            professionalData: {
                                                ...edituserInput.professionalData,
                                                name: e.target.value,
                                            },
                                        })
                                    }
                                    id="full-name"
                                    label="Full Name"
                                    variant="standard"
                                />
                                <TextField
                                    value={edituserInput.professionalData.jobTitle}
                                    onChange={(e) =>
                                        editsetUserInput({
                                            ...edituserInput,
                                            professionalData: {
                                                ...edituserInput.professionalData,
                                                jobTitle: e.target.value,
                                            },
                                        })
                                    }
                                    id="job-title"
                                    label="Job Title"
                                    variant="standard"
                                />
                                <TextField
                                    value={edituserInput.professionalData.location}
                                    onChange={(e) =>
                                        editsetUserInput({
                                            ...edituserInput,
                                            professionalData: {
                                                ...edituserInput.professionalData,
                                                location: e.target.value,
                                            },
                                        })
                                    }
                                    id="location"
                                    label="Location"
                                    variant="standard"
                                />
                            </div>
                        </div>
                        <div>
                            <h1>Contact Details</h1>
                            <div className="row p-3">
                                <TextField
                                    value={edituserInput.professionalData.email}
                                    onChange={(e) =>
                                        editsetUserInput({
                                            ...edituserInput,
                                            professionalData: {
                                                ...edituserInput.professionalData,
                                                email: e.target.value,
                                            },
                                        })
                                    }
                                    id="email"
                                    label="Email"
                                    variant="standard"
                                />
                                <TextField
                                    value={edituserInput.professionalData.phone}
                                    onChange={(e) =>
                                        editsetUserInput({
                                            ...edituserInput,
                                            professionalData: {
                                                ...edituserInput.professionalData,
                                                phone: e.target.value,
                                            },
                                        })
                                    }
                                    id="phone"
                                    label="Phone"
                                    variant="standard"
                                />
                                <TextField
                                    value={edituserInput.professionalData.github}
                                    onChange={(e) =>
                                        editsetUserInput({
                                            ...edituserInput,
                                            professionalData: {
                                                ...edituserInput.professionalData,
                                                github: e.target.value,
                                            },
                                        })
                                    }
                                    id="github"
                                    label="Git Profile Link"
                                    variant="standard"
                                />
                                <TextField
                                    value={edituserInput.professionalData.linkedin}
                                    onChange={(e) =>
                                        editsetUserInput({
                                            ...edituserInput,
                                            professionalData: {
                                                ...edituserInput.professionalData,
                                                linkedin: e.target.value,
                                            },
                                        })
                                    }
                                    id="linkedin"
                                    label="Linkedin Profile Link"
                                    variant="standard"
                                />
                                <TextField
                                    value={edituserInput.professionalData.portfolio}
                                    onChange={(e) =>
                                        editsetUserInput({
                                            ...edituserInput,
                                            professionalData: {
                                                ...edituserInput.professionalData,
                                                portfolio: e.target.value,
                                            },
                                        })
                                    }
                                    id="portfolio"
                                    label="Portfolio Profile Link"
                                    variant="standard"
                                />
                            </div>
                        </div>

                        <div>
                            <h1>Education Details</h1>
                            <div className="row p-3">
                                <div className="row p-3">
                                    <TextField
                                        value={edituserInput.educationalData.course}
                                        onChange={(e) =>
                                            editsetUserInput({
                                                ...edituserInput,
                                                educationalData: {
                                                    ...edituserInput.educationalData,
                                                    course: e.target.value,
                                                },
                                            })
                                        }
                                        id="course-name"
                                        label="Course Name"
                                        variant="standard"
                                    />
                                    <TextField
                                        value={edituserInput.educationalData.college}
                                        onChange={(e) =>
                                            editsetUserInput({
                                                ...edituserInput,
                                                educationalData: {
                                                    ...edituserInput.educationalData,
                                                    college: e.target.value,
                                                },
                                            })
                                        }
                                        id="college-name"
                                        label="College Name"
                                        variant="standard"
                                    />
                                    <TextField
                                        value={edituserInput.educationalData.university}
                                        onChange={(e) =>
                                            editsetUserInput({
                                                ...edituserInput,
                                                educationalData: {
                                                    ...edituserInput.educationalData,
                                                    university: e.target.value,
                                                },
                                            })
                                        }
                                        id="university"
                                        label="University"
                                        variant="standard"
                                    />
                                    <TextField
                                        value={edituserInput.educationalData.year}
                                        onChange={(e) =>
                                            editsetUserInput({
                                                ...edituserInput,
                                                educationalData: {
                                                    ...edituserInput.educationalData,
                                                    year: e.target.value,
                                                },
                                            })
                                        }
                                        id="year-of-passout"
                                        label="Year Of Passout"
                                        variant="standard"
                                    />
                                </div>
                            </div>
                            <div>
                                <h1>Professional Details</h1>
                                <div className="row p-3">
                                    <TextField
                                        value={edituserInput.experience.jobrole}
                                        onChange={(e) =>
                                            editsetUserInput({
                                                ...edituserInput,
                                                experience: {
                                                    ...edituserInput.experience,
                                                    jobrole: e.target.value,
                                                },
                                            })
                                        }
                                        id="job-or-intern"
                                        label="Job-Or-Intern"
                                        variant="standard"
                                    />
                                    <TextField
                                        value={edituserInput.experience.company}
                                        onChange={(e) =>
                                            editsetUserInput({
                                                ...edituserInput,
                                                experience: {
                                                    ...edituserInput.experience,
                                                    company: e.target.value,
                                                },
                                            })
                                        }
                                        id="company-name"
                                        label="Company-Name"
                                        variant="standard"
                                    />
                                    <TextField
                                        value={edituserInput.experience.joblocation}
                                        onChange={(e) =>
                                            editsetUserInput({
                                                ...edituserInput,
                                                experience: {
                                                    ...edituserInput.experience,
                                                    joblocation: e.target.value,
                                                },
                                            })
                                        }
                                        id="location"
                                        label="Location"
                                        variant="standard"
                                    />
                                    <TextField
                                        value={edituserInput.experience.duration}
                                        onChange={(e) =>
                                            editsetUserInput({
                                                ...edituserInput,
                                                experience: {
                                                    ...edituserInput.experience,
                                                    duration: e.target.value,
                                                },
                                            })
                                        }
                                        id="duration"
                                        label="Duration"
                                        variant="standard"
                                    />
                                </div>
                            </div>

                            <div>
                                <h1>Skills</h1>
                                <div className="row p-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <TextField
                                            onChange={(e) => setInputSkill(e.target.value)}
                                            id="skill"
                                            sx={{ width: "350px" }}
                                            label="Enter Skills"
                                            variant="standard"
                                        />
                                        <Button
                                            value={inputSkill}
                                            onClick={() => addSkill(inputSkill)}
                                            variant="outlined"
                                        >
                                            ADD
                                        </Button>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4>Suggestions :</h4>
                                    <div className="d-flex gap-2 flex-wrap mt-3">
                                        {skillsSuggestionArray.map((userSkill) => (
                                            <Button
                                                key={userSkill}
                                                onClick={() => addSkill(userSkill)}
                                                variant="contained"
                                            >
                                                {userSkill}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <h4>Added Skills :</h4>
                                    {edituserInput.skills.map((item) => (
                                        <span key={item} className="btn btn-primary me-3 mb-2">
                                            <button
                                                className="text-light btn"
                                                onClick={() => removeSkill(item)}
                                            >
                                                {item} X
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h1>Professional Summary</h1>
                                <div className="row p-3">
                                    <TextField
                                        value={edituserInput.summary}
                                        onChange={(e) =>
                                            editsetUserInput({ ...edituserInput, summary: e.target.value })
                                        }
                                        multiline
                                        rows={5}
                                        id="summary"
                                        label="Write a short note on yourself"
                                        variant="standard"
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-end gap-3">
                                <Button variant="outlined">Cancel</Button>
                  
                                <Button
                                    type="button"
                                    onClick={updateResume}
                                    variant="contained"
                                    disabled={loading}
                                    startIcon={loading ? <CircularProgress size={16} color="inherit" /> : null}
                                >
                                    {loading ? "Updating..." : "Update"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}

export default Edit;
