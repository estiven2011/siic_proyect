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
    
<div class=" flex  items-center w-[70%] ml-14   ">
    <table class="w-full text-sm text-left text-white border-[1px] border-black  ">
        <thead class="text-xs  uppercase bg-[#1e5096] text-white">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600
                         bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
                          dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                           dark:border-gray-600" />
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b  dark:border-gray-700 hover:bg-gray-50 text-black">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input  id="checkbox-table-1" type="checkbox" class="w-4 h-4
                         text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500
                          dark:focus:ring-blue-600
                           focus:ring-2" />
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b text-black dark:border-gray-700 hover:bg-gray-50 ">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                         <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                          focus:ring-blue-500 dark:focus:ring-blue-600 
                         dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2
                          dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b text-black dark:border-gray-700 hover:bg-gray-50 ">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                          focus:ring-blue-500 dark:focus:ring-blue-600 
                         dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2
                          dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b text-black dark:border-gray-700 hover:bg-gray-50 ">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                          focus:ring-blue-500 dark:focus:ring-blue-600 
                         dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2
                          dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple Watch
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $179
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b text-black dark:border-gray-700 hover:bg-gray-50 ">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                          focus:ring-blue-500 dark:focus:ring-blue-600 
                         dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2
                          dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    iPad
                </th>
                <td class="px-6 py-4">
                    Gold
                </td>
                <td class="px-6 py-4">
                    Tablet
                </td>
                <td class="px-6 py-4">
                    $699
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white text-black  hover:bg-gray-50 ">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded
                          focus:ring-blue-500 dark:focus:ring-blue-600 
                         dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2
                          dark:bg-gray-700 dark:border-gray-600" />
                        <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple iMac 27"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    PC Desktop
                </td>
                <td class="px-6 py-4">
                    $3999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>


  </div>

      
  )
}

export default profile
