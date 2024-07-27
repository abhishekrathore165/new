import Image from 'next/image'
import React from 'react'
import facebook from '/public/images/facebook.svg'
import google from '/public/images/google.svg'
import walmart from '/public/images/walmart.svg'
import microsoft from '/public/images/microsoft.svg'
const Hero = () => {
    return (
        <div className="container mx-auto py-6">

            <section className="mx-1 sm:px-20 px-4">
                <div className="text-left px-1 xl:w-[838px] xl:h-auto">
                    <h1 className="mb-2 mt-7 text-[25px] sm:text-[40px] lg:text-[64px] font-bold text-black">
                        LET&apos;S UNLOCK NEXT
                    </h1>
                    <h2 className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-2xl text-[#525252] font-medium mb-8">
                        DISCOVER UNPRECEDENTED EFFICIENCY WITH OUR MOST ADVANCED, INTUITIVE, AND USER-CENTRIC UPDATE YET.
                    </h2>
                </div>
                <div className="py-4">
                    <p className="font-medium text-[#393939]">Trusted By:</p>
                </div>
                <div className="mb-8 flex flex-wrap gap-4 justify-center sm:justify-start items-center mx-auto">
                    <Image src={microsoft} alt='microsoft' width={100} height={50} className='mb-3' />
                    <Image src={walmart} alt='walmart' width={100} height={50} className='mb-3' />
                    <Image src={google} alt='google' width={100} height={50} className='mb-3' />
                    <Image src={facebook} alt='facebook' width={100} height={50} className='mb-3' />
                </div>
            </section>
        </div>
    )
}

export default Hero
