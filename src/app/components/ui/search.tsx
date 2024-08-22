import React from 'react'
import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <>
        <div className=' border-2 rounded-full px-6 py-1 '>
                <form action="" className="flex items-center hover:scale-110 transition ease-in-out delay-100">
                    <input
                    type="text"
                    placeholder="Search you like Books"
                    className="w-full px-10 py-1 focus:outline-none border-none appearance-none "
                    />

                    <button type="submit"><CiSearch className='ml-3 text-slate-300' size={30} /></button>
                </form>
        </div> 
    </>
  )
}
