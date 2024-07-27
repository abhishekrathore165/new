'use client'
import Header from '@/components/header'

import visual from '/public/images/visual.svg'
import Image from 'next/image'
import Offiespopular from '@/components/offices/Offiespopular'
import StudiesPorpular from '@/components/studies/StudiesPorpular'
import Hero from '@/components/Hero/Hero'
import Service from '@/components/Service/Service'
import Capabilities from '@/components/Capabilities/Capabilities'
import Industries from '@/components/Industries/Industries'
import Technologies from '@/components/Technologies'
import Wonder from '@/components/Wonder'
import Process from '@/components/Process'
import Client from '@/components/Client'
import Excellent from '@/components/Excellent'
import About from '@/components/About/About'
import Footer from '@/components/Footer'

export default function Home() {

  return (
    <main className="">
      <Header />
      <div className="flex min-h-screen flex-col overflow-hidden items-center justify-center ">
          <Hero />
        <div >
          <Image src={visual} alt='main visual' width={1540} height={664} />
        </div>
        <Service/>
        <Capabilities/>
        <Industries/>
        <Technologies/>
        <StudiesPorpular />
        <Wonder/>
        <Process/>
        <Client/>
        <Excellent/>
        <About/>
        <Offiespopular />
        <Footer/>
      </div >
    </main >
  )
}
