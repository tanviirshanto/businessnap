"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";  
import {
  MdDarkMode,
  MdOutlineDarkMode,
  MdKeyboardArrowDown,
} from "react-icons/md";
const Navbar = () => {
    const [darkMode, setDarkMode]= useState(false)
  return (
    <div className="bg-white h-20 flex justify-between items-center px-5 text-2xl ">
      <div className="flex gap-5 items-center">
        <div>
          {" "}
          <CiSearch />
        </div>
      </div>

      <div className="flex gap-6">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </button>
        <div className="flex items-center gap-3 text-2xl hover:bg-gray-300 p-2 rounded-2xl relative group">
          <Image
            src="/avatar.jpg"
            height={300}
            width={300}
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <button>
            <MdKeyboardArrowDown />
          </button>
          <div className="absolute top-14 right-0 group-hover:visible invisible h-auto w-96 bg-white rounded-lg p-5 text-lg flex flex-col gap-3 group-hover:transition-all group-hover:duration-400 shadow-xl ">
            <div className="flex items-center gap-4   ">
              <div>
                <Image
                  src="/avatar.jpg"
                  height={300}
                  width={300}
                  alt="avatar"
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <div className="text-lg ">
                <h1 className="text-black">Tanvir Hossen Shanto</h1>
                <h1 className="text-gray-500">tanviir.hossen@gmail.com</h1>
              </div>
            </div>
            <hr className="mt-5" />
            <div className="py-3 hover:bg-slate-200 rounded-lg">
              <Link href="" className="px-5">
                My Profile
              </Link>
            </div>
            <div className="py-3 hover:bg-slate-200 rounded-lg">
              <Link href="" className="px-5">
                Account Settings
              </Link>
            </div>
            <div className="py-3 hover:bg-slate-200 rounded-lg">
              <Link href="" className="px-5">
                Sign out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar