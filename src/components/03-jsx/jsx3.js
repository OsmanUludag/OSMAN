import React from 'react'

// comment satırı

/* 
     comment bloğu
*/

const Jsx3 = () => {

    const isAdmin = false;

  return (
    <div>
        { isAdmin ?  
        <div>
         <h3>Admin Menü</h3>
            <ul>
                <li>Create User</li>
                <li>Update User</li>
                <li>Delete User</li>
            </ul>
        </div>
        : 
        <div>
         <h3>User Menü</h3>
             <ul>
                 <li>Login</li>
                 <li>Register</li>
             </ul>
        </div>
         
        }

    </div>
  )
}

export default Jsx3;