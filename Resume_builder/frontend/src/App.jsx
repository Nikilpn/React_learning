import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import LandingPage from "./Pages/LandingPage"
import History from './Pages/History'
import PageNotFound from './Pages/PageNotFound'
import ResumeGenerator from './Pages/ResumeGenerator'
import Form from './Pages/Form'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/history' element={<History />} />
          <Route path='/form' element={<Form />} />
          <Route path='/*' element={<PageNotFound />} />
          <Route path='/resume' element={<ResumeGenerator />} />




        </Routes>
        <Footer />


      </div>

    </>
  )
}

export default App


