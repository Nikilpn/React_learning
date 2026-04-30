import Demo from "./Demo"
import './App.css'
import Workerss from "./Workerss"
import Car from "./Car"
import Counter from "../Counter"
import Users from "./Users"
import { Route,Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import About from "./pages/About"


function App() {
  //jsx

  const clickButton1 = () => {
    alert("Button clicked ")
  }

  const clickButton2=(data)=>{
    alert("Button clicked  with  data: "+data)
  }

  const getData=(event)=>{
    console.log(event.target.value);
    
  }


  return (
    <>
      <div className="p-5">
        <h1 style={{ color: "red", fontSize: "50px" }}>welcome</h1>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>

        <Users/>

      <Counter/>
        <Workerss/>
        <Car/>


        <p id="result">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt mollitia
          esse quidem reiciendis, harum dolorum
          optio alias facere veniam, autem est totam impedit quo doloribus
          assumenda distinctio ex consequuntur!</p>

        <button onClick={clickButton1} className="btn btn-primary">click button 1</button>
        <button onClick={()=>clickButton2("nikhil")} className="btn btn-success ms-3">click button 2</button>

        <Demo />



        <input type="text" onChange={(event)=>getData(event)} className="form-control mt-3 " />



      </div>
    </>
  )
}

export default App
