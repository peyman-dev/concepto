import { Locate, MapPin } from 'lucide-react'
import React from 'react'

const CompanyLocation = () => {
  return (
    <div className='flex-ic gap-1 text-[#9095AA]'>
        <MapPin className='size-4'/>
        <span className='text-sm'>
            تهران, ایران
        </span>
    </div>
  )
}

export default CompanyLocation