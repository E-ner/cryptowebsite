import React from 'react'

const Testimonials = () => {
  return (
    <div className='flex justify-center mt-32 flex-col'>
      <div className='self-center'>
      <p className='text-gray-400 opacity-70 text-center uppercase'>Testmonials</p>
      <h1 className="font-bold text-gray-200 text-3xl capitalize leading-[3rem] sm:w-96 text-center">
            read what others have said
        </h1>
      </div>
      <div className='flex md:flex-row gap-10 mt-5 flex-col items-center'>
      <div className='flex flex-col mt-10 sm:w-96 opacity-60'>
        <div className='bg-image w-20 h-20 rounded-full bg-center bg-cover self-center -mb-10 z-10'>
            <div className='h-4 rounded-full ml-auto w-4 opacity-80 mr-2 bg-purple-400'/>
        </div>
        <div className='bg-blue-950 rounded-2xl'>
            <p className='text-white font-extrabold text-center p-4 mt-12 uppercase'>Jonathan Louis</p>
            <p className='text-gray-300 p-5 text-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore exercitationem possimus maiores rem vero facere minus fugiat alias, dolores quis totam voluptates aspernatur.
            </p>
        </div>
      </div>
      <div className='flex flex-col mt-10 sm:w-96 opacity-60'>
        <div className='bg-image w-20 h-20 rounded-full bg-center bg-cover self-center -mb-10 z-10'>
            <div className='h-4 rounded-full ml-auto w-4 opacity-80 mr-2 bg-purple-400'/>
        </div>
        <div className='bg-blue-950 rounded-2xl'>
            <p className='text-white font-extrabold text-center p-4 mt-12 uppercase'>Jonathan Louis</p>
            <p className='text-gray-300 p-5 text-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore exercitationem possimus maiores rem vero facere minus fugiat alias, dolores quis totam voluptates aspernatur.
            </p>
        </div>
      </div>
      <div className='flex flex-col mt-10 sm:w-96 opacity-60'>
        <div className='bg-image w-20 h-20 rounded-full bg-center bg-cover self-center -mb-10 z-10'>
            <div className='h-4 rounded-full ml-auto w-4 opacity-80 mr-2 bg-purple-400'/>
        </div>
        <div className='bg-blue-950 rounded-2xl'>
            <p className='text-white font-extrabold text-center p-4 mt-12 uppercase'>Jonathan Louis</p>
            <p className='text-gray-300 p-5 text-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore exercitationem possimus maiores rem vero facere minus fugiat alias, dolores quis totam voluptates aspernatur.
            </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Testimonials
