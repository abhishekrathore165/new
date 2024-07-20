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
        breakpoint: { max: 1270, min: 890 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 890, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const StudiesPorpular = () => {
    return (
        <section className="overflow-x-hidden  sm:px-20 px-7 bg-[#262626]">
            <div className=" py-11">
                <div className="flex justify-between">
                    <div className="">
                        <h3 className="mb-1 text-left text-2xl font-bold text-white md:text-5xl xl:text-7xl">CASE STUDIES</h3>
                        <p className="mb-8 font-medium text-[#525252] md:w-3/4 xl:text-2xl">
                            Clients trust us for our clarity, structure, high performance and intuitive functionality across
                            every stage.
                        </p>
                    </div>
                    <div className='flex mb-[5rem] gap-2 '>
                        <Image src={arrowleft} alt='arrow' className='bg-[#E0E0E0] sm:h-[50px] h-[30px] ' />
                        <Image src={arrow} alt='arrow' className='sm:h-[50px] h-[30px] ' />
                    </div>
                </div>
                <Carousel className='xl:w-[1296px] lg:w-[980px] md:w-[800px] mr-[2px] ' additionalTransfrom={0} arrows={false} autoPlay={true} autoPlaySpeed={4000} centerMode={false} infinite responsive={responsive} itemClass='item' showDots={false}  >
                    {
                        gridItems.map((item)=>{
                            return(
                                <Studies key={item.id} imgurl={item.imgSrc}title={item.title} desc={item.description} />
                            )
                        })
                    }
                </Carousel >

                <div className="mt-12 flex justify-center">
                    <button className="mb-2 h-[2rem] w-[9rem] bg-black p-2 text-[9px] font-bold text-white">
                        DASH MICRO SYSTEM
                    </button>
                    <button className="h-8 w-8 bg-gray-100">
                        <img src={arrowright1.src} className="p-2" />{' '}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default StudiesPorpular
