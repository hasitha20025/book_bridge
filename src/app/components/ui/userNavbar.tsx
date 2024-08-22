import Image from 'next/image'
import Logo from '../../../../public/imges/logo/logo.svg'
import Search from './search';


export default function UserNavbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        
        {/* Part 1: Logo and Name */}
        <div className="flex items-center">
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
        <div className="flex items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden mt-4 px-4">
        
        <Search /> 
      </div>
    </nav>
  );
}
