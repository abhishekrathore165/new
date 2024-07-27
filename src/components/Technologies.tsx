import Image from 'next/image'
import React from 'react'
import figma from '/public/images/figma.svg'
import react from '/public/images/react.svg'
import kotlin from '/public/images/kotlin.svg'
import aws from '/public/images/aws.svg'
import javascript from '/public/images/javascript.svg'
import digital from '/public/images/digital.svg'
import adobe from '/public/images/adobe.svg'
import ipusm from '/public/images/ipusm.svg'
import lorem from '/public/images/lorem.svg'
import mongo from '/public/images/mongo.svg'

import square from '/public/images/square.svg'
const Technologies = () => {
  return (
    <section className="hidden bg-white  py-2 text-black relative md:block">
    <h2 className="mb-8  xl:h-[77px] xl:w-[ 724px] w-[100%] font-medium lg:text-[64px] md:text-[50px] leading-[77px] text-black flex items-center justify-center ">TECHNOLOGIES WE USE</h2>
    <div className="container text-center xl:h-[255px] xl:w-[1152px] ">
      <div className="grid grid-cols-8 lg:w-[100%] border-b-2 text-xs">
        <div className="p-4 hover:bg-gradient-to-r text-[16px] font-medium leading-6 hover:from-[#93FB9D] hover:to-[#09C7FB] hover:text-white">
          Frontend
        </div>
        <div className="p-4 xl:text-[16px] md:text-[14px] font-medium leading-6 text-[#6F6F6F]">Backend</div>
        <div className="p-4 xl:text-[16px] md:text-[14px] font-medium leading-6 text-[#6F6F6F]">Mobile</div>
        <div className="p-4 xl:text-[16px] md:text-[14px] font-medium leading-6 text-[#6F6F6F]">Database</div>
        <div className="p-4 xl:text-[16px] md:text-[14px] font-medium leading-6 text-[#6F6F6F]">Frameworks</div>
        <div className="p-4 xl:text-[16px] md:text-[14px] font-medium leading-6 text-[#6F6F6F]">DveOps</div>
        <div className="p-4 xl:text-[16px] md:text-[14px] font-medium leading-6 text-[#6F6F6F]">Cloud</div>
        <div className="p-4 xl:text-[16px] md:text-[14px] font-medium leading-6 text-[#6F6F6F]">Python</div>
      </div>

      < div className="space-between xl:w-[791.43px] xl:h-[ 178px] lg:w-[100%] gap-[24px] mx-auto grid grid-cols-7 justify-center p-7">
        <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
          <img src={figma.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
          <p className='font-medium text-[12px] leading-3 uppercase'>figma</p>
        </div>
        <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
          <img src={react.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
          <p className='font-medium text-[12px] leading-3 uppercase'>react</p>
        </div>
        <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
          <img src={kotlin.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
          <p className='font-medium text-[12px] leading-3 uppercase'>kotlin</p>
        </div>
        <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
          <img src={aws.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
          <p className='font-medium text-[12px] leading-3 uppercase'>aws</p>
        </div>
        <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
          <img src={javascript.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
          <p className='font-medium text-[12px] leading-3 uppercase'>javascript</p>
        </div>
        <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
          <img src={digital.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
          <p className='font-medium text-[12px] leading-3 uppercase'>DIGITAL Ocean</p>
        </div>
        <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
          <img src={adobe.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
          <p className='font-medium text-[12px] leading-3 uppercase'>ADOBE XD</p>
        </div>
      </div>
      <div className='flex items-center justify-center h-[76px] w-[314.09px] mx-auto gap-[64px] '>
        <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
          <img src={ipusm.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
          <p className='font-medium text-[12px] leading-3 uppercase'>IPSUM</p>
        </div>
        <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
          <img src={lorem.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
          <p className='font-medium text-[12px] leading-3 uppercase'>lorem</p>
        </div>
        <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
          <img src={mongo.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
          <p className='font-medium text-[12px] leading-3 uppercase'>mongo db</p>
        </div>
      </div>

    </div>
    <Image src={square} alt='square' width={1440} height={700} className='absolute top-[175px] bottom-0 opacity-100 ' />
  </section>
  )
}

export default Technologies
