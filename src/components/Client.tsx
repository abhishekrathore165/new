import Image from 'next/image'
import React from 'react'
import img10 from '/public/images/photo.png'
import arrow from '/public/images/arrow.svg'
import arrowleft from '/public/images/arrowleft.svg'
const Client = () => {
  return (
    <section className="mb-5 sm:p-5 py-12 mt-[3rem] xl:w-full xl:max-w-[1440px] mx-auto">
    <div className="space-y-3 text-center mb-[3rem] xl:w-full xl:max-w-[923px] flex flex-col items-center justify-center mx-auto">
      <div className="xl:max-w-[764px] mx-auto">
        <h1 className="uppercase text-[32px] sm:text-[40px] md:text-[50px] lg:text-[61px] font-medium leading-tight text-black">
          WHAT OUR CLIENTS SAY?
        </h1>
      </div>
      <div>
        <p className="font-light text-[16px] sm:text-[20px] md:text-[24px] leading-9 text-[#393939] xl:max-w-[923px] mx-auto">
          Computools&apos; industry expertise enhances your innovation and improves your customer&apos;s experience.
        </p>
      </div>
    </div>
    <div className="xl:w-full xl:max-w-[1440px] mx-auto">
      <div className="grid md:grid-cols-2 gap-5 xl:max-w-[1152.3px] mx-auto">
        <div className="p-4 flex items-center mx-auto md:mx-0">
          <div className="mx-auto">
            <p className="text-[20px] md:text-[22px] lg:text-[25px] font-normal leading-9 mb-12 text-[#262626]">
              “<br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
              lectus magna fringilla urna, porttitor rhoncus.
            </p>
            <div className="space-y-3">
              <div className="flex space-x-3">
                <p className="text-xs text-black">John Robert</p>
                <p className="text-xs text-gray-500">Senior Java Developer</p>
              </div>
              <div className="flex mb-12 gap-2">
                <div className="w-12 h-12 bg-gray-300 flex items-center justify-center">
                  <Image src={arrowleft} alt="arrow left" className="" />
                </div>
                <div className="w-12 h-12 bg-gray-300 flex items-center justify-center">
                  <Image src={arrow} alt="arrow right" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 mx-auto md:mx-0 flex items-center">
          <img src={img10.src} className="w-full h-auto border border-black" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Client
