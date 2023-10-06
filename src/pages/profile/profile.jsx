import React from 'react'
import Profile from "../../assets/img/user.png"
import "./profile.css"

function profile() {
  return (
      
<<<<<<< HEAD
        <div className=" w-full ">
          <div className="profiles w-[20%]  m-5 ">
=======
        <div className=" w-full">
          <div className="profiles w-[20%] h-[79vh] m-5 ">
>>>>>>> 854c7b38cbb66b6d9e50d9be09a30a15f2c80169
            <img src={Profile} alt="" className=' rounded-sm justify-center' />
            <div className=' infoProfile flex flex-col items-center'>
              <p className=' text-center pb-8'><b>Nombre:</b> <br />Jorge Ernesto Espinosa Oviedo</p>
              <p className=' text-center pb-8'><b>Rol:</b> <br />Administrador</p>
              <p className=' text-center pb-8'><b>Correo:</b> <br /> jeespinosa@elpoli.edu.co </p>
            </div>
          </div>
        </div>

      
  )
}

export default profile
