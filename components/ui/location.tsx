import { MapPin } from 'lucide-react'
import React from 'react'

const Location = ({location = "تهران, ایران"}: {location: string}) => {
  return (
    <div className='flex-ic gap-2 text-sm text-[#737993]'>
        <MapPin className='h-6'/>
        <div>
            <p>
                {location}
            </p>
        </div>
    </div>
  )
}

export default Location