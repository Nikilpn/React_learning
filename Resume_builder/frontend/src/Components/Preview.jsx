import React from 'react'
import Stack from '@mui/material/Stack';
import { FaFileDownload } from 'react-icons/fa';
import { FaHistory } from 'react-icons/fa';
import Paper from '@mui/material/Paper';
import { Box, Link } from '@mui/material';
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider';
import Edit from './Edit';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


function Preview({ userInput, isResumeAdded,resumeId ,setUserInput}) {
    console.log(userInput);
    const downloadPDF = async () => {
    const input = document.getElementById("result"); // to get the id
    const canvas = await html2canvas(input, { scale: 2 }); // convert the selected html to canvas (screenshot)
    const imgData = canvas.toDataURL("image/png"); // convert canvas into image url

    // pdf
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "png", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  }


    return (
        <>
            <Stack direction={'row'} sx={{ display: "flex", justifyContent: "end", padding: "50px", gap: "10px" }}>
                {
                    isResumeAdded &&
                    <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>

                        <Edit resumeId={resumeId} setUserInput={setUserInput} />

                        <Link>
                            <button type='button' onClick={downloadPDF} className='btn btn-primary'>
                                <FaFileDownload />
                            </button>
                        </Link>

                    </div>
                }
                {/* History*/}
                <p> <Link href={"/history"}><button className='btn btn-primary'><FaHistory /></button></Link></p>

                <Link href={'/'}><p className='btn text-primary'>BACK</p></Link>


            </Stack>
            <Box sx={{ textAlign: 'center' }}>
               <Paper elevation={3} sx={{ p: 5 }} id="result">
                    <h2>{userInput.professionalData.name}</h2>
                    <h6>{userInput.professionalData.jobTitle}</h6>
                    <p><span>{userInput.professionalData.location}</span> | <span>{userInput.professionalData.email}</span> | <span>{userInput.professionalData.phone}</span></p>

                    <div className='d-flex gap-3 justify-content-center'>

                        <span style={{ color: "#3498DB", textDecoration: "underline" }}>
                            {userInput.professionalData.github || "GITHUB"}
                        </span> |

                        <span style={{ color: "#3498DB", textDecoration: "underline" }}>
                            {userInput.professionalData.linkedin || "LINKEDIN"}
                        </span> |

                        <span style={{ color: "#3498DB", textDecoration: "underline" }}>
                            {userInput.professionalData.portfolio || "PORTFOLIO"}
                        </span>

                    </div>

                    <Divider sx={{ marginTop: "20px" }}>SUMMARY</Divider>

                    <p style={{ textAlign: "justify" }}> {userInput.summary} </p>

                    <Divider sx={{ marginTop: "20px" }}>Education</Divider>

                    <h4>{userInput.educationalData.course}</h4>
                    <p>{userInput.educationalData.college} | {userInput.educationalData.university} | {userInput.educationalData.year}</p>

                    <Divider sx={{ marginTop: "20px" }}>Professional Experience</Divider>

                    <h4>{userInput.experience.jobrole}</h4>
                    <p>{userInput.experience.company} | {userInput.experience.joblocation} | {userInput.experience.duration}</p>

                    <Divider sx={{ marginTop: "20px" }}>Skills</Divider>

                    <div className='d-flex flex-wrap gap-3'>
                        {userInput.skills.map((item) => (<Button key={item} variant='outlined'> {item} </Button>))}

                    </div>
                </Paper>

            </Box>

        </>
    )

}
export default Preview
