'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Officess from './Officess';
import { officeItems, OfficesItem } from '../../../constants';
import Image from 'next/image';
import ellip from '/public/images/ellip.svg'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1000, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Offiespopular = () => {
  return (
    <section className="my-12 overflow-x-hidden sm:p-12 p-4 relative">
    <Image src={ellip} alt='ellip' className='absolute top-[100px] left-[-10rem] rotate-45 sm:left-[-5rem] sm:top-[80px]' />
    <div className="relative">
      <div className='mb-[5rem] mx-4 sm:mx-8 xl:mx-[5rem] xl:w-[839px]'>
        <h2 className="mb-6 text-black text-[40px] sm:text-[50px] md:text-[61px] font-medium">
          OUR OFFICES
        </h2>
        <p className="text-[#393939] text-base sm:text-lg md:text-xl xl:text-2xl">
          Computools Provides Software Development Services Worldwide. Get In Touch With One Of Our Experts In Your
          Region.
        </p>
      </div>
  
      <Carousel
        className='mx-4 sm:mx-8 lg:mx-[100px] xl:mx-[3rem] xl:w-[1296px] xl:h-[267px]'
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
        {
          officeItems.map((item) => (
            <Officess key={item.id} state={item.state} city={item.city} phone={item.phone} email={item.email} />
          ))
        }
      </Carousel>
    </div>
  </section>
  

  )
}

export default Offiespopular
