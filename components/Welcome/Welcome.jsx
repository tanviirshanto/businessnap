import React from 'react'
import Image from "next/image";
const Welcome = () => {
    return (
      <div className="flex ">
        <div className="w-1/2 flex flex-col items-center ">
          <div>
            <h1 className='text-xl font-semibold text-white'>Welcome Back Tanvir</h1>
          </div>
          <div></div>
        </div>
        <div className="h-full flex items-end justify-end w-1/2  ">
          <Image
            src="/welcome-bg.png"
            width={600}
            height={600}
            alt=""
            className="w-32 mx-6 h-auto"
          />
        </div>
      </div>
    );
}

export default Welcome