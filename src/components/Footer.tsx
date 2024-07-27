import React from 'react'
import img9 from '/public/images/ok.png'
const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] py-6 text-white xl:h-[350px] xl:w-[1540px]">
          <div className="md:container mx-auto px-4">
            <div className='mx-auto'>
              <div className="md:flex mx-auto flex-col sm:flex-row  mt-8 items-start sm:items-center justify-between xl:h-[129px] xl:w-[1111px] ">
                <div className="mt-5 space-y-6 xl:h-[129px] xl:w-[225px] text-center sm:text-left">
                  <div className='bg-black flex items-center justify-center h-16 xl:w-[225px] xl:h-[63px]'>
                    <button className="mb-2 p-2 text-[14px] font-black text-white">DASH MICRO SYSTEM</button>
                  </div>
                  <div className="space-y-1 xl:h-[50px] xl:w-[218px] text-center md:text-left">
                    <p className="text-[16px] leading-6 text-[#6F6F6F] font-normal">Copyright © 2024</p>
                    <p className="text-[15px] leading-6 text-[#6F6F6F] font-normal">DASH MICRO SYSTEMS Pvt Ltd</p>
                  </div>
                </div>
                <div className=" mt-8 space-y-2 grid xl:grid-cols-4  md:grid-cols-3 xl:w-[678px] xl:h-[84px]  sm:grid-cols-4 grid-cols-3 gap-5 text-xs text-gray-500 justify-center sm:justify-start">
                  <a href="#" className="hover:underline uppercase  md:text-[18px] text-[15px]">HOME</a>
                  <a href="#" className="hover:underline  uppercase  md:text-[18px] text-[15px]">INDUSTRIES</a>
                  <a href="#" className="hover:underline  uppercase  md:text-[18px] text-[15px]">CASE STUDIES</a>
                  <a href="#" className="hover:underline  uppercase  md:text-[18px] text-[15px]">ABOUT US</a>
                  <a href="#" className="hover:underline  uppercase  md:text-[18px] text-[15px]">COMPANY</a>
                  <a href="#" className="hover:underline  uppercase  md:text-[18px] text-[15px]">SERVICES</a>
                  <a href="#" className="hover:underline  uppercase  md:text-[18px] text-[15px]">PRIVACY POLICY</a>
                </div>
              </div>

            </div>
          </div>


          <div className="mx-4 sm:mx-9 space-y-8 text-center">
            <hr className="bg-black mt-[3rem] xl:w-[1111px] mx-auto " />
            <div className='flex items-center  justify-center'>
              <img src={img9.src} alt="Footer Image" />
            </div>
          </div>
        </footer>
  )
}

export default Footer
