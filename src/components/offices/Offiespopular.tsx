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
    breakpoint: { max: 3000, min: 1078 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1078, min: 764 },
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
    <section className="my-12 overflow-x-hidden sm:p-12 p-2 text-left  relative ">
      <Image src={ellip} alt='ellip' className='absolute top-[100px] sm:left-[-5rem] left-[-10rem] rotate-45' />
      <div className='sm:px-20 px-2 relative'>
        <h2 className="mb-6 text-2xl font-bold text-black md:text-5xl xl:text-7xl">OUR OFFICES</h2>
        <p className="mb-8 text-[#393939] xl:text-2xl md:w-[90%] w-full">
          Computools Provides Software Development Services Worldwide. Get In Touch With One Of Our Experts In Your
          Region.
        </p>
        <Carousel className='absolute lg:left-[135px] sm:left-[100px] left-[13px]' additionalTransfrom={0} arrows={false} autoPlay={true} autoPlaySpeed={4000} centerMode={false} infinite responsive={responsive} itemClass='item' showDots={false}  >
          {
            officeItems.map((item) => {
              return (
                <Officess key={item.id} state={item.state} city={item.city} phone={item.phone} email={item.email} />
              )
            })
          }
        </Carousel>
      </div>
    </section>

  )
}

export default Offiespopular
