import React from 'react'
import ellipes from '/public/images/ellipes.svg'
import ellipes2 from '/public/images/ellipes2.svg'
import img1 from '/public/images/img1.png'
import img2 from '/public/images/Illustration.png'
import img4 from '/public/images/last.png'
import img3 from '/public/images/no.png'
import Image from 'next/image'
const Service = () => {
    return (
        <div className="container mx-auto py-6">


            <section id="services" className=" mt-12 sm:px-20  ">
                <div className='xl:w-[1153px] xl:h-auto md:w-full   gap-[12px] m-6'>
                    <h2 className="mb-2 text-left text-2xl text-black md:text-4xl lg:text-5xl xl:text-[64px]">Services</h2>
                    <p className="sm:mb-[4rem] sm:pr-[5.25rem] text-[#525252] text-base md:text-lg lg:text-xl xl:text-2xl font-normal leading-8">
                        Clients trust Us For Our Clarity, High Performance And Intuitive Functionality Across Every Stage Of The
                        Software Development Process.
                    </p>
                </div>

                <div className="grid sm:grid-cols-1  xl:h-[1056px] xl:w-[1151px]  xl:grid-cols-2 gap-x-10   ">

                    <div className="shadow-first mx-auto md:h-[516px]   md:w-[562px] relative xl:w-[564px] lg:h-[516px] rounded-lg border-t-4 border-black p-6 shadow-lg sm:h-96">
                        <div className='lg:w-[486px] lg:h-[112px] mt-[3rem]'>
                            <h3 className="text-md mb-4 font-semibold uppercase text-black text-lg md:text-xl  lg:text-[32px]">DATA AUTOMATION</h3>
                            <p className="text-[18px] text-gray-500 sm:text-base">
                                From automation to artificial intelligence, discover a world where quality work is the standard.
                            </p>
                        </div>
                        <div className="flex justify-center mt-[5rem]">
                            <Image src={img4} alt='Data Automation' height={184} width={289} className='z-[100]' />
                        </div>
                        <Image src={ellipes} alt='ellipes' className='absolute bottom-0 left-1' />
                    </div>

                    <div className="shadow-first mx-auto overflow-hidden   xl:w-[564px] md:h-[516px] relative md:w-[562px] rounded-lg p-5 shadow-lg  ">
                        <div className='lg:w-[486px] lg:h-[112px] mt-[3rem]'>
                            <h3 className="text-md  mb-4 font-semibold uppercase text-black text-lg md:text-xl  lg:text-[32px] ">PRODUCT DESIGN</h3>
                            <p className="text-[18px] text-gray-500 sm:text-base">
                                From automation to artificial intelligence, discover a world where quality work is the standard.
                            </p>
                        </div>
                        <div className="flex justify-center mtrem]">
                            <Image src={img1} alt="Product Design" height={230} className='z-[112]' width={512} />
                        </div>
                        <Image src={ellipes2} alt='ellipes' className='absolute top-0  right-0 sm:bottom-0 bottom-1 left-0 h-[100%] w-[100%] opacity-70   ' />

                    </div>
                    <div className="shadow-first mx-auto md:h-[516px]  xl:w-[564px] lg:h-[516px] md:w-[562px] rounded-lg p-5 shadow-lg  ">
                        <div className="flex justify-center mt-4 lg:w-[561px] lg:h-[242.44px]">
                            <Image src={img3} alt="Platform and Product Engineering" height={242.4} width={561} />
                        </div>
                        <div className='lg:w-[486px] lg:-h-[152px] mt-[3rem]'>
                            <h3 className=" mb-4 font-semibold uppercase text-black  leading-10 lg:text-[32px]">PLATFORM AND PRODUCT ENGINEERING</h3>
                            <p className="lg:text-[18px] text-gray-500 sm:text-base">
                                From automation to artificial intelligence, discover a world where quality work is the standard.
                            </p>
                        </div>
                    </div>

                    <div className="shadow-first mx-auto md:h-[516px] xl:w-[564px] lg:h-[516px]  md:w-[562px] p-5  rounded-lg  shadow-lg  ">
                        <div className="flex justify-center mt-4 lg:w-[561px] lg:h-[242.44px] ">
                            <Image src={img2} alt='Scalable and Agile Delivery' height={242.4} width={561} />
                        </div>
                        <div className='lg:w-[486px] lg:-h-[112px] lg:mt-[3rem]'>

                            <h3 className="mb-4 font-semibold lg:h-[px] uppercase text-black   leading-10 lg:text-[32px]">SCALABLE AND AGILE DELIVERY</h3>
                            <p className="lg:text-[18px] text-gray-500 sm:text-base">
                                From automation to artificial intelligence, discover a world where quality work is the standard.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Service
