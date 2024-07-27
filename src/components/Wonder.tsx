import Image from 'next/image'
import React from 'react'
import john from '/public/images/john.svg'
import team from '/public/images/team.svg'
import right from '/public/images/right.svg'
import arrowright from '/public/images/ArrowRight.png'
const Wonder = () => {
  return (
    <section className="sm:mx-11 py-2 sm:px-20 px-2 sm:mb-[10rem] relative">
    <div className="relative xl:max-w-[959px] mx-auto">
      <div className="text-center mb-[5rem]">
        <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-extrabold leading-tight text-[#C6C6C6] capitalize">
          No need to wonder.
        </h2>
        <h2 className="text-[32px] sm:text-[48px] md:text-[61px] font-extrabold leading-tight text-black capitalize">
          Working with us is wonderful.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[8rem]">
        <div className="space-y-4 max-w-[426px] mx-auto sm:items-start flex flex-col items-center justify-center">
          <h4 className="flex items-center gap-2 uppercase   text-[16px] font-semibold">
            <Image src={right} alt="right" className="w-[20px] h-[20px]" />
            The right people
          </h4>
          <p className="text-[14px] sm:text-[16px] text-center sm:text-left leading-6 font-normal text-[#525252]">
            Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.
          </p>
        </div>

        <div className="space-y-4 max-w-[426px] mx-auto sm:items-start flex flex-col items-center justify-center">
          <h4 className="flex items-center gap-2 uppercase text-[16px] font-semibold">
            <Image src={right} alt="right" className="w-[20px] h-[20px]" />
            The right people
          </h4>
          <p className="text-[14px] sm:text-[16px] text-center sm:text-left leading-6 font-normal text-[#525252]">
            Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.
          </p>
        </div>

        <div className="space-y-4 max-w-[426px] mx-auto sm:items-start flex flex-col items-center justify-center">
          <h4 className="flex items-center gap-2 uppercase text-[16px] font-semibold">
            <Image src={right} alt="right" className="w-[20px] h-[20px]" />
            The right people
          </h4>
          <p className="text-[14px] sm:text-[16px] text-center sm:text-left leading-6 font-normal text-[#525252]">
            Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.
          </p>
        </div>

        <div className="space-y-4 max-w-[426px] mx-auto sm:items-start flex flex-col items-center justify-center">
          <h4 className="flex items-center gap-2 uppercase text-[16px] font-semibold">
            <Image src={right} alt="right" className="w-[20px] h-[20px]" />
            The right people
          </h4>
          <p className="text-[14px] sm:text-[16px] text-center sm:text-left leading-6 font-normal text-[#525252]">
            Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.
          </p>
        </div>
      </div>
      <div className='ml-[4.5rem] relative '>
        <Image src={john} alt='john' className='' />
        <p className='absolute top-[16px] rotate-[-5] text-[18px] left-[2.5rem] text-xl text-white opacity-95'>
          John Deo <br /> <span className='text-[14px] text-[#E0E0E0]'>web Developer</span>
        </p>
      </div>

      <div className="flex justify-center mb-[4rem]">
        <Image src={team} alt="team" width={643} height={128} className="w-full max-w-[643px] h-auto" />
      </div>

      <div className="flex items-center justify-center mt-[4rem] ">
        <button className="uppercase text-[16px] min-w-[368px] rounded-md py-5 px-4 bg-black  sm:text-[18px]  text-white flex justify-center items-center gap-2">
          Get In Touch
          <Image src={arrowright} alt="arrow right" className="w-[24px] h-[24px]" />
        </button>
      </div>
    </div>
  </section>
  )
}

export default Wonder
