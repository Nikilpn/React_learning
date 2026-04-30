import React from 'react'
import useFetch from './useFetch'

function Users() {

  const allUsers=useFetch("https://jsonplaceholder.typicode.com/users")
  console.log(allUsers);
  
  return (
    <div>
        this is users component
      
    </div>
  )
}

export default Users
