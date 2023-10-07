import React from 'react'
import Profile from "../../assets/img/user.png"
import "./profile.css"

function profile() {
  return (
      
        <div className=" w-full flex ">
          <div className="profiles w-[20%] h-[79vh] m-5 flex">
            <div className=' infoProfile flex flex-col items-center'>
            <img src={Profile} alt="" className=' rounded-sm justify-center' />
              <p className=' text-center pb-8'><b>Nombre:</b> <br />Jorge Ernesto Espinosa Oviedo</p>
              <p className=' text-center pb-8'><b>Rol:</b> <br />Administrador</p>
              <p className=' text-center pb-8'><b>Correo:</b> <br /> jeespinosa@elpoli.edu.co </p>
            </div>
          </div>
        </div>
  )
}

export default profile
