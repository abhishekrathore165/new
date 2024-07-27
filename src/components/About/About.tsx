import Image from 'next/image'
import React from 'react'
import arrowright from '/public/images/ArrowRight.png'
const About = () => {
  return (
         
    <section className='w-[1160px]  sm:h-[800px] h-[727px] overflow-hidden'>
    <div className=' '>
      <div className='W-[1061px] xl:h-[260px]      space-y-[10px]'>
        <div className='xl:w-[1061px] ld:w-[80%] xl:m-0  mx-auto text-center xl:h-[166px] w-full xl:text-left   space-y-[12px]'>
          <h2 className="font-extrabold text-black xl:text-[64px] md:text-[40px] sm:text-[30px]  "><span className='xl:text-[64px] md:text-[40px]  sm:text-[30px]  font-extrabold text-[#C6C6C6]'>Say Hi!</span> And Tell Us About Your IDEA.</h2>
        </div>
        <div className='xl:w-[1061px] xl:h-[72px]  xl:text-left text-center   font-normal'>
          <p className='xl:text-[24px] lg:text-[15px] xl:pl-0 lg:pl-[12rem] md:w-[950px] md:pl-[13rem] xl:w-full sm:w-[900px] sm:pl-[18rem] h-[80px] lg:w-[973px]  w-[766px] pl-[25rem] '>Get in touch to discuss your project or service expectations. Simply fill in the form below or send us an
            e-mail to info@Dashmicrosystem.com</p>
        </div>
      </div>

      <div className=' mt-10 w-full'>
        <div className='xl:flex gap-4 w-[1152px] xl:h-[88px] md:h-[180px] '>
          <div className='h-[88px] xl:w-[564px] xl:m-0 lg:w-[80%] md:w-[65%] sm:w-[50%] w-[30%] mx-auto'>
            <p className="font-medium text-[18px] text-[#525252]">FULL NAME*</p>
            <input type="text" className="w-full text-[12px] sm:text-[14px] md:text-[16px] rounded-lg p-2" placeholder="So we know how to address you" />
            <div className="h-[1px]  bg-[#525252]"></div>
          </div>
          <div className='h-[88px] xl:w-[564px] xl:m-0 lg:w-[80%] md:w-[65%] sm:w-[50%] w-[30%] mx-auto'>
            <p className="font-medium text-[18px] text-[#525252]">COMPANY NAME*</p>
            <input type="text" className="w-full text-[12px] sm:text-[14px] md:text-[16px] rounded-lg p-2" placeholder="So we can tailor the services to your business needs" />
            <div className="h-[1px] bg-[#525252]"></div>
          </div>
        </div>
        <div className='xl:flex gap-4 xl:w-[1152px] xl:h-[88px] h-[180px] '>
          <div className='h-[88px] xl:w-[564px] xl:m-0 lg:w-[80%] md:w-[65%] sm:w-[50%] w-[30%] mx-auto'>
            <p className="font-medium text-[18px] text-[#525252]">EMAIL*</p>
            <input type="text" className="w-full text-[12px] sm:text-[14px] md:text-[16px] rounded-lg p-2" placeholder="So we can respond promptly to your enquiry" />
            <div className="h-[1px] bg-[#525252]"></div>
          </div>
          <div className='h-[88px] xl:w-[564px] xl:m-0 lg:w-[80%] md:w-[65%] sm:w-[50%] w-[30%] mx-auto'>
            <p className="font-medium text-[18px] text-[#525252]">WHO REFERRED YOU TO US?</p>
            <input type="text" className="w-full text-[12px] sm:text-[14px] md:text-[16px] rounded-lg p-2" placeholder="So we can say thank you" />
            <div className="h-[1px] bg-[#525252]"></div>
          </div>
        </div>
        <div className='xl:w-[1152px] h-[88px] xl:m-0 lg:w-[80%] md:w-[65%] sm:w-[50%] w-[30%] mx-auto '>
          <p className="font-medium text-[18px] text-[#525252]">MESSAGE</p>
          <textarea className="w-full text-[12px] sm:text-[14px] md:text-[16px] rounded-lg p-2" placeholder="Give us more details about your request so the colleagues with relevant experience can focus on your needs"></textarea>
          <div className="h-[1px] xl:w-[1152px] w-full bg-[#525252]"></div>
        </div>

        <div className=' xl:w-[1152px] xl:h-[72px] h-[110px] sm:gap-[2rem] gap-[1rem] xl:flex xl:flex-row items-center flex flex-col  xl:justify-between  justify-center mt-10'>
          <div className='flex items-center  xl:h-[20px] gap-[17px] '>
            <input type="checkbox" className='xl:h-[16px] xl:w-[16px]' />
            <p className='xl:w-[573px] xl:h-[20px] xl:text-[14px] sm:text-[12px] text-[8px] '>I agree and consent to the Privacy Policy, its terms of processing of my personal data.</p>
          </div>
          <button className=' sm:w-[368px] sm:h-[72px] w-[200px] h-[46px] bg-black sm:text-[16px] text-[13px] uppercase text-white '>
            <p className='flex items-center gap-[16px] justify-center text-white'>
              Get In Touch
              <Image src={arrowright} alt="arrowright" className=" z-[121] ml-2 h-[20px] sm:h-[24px] md:h-[28px]" />
            </p>

          </button>
        </div>

      </div>

    </div>
  </section>
  )
}

export default About
