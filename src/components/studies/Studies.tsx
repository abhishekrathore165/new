import Image from 'next/image'
import React from 'react'
interface props {
   imgurl:string,
    title:string,
    desc:string,
   
}
const Studies = ({imgurl,title,desc}:props) => {
  return (
    <div className=" flex md:flex xl:space-x-3 lg:px-3 md:px-2 sm:justify-center right-0   justify-center space-x-2 ">
      <div  className=" border   bg-[#525252] py-7  ">
        <div className="mb-2 p-4">
         <Image src={imgurl} alt='img' width={500} height={400} className='' />
        </div>
        <div className="mx-5 space-y-2">
          <h3 className="text- text-left font-semibold text-[#FFFFFF]">{title}</h3>
          <p className="text-xs font-normal text-[#FFFFFF]">
          {desc}
          </p>
        </div>
      </div>
  </div>
  )
}

export default Studies
