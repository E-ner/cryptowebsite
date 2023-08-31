import React from 'react'

import pic1 from '../assets/pic1.png'
const Hero = () => {
  return (
    <div className='flex mt-20 sm:flex-row flex-col'>
      <div>
        <div className='items-center'>
          <div>
          <h1 className='font-bold text-gray-200 text-5xl capitalize leading-[3rem] w-80'>
            discover and collect rare NFTs
        </h1>
        <p className='text-gray-300 mt-10 md:w-96 sm:w-96 opacity-90'>
            The most secure marketplace for buying and selling unique crypto assets
        </p>
          </div>
        </div>
        <div className='flex flex-wrap md:gap-4 mt-5 gap-3 sm:gap-4'>
            <button className='uppercase rounded-full bg-purple-400 opacity-80 text-white px-7 py-2 hover:opacity-100'>
                buy nfts
            </button>
            <button className='uppercase rounded-full border border-purple-400 text-white px-7 py-2'>
                sell nfts
            </button>
        </div>
      </div>
      <div className='md:ml-10 md:mt-auto mt-20'>
          <img src={pic1} alt="image" />
        </div>
    </div>
  )
}

export default Hero
