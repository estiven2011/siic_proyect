import React from 'react'
import Presente from "../../assets/img/presente.jpeg"

function Presentaciones() {
  return (
    <div className='primary w-full flex flex-col  items-center  mt-20  h-[70vh] '>
      <div className="container1 flex  gap-24  flex-wrap justify-center ">
        <div class="max-w-[35%]  border border-gray-200 rounded-lg shadowbg dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div class="p-5">
          <img src={Presente} alt="" />
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Presentacion - Ventajas Inteligencia Computacional</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Les anexo diapostivas vistas en la sesion</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1457dc91] rounded-lg   dark:bg-blue-600 hover:bg-blue-500">
            Editar presentación
            </a>
          </div>
        </div>
        <div class="max-w-[35%] bg-[#f6f5f7]  border shadow rounded-lg dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div class="p-5">
          <img src={Presente} alt="" />
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">Subir presentacion</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Presentacion 2</p>
            <input type="file" name="file" id="file" class=" inline-flex pl-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1457dc91] rounded-lg   dark:bg-blue-600 hover:bg-blue-500" />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Presentaciones
