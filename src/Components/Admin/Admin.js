import React, { useState } from 'react'
import AdminHomePage from './AdminHomePage/AdminHomePage'
import AdminLogin from './AdminLogin/AdminLogin'
function Admin() {
    const [login,setLogin]=useState(false)
  return (
    <div>
        {login?<AdminHomePage/>:<AdminLogin setLogin={setLogin}/>}
    </div>
  )
}

export default Admin