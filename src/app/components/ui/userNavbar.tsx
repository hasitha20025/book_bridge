'use client';
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../public/imges/logo/logo.svg'
import Search from './search';
import RoundBtn from './roundBtn';
import BoderBtn from './boderBtn';
import { useState } from 'react';
import Profile from './profile';

export default function UserNavbar() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogin() {
    console.log('Login clicked');
    setIsLoggedIn(true);
  }
  function handleDonate(){
    console.log('Donate clicked');
  }

  return (
    <nav className="bg-white shadow-md py-1 mb-2 mt-2 sticky top-0 z-50 rounded-lg ">
      <div className=" flex items-center justify-between px-4 container mx-auto">
        
        {/* Part 1: Logo and Name */}
        <div className=" cursor-pointer">
          <Link href={'/'} className="flex items-center">
            <Image
                src={Logo}
                alt="Logo"
                width={50} 
                height={50}
                className='mt-1 h-12 w-auto' 
                
            />
           <h1 className=" ml-2 text-text  leading-tight text-lg font-bold">Book Bridge</h1>
          </Link>
        </div>

        {/* Part 2: Search Bar */}
        <div className="hidden md:flex flex-grow mx-4 justify-center ">
            <Search />           
        </div>

        {/* Part 3: Login Button */}
        <div className="flex items-center gap-3">         
          <RoundBtn name ="Donate" fun={handleDonate} />
          {isLoggedIn && <Profile />}
          {!isLoggedIn && <BoderBtn name ="Login" fun={handleLogin} />}
          
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden mt-4 px-4">
        
        <Search /> 
      </div>
    </nav>
  );
}
