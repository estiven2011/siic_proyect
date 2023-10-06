import React from 'react'
import Profile from "../../assets/img/user.png"

function profile() {
  return (
      
        <div className=" w-full">
          <div className="profile">
            <img src={Profile} alt="" className=' rounded-sm' />
            <h1>Juan Manuel Castaño Agudelo</h1>
          </div>
        </div>

      
  )
}

export default profile
