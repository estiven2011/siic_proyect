import React from 'react'
import Profile from "../../assets/img/user.png"

function profile() {
  return (
      <section className=' w-full '>
        <div className="">
          <div className="profile h-[40%] justify-center items-center">
            <img src={Profile} alt="" />
            <h1>Juan Manuel Castaño Agudelo</h1>
          </div>
        </div>

      </section>
  )
}

export default profile
