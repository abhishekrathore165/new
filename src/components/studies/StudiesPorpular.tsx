'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow from '/public/images/arrow.svg'
import arrowleft from '/public/images/arrowleft.svg'
import blackarrow from '/public/images/blackarrow.svg'
import Image from 'next/image';
import Studies from './Studies';
import { gridItems } from '../../../constants';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1250 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1250, min: 768 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        slidesToSlide: 1,
    }
};

const StudiesPorpular = () => {
    return (
        <div className='w-full'>


            <section className="relative py-8 sm:py-16  overflow-x-hidden">
                <div className='bg-[#262626] pl-20 py-10 pb-20'>

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:py-11 mb-12 px-4 sm:px-6 lg:px-8">
                        {/* Text Section */}
                        <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-[848px]">
                            <h3 className="text-white text-3xl sm:text-5xl md:text-6xl font-medium leading-tight mb-4">
                                CASE STUDIES
                            </h3>
                            <p className="text-[#E0E0E0] text-base sm:text-lg md:text-xl lg:text-xl">
                                Clients trust us for our clarity, structure, high performance, and intuitive functionality across every stage.
                            </p>
                        </div>
                        {/* Arrow Section */}
                        <div className="flex justify-center lg:justify-end lg:gap-6 space-x-4">
                            <div className="bg-[#E0E0E0] w-[42px] h-[42px] flex items-center justify-center lg:w-[84px] lg:h-[84px]">
                                <Image src={arrowleft} alt='arrow left' width={42} height={42} />
                            </div>
                            <div className="bg-[linear-gradient(229.42deg,#36FBFF_-20.03%,#5DFF5C_117.33%)]  w-[42px] h-[42px] flex items-center justify-center lg:w-[84px] lg:h-[84px]">
                                <Image src={arrow} alt='arrow right' width={48} height={84} />
                            </div>
                        </div>
                    </div>
                    <div className='relative overflow-hidden'>

                        <Carousel
                            className=" mx-auto lg:w-[1800px] "
                            additionalTransfrom={0}
                            arrows={false}
                            autoPlay={true}
                            autoPlaySpeed={4000}
                            centerMode={false}
                            infinite
                            responsive={responsive}
                            itemClass='item'
                            showDots={false}
                        >
                            {gridItems.map((item) => (
                                <Studies key={item.id} imgurl={item.imgSrc} title={item.title} desc={item.description} />
                            ))}
                        </Carousel>

                    </div>
                    <div className="mt-12 relative mr-5 flex items-center justify-center w-full ">
                        <div className='flex'>

                            <button className="  bg-black text-white text-sm sm:text-base md:text-lg leading-6 uppercase px-4 py-2 md:px-6 md:py-3 ">
                                Explore more CASE STUDIES
                            </button>
                            <div className="bg-gray-100  flex items-center justify-center p-4  ">
                                <Image src={blackarrow} alt='arrow right' width={24} height={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StudiesPorpular;
