import Image from 'next/image'
import React from 'react'
import ChevronRight from '/public/images/ChevronRight.png'
import arrowtr from '/public/images/arrowtr.png'
import arrowtrwhite from '/public/images/arrowtrwhite.png'
const Industries = () => {
  return (
    <section className="mt-12 px-3 lg:h-[1314px] w-[1540px] bg-[#F4F4F4] flex items-center justify-center">
    <div className="mb-5 text-black lg:h-[1124.76px] lg:w-[1156.14px] ms:w-[75%] ">
      <div className=' lg:h-[162.77px] lg:w-[1038.85px] xl:pl-0 lg:pl-[5rem] w-full mt-3'>
        <h2 className="mb-2 lg:text-left text-center  text-black font-medium lg:h-[76px] lg:w-[300px]  w-full  md:h-[80%] md:text-[63px] sm:text-[40px] text-[30px]  ">INDUSTRIES</h2>
        <p className="mb-8 font-light text-[#525252] lg:text-[23px] mx-auto lg:h-[71px] lg:w-[1038.85px] w-[80%] text-[10px] sm:text-[15px]  md:text-[18px] md:leading-[35px] ">
          Clients Industry Expertise Enhances Your Innovation And Improves Your Customers’ Experience.
        </p>
      </div>
      <div className='xl:w-[1156.14px] xl:h-[898.91px] lg:w-[1026px] mx-auto flex flex-col  gap-[3rem]  lg:h-[700px]  '>

        <div className="w-full  rounded-lg flex lg:justify-center mx-auto  bg-white py-10    shadow-lg">
          <div className=' mx-auto w-full '>
            <div className="flex items-center text-left  md:justify-between justify-center mb-7 mx-auto   ">
              <h3 className="mb-4 text-xl font-medium w-[154.55px] lg:text-[23.655px]  sm:w-[80%] lg:h-[40.19px] mx-auto   ">HEALTHCARE</h3>
              <img src={arrowtr.src} className="lg:h-[35.72px] lg:w-[32.11px]  w-[25px] mx-auto" />
            </div>
            <div className=" mx-auto lg:w-[1000px] sm:w-[80%] lg:h-[300px] w-[70%]  px-2 grid lg:gap-x-[5rem] md:gap-y-7 sm:gap-y-7 gap-y-7  grid-cols-1  xl:grid-cols-3 lg:grid-cols-2 ">
              <div className='lg:w-[319.14px]  group lg:h-[85.95px] hover:bg-[#F4F4F4] border flex items-center '>
                <div className=" flex  p-5 w-full justify-between  font-medium">
                  <p className='font-normal'>
                    LIFE SCIENCES TOOLS & SERVICES
                  </p>
                  <Image src={ChevronRight} alt='chevronright' className="hidden group-hover:flex lg:h-[23.63px] lg:w-[23.63px]"></Image>
                </div>
              </div>
              <div className='lg:w-[319.14px] group lg:h-[85.95px] hover:bg-[#F4F4F4] border flex items-center '>
                <div className=" flex  p-5 w-full justify-between  font-medium">
                  <p className='font-normal'>
                    HEALTHCARE BOOKING
                  </p>
                  <Image src={ChevronRight} alt='chevronright' className="hidden group-hover:flex lg:h-[23.63px] lg:w-[23.63px]"></Image>
                </div>
              </div>

              <div className='lg:w-[319.14px] group lg:h-[85.95px] hover:bg-[#F4F4F4] border flex items-center '>
                <div className=" flex  p-5 w-full justify-between  font-medium">
                  <p className='font-normal'>
                    DATA COLLECTION

                  </p>
                  <Image src={ChevronRight} alt='chevronright' className="hidden group-hover:flex lg:h-[23.63px] lg:w-[23.63px]"></Image>
                </div>
              </div>

              <div className='lg:w-[319.14px] group lg:h-[85.95px] hover:bg-[#F4F4F4] border flex items-center '>
                <div className=" flex  p-5 w-full justify-between  font-medium">
                  <p className='font-normal'>
                    LIFE SCIENCES TOOLS
                  </p>
                  <Image src={ChevronRight} alt='chevronright' className="hidden group-hover:flex lg:h-[23.63px] lg:w-[23.63px]"></Image>
                </div>
              </div>

              <div className='lg:w-[319.14px] group lg:h-[85.95px] hover:bg-[#F4F4F4] border flex items-center '>
                <div className=" flex  p-5 w-full justify-between  font-medium">
                  <p className='font-normal'>
                    HEALTHCARE INVENTORY & REPORTING
                  </p>
                  <Image src={ChevronRight} alt='chevronright' className="hidden group-hover:flex lg:h-[23.63px] lg:w-[23.63px]"></Image>
                </div>
              </div>
              <div className='lg:w-[319.14px] group lg:h-[85.95px] hover:bg-[#F4F4F4] border flex items-center '>
                <div className=" flex  p-5 w-full justify-between  font-medium">
                  <p className='font-normal'>
                    TOOLS & SERVICES
                  </p>
                  <Image src={ChevronRight} alt='chevronright' className="hidden group-hover:flex lg:h-[23.63px] lg:w-[23.63px]"></Image>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" sm:w-full w-[100%] mx-auto space-y-3 ">
          <div className='xl:w-[1156.14px] lg:w-[1030px] sm:w-full w-[80%] lg:space-y-5 space-y-5 mx-auto lg:h-[491px]'>
            <div className=" border-b border-t xl:w-[1156.14px] w-full lg:h-[83px] md:h-[79px] sm:h-[65px] h-[60px] sm:mx-0 mx-auto  bg-slate-50 p-4 font-medium relative">
              <div className='w-[90%]  flex items-center justify-between absolute top-0 bottom-0 sm:left-[2rem] '>
                <p className='lg:w-[298.36px] lg:h-[36px] lg:text-[23px] font-medium '>
                  ARTIFICIAL INTELLIGENCE
                </p>
                <img src={arrowtrwhite.src} className='lg:h-[31.54px] lg:w[31.54px] md:w-[28px] md:h-[28px]  w-[25px] h-[25px]'></img>
              </div>
            </div>
            <div className=" border-b border-t xl:w-[1156.14px]  md:h-[79px] sm:h-[65px] h-[60px] lg:h-[83px] bg-slate-50 p-4 font-medium relative">
              <div className='w-[90%] flex items-center justify-between absolute top-0 bottom-0 sm:left-[2rem] '>
                <p className='lg:w-[298.36px] lg:h-[36px] lg:text-[23px] font-medium '>DEFI</p>
                <img src={arrowtrwhite.src} className='lg:h-[31.54px] lg:w[31.54px]'></img>
              </div>
            </div>

            <div className=" border-b border-t xl:w-[1156.14px]  md:h-[79px] sm:h-[65px] h-[60px] lg:h-[83px] bg-slate-50 p-4 font-medium relative">
              <div className='w-[90%] flex items-center justify-between absolute top-0 bottom-0 sm:left-[2rem] '>
                <p className='lg:w-[298.36px] lg:h-[36px] lg:text-[23px] font-medium '>HEALTHCARE</p>
                <img src={arrowtrwhite.src} className='lg:h-[31.54px] lg:w[31.54px]'></img>
              </div>
            </div>

            <div className=" border-b border-t xl:w-[1156.14px]  md:h-[79px] sm:h-[65px] h-[60px] lg:h-[83px] bg-slate-50 p-4 font-medium relative">
              <div className='w-[90%] flex items-center justify-between absolute top-0 bottom-0 sm:left-[2rem] '>
                <p className='lg:w-[298.36px] lg:h-[36px] lg:text-[23px] font-medium '>FINANCE</p>
                <img src={arrowtrwhite.src} className='lg:h-[31.54px] lg:w[31.54px]'></img>
              </div>

            </div>

            <div className=" border-b border-t xl:w-[1156.14px]  md:h-[79px] sm:h-[65px] h-[60px] lg:h-[83px] bg-slate-50 p-4 font-medium relative">
              <div className='w-[90%] flex items-center justify-between absolute top-0 bottom-0 sm:left-[2rem] ' >
                <p className='lg:w-[298.36px] lg:h-[36px] lg:text-[23px] font-medium '>EDUCATION</p>
                <img src={arrowtrwhite.src} className='lg:h-[31.54px] lg:w[31.54px]'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Industries
