import COMMONAPI  from "./commonAPI";
import BASEURL  from "./serverURL";


//1.add resume-post-step componet

export const addResumeApi=async(requestbody)=>{
    return await COMMONAPI("POST",`${BASEURL}/all-resumes`,requestbody)

}
//2.get a resume
export const getResumeApi = async(id) => {
    console.log("API URL:", `${BASEURL}/all-resumes/${id}`);
    return await COMMONAPI("GET", `${BASEURL}/all-resumes/${id}`, {});
}
//3.update a resume
export const updateResumeApi = async (id, body) => {
    return await COMMONAPI("PUT", `${BASEURL}/all-resumes/${id}`, body)
}

//4.get all resumes

export const getAllResumeApi = async() => {

    return await COMMONAPI("GET", `${BASEURL}/all-resumes`);
}

//5.delete a resume

export const deleteResumeApi = async(id) => {

    return await COMMONAPI("DELETE", `${BASEURL}/all-resumes/${id}`, {});
}