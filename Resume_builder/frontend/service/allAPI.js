import COMMONAPI  from "./commonAPI";
import BASEURL  from "./serverURL";


//add resume-post-step componet

export const addResumeApi=(requestbody)=>{
    return COMMONAPI("POST",`${BASEURL}/all-resumes`,requestbody)

}
