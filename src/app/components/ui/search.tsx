import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <>
        <div className=' border-2 rounded-full px-4 py-1 '>
                <form action="" className="flex items-center">
                    <input
                    type="text"
                    placeholder="Search you like Books"
                    className="w-full px-10 py-1 focus:outline-none border-none appearance-none"
                    />

                    <button type="submit"><CiSearch className='ml-3' size={30} /></button>
                </form>
        </div> 
    </>
  )
}
