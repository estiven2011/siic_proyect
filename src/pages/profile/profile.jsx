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
          <div className=' tableCrud flex flex-col justify-center w-[80%] border-solid border-b-gray-950'>
              <h1 className=' items-center'>Tabla Maestra de Estudiantes</h1>
                <table className=' border-2 items-center'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NOMBRE</th>
                      <th>EDAD</th>
                      <th>Grado</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                        <td>ID</td>
                        <td>Nombre</td>
                        <td>Edad</td>
                        <td>Grado</td>
                      </tr>
                  </tbody>
                </table>
            </div>
        </div>
        

      
  )
}

export default profile
