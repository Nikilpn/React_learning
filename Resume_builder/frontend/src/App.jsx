import { useState } from 'react'
import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaHome } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className='text-primary poppins-thin ' ><FaHome /> welcome</h1>
       <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </div>
      
    </>
  )
}

export default App


