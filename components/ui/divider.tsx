import DividerType from '@/core/types/divider.type'
import React from 'react'
import { tv } from 'tailwind-variants'

const Divider = ({orientation,...props}: DividerType) => {
    const divider = tv({
        base: "w-px h-5 bg-[#CBCED7]",
        variants: {
          orientation:{ 
            horizontal: "w-full h-px",
            vertical: "w-5 h-full"
          }
        }
    })
  return (
    <div className={divider({
        orientation
    })}/>
  )
}

export default Divider