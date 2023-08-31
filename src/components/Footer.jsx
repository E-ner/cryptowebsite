import React from 'react'

const Footer = () => {
  return (
    <div className='flex md:gap-20 mt-40 pb-10 sm:gap-8 sm:flex-row flex-col gap-4'>
      <p className='uppercase text-white text-xl font-bold'>
        krypto
      </p>
      <ul className='text-gray-300 flex flex-col gap-4 capitalize text-sm'>
        <li className='mb-2 font-semibold'>krypto</li>
        <li>home</li>
        <li>about</li>
        <li>buy nfts</li>
        <li>sell nfts</li>
      </ul>
      <ul className='text-gray-300 flex flex-col gap-4 capitalize text-sm'>
        <li className='mb-2 font-semibold'>Market</li>
        <li>browse nfts</li>
        <li>buy nfts</li>
        <li>sell nfts</li>
      </ul>
      <ul className='text-gray-300 flex flex-col gap-4 capitalize text-sm'>
        <li className='mb-2 font-semibold'>contact</li>
        <li>email</li>
        <li>linkedIn</li>
        <li>twitter</li>
      </ul>
      <div>
        <p className='text-gray-300 font-semibold'>Join our newsletter</p>
        <div className='bg-indigo-950 opacity-60 mt-5 sm:mt-10 rounded-full flex w-60 md:w-68'>
            <input type="text" className='w-full rounded-full outline-none text-white bg-inherit px-3' placeholder='Email address'/>
            <button className='uppercase rounded-full bg-purple-400 text-white px-3 py-2 ml-auto'>
              submit
            </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
