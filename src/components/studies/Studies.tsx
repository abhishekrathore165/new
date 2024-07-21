import Image from 'next/image'
import React from 'react'

interface Props {
    imgurl: string,
    title: string,
    desc: string,
}

const Studies = ({ imgurl, title, desc }: Props) => {
    return (
        <div className="flex flex-col sm:flex-row  border-4 bg-[#525252] border-[#525252] hover:border-[#6F6F6F] rounded-[8px] sm:space-x-4 lg:px-3 md:px-2  space-y-4 sm:space-y-0 justify-center items-center xl:w-[532px] xl:h-[626px]">
        <div className="  overflow-hidden  w-full xl:w-[497px] xl:h-[570px]">
          <div className="mb-2">
            <Image
              src={imgurl}
              alt='img'
              width={497}
              height={332}
              className='w-full h-auto'
            />
          </div>
          <div className="px-4 py-3 pb-5 space-y-2">
            <h3 className="text-[18px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[42px] font-semibold leading-tight text-[#FFFFFF]">
              {title}
            </h3>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[18px] leading-6 font-normal text-[#FFFFFF]">
              {desc}
            </p>
          </div>
        </div>
      </div>
      
    )
}

export default Studies

