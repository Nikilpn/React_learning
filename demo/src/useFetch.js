import { useState } from "react"

const useFetch=(url)=>{

    //logic

    const[data,setData]=useState(null)



    fetch(url).then(res=>{
        res.json().then(result=>{

            setData(result)
            

        })
        
    })
    return data

}
export default useFetch