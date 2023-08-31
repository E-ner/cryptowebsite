import React from 'react'

const Companies = () => {
  return (
    <div className='flex flex-col gap-3 mt-20'>
      <p className='text-gray-400 opacity-70'>Featured on</p>
      <div className='flex sm:text-gray-400 text-gray-200 opacity-20 md:text-2xl sm:text-xl text-[0.7rem] uppercase md:gap-10 gap-2 mt-4 bg-gray-600 p-4 rounded-xl justify-center'>
        <p>Inklink</p>
        <p>KankBan</p>
        <p>SpoilKey</p>
        <p>Inklink</p>
        <p>KankBan</p>
        <p>SpoilKey</p>
      </div>
    </div>
  )
}

export default Companies
