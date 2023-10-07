import React from 'react'
import Error from "../../assets/img/error.png"

function Tutoriales() {
  return (
    <div className='primary w-full flex flex-col  items-center  mt-20  '>
    <div className="container1 flex  gap-24  flex-wrap justify-center ">
      <div class="max-w-[70%] h-auto  border border-gray-200 rounded-lg shadowbg dark:border-gray-700">
        <div class="p-5">
        <img src={Error} className=' pb-5'/>
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Para acceder a esta vista Tutoriales necesitas estar registrado</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Te dejo el boton para que inicies sesion</p>
          <a href="/login" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1457dc91] rounded-lg   dark:bg-blue-600 hover:bg-blue-500">
          Click aqui
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Tutoriales
