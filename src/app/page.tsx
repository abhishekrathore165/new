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
import process from '/public/images/process.png'
export default function Home() {

  return (
    <main className="">
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center ">
        <div className="container mx-auto py-6">
          <section className="mx-1 sm:px-20 px-7  ">
            <div className="text-left px-1 ">
              <h1 className="mb-2 mt-7 lg:text-[64px] sm:text-[45px] lg:w-full text-[25px] font-bold text-black ">
                LET&apos;S UNLOCK NEXT
              </h1>
              <h2 className="text-md mb-8 w-full font-medium text-[#525252]  lg:text-[20px] md:text-[17px] sm:text-[15px] text-[14px] xl:text-2xl xl:w-[57rem] lg:w-[48rem] md:w-[40rem] sm:w-[35rem] ">
                DISCOVER UNPRECEDENTED EFFICIENCY WITH OUR MOST ADVANCED, INTUITIVE, AND USER-CENTRIC UPDATE YET.
              </h2>
            </div>
            <div className="py-4   ">
              <p className="font-medium text-[#393939]">Trusted By:</p>
            </div>
            <div className="mb-8 sm:flex  gap-4 justify-start items-center space-x-6 mx-auto   ">

              <Image src={microsoft} alt='microsoft' width={100} height={50} className='mb-3' />
              <Image src={walmart} alt='walmart' width={100} height={50} className='mb-3' />
              <Image src={google} alt='google' width={100} height={50} className='mb-3' />
              <Image src={facebook} alt='facebook' width={100} height={50} className='mb-3' />

            </div>
          </section>
        </div>
        <div >
          <Image src={visual} alt='main visual' width={1550} height={664} />
        </div>
        <div className="container mx-auto py-6">
          <section id="services" className="mx-1 mt-12 sm:px-20 px-7">
            <h2 className="mb-6 text-left text-2xl  text-black md:text-5xl xl:text-[64px]">Services</h2>
            <p className="mb-8  text-[#525252] lg:w-[80%] md:w-[100%] xl:text-2xl ">
              Clients trust Us From Our Clarity. High Performance And Intuitive Functionality Across Every Stage Of The
              Software Development process
            </p>

            <div className="grid grid-cols-1 gap-10  md:grid-cols-2">
              <div className="shadow-first h-80 w-full rounded-lg border-t-4 border-black p-6 shadow-lg sm:h-96 xl:w-3/4">
                <h3 className="text-md mb-4 font-bold text-black md:text-xl sm:text-2xl">DATA AUTOMATION</h3>
                <div className="span-x-3 space-y-5">
                  <p className="text-xs text-gray-500  sm:text-base">
                    From automation to artificial intelligence, discover a world where quality work is the standard.
                  </p>

                  <div className="flex justify-center ">
                    <Image src={img4} alt='Data Automation' height={300} width={300} />

                  </div>

                </div>
              </div>
              <div className="shadow-first h-80 w-full rounded-lg  p-6 shadow-lg sm:h-96 xl:w-3/4">
                <h3 className="text-md mb-4 font-bold text-black md:text-xl sm:text-2xl">PRODUCT DESIGN</h3>
                <p className="text-xs text-gray-500 sm:text-base">
                  From automation to artificial intelligence, discover a world where quality work is the standard.
                </p>
                <div className="flex justify-center">
                  <img src={img1.src} className="h-52" alt="Product Design" />
                </div>
              </div>
              <div className="shadow-first h-80 w-full rounded-lg  p-5 shadow-lg sm:h-96 xl:w-3/4">
                <div className="flex justify-center">
                  {' '}

                  <img src={img3.src} className="h-40 sm:h-44 xl:h-56" alt="Platform and Product Engineering" />
                </div>
                <h3 className="text-md mb-4 font-bold md:text-xl  text-black sm:text-2xl">PLATFORM AND PRODUCT ENGINEERING</h3>
                <p className="text-xs text-gray-500  sm:text-base">
                  From automation to artificial intelligence, discover a world where quality work is the standard.
                </p>
              </div>

              <div className="shadow-first h-80 w-full rounded-lg border-t-4 border-black p-6 shadow-lg sm:h-96 xl:w-3/4">
                <div className="flex justify-center">
                  <img src={img2.src} className="h-40 sm:h-44 xl:h-56" alt="Scalable and Agile Delivery" />
                </div>
                <h3 className="text-md mb-4 font-bold text-black md:text-xl sm:text-2xl">SCALABLE AND AGILE DELIVERY</h3>
                <p className="text-xs text-gray-500 sm:text-base">
                  From automation to artificial intelligence, discover a world where quality work is the standard.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-6 bg-white sm:px-20 px-7 py-16">
            <div className="container mx-auto text-center">
              <h2 className="mb-6 text-left text-2xl  text-black md:text-5xl xl:text-[64px]">CAPABILITIES</h2>
              <p className="mb-8 text-left font-medium text-[#525252] xl:text-2xl lg:w-[90%] md:w-[100%] ">
                Clients Trust Us For Our Clarity, Structure, High Performance And Intuitive Functionality Across Every
                Stage Of The Software Development Process.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div>
                  <span className=" flex  justify-between text-left text-xs font-semibold md:text-center md:text-sm mb-5">
                    ARTIFICIAL INTELLIGENCE
                    <Image src={tick} alt='tick' width={15} height={15} />
                  </span>
                  <hr className='border-b-2 border-black' />
                </div>

                <div className='flex-col items-start'>
                  <span className=" text-left text-xs   font-semibold md:text-center md:text-sm mb-5">
                    CLOUD AND DATA
                  </span>
                  <hr className='border-b-2 mt-[13px]' />
                </div>
                <div className='flex-col items-start'>
                  <span className=" text-left text-xs   font-semibold md:text-center md:text-sm mb-5">
                    INTERNET OF THINGS
                  </span>
                  <hr className='border-b-2  mt-[13px]' />
                </div>

              </div>
            </div>
          </section>
        </div>
        <div className="container mx-auto py-6 bg-[#F4F4F4]">
          <section className="mx-6 mt-12 sm:px-20 px-7">
            <div className="mb-5 text-black">
              <h2 className="mb-6 text-left text-2xl  text-black md:text-5xl xl:text-7xl">INDUSTRIES</h2>
              <p className="mb-8 font-medium text-[#525252] md:w-3/4 xl:text-2xl">
                Clients Industry Expertise Enhances Your Innovation And Improves Your Customers’ Experience.
              </p>
              <div className="w-full rounded-lg bg-white p-12 shadow-lg">
                <div className="flex justify-between">
                  <h3 className="mb-4 text-xl font-medium">HEALTHCARE</h3>
                  <img src={arrowtr.src} className="h-6" />
                </div>
                <div className="grid grid-cols-1 gap-10 text-xs md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex items-center justify-between gap-2 border p-4 font-medium">
                    LIFE SCIENCES TOOLS & SERVICES <img src={chevronright.src} className="h-4"></img>
                  </div>
                  <div className="border p-4 font-medium">HEALTHCARE BOOKING</div>
                  <div className="border p-4 font-medium">DATA COLLECTION</div>
                  <div className="border p-4 font-medium">LIFE SCIENCES TOOLS</div>
                  <div className="border p-4 font-medium">HEALTHCARE INVENTORY & REPORTING</div>
                  <div className="border p-4 font-medium">TOOLS & SERVICES</div>
                </div>
              </div>
              <div className="mt-8 w-full space-y-3 ">
                <div className="flex items-center justify-between border-b border-t bg-slate-50 p-4 px-10 font-medium">
                  ARTIFICIAL INTELLIGENCE <img src={arrowtrwhite.src}></img>
                </div>
                <div className="flex items-center justify-between border-b border-t bg-slate-50 p-4 px-10 font-medium">
                  DEFI <img src={arrowtrwhite.src}></img>
                </div>
                <div className="flex items-center justify-between border-b border-t bg-slate-50 p-4 px-10 font-medium">
                  HEALTHCARE <img src={arrowtrwhite.src}></img>
                </div>
                <div className="flex items-center justify-between border-b border-t bg-slate-50 p-4 px-10 font-medium">
                  FINANCE <img src={arrowtrwhite.src}></img>
                </div>
                <div className="flex items-center justify-between border-b border-t bg-slate-50 p-4 px-10 font-medium">
                  EDUCATION <img src={arrowtrwhite.src}></img>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="hidden bg-white py-16 text-black md:block">
          <div className="container text-center">
            <h2 className="mb-8 text-2xl font-bold text-black md:text-5xl xl:text-7xl">TECHNOLOGIES WE USE</h2>
            <div className="grid grid-cols-8 border-b-2 text-xs">
              <div className="p-4 hover:bg-gradient-to-r hover:from-[#93FB9D] hover:to-[#09C7FB] hover:text-white">
                Frontend
              </div>
              <div className="p-4">Backend</div>
              <div className="p-4">Mobile</div>
              <div className="p-4">Database</div>
              <div className="p-4">Frameworks</div>
              <div className="p-4">DveOps</div>
              <div className="p-4">Cloud</div>
              <div className="p-4">Python</div>
            </div>

            <div className="space-between  grid grid-cols-7 justify-center p-7">
              <div className="h-5">
                <img src={img14.src} className="h-full" />
              </div>
              <div className="h-5">
                <img src={img15.src} className="h-full" />
              </div>
              <div className="h-5">
                <img src={img16.src} className="h-full" />
              </div>
              <div className="h-5">
                <img src={img17.src} className="h-full" />
              </div>
              <div className="h-5">
                <img src={img18.src} className="h-full" />
              </div>
              <div className="h-5">
                <img src={img19.src} className="h-full" />
              </div>
              <div className="h-5">
                <img src={img20.src} className="h-full" />
              </div>
              <div className="h-5">
                <img src={img21.src} className="h-full" />
              </div>
              <div className="h-5">
                <img src={img22.src} className="h-full" />
              </div>
              <div className="h-5">
                <img src={img23.src} className="h-full" />
              </div>
            </div>
          </div>
        </section>
            <div className='w-full '> 
             <StudiesPorpular />
            </div>
        <div className="container py-1 ">
          
          <section className='mx-11 py-16 sm:px-20 px-7'>
            <div className="container text-center">
              <h2 className="mb-8 text-2xl font-bold text-[#C6C6C6] md:text-4xl xl:text-7xl">No need to wonder.</h2>
            </div>
            <h2 className='mb-12 text-xl flex justify-center font-bold text-black md:text-3xl xl:text-7xl'>Working with us is wonderful.</h2>

            <div className='grid lg:grid-cols-2 space-y-3 mb-[8rem]'>
              <div className='space-y-1' >
                <h4 className='flex gap-2' ><Image src={right} alt='right' /> The right people</h4>
                <p className='px-7 xl:w-[26rem] lg:w-[18rem] text-[16px] text-[#525252]'>Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.</p>
              </div>
              <div className='space-y-1'>
                <h4 className='flex gap-2'> <Image src={right} alt='right' /> The right people</h4>
                <p className='px-7 xl:w-[26rem] lg:w-[18rem] text-[16px] text-[#525252]'>Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.</p>
              </div>
              <div className='space-y-1'>
                <h4 className='flex gap-2'> <Image src={right} alt='right' /> The right people</h4>
                <p className='px-7 xl:w-[26rem] lg:w-[18rem] text-[16px] text-[#525252]'>Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.</p>
              </div>
              <div className='space-y-1'>
                <h4 className='flex gap-2' > <Image src={right} alt='right' /> The right people</h4>
                <p className='px-7 xl:w-[26rem] lg:w-[18rem] text-[16px] text-[#525252]'>Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.</p>
              </div>
            </div>

              <p className='bg-black sm:h-[4rem] sm:w-[10rem] ml-[6rem] mb-[1rem] sm:rotate-6 text-center text-[#E0E0E0] text-[14px] font-normal'><span className='text-[18px] text-white font-semibold mb-[2rem] '>John Doe</span> <br /> web Developer</p>
            <div className='flex justify-center' >
              <Image src={team} alt='team' width={643} height={128} className='flex  justify-center' />
            </div>

            <div className="flex justify-center mt-[4rem]  ">
              <button className=' uppercase bg-black flex items-center text-xs px-[5rem] py-3 rounded-md text-white'>Get In Touch <Image src={arrowright} alt='arroright' /> </button>
            </div>



          </section>

          <section className="mx-11 py-16 w-full relative overflow-hidden ">
              <Image src={process} alt='process'  className='absolute opacity-65'  />
              <h1 className="mb-8 text-2xl font-medium text-black md:text-5xl  xl:text-[64px] ">OUR PROCESS</h1>
              <div className="mx-8 mb-16">
                <div className="">
                  {' '}
                  <img src={img6.src} className="w-[74px] ml-0" />
                </div>
                <div className="">
                  <h1 className="text-md mb-5 text-black sm:text-xl xl:text-3xl">Join exploration call</h1>
                  <p className="sm:text-md mb-5 xl-text-xl text-xs text-gray-500 leading-tight lg:w-[747px] md:text-[20px] md:w-[600px] sm:text-[17px] sm:w-[400px] w-full text-[15px] lg:text-[24px] tracking-wide">
                    {' '}
                    Tell us more about your business on a discovery call. We&apos;ll discussteam structure and approch
                    sucess criteria,timescale,budget,and required skill sets to see how we can help.
                  </p>
                </div>
              </div>

              <div className="mx-8 mb-16">
                <img src={img7.src} className="w-[74px] ml-0" />
                <div className="text-left">
                  <h1 className="text-md  mb-5 text-black sm:text-xl xl:text-3xl">Discuss Solution and team structure</h1>
                  <p className="sm:text-md mb-5 xl-text-xl text-xs text-gray-500 leading-tight lg:w-[747px] md:text-[20px] md:w-[600px] sm:text-[17px] sm:w-[400px] w-full text-[15px] lg:text-[24px] tracking-wide ">
                    In a matter of dats, we will finalize your project specifications,agree on an enagagement model select
                    and onboard your team.
                  </p>
                </div>
              </div>

              <div className="mx-8">
                <img src={img7.src} className="w-[74px] ml-0" />
                <div className="text-left">
                  <h1 className="text-md  mb-5 text-black sm:text-xl xl:text-3xl">Get started and track performance</h1>
                  <p className="sm:text-md mb-5 xl-text-xl text-xs text-gray-500 leading-tight lg:w-[747px] md:text-[20px] md:w-[600px] sm:text-[17px] sm:w-[400px] w-full text-[15px] lg:text-[24px] tracking-wide ">
                    {' '}
                    Once we agreed on milestones, we&apos;ll immediately get to work. We&apos;ll track progress, report
                    updates,and continuos adapt to your needs.
                  </p>
                </div>
              </div>
              <div className="mx-3 flex p-5">
                <button className="text-md flex h-14 w-60 items-center justify-center gap-4 bg-black p-2 text-white">
                  Get in touch <img src={arrowright.src} />
                </button>
              </div>
           
          </section>

          <section className="mb-5 p-5 py-12 mt-[3rem]">
            <div className=" space-y-3 text-center mb-[3rem]">
              <h1 className="text-2xl font-bold text-black md:text-5xl xl:text-[66px]">WHAT OUR CLIENTS SAY?</h1>
              <p className="font-light text-[#393939] xl:text-2xl xl:w-[923px] mx-auto ">
                Computools&apos; industry expertise enhances your innovation and improves your customer&apos;s
                experience.
              </p>
            </div>

            <div className=" md:flex px-[9%] gap-[5rem] ">
              <div className="p-4 sm:w-[40rem] w-full h-[20rem]">
                <p className="text-lg font-bold xl:w-[80%] w-full  mb-[3rem] text-gray-500">
                  “<br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                  lectus magna fringilla urna, porttitor rhoncus.
                </p>
                <div className="space-y-3 ">
                  <div className="flex space-x-3 ">
                    <p className="text-xs text-black">John Robert</p>
                    <p className="text-xs text-gray-500">Senior Java Developer</p>
                  </div>
                  <div className='flex mb-[5rem]  gap-2 '>

                    <Image src={arrowleft} alt='arrow' className='bg-[#E0E0E0] sm:h-[50px] h-[30px] ' />
                    <Image src={arrow} alt='arrow' className='sm:h-[50px] h-[30px] ' />

                  </div>
                </div>
              </div>
              <div className="w-50 h-50 ">
                <img src={img10.src} className="border-3  sm:mt-[1rem] mt-[5rem] border border-black" />
              </div>
            </div>
          </section>

          <section className="relative flex flex-col items-center">
            <div className="relative z-10 mx-11 mt-12">
              <div className="lg:h-[600px] md:h-[500px] h-[480px] w-[100%] mt-12 bg-black p-7">
                <div className="mb-12 justify-center space-y-4 text-center">
                  <h1 className="text-2xl font-bold lg:text-5xl mt-4 text-white">EXCELLENCE</h1>
                  <p className="text-xs text-center mx-auto text-gray-500 lg:text-xl sm:text-lg text-[1rem] px-7 sm:w-[80%] w-[100%] ">
                    Tell us more about your business on a discovery call. We’ll discuss team structure and approach,
                    success criteria, timescale, budget, and required skill set.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="mb-5 flex justify-center">
                    <img src={img13.src} className="lg:h-[13rem] md:h-[11rem] sm:h-[9rem] h-[5rem]" />
                  </div>

                  <div className="flex justify-center space-x-2">
                    {/* <p className="text-center text-xs text-white"></p> */}
                    <a href="#" className="text-center mt-[2rem] md:mt-[3rem] text-xs text-[#36FBFF] hover:underline">
                      Get in touch
                    </a>
                    <img src={img11.src} className="w-4 lg:h-[13rem] md:h-[11rem] sm:h-[9rem] h-[5rem]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-50 absolute">
              <img src={img12.src} className='lg:h-[13rem] md:h-[11rem] sm:h-[9rem] h-[5rem]' />
            </div>
          </section>
          <section className="my-12 overflow-x-hidden p-12 sm:px-20 px-7 text-left">
            <h2 className="mb-6 text-2xl font-bold text-black md:text-4xl xl:text-7xl  md:w-[80%] w-[100%]">
              <span className="text-[#C6C6C6]  w-[50%]">Say Hi!</span> And Tell Us About Your IDEA.
            </h2>
            <p className="mb-8 text-[#525252] xl:text-2xl md:w-[75%] w-[100%]">
              Get in touch to discuss your project or service expectations. Simply fill in the form below or send us an
              e-mail to info@Dashmicrosystem.com
            </p>
            <div className="">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:pt-8">
                <div>
                  <p className="font-medium text-[#525252]">FULL NAME*</p>
                  <input type="text" className="w-full rounded-lg p-2" placeholder="So we know how to address you" />
                  <div className="h-[1px] bg-[#525252]"></div>
                </div>
                <div>
                  <p className="font-medium text-[#525252]">COMPANY NAME*</p>
                  <input
                    type="text"
                    className="w-full rounded-lg p-2"
                    placeholder="So we can tailor the services to your business needs"
                  />
                  <div className="h-[1px] bg-[#525252]"></div>
                </div>
                <div>
                  <p className="font-medium text-[#525252]">EMAIL*</p>
                  <input
                    type="text"
                    className="w-full rounded-lg p-2"
                    placeholder="So we can respond promptly to your enquiry"
                  />
                  <div className="h-[1px] bg-[#525252]"></div>
                </div>
                <div>
                  <p className="font-medium text-[#525252]">WHO REFERRED YOU TO US?</p>
                  <input type="text" className="w-full rounded-lg p-2" placeholder="So we can say thank you" />
                  <div className="h-[1px] bg-[#525252]"></div>
                </div>
              </div>
              <div className="py-8">
                <p className="font-medium text-[#525252]">MESSAGE</p>
                <input
                  type="text"
                  className="w-full rounded-lg p-2"
                  placeholder="Give us more details about your request so the colleagues with relevant experience can focus on your needs"
                />
                <div className="h-[1px] bg-[#525252]"></div>
              </div>
            </div>
            <div className="flex flex-col justify-between xl:flex-row">
              <div className="flex flex-row items-center">
                <input type="checkbox" className="mr-2" />
                <p className="font-[20px] text-[#6F6F6F]">
                  I agree and consent to the Privacy Policy, its terms of processing of my personal data.
                </p>
              </div>
              <div className="my-4 flex">
                <button className="text-md flex h-14 w-60 items-center justify-center gap-4 bg-black p-2 text-white">
                  Get in touch <img src={arrowright.src} />
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className='w-full'>

          <Offiespopular />
        </div>

        <footer className="w-full bg-[#F4F4F4] py-6 text-white sm:px-20 px-1">
          <div className="container flex items-center justify-between">
            <div className="mt-9 space-y-6 sm:p-9 p-1">
              <button className="lg:w-18 md:w-[20] w-[10rem] mb-2 lg:h-8 bg-black p-2 text-[10px] font-bold  text-white">DASH MICRO SYSTEM</button>
              <div className="space-y-1">
                <p className="text-xs text-gray-500">Copyright © 2024</p>
                <p className="text-xs text-gray-500">DASH MICRO SYSTEMS pvt ltd</p>
              </div>
            </div>
            <div className="mr-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-8 gap-5   text-xs text-gray-500">
              <a href="#" className="hover:underline md:text-[18px] text-[12px]">
                HOME
              </a>
              <a href="#" className="hover:underline md:text-[18px] text-[12px]">
                INDUSTRIES
              </a>
              <a href="#" className="hover:underline md:text-[18px] text-[12px]">
                CASESTUDIES
              </a>
              <a href="#" className="hover:underline md:text-[18px] text-[15px]">
                ABOUT US
              </a>
              <a href="#" className="hover:underline md:text-[18px] text-[12px]">
                COMPANY
              </a>
              <a href="#" className="hover:underline md:text-[18px] text-[12px]">
                SERVICES
              </a>
              <a href="#" className="hover:underline md:text-[18px] text-[12px]">
                PRIVACYPOLICY
              </a>
            </div>
          </div>

          <div className="mx-9 space-y-3">
            <hr className="bg-black"></hr>
            <img src={img9.src} />
          </div>
        </footer>
      </div>
    </main>
  )
}
