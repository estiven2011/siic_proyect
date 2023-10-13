import React from 'react'
import Profile from "../../assets/img/user.png"

function Videos() {
  return (
    <div className='primary w-full flex flex-col  items-center  mt-20  h-[109vh] '>
      <div className="container1 flex  gap-24  flex-wrap justify-center">
        <div class="max-w-sm  border border-gray-200 rounded-lg shadowbg dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div class="p-5">
          <img src={Profile} alt="" />
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Video Presentacion Semilero </h5>
            </a>
            <p class="mb-10 font-normal text-gray-700 dark:text-gray-400">Aqui encontraremos un breve video donde te contamos de que trata este magnifico semillero</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1457dc91] rounded-lg   dark:bg-blue-600 hover:bg-blue-500">
             Ver video
            </a>
          </div>
        </div>
        <div class="max-w-sm bg-[#f6f5f7]  border shadow rounded-lg dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div class="p-5">
          <img src={Profile} alt="" />
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">¿Qué es Inteligencia Computacional?</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">En este apartado encontremos un video explicativo de lo que es inteligencia computacional.</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1457dc91] rounded-lg   dark:bg-blue-600 hover:bg-blue-500">
             Ver video
            </a>
          </div>
        </div>
        <div class="max-w-sm  border border-gray-200 rounded-lg shadowbg dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div class="p-5">
          <img src={Profile} alt="" />
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">Primera Sesion</h5>
            </a>
            <p class="mb-8 font-normal text-gray-700 dark:text-gray-400">Aqui esta montada la grabacion de la primera sesion. </p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1457dc91] rounded-lg   dark:bg-blue-600 hover:bg-blue-500">
            Ver video
            </a>
          </div>
        </div>
      <div className="container2 flex  gap-24 justify-center flex-wrap ">
      <div class="max-w-sm  border border-gray-200 rounded-lg shadowbg dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div class="p-5">
          <img src={Profile} alt="" />
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-black">Segunda Sesion</h5>
            </a>
            <p class="mb-8 font-normal text-gray-700 dark:text-gray-400">Aqui tendremos disponible el video de la grabacion de la segunda sesion</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#1457dc91] rounded-lg   dark:bg-blue-600 hover:bg-blue-500">
            Ver video
            </a>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Videos
