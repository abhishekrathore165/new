import Image from 'next/image'
import React from 'react'
import tick from '/public/images/tick.svg'
const Capabilities = () => {
  return (
    <section className="sm:mx-6 bg-white sm:px-20 px-2 py-16 ">
          <div className="container mx-auto text-center xl:w-[1153px]  xl:h-[337px] gap-[128px]">
            <div className='xl:h-[161px] xl:[1153px] gap-[12px] mb-[8rem]'>
              <h2 className="mb-6 text-left text-2xl text-black md:text-4xl lg:text-5xl xl:text-7xl">CAPABILITIES</h2>
              <p className="text-left font-medium text-[#525252] text-base md:text-lg lg:text-xl xl:text-2xl leading-8">
                Clients Trust Us For Our Clarity, Structure, High Performance And Intuitive Functionality Across Every
                Stage Of The Software Development Process.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-[24px]  xl:grid-cols-3">
              <div className=' xl:h-[48] xl:w-[368] sm:border-b '>
                <span className="flex justify-between text-left text-base leading-7 font-semibold mb-5">
                  ARTIFICIAL INTELLIGENCE
                  <Image src={tick} alt='tick' width={24} height={24} />
                </span>
                <hr className='border-b-2 border-black' />
              </div>

              <div className='xl:h-[48] xl:w-[368]'>
                <span className="flex justify-between text-left text-base leading-7 font-semibold mb-5">
                  CLOUD AND DATA
                </span>
                <hr className='border-b-2 mt-[13px]' />
              </div>
              <div className='xl:h-[48] xl:w-[368]'>
                <span className="flex justify-between text-left text-base leading-7 font-semibold mb-5">
                  INTERNET OF THINGS
                </span>
                <hr className='border-b-2 mt-[13px]' />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Capabilities
