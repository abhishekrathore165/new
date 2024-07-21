'use client'
import Header from '@/components/header'
import arrowright from '/public/images/ArrowRight.png'
import arrowtr from '/public/images/arrowtr.png'
import arrowtrwhite from '/public/images/arrowtrwhite.png'
import img14 from '/public/images/aws.png'
import img6 from '/public/images/call.png'
import chevronright from '/public/images/ChevronRight.png'
import img7 from '/public/images/contact.png'
import img17 from '/public/images/dash.png'
import img21 from '/public/images/dice.png'
import img15 from '/public/images/figma.png'
import img20 from '/public/images/gitlab.png'
// import google from '/public/images/google copy.png'
import img22 from '/public/images/Group.png'
import iv from '/public/images/hi copy.png'
import img2 from '/public/images/Illustration.png'
import img12 from '/public/images/im.png'
import img24 from '/public/images/Image Placeholder.png'
import img1 from '/public/images/img1.png'
import img4 from '/public/images/last.png'
import micro from '/public/images/micro copy.png'
import img16 from '/public/images/mongo.png'
import img3 from '/public/images/no.png'
import img23 from '/public/images/node.png'
import img9 from '/public/images/ok.png'
import img10 from '/public/images/photo.png'
import img19 from '/public/images/react.png'
import img11 from '/public/images/right.png'
// import walmart from '/public/images/walmart copy.png'
import img13 from '/public/images/welcome.png'
import img18 from '/public/images/xd.png'
import facebook from '/public/images/facebook.svg'
import google from '/public/images/google.svg'
import walmart from '/public/images/walmart.svg'
import microsoft from '/public/images/microsoft.svg'
import visual from '/public/images/visual.svg'
import tick from '/public/images/tick.svg'
import arrow from '/public/images/arrow.svg'
import arrowleft from '/public/images/arrowleft.svg'
import arrowright1 from '/public/images/arrowright.svg'
import Image from 'next/image'
import right from '/public/images/right.svg'
import Officess from '@/components/offices/Officess'
import Offiespopular from '@/components/offices/Offiespopular'
import StudiesPorpular from '@/components/studies/StudiesPorpular'
import team from '/public/images/team.svg'
import figma from '/public/images/figma.svg'
import react from '/public/images/react.svg'
import kotlin from '/public/images/kotlin.svg'
import aws from '/public/images/aws.svg'
import javascript from '/public/images/javascript.svg'
import digital from '/public/images/digital.svg'
import adobe from '/public/images/adobe.svg'
import ipusm from '/public/images/ipusm.svg'
import lorem from '/public/images/lorem.svg'
import mongo from '/public/images/mongo.svg'
import arrowright2 from '/public/images/arrowright2.svg'
import process from '/public/images/process.png'
export default function Home() {

  return (
    <main className="">
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center ">
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

        <div >
          <Image src={visual} alt='main visual' width={1540} height={664} />
        </div>
        <div className="container mx-auto py-6">
          <section id="services" className="mx-1 mt-12 sm:px-20 px-1">
            <div className='xl:w-[1153px] xl:h-auto gap-[12px] m-6'>
              <h2 className="mb-2 text-left text-2xl text-black md:text-4xl lg:text-5xl xl:text-[64px]">Services</h2>
              <p className="mb-[4rem] pr-[5.25rem] text-[#525252] text-base md:text-lg lg:text-xl xl:text-2xl font-normal leading-8">
                Clients trust Us For Our Clarity, High Performance And Intuitive Functionality Across Every Stage Of The
                Software Development Process.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 md:gap-12 lg:gap-16 xl:grid-cols-2 xl:gap-16">
              <div className="shadow-first mx-auto md:h-[516px] md:w-[562px] lg:h-[400px] rounded-lg border-t-4 border-black p-6 shadow-lg sm:h-96 xl:w-3/4">
                <h3 className="text-md mb-4 font-semibold uppercase text-black text-lg md:text-xl lg:text-2xl xl:text-[32px]">DATA AUTOMATION</h3>
                <p className="text-base text-gray-500 sm:text-base">
                  From automation to artificial intelligence, discover a world where quality work is the standard.
                </p>
                <div className="flex justify-center mt-4">
                  <Image src={img4} alt='Data Automation' height={300} width={300} />
                </div>
              </div>
              <div className="shadow-first mx-auto md:h-[516px] md:w-[562px] lg:h-[400px] rounded-lg p-6 shadow-lg sm:h-96 xl:w-3/4">
                <h3 className="text-md mb-4 font-semibold uppercase text-black text-lg md:text-xl lg:text-2xl xl:text-[32px]">PRODUCT DESIGN</h3>
                <p className="text-base text-gray-500 sm:text-base">
                  From automation to artificial intelligence, discover a world where quality work is the standard.
                </p>
                <div className="flex justify-center mt-4">
                  <img src={img1.src} className="h-52" alt="Product Design" />
                </div>
              </div>
              <div className="shadow-first mx-auto md:h-[516px] lg:h-[400px] md:w-[562px] rounded-lg p-5 shadow-lg sm:h-96 xl:w-3/4">
                <div className="flex justify-center mt-4">
                  <img src={img3.src} className="h-40 sm:h-44 xl:h-50" alt="Platform and Product Engineering" />
                </div>
                <h3 className="text-md mb-4 font-semibold leading-10 uppercase text-black text-lg md:text-xl lg:text-2xl xl:text-[32px]">PLATFORM AND PRODUCT ENGINEERING</h3>
                <p className="text-base text-gray-500 sm:text-base">
                  From automation to artificial intelligence, discover a world where quality work is the standard.
                </p>
              </div>

              <div className="shadow-first mx-auto md:h-[516px] lg:h-[400px] md:w-[562px] rounded-lg border-t-4 border-black p-6 shadow-lg sm:h-96 xl:w-3/4">
                <div className="flex justify-center mt-4">
                  <img src={img2.src} className="h-40 sm:h-44 xl:h-50" alt="Scalable and Agile Delivery" />
                </div>
                <h3 className="text-md mb-4 font-semibold uppercase text-black text-lg md:text-xl lg:text-2xl xl:text-[32px]">SCALABLE AND AGILE DELIVERY</h3>
                <p className="text-base text-gray-500 sm:text-base">
                  From automation to artificial intelligence, discover a world where quality work is the standard.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="sm:mx-6 bg-white sm:px-20 px-2 py-16">
          <div className="container mx-auto text-center xl:w-[1153px] xl:h-[337px] gap-[128px]">
            <div className='xl:h-[161px] xl:[1153px] gap-[12px] mb-[8rem]'>
              <h2 className="mb-6 text-left text-2xl text-black md:text-4xl lg:text-5xl xl:text-7xl">CAPABILITIES</h2>
              <p className="text-left font-medium text-[#525252] text-base md:text-lg lg:text-xl xl:text-2xl leading-8">
                Clients Trust Us For Our Clarity, Structure, High Performance And Intuitive Functionality Across Every
                Stage Of The Software Development Process.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-[24px]  xl:grid-cols-3">
              <div className=' xl:h-[48] xl:w-[368] sm:border-b '>
                <span className="flex justify-between text-left text-base leading-7 font-semibold mb-5">
                  ARTIFICIAL INTELLIGENCE
                  <Image src={tick} alt='tick' width={24} height={24} />
                </span>
                <hr className='border-b-2 border-black' />
              </div>

              <div className='xl:h-[48] xl:w-[368]'>
                <span className="flex justify-between text-left text-base leading-7 font-semibold mb-5">
                  CLOUD AND DATA
                </span>
                <hr className='border-b-2 mt-[13px]' />
              </div>
              <div className='xl:h-[48] xl:w-[368]'>
                <span className="flex justify-between text-left text-base leading-7 font-semibold mb-5">
                  INTERNET OF THINGS
                </span>
                <hr className='border-b-2 mt-[13px]' />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 text-black md:block">
          <h2 className="mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-center text-black">
            TECHNOLOGIES WE USE
          </h2>
          <div className="container mx-auto text-center">
            <div className="hidden md:grid md:grid-cols-8 border-b-2 text-xs">
              <div className="p-4 hover:bg-gradient-to-r hover:from-[#93FB9D] hover:to-[#09C7FB] hover:text-white font-medium leading-6">
                Frontend
              </div>
              <div className="p-4 text-gray-600 font-medium leading-6">Backend</div>
              <div className="p-4 text-gray-600 font-medium leading-6">Mobile</div>
              <div className="p-4 text-gray-600 font-medium leading-6">Database</div>
              <div className="p-4 text-gray-600 font-medium leading-6">Frameworks</div>
              <div className="p-4 text-gray-600 font-medium leading-6">DevOps</div>
              <div className="p-4 text-gray-600 font-medium leading-6">Cloud</div>
              <div className="p-4 text-gray-600 font-medium leading-6">Python</div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto py-8">
              {[
                { src: figma, label: 'figma' },
                { src: react, label: 'react' },
                { src: kotlin, label: 'kotlin' },
                { src: aws, label: 'aws' },
                { src: javascript, label: 'javascript' },
                { src: digital, label: 'digital ocean' },
                { src: adobe, label: 'adobe xd' },
                { src: ipusm, label: 'ipsum' },
                { src: lorem, label: 'lorem' },
                { src: mongo, label: 'mongo db' }
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center justify-center space-y-2">
                  <Image src={tech.src} alt={tech.label} width={60} height={60} className="object-contain" />
                  <p className="text-xs sm:text-sm font-medium uppercase">{tech.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className='w-full'>
          <StudiesPorpular />
        </div>

        <section className="sm:mx-11 py-16 sm:px-20 px-2 mb-[10rem] relative">
          <div className="relative xl:max-w-[959px] mx-auto">
            <div className="text-center mb-[5rem]">
              <h2 className="text-[32px] sm:text-[48px] md:text-[64px] font-extrabold leading-tight text-[#C6C6C6] capitalize">
                No need to wonder.
              </h2>
              <h2 className="text-[32px] sm:text-[48px] md:text-[61px] font-extrabold leading-tight text-black capitalize">
                Working with us is wonderful.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[8rem]">
              <div className="space-y-4 max-w-[426px] mx-auto">
                <h4 className="flex items-center gap-2 uppercase text-[16px] font-semibold">
                  <Image src={right} alt="right" className="w-[20px] h-[20px]" />
                  The right people
                </h4>
                <p className="text-[14px] sm:text-[16px] leading-6 font-normal text-[#525252]">
                  Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.
                </p>
              </div>

              <div className="space-y-4 max-w-[426px] mx-auto">
                <h4 className="flex items-center gap-2 uppercase text-[16px] font-semibold">
                  <Image src={right} alt="right" className="w-[20px] h-[20px]" />
                  The right people
                </h4>
                <p className="text-[14px] sm:text-[16px] leading-6 font-normal text-[#525252]">
                  Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.
                </p>
              </div>

              <div className="space-y-4 max-w-[426px] mx-auto">
                <h4 className="flex items-center gap-2 uppercase text-[16px] font-semibold">
                  <Image src={right} alt="right" className="w-[20px] h-[20px]" />
                  The right people
                </h4>
                <p className="text-[14px] sm:text-[16px] leading-6 font-normal text-[#525252]">
                  Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.
                </p>
              </div>

              <div className="space-y-4 max-w-[426px] mx-auto">
                <h4 className="flex items-center gap-2 uppercase text-[16px] font-semibold">
                  <Image src={right} alt="right" className="w-[20px] h-[20px]" />
                  The right people
                </h4>
                <p className="text-[14px] sm:text-[16px] leading-6 font-normal text-[#525252]">
                  Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.
                </p>
              </div>
            </div>

            <p className="bg-black sm:w-[177px] sm:h-[76px] sm:ml-[6rem] mb-[1rem] sm:rotate-6 text-center py-2 text-[#E0E0E0] text-[14px] font-normal rounded-md mx-auto">
              <span className="text-[18px] text-white font-semibold block mb-[2rem]">John Doe</span>
              Web Developer
            </p>

            <div className="flex justify-center mb-[4rem]">
              <Image src={team} alt="team" width={643} height={128} className="w-full max-w-[643px] h-auto" />
            </div>

            <div className="flex items-center justify-center mt-[4rem] bg-black rounded-md py-2 px-4">
              <button className="uppercase text-[16px] sm:text-[18px] font-semibold text-white flex items-center gap-2">
                Get In Touch
              </button>
              <Image src={arrowright} alt="arrow right" className="w-[24px] h-[24px]" />
            </div>
          </div>
        </section>


        <section className="relative py-16 w-full bg-white overflow-hidden">
          <Image src={process} alt="process" className="absolute inset-0 object-cover w-full h-full z-0" />

          <div className="relative z-10 sm:mx-11">
            <div className="text-center mb-8">
              <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[61px] font-medium text-[#020611] opacity-90">
                OUR PROCESS
              </h1>
            </div>

            <div className="space-y-16">
              <div className="flex flex-col sm:flex-row items-start mx-8 sm:mx-auto max-w-[737px]">
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <img src={img6.src} className="w-[74px] h-[74px] opacity-90" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-[32px] sm:text-[38px] font-normal text-[#020611] opacity-90">
                    Join exploration call
                  </h2>
                  <p className="text-[16px] sm:text-[20px] md:text-[24px] font-normal text-[#525252] leading-9 opacity-90">
                    Tell us more about your business on a discovery call. We&apos;ll discuss team structure and approach,
                    success criteria, timescale, budget, and required skill sets to see how we can help.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start mx-8 sm:mx-auto max-w-[737px]">
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <img src={img7.src} className="w-[74px] h-[74px] opacity-90" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-[32px] sm:text-[38px] font-normal text-[#020611] opacity-90">
                    Discuss Solution and team structure
                  </h2>
                  <p className="text-[16px] sm:text-[20px] md:text-[24px] font-normal text-[#525252] leading-9 opacity-90">
                    In a matter of days, we will finalize your project specifications, agree on an engagement model, and
                    select and onboard your team.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start mx-8 sm:mx-auto max-w-[737px]">
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <img src={img7.src} className="w-[74px] h-[74px] opacity-90" />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="text-[32px] sm:text-[38px] font-normal text-[#020611] opacity-90">
                    Get started and track performance
                  </h2>
                  <p className="text-[16px] sm:text-[20px] md:text-[24px] font-normal text-[#525252] leading-9 opacity-90">
                    Once we agree on milestones, we&apos;ll immediately get to work. We&apos;ll track progress, report updates,
                    and continuously adapt to your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <div className="flex items-center bg-black text-white rounded-md px-4 py-2 space-x-4">
                <button className="uppercase text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-6">
                  Get In Touch
                </button>
                <Image src={arrowright} alt="arrow right" className="w-[24px] h-[24px] opacity-90" />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5 sm:p-5 py-12 mt-[3rem] xl:w-full xl:max-w-[1440px] mx-auto">
          <div className="space-y-3 text-center mb-[3rem] xl:w-full xl:max-w-[923px] flex flex-col items-center justify-center mx-auto">
            <div className="xl:max-w-[764px] mx-auto">
              <h1 className="uppercase text-[32px] sm:text-[40px] md:text-[50px] lg:text-[61px] font-medium leading-tight text-black">
                WHAT OUR CLIENTS SAY?
              </h1>
            </div>
            <div>
              <p className="font-light text-[16px] sm:text-[20px] md:text-[24px] leading-9 text-[#393939] xl:max-w-[923px] mx-auto">
                Computools&apos; industry expertise enhances your innovation and improves your customer&apos;s experience.
              </p>
            </div>
          </div>
          <div className="xl:w-full xl:max-w-[1440px] mx-auto">
            <div className="grid md:grid-cols-2 gap-5 xl:max-w-[1152.3px] mx-auto">
              <div className="p-4 flex items-center mx-auto md:mx-0">
                <div className="mx-auto">
                  <p className="text-[20px] md:text-[22px] lg:text-[25px] font-normal leading-9 mb-12 text-[#262626]">
                    “<br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                    lectus magna fringilla urna, porttitor rhoncus.
                  </p>
                  <div className="space-y-3">
                    <div className="flex space-x-3">
                      <p className="text-xs text-black">John Robert</p>
                      <p className="text-xs text-gray-500">Senior Java Developer</p>
                    </div>
                    <div className="flex mb-12 gap-2">
                      <div className="w-12 h-12 bg-gray-300 flex items-center justify-center">
                        <Image src={arrowleft} alt="arrow left" className="" />
                      </div>
                      <div className="w-12 h-12 bg-gray-300 flex items-center justify-center">
                        <Image src={arrow} alt="arrow right" className="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-0 mx-auto md:mx-0 flex items-center">
                <img src={img10.src} className="w-full h-auto border border-black" />
              </div>
            </div>
          </div>
        </section>



        <section className="relative flex flex-col w-full xl:max-w-[1550px] mb-[5rem] mx-auto">
          <div className="relative z-10 sm:mx-11 mt-12">
            <div className="bg-black mx-auto sm:mt-[7rem] p-4 sm:p-7 xl:max-w-[1152px] xl:h-[729px] lg:max-w-[1375px] lg:mx-auto">
              <div className="flex flex-col items-center justify-center text-center mb-32 mx-auto space-y-4 xl:h-[161px] xl:w-[939px]">
                <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-medium text-white">
                  EXCELLENCE
                </h1>
                <p className="text-[16px] sm:text-[20px] md:text-[24px] font-light text-gray-500 capitalize">
                  Tell us more about your business on a discovery call. We’ll discuss team structure and approach,
                  success criteria, timescale, budget, and required skill set.
                </p>
              </div>
              <div className="space-y-3 mx-auto xl:h-[312px] flex flex-col items-center">
                <div className="flex justify-center mb-5 w-full xl:h-[228px] xl:w-[939px]">
                  <img src={img13.src} className="w-full h-auto xl:h-full xl:w-[939px]" />
                </div>
                <div>
                  <br />
                </div>
                <div className="flex justify-center items-center mt-[4rem] space-x-2">
                  <a href="#" className="text-[16px] sm:text-[20px] md:text-[24px] text-[#3fcf8c] capitalize hover:underline">
                    Get in touch
                  </a>
                  <img src={arrowright2.src} className="h-[20px] sm:h-[24px] md:h-[28px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 w-full">
            <img src={img12.src} className="w-full h-[5rem] sm:h-[9rem] xl:flex hidden xl:h-[242px]" />
          </div>
        </section>




        <section className="sm:my-12 overflow-x-hidden text-left px-4">
          <div className='xl:h-[254px] xl:w-[1061px] w-full px-2 mb-10 mx-auto'>
            <h2 className="mb-6 font-extrabold text-black text-[32px] sm:text-[40px] md:text-[50px] lg:text-[61px]">
              <span className="text-[#C6C6C6]">Say Hi!</span> And Tell Us About Your IDEA.
            </h2>
            <p className="mb-8 text-[#525252] font-normal text-[16px] sm:text-[20px] md:text-[24px]">
              Get in touch to discuss your project or service expectations. Simply fill in the form below or send us an
              e-mail to info@Dashmicrosystem.com
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 px-2 md:px-4 lg:px-8 md:pt-8">
            <div className='xl:h-[88px] xl:w-[564px]'>
              <p className="font-medium text-[18px] text-[#525252]">FULL NAME*</p>
              <input type="text" className="w-full text-[12px] sm:text-[14px] md:text-[16px] rounded-lg p-2" placeholder="So we know how to address you" />
              <div className="h-[1px] bg-[#525252]"></div>
            </div>
            <div className='xl:h-[88px] xl:w-[564px]'>
              <p className="font-medium text-[18px] text-[#525252]">COMPANY NAME*</p>
              <input type="text" className="w-full text-[12px] sm:text-[14px] md:text-[16px] rounded-lg p-2" placeholder="So we can tailor the services to your business needs" />
              <div className="h-[1px] bg-[#525252]"></div>
            </div>
            <div className='xl:h-[88px] xl:w-[564px]'>
              <p className="font-medium text-[18px] text-[#525252]">EMAIL*</p>
              <input type="text" className="w-full text-[12px] sm:text-[14px] md:text-[16px] rounded-lg p-2" placeholder="So we can respond promptly to your enquiry" />
              <div className="h-[1px] bg-[#525252]"></div>
            </div>
            <div className='xl:h-[88px] xl:w-[564px]'>
              <p className="font-medium text-[18px] text-[#525252]">WHO REFERRED YOU TO US?</p>
              <input type="text" className="w-full text-[12px] sm:text-[14px] md:text-[16px] rounded-lg p-2" placeholder="So we can say thank you" />
              <div className="h-[1px] bg-[#525252]"></div>
            </div>
          </div>
          <div className="py-3 xl:w-[1152px] xl:h-[88px] px-2 md:px-4 lg:px-0 border- border-b-1 mx-auto">
            <p className="font-medium text-[18px] text-[#525252]">MESSAGE</p>
            <textarea className="w-full text-[12px] sm:text-[14px] md:text-[16px] rounded-lg p-2" placeholder="Give us more details about your request so the colleagues with relevant experience can focus on your needs"></textarea>
            <div className="h-[1px] xl:w-[1152px] bg-[#525252]"></div>
          </div>
          <div className="flex flex-col xl:flex-row mt-[4rem] justify-between px-2 md:px-4 lg:px-8 ">
            <div className="flex items-center mb-4 xl:mb-0">
              <input type="checkbox" className="mr-2" />
              <p className="text-[14px]  sm:text-[15px] md:text-[16px] text-[#6F6F6F]">
                I agree and consent to the Privacy Policy, its terms of processing of my personal data.
              </p>
            </div>
            <div className="flex items-center justify-center xl:w-[368px] xl:h-[72px] w-full max-w-[368px] h-[48px] bg-black opacity-90 rounded-md">
              <button className="uppercase text-white text-[14px] sm:text-[16px] md:text-[18px] px-4 py-2 flex items-center">
                Get In Touch
                <Image src={arrowright} alt="arrowright" className="ml-2 h-[20px] sm:h-[24px] md:h-[28px]" />
              </button>
            </div>
          </div>
        </section>


        <div className='w-full'>

          <Offiespopular />
        </div>
        <footer className="bg-[#F4F4F4] py-6 text-white xl:h-[350px] xl:w-[1540px]">
          <div className="container mx-auto px-4">
            <div className='mx-auto'>


              <div className="flex flex-col sm:flex-row  items-start sm:items-center justify-between xl:h-[129px] xl:w-[1150px] ">
                <div className="mt-5 space-y-3 xl:h-[129px] xl:w-[225px] text-center sm:text-left">
                  <div className='bg-black flex items-center justify-center h-16 xl:w-[225px] xl:h-[63px]'>
                    <button className="mb-2 p-2 text-[14px] font-black text-white">DASH MICRO SYSTEM</button>
                  </div>
                  <div className="space-y-1 xl:h-[50px] xl:w-[218px] text-center sm:text-left">
                    <p className="text-[16px] leading-6 text-[#6F6F6F] font-normal">Copyright © 2024</p>
                    <p className="text-[15px] leading-6 text-[#6F6F6F] font-normal">DASH MICRO SYSTEMS Pvt Ltd</p>
                  </div>
                </div>
                <div className="sm:mr-5 mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5 text-xs text-gray-500 justify-center sm:justify-start">
                  <a href="#" className="hover:underline md:text-[18px] text-[12px]">HOME</a>
                  <a href="#" className="hover:underline md:text-[18px] text-[12px]">INDUSTRIES</a>
                  <a href="#" className="hover:underline md:text-[18px] text-[12px]">CASE STUDIES</a>
                  <a href="#" className="hover:underline md:text-[18px] text-[15px]">ABOUT US</a>
                  <a href="#" className="hover:underline md:text-[18px] text-[12px]">COMPANY</a>
                  <a href="#" className="hover:underline md:text-[18px] text-[12px]">SERVICES</a>
                  <a href="#" className="hover:underline md:text-[18px] text-[12px]">PRIVACY POLICY</a>
                </div>
              </div>

            </div>
          </div>


          <div className="mx-4 sm:mx-9 space-y-8 text-center">
            <hr className="bg-black mt-[5rem]" />
            <div className='flex items-center justify-center'>
              <img src={img9.src} alt="Footer Image" />
            </div>
          </div>
        </footer>


      </div >
    </main >
  )
}
