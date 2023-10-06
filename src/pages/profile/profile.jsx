import React from 'react'
import Profile from "../../assets/img/user.png"
import "./profile.css"

function profile() {
  return (
      
        <div className=" w-full ">
          <div className="profiles w-[20%]  m-5 ">
            <img src={Profile} alt="" className=' rounded-sm justify-center' />
            <div className=' infoProfile flex flex-col items-center'>
              <p className=' text-center pb-3'><b>Nombre:</b> <br />Juan Manuel Castaño Agudelo</p>
              <p className=' text-center '><b>Rol:</b> <br />Administrador</p>
            </div>
          </div>
        </div>

      
  )
}

export default profile
