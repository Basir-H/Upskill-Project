import React from 'react'
import { navLinks } from '../constants'
import { logo } from '../assets/images'

function Navbar() {
  return (
    <div className='flex justify-between p-4 bg-primary items-center'>
      <div className='logo'>
        <img src={logo} alt="" className='w-1/2'/>
      </div>
      <ul className='flex gap-4 text-white'>
        {
          navLinks.map((nav) => {
            return(
              <li>{nav.title}</li>
            )
          })
        }
        
      </ul>
    </div>
  )
}

export default Navbar