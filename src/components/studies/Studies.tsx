import Image from 'next/image'
import React from 'react'
interface props {
   imgurl:string,
    title:string,
    desc:string,
   
}
const Studies = ({imgurl,title,desc}:props) => {
  return (
    <div className=" flex md:flex xl:space-x-3 lg:px-3 md:px-2 sm:justify-center lg:h-[381px]  justify-center space-x-2 ">
      <div  className=" border  rounded-lg  bg-[#525252] py-3    ">
        <div className="mb-2 ">
         <Image src={imgurl} alt='img' width={450} height={400} className='lg:px-2 flex mx-auto ' />
        </div>
        <div className="mx-5 space-y-2  ">
          <h3 className="text-[26px] text-left font-semibold leading-8 text-[#FFFFFF]">{title}</h3>
          <p className="text-xs font-normal text-[#FFFFFF]">
          {desc}
          </p>
        </div>
      </div>
  </div>
  )
}

export default Studies
