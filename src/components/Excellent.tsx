import React from 'react'
import img12 from '/public/images/im.png'
import img13 from '/public/images/welcome.png'
import arrowright2 from '/public/images/arrowright2.svg'
const Excellent = () => {
  return (
    <section className="relative flex flex-col w-full xl:max-w-[1550px] mb-[5rem] mx-auto">
    <div className="relative z-10 sm:mx-11 mt-12">
      <div className="bg-black mx-auto sm:mt-[7rem] p-4 sm:p-7 xl:max-w-[1152px] xl:h-[729px] lg:max-w-[1375px] lg:mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-32 mx-auto space-y-4 xl:h-[161px] xl:w-[939px]">
          <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-medium text-white">
            EXCELLENCE
          </h1>
          <p className="text-[16px] sm:text-[20px] md:text-[24px] font-light text-gray-500 capitalize">
            Tell us more about your business on a discovery call. We’ll discuss team structure and approach,
            success criteria, timescale, budget, and required skill set.
          </p>
        </div>
        <div className="space-y-3 mx-auto xl:h-[312px] flex flex-col items-center">
          <div className="flex justify-center mb-5 w-full xl:h-[228px] xl:w-[939px]">
            <img src={img13.src} className="w-full h-auto xl:h-full xl:w-[939px]" />
          </div>
          <div>
            <br />
          </div>
          <div className="flex justify-center items-center mt-[4rem] space-x-2">
            <a href="#" className="text-[16px] sm:text-[20px] md:text-[24px] text-[#3fcf8c] capitalize hover:underline">
              Get in touch
            </a>
            <img src={arrowright2.src} className="h-[20px] sm:h-[24px] md:h-[28px]" />
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-0 w-full">
      <img src={img12.src} className="w-full h-[5rem] sm:h-[9rem] xl:flex hidden xl:h-[242px]" />
    </div>
  </section>
  )
}

export default Excellent
