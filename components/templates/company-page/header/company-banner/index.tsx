import Image from 'next/image'
import React from 'react'

const CompanyBanner = () => {
  return (
    <div className='h-50 bg-[url("/assets/static/buildings.jpg")] bg-center  w-full' style={{
        borderRadius: `59% 59% 40% 40% / 0% 0% 30% 30%`
    }}>
    </div>
  )
}

export default CompanyBanner