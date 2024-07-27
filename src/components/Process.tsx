import React from 'react'
import process from '/public/images/process.png'
import circle from '/public/images/circle.svg'
import stike from '/public/images/stike.svg'
import img6 from '/public/images/call.png'
import img7 from '/public/images/contact.png'
import arrowright from '/public/images/ArrowRight.png'
import Image from 'next/image'
const Process = () => {
  return (
    <section className="relative py-16 w-full bg-white overflow-hidden">
          <Image src={process} alt="process" className="absolute inset-0 object-cover w-full h-full " />
          <Image src={circle} alt='circle' className='absolute 2xl:left-[14rem] xl:top-[10rem] lg:top-[8rem] lg:flex hidden  ' />
          <Image src={stike} alt='circle' className='absolute 2xl:left-[16rem] left-[2rem] top-[22rem] lg:flex hidden    ' />
          <div className="z-10 sm:mx-11">
            <div className="text-center mb-8">
              <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[61px] xl:mr-[40rem] font-medium text-[#020611] opacity-90">
                OUR PROCESS
              </h1>
            </div>

            <div className="space-y-16 xl:mr-[6rem]">
              <div className="flex flex-col sm:flex-col items-start mx-8 sm:mx-auto max-w-[737px]">
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <img src={img6.src} className="w-[74px] h-[74px] opacity-90" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-[32px] sm:text-[38px] font-normal text-[#020611] opacity-90">
                    Join exploration call
                  </h2>
                  <p className="text-[16px] sm:text-[20px] md:text-[24px] font-normal text-[#525252] leading-9 opacity-90">
                    Tell us more about your business on a discovery call. We&apos;ll discuss team structure and approach,
                    success criteria, timescale, budget, and required skill sets to see how we can help.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-col items-start mx-8 sm:mx-auto max-w-[737px]">
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <img src={img7.src} className="w-[74px] h-[74px] opacity-90" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-[32px] sm:text-[38px] font-normal text-[#020611] opacity-90">
                    Discuss Solution and team structure
                  </h2>
                  <p className="text-[16px] sm:text-[20px] md:text-[24px] font-normal text-[#525252] leading-9 opacity-90">
                    In a matter of days, we will finalize your project specifications, agree on an engagement model, and
                    select and onboard your team.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-col items-start mx-8 sm:mx-auto max-w-[737px]">
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <img src={img7.src} className="w-[74px] h-[74px] opacity-90" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-[32px] sm:text-[38px] font-normal text-[#020611] opacity-90">
                    Get started and track performance
                  </h2>
                  <p className="text-[16px] sm:text-[20px] md:text-[24px] font-normal text-[#525252] leading-9 opacity-90">
                    Once we agree on milestones, we&apos;ll immediately get to work. We&apos;ll track progress, report updates,
                    and continuously adapt to your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center xl:mr-[39rem] mt-12">
              <div className="flex items-center bg-black z-[121] text-white rounded-md px-4 py-2 space-x-4">
                <button className="uppercase text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-6">
                  Get In Touch
                </button>
                <Image src={arrowright} alt="arrow right" className="w-[24px] h-[24px] opacity-90" />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Process
