import { Menu } from 'lucide-react'
import React from 'react'

const Hamburger = () => {
  return (
    <button className='size-8 bg-[#E9EAEE] text-[#2E303B] cursor-pointer flex-center rounded-lg'>
        <Menu className='size-5'/>
    </button>
  )
}

export default Hamburger