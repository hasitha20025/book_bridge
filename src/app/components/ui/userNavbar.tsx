'use client';

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
    <nav className="bg-white shadow-md py-4 mb-2 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        
        {/* Part 1: Logo and Name */}
        <div className="flex items-center cursor-pointer">
            <Image
                src={Logo}
                alt="Logo"
                width={50} 
                height={50} 
                
            />
          <h1 className="text-xl font-bold ml-2">Book Bridge</h1>
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
