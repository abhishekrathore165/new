'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow from '/public/images/arrow.svg'
import arrowleft from '/public/images/arrowleft.svg'
import arrowright1 from '/public/images/arrowright.svg'
import Image from 'next/image';
import Studies from './Studies';
import { gridItems } from '../../../constants';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min:1270 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1270, min:1260 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 1260, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const StudiesPorpular = () => {
    return (
        <section className="overflow-x-hidden  sm:px-20 px-7 bg-[#262626]">
            <div className=" lg:py-11 relative">
                <div className="flex justify-between">
                    <div className=" w-full">
                        <h3 className="mb-1 text-left md:text-[64px] sm:text-[50px] text-[30px] font-bold text-white  mt-4">CASE STUDIES</h3>
                        <p className="mb-8 font-normal text-[#525252] md:w-3/4 sm:w-[85%] w-full sm:text-[24px] text-[18px]">
                            Clients trust us for our clarity, structure, high performance and intuitive functionality across
                            every stage.
                        </p>
                    </div>
                    <div className='flex mb-[5rem] gap-2 mt-4 '>
                        <Image src={arrowleft} alt='arrow' className='bg-[#E0E0E0] sm:h-[50px] h-[30px] ' />
                        <Image src={arrow} alt='arrow' className='sm:h-[50px] h-[30px] ' />
                    </div>
                </div>
                <Carousel className='absolute right-0 lg:left-[91px] ' additionalTransfrom={0} arrows={false} autoPlay={true} autoPlaySpeed={4000} centerMode={false} infinite responsive={responsive} itemClass='item' showDots={false}  >
                    {
                        gridItems.map((item)=>{
                            return(
                                <Studies key={item.id} imgurl={item.imgSrc}title={item.title} desc={item.description} />
                            )
                        })
                    }
                </Carousel >

                <div className="mt-12 flex justify-center">
                    <button className="mb-2 h-[72px] w-[383px] flex items-center justify-center bg-black p-2 text-[16px] relative font-bold text-white">
                        DASH MICRO SYSTEM <img src={arrowright1.src} className="h-[72px] w-[77] bg-gray-100 absolute right-0" />{' '}
                    </button>
                    
                </div>
            </div>
        </section>
    )
}

export default StudiesPorpular
