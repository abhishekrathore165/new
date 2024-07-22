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
import ellipes from '/public/images/ellipes.svg'
import ellipes2 from '/public/images/ellipes2.svg'
import square from '/public/images/square.svg'
import john from '/public/images/john.svg'
import circle from '/public/images/circle.svg'
import ChevronRight from '/public/images/ChevronRight.png'
import stike from '/public/images/stike.svg'

export default function Home() {

  return (
    <main className="">
      <Header />
      <div className="flex min-h-screen flex-col overflow-hidden items-center justify-center ">
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

        <section className="sm:mx-6 bg-white sm:px-20 px-2 py-16 ">
          <div className="container mx-auto text-center xl:w-[1153px]  xl:h-[337px] gap-[128px]">
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




        <section className="mt-12 px-3 lg:h-[1314px] w-[1540px] bg-[#F4F4F4] flex items-center justify-center">
          <div className="mb-5 text-black lg:h-[1124.76px] lg:w-[1156.14px] ms:w-[75%] ">
            <div className=' lg:h-[162.77px] lg:w-[1038.85px] xl:pl-0 lg:pl-[5rem] w-full mt-3'>
              <h2 className="mb-2 lg:text-left text-center  text-black font-medium lg:h-[76px] lg:w-[300px]  w-full  md:h-[80%] md:text-[63px] sm:text-[40px] text-[30px]  ">INDUSTRIES</h2>
              <p className="mb-8 font-light text-[#525252] lg:text-[23px] mx-auto lg:h-[71px] lg:w-[1038.85px] w-[80%] text-[10px] sm:text-[15px]  md:text-[18px] md:leading-[35px] ">
                Clients Industry Expertise Enhances Your Innovation And Improves Your Customers’ Experience.
              </p>
            </div>
              <div className='xl:w-[1156.14px] xl:h-[898.91px] lg:w-[1026px] mx-auto flex flex-col  gap-[3rem]  lg:h-[700px]  '>

              <div className="w-full  rounded-lg flex lg:justify-center mx-auto  bg-white py-10    shadow-lg">
                <div className=' mx-auto w-full '>
                  <div className="flex items-center text-left  md:justify-between justify-center mb-7 mx-auto   ">
                    <h3 className="mb-4 text-xl font-medium w-[154.55px] lg:text-[23.655px]  sm:w-[80%] lg:h-[40.19px] mx-auto   ">HEALTHCARE</h3>
                    <img src={arrowtr.src} className="lg:h-[35.72px] lg:w-[32.11px]  w-[25px] mx-auto" />
                  </div>
                  <div className=" mx-auto lg:w-[1000px] sm:w-[80%] lg:h-[300px] w-[70%]  px-2 grid lg:gap-x-[5rem] md:gap-y-7 sm:gap-y-7 gap-y-7  grid-cols-1  xl:grid-cols-3 lg:grid-cols-2 ">
                    <div className='lg:w-[319.14px]  group lg:h-[85.95px] hover:bg-[#F4F4F4] border flex items-center '>
                      <div className=" flex  p-5 w-full justify-between  font-medium">
                        <p className='font-normal'>
                          HEALTHCARE BOOKING
                        </p>
                        <Image src={ChevronRight} alt='chevronright' className="hidden group-hover:flex lg:h-[23.63px] lg:w-[23.63px]"></Image>
                      </div>
                    </div>
                    <div className='lg:w-[319.14px] group lg:h-[85.95px] hover:bg-[#F4F4F4] border flex items-center '>
                      <div className=" flex  p-5 w-full justify-between  font-medium">
                        <p className='font-normal'>
                          HEALTHCARE BOOKING
                        </p>
                        <Image src={ChevronRight} alt='chevronright' className="hidden group-hover:flex lg:h-[23.63px] lg:w-[23.63px]"></Image>
                      </div>
                    </div>

                    <div className='lg:w-[319.14px] group lg:h-[85.95px] hover:bg-[#F4F4F4] border flex items-center '>
                      <div className=" flex  p-5 w-full justify-between  font-medium">
                        <p className='font-normal'>
                          HEALTHCARE BOOKING
                        </p>
                        <Image src={ChevronRight} alt='chevronright' className="hidden group-hover:flex lg:h-[23.63px] lg:w-[23.63px]"></Image>
                      </div>
                    </div>

                    <div className='lg:w-[319.14px] group lg:h-[85.95px] hover:bg-[#F4F4F4] border flex items-center '>
                      <div className=" flex  p-5 w-full justify-between  font-medium">
                        <p className='font-normal'>
                          HEALTHCARE BOOKING
                        </p>
                        <Image src={ChevronRight} alt='chevronright' className="hidden group-hover:flex lg:h-[23.63px] lg:w-[23.63px]"></Image>
                      </div>
                    </div>

                    <div className='lg:w-[319.14px] group lg:h-[85.95px] hover:bg-[#F4F4F4] border flex items-center '>
                      <div className=" flex  p-5 w-full justify-between  font-medium">
                        <p className='font-normal'>
                          HEALTHCARE BOOKING
                        </p>
                        <Image src={ChevronRight} alt='chevronright' className="hidden group-hover:flex lg:h-[23.63px] lg:w-[23.63px]"></Image>
                      </div>
                    </div>
                    <div className='lg:w-[319.14px] group lg:h-[85.95px] hover:bg-[#F4F4F4] border flex items-center '>
                      <div className=" flex  p-5 w-full justify-between  font-medium">
                        <p className='font-normal'>
                          HEALTHCARE BOOKING
                        </p>
                        <Image src={ChevronRight} alt='chevronright' className="hidden group-hover:flex lg:h-[23.63px] lg:w-[23.63px]"></Image>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" sm:w-full w-[100%] mx-auto space-y-3 ">
                <div className='xl:w-[1156.14px] lg:w-[1030px] sm:w-full w-[80%] lg:space-y-5 space-y-5 mx-auto lg:h-[491px]'>
                  <div className=" border-b border-t xl:w-[1156.14px] w-full lg:h-[83px] md:h-[79px] sm:h-[65px] h-[60px] sm:mx-0 mx-auto  bg-slate-50 p-4 font-medium relative">
                    <div className='w-[90%]  flex items-center justify-between absolute top-0 bottom-0 sm:left-[2rem] '>
                      <p className='lg:w-[298.36px] lg:h-[36px] lg:text-[23px] font-medium '>
                        ARTIFICIAL INTELLIGENCE
                      </p>
                      <img src={arrowtrwhite.src} className='lg:h-[31.54px] lg:w[31.54px] md:w-[28px] md:h-[28px]  w-[25px] h-[25px]'></img>
                    </div>
                  </div>
                  <div className=" border-b border-t xl:w-[1156.14px]  md:h-[79px] sm:h-[65px] h-[60px] lg:h-[83px] bg-slate-50 p-4 font-medium relative">
                    <div className='w-[90%] flex items-center justify-between absolute top-0 bottom-0 sm:left-[2rem] '>
                      <p className='lg:w-[298.36px] lg:h-[36px] lg:text-[23px] font-medium '>DEFI</p>
                      <img src={arrowtrwhite.src} className='lg:h-[31.54px] lg:w[31.54px]'></img>
                    </div>
                  </div>

                  <div className=" border-b border-t xl:w-[1156.14px]  md:h-[79px] sm:h-[65px] h-[60px] lg:h-[83px] bg-slate-50 p-4 font-medium relative">
                    <div className='w-[90%] flex items-center justify-between absolute top-0 bottom-0 sm:left-[2rem] '>
                      <p className='lg:w-[298.36px] lg:h-[36px] lg:text-[23px] font-medium '>HEALTHCARE</p>
                      <img src={arrowtrwhite.src} className='lg:h-[31.54px] lg:w[31.54px]'></img>
                    </div>
                  </div>

                  <div className=" border-b border-t xl:w-[1156.14px]  md:h-[79px] sm:h-[65px] h-[60px] lg:h-[83px] bg-slate-50 p-4 font-medium relative">
                    <div className='w-[90%] flex items-center justify-between absolute top-0 bottom-0 sm:left-[2rem] '>
                      <p className='lg:w-[298.36px] lg:h-[36px] lg:text-[23px] font-medium '>FINANCE</p>
                      <img src={arrowtrwhite.src} className='lg:h-[31.54px] lg:w[31.54px]'></img>
                    </div>

                  </div>

                  <div className=" border-b border-t xl:w-[1156.14px]  md:h-[79px] sm:h-[65px] h-[60px] lg:h-[83px] bg-slate-50 p-4 font-medium relative">
                    <div className='w-[90%] flex items-center justify-between absolute top-0 bottom-0 sm:left-[2rem] ' >
                      <p className='lg:w-[298.36px] lg:h-[36px] lg:text-[23px] font-medium '>EDUCATION</p>
                      <img src={arrowtrwhite.src} className='lg:h-[31.54px] lg:w[31.54px]'></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hidden bg-white  py-2 text-black relative md:block">
          <h2 className="mb-8  xl:h-[77px] xl:w-[ 724px] w-[100%] font-medium lg:text-[64px] md:text-[50px] leading-[77px] text-black flex items-center justify-center ">TECHNOLOGIES WE USE</h2>
          <div className="container text-center xl:h-[255px] xl:w-[1152px] ">
            <div className="grid grid-cols-8 lg:w-[100%] border-b-2 text-xs">
              <div className="p-4 hover:bg-gradient-to-r text-[16px] font-medium leading-6 hover:from-[#93FB9D] hover:to-[#09C7FB] hover:text-white">
                Frontend
              </div>
              <div className="p-4 xl:text-[16px] md:text-[14px] font-medium leading-6 text-[#6F6F6F]">Backend</div>
              <div className="p-4 xl:text-[16px] md:text-[14px] font-medium leading-6 text-[#6F6F6F]">Mobile</div>
              <div className="p-4 xl:text-[16px] md:text-[14px] font-medium leading-6 text-[#6F6F6F]">Database</div>
              <div className="p-4 xl:text-[16px] md:text-[14px] font-medium leading-6 text-[#6F6F6F]">Frameworks</div>
              <div className="p-4 xl:text-[16px] md:text-[14px] font-medium leading-6 text-[#6F6F6F]">DveOps</div>
              <div className="p-4 xl:text-[16px] md:text-[14px] font-medium leading-6 text-[#6F6F6F]">Cloud</div>
              <div className="p-4 xl:text-[16px] md:text-[14px] font-medium leading-6 text-[#6F6F6F]">Python</div>
            </div>

            < div className="space-between xl:w-[791.43px] xl:h-[ 178px] lg:w-[100%] gap-[24px] mx-auto grid grid-cols-7 justify-center p-7">
              <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
                <img src={figma.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
                <p className='font-medium text-[12px] leading-3 uppercase'>figma</p>
              </div>
              <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
                <img src={react.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
                <p className='font-medium text-[12px] leading-3 uppercase'>react</p>
              </div>
              <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
                <img src={kotlin.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
                <p className='font-medium text-[12px] leading-3 uppercase'>kotlin</p>
              </div>
              <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
                <img src={aws.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
                <p className='font-medium text-[12px] leading-3 uppercase'>aws</p>
              </div>
              <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
                <img src={javascript.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
                <p className='font-medium text-[12px] leading-3 uppercase'>javascript</p>
              </div>
              <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
                <img src={digital.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
                <p className='font-medium text-[12px] leading-3 uppercase'>DIGITAL Ocean</p>
              </div>
              <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
                <img src={adobe.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
                <p className='font-medium text-[12px] leading-3 uppercase'>ADOBE XD</p>
              </div>
            </div>
            <div className='flex items-center justify-center h-[76px] w-[314.09px] mx-auto gap-[64px] '>
              <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
                <img src={ipusm.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
                <p className='font-medium text-[12px] leading-3 uppercase'>IPSUM</p>
              </div>
              <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
                <img src={lorem.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
                <p className='font-medium text-[12px] leading-3 uppercase'>lorem</p>
              </div>
              <div className="xl:h-[72.33px] xl:w-[ 38px] flex-col space-y-2  justify-center items-center">
                <img src={mongo.src} className="xl:w-[29.55px] xl:h-[44.33px] mx-auto" />
                <p className='font-medium text-[12px] leading-3 uppercase'>mongo db</p>
              </div>
            </div>

          </div>
          <Image src={square} alt='square' width={1440} height={700} className='absolute top-[175px] bottom-0 opacity-100 ' />
        </section>
        <div className='w-full'>
          <StudiesPorpular />
        </div>

        <section className="sm:mx-11 py-2 sm:px-20 px-2 sm:mb-[10rem] relative">
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
              <div className="space-y-4 max-w-[426px] mx-auto sm:items-start flex flex-col items-center justify-center">
                <h4 className="flex items-center gap-2 uppercase   text-[16px] font-semibold">
                  <Image src={right} alt="right" className="w-[20px] h-[20px]" />
                  The right people
                </h4>
                <p className="text-[14px] sm:text-[16px] text-center sm:text-left leading-6 font-normal text-[#525252]">
                  Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.
                </p>
              </div>

              <div className="space-y-4 max-w-[426px] mx-auto sm:items-start flex flex-col items-center justify-center">
                <h4 className="flex items-center gap-2 uppercase text-[16px] font-semibold">
                  <Image src={right} alt="right" className="w-[20px] h-[20px]" />
                  The right people
                </h4>
                <p className="text-[14px] sm:text-[16px] text-center sm:text-left leading-6 font-normal text-[#525252]">
                  Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.
                </p>
              </div>

              <div className="space-y-4 max-w-[426px] mx-auto sm:items-start flex flex-col items-center justify-center">
                <h4 className="flex items-center gap-2 uppercase text-[16px] font-semibold">
                  <Image src={right} alt="right" className="w-[20px] h-[20px]" />
                  The right people
                </h4>
                <p className="text-[14px] sm:text-[16px] text-center sm:text-left leading-6 font-normal text-[#525252]">
                  Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.
                </p>
              </div>

              <div className="space-y-4 max-w-[426px] mx-auto sm:items-start flex flex-col items-center justify-center">
                <h4 className="flex items-center gap-2 uppercase text-[16px] font-semibold">
                  <Image src={right} alt="right" className="w-[20px] h-[20px]" />
                  The right people
                </h4>
                <p className="text-[14px] sm:text-[16px] text-center sm:text-left leading-6 font-normal text-[#525252]">
                  Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.
                </p>
              </div>
            </div>
            <div className='ml-[4.5rem] relative '>
              <Image src={john} alt='john' className='' />
              <p className='absolute top-[16px] rotate-[-5] text-[18px] left-[2.5rem] text-xl text-white opacity-95'>
                John Deo <br /> <span className='text-[14px] text-[#E0E0E0]'>web Developer</span>
              </p>
            </div>

            <div className="flex justify-center mb-[4rem]">
              <Image src={team} alt="team" width={643} height={128} className="w-full max-w-[643px] h-auto" />
            </div>

            <div className="flex items-center justify-center mt-[4rem] ">
              <button className="uppercase text-[16px] min-w-[368px] rounded-md py-5 px-4 bg-black  sm:text-[18px]  text-white flex justify-center items-center gap-2">
                Get In Touch
                <Image src={arrowright} alt="arrow right" className="w-[24px] h-[24px]" />
              </button>
            </div>
          </div>
        </section>

        <section className="relative py-16 w-full bg-white overflow-hidden">
          <Image src={process} alt="process" className="absolute inset-0 object-cover w-full h-full " />
          <Image src={circle} alt='circle' className='absolute 2xl:left-[14rem] xl:top-[10rem] lg:top-[8rem] lg:flex hidden  ' />
          <Image src={stike} alt='circle' className='absolute 2xl:left-[16rem] left-[2rem] top-[22rem] lg:flex hidden    ' />
          <div className="z-10 sm:mx-11">
            <div className="text-center mb-8">
              <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[61px] xl:mr-[40rem] font-medium text-[#020611] opacity-90">
                OUR PROCESS
              </h1>
            </div>

            <div className="space-y-16 xl:mr-[6rem]">
              <div className="flex flex-col sm:flex-col items-start mx-8 sm:mx-auto max-w-[737px]">
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

              <div className="flex flex-col sm:flex-col items-start mx-8 sm:mx-auto max-w-[737px]">
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

              <div className="flex flex-col sm:flex-col items-start mx-8 sm:mx-auto max-w-[737px]">
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

            <div className="flex justify-center xl:mr-[39rem] mt-12">
              <div className="flex items-center bg-black z-[121] text-white rounded-md px-4 py-2 space-x-4">
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

        <div className='w-full'>

          <Offiespopular />
        </div>
        <footer className="bg-[#F4F4F4] py-6 text-white xl:h-[350px] xl:w-[1540px]">
          <div className="md:container mx-auto px-4">
            <div className='mx-auto'>
              <div className="md:flex mx-auto flex-col sm:flex-row  mt-8 items-start sm:items-center justify-between xl:h-[129px] xl:w-[1111px] ">
                <div className="mt-5 space-y-6 xl:h-[129px] xl:w-[225px] text-center sm:text-left">
                  <div className='bg-black flex items-center justify-center h-16 xl:w-[225px] xl:h-[63px]'>
                    <button className="mb-2 p-2 text-[14px] font-black text-white">DASH MICRO SYSTEM</button>
                  </div>
                  <div className="space-y-1 xl:h-[50px] xl:w-[218px] text-center md:text-left">
                    <p className="text-[16px] leading-6 text-[#6F6F6F] font-normal">Copyright © 2024</p>
                    <p className="text-[15px] leading-6 text-[#6F6F6F] font-normal">DASH MICRO SYSTEMS Pvt Ltd</p>
                  </div>
                </div>
                <div className=" mt-8 space-y-2 grid xl:grid-cols-4  md:grid-cols-3 xl:w-[678px] xl:h-[84px]  sm:grid-cols-4 grid-cols-3 gap-5 text-xs text-gray-500 justify-center sm:justify-start">
                  <a href="#" className="hover:underline uppercase  md:text-[18px] text-[15px]">HOME</a>
                  <a href="#" className="hover:underline  uppercase  md:text-[18px] text-[15px]">INDUSTRIES</a>
                  <a href="#" className="hover:underline  uppercase  md:text-[18px] text-[15px]">CASE STUDIES</a>
                  <a href="#" className="hover:underline  uppercase  md:text-[18px] text-[15px]">ABOUT US</a>
                  <a href="#" className="hover:underline  uppercase  md:text-[18px] text-[15px]">COMPANY</a>
                  <a href="#" className="hover:underline  uppercase  md:text-[18px] text-[15px]">SERVICES</a>
                  <a href="#" className="hover:underline  uppercase  md:text-[18px] text-[15px]">PRIVACY POLICY</a>
                </div>
              </div>

            </div>
          </div>


          <div className="mx-4 sm:mx-9 space-y-8 text-center">
            <hr className="bg-black mt-[3rem] xl:w-[1111px] mx-auto " />
            <div className='flex items-center  justify-center'>
              <img src={img9.src} alt="Footer Image" />
            </div>
          </div>
        </footer>


      </div >
    </main >
  )
}
