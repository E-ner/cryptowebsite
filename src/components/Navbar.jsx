import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex gap-5 md:flex-row sm:flex-row flex-col'>
      <Link to='/' className='cursor-pointer text-gray-200 uppercase font-bold z-50'>
        krypto
      </Link>
      <div className='ml-auto'>
        <ul className='text-gray-300 flex gap-5 font'>
            <NavLink className='hover:text-gray-500'>about</NavLink>
            <NavLink className='hover:text-gray-500'>pricing</NavLink>
            <NavLink className='hover:text-gray-500'>contact</NavLink>
            <NavLink className='hover:text-gray-500'>buyefts</NavLink>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
