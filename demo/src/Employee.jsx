import React from 'react'

function Employee({ parentData,isemp }) {
  console.log(parentData);

  return (
    <div>
      <h1>Employeeess</h1>

      {isemp? <p className='p-3 text-danger border border-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque vitae molestiae. Ad voluptate ipsum excepturi, voluptas dolores tenetur molestias maxime voluptatem
        quisquam cumque nisi quae quo dolore, veritatis provident.</p>

        :
      <h1 className='text-danger'>Data not recieved</h1>      
      }



        {isemp && <p className='p-3 text-danger border border-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque vitae molestiae. Ad voluptate ipsum excepturi, voluptas dolores tenetur molestias maxime voluptatem
        quisquam cumque nisi quae quo dolore, veritatis provident.</p>

        
   
      }

    </div>
  )
}

export default Employee
