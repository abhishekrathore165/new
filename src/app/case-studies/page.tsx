import img1 from '/public/images/bg.png'
import img3 from '/public/images/green.png'
import img24 from '/public/images/Image Placeholder.png'
import img9 from '/public/images/ok.png'
import img11 from '/public/images/right.png'

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-geist">
      <header className="w-full bg-white shadow-md">
        <div className="container flex h-[calc(12vh-9vh)] items-center justify-between py-5">
          <nav className="space-x-2.5 text-[8.19px] md:flex">
            <button className="h-[2.5rem] bg-black p-2">
              <a href="#services" className="font-bold text-white bg-black hover:text-gray-800">
                DASH MICRO SERVICES
              </a>
            </button>
            <a href="#about" className="text-gray-600 hover:text-gray-800">
              SERVICES +{' '}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              INDUSTRIES +
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-800">
              CASESTUDIES
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-800">
              ABOUT US
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              COMPANY
            </a>
            <button className="h-[2.5rem] bg-black p-3">
              <a href="#contact" className="text-white hover:text-gray-800">
                GET IN TOUCH{' '}
              </a>
            </button>
          </nav>
        </div>
      </header>

      <main className="container py-6 mx-auto bg-white font-geist">
        <section className="p-10 text-left font-geist" style={{ backgroundImage: `url(${img1.src})` }}>
          <div className="bg-center bg-cover">
            <h1 className="text-2xl font-bold text-white">CASE STUDIES</h1>
            <p className="mb-5 text-[10px] text-gray-300">
              Get in touch to discuss your project or service expectations. Simply fill in the form below or send us an
              e-mail to info@Dashmicrosystem.com
            </p>
            <button className="font-geist h-[2rem] w-[10rem] bg-white p-2 text-[10px] text-black">Get in touch </button>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-9 py-11">
            <div className="flex justify-between">
              <div className="">
                <h3 className="mb-1 text-2xl text-left text-black font-geist">CASE STUDIES</h3>
                <p className="font-geist mb-8 text-left text-[8px] text-black">
                  Clients trust us for our clarity, structure, high performance and intuitive functionality across every
                  stage.
                </p>
              </div>
              <div className="flex space-x-1">
                <button className="h-[2rem] w-[2rem] bg-gray-100">
                  <img src={img11.src} className="p-2" />{' '}
                </button>
                <button className="h-[2rem] w-[2rem] bg-gray-100">
                  {' '}
                  <img src={img11.src} className="p-2" />{' '}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-[16rem] md:grid-cols-3">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="h-[17rem] w-[15rem] border border-gray-300 bg-white">
                  <div className="p-4">
                    <img src={img24.src} />
                  </div>
                  <div className="mx-5">
                    <h3 className="text-left text-black text-">DEVELOPED A MOBILE APP TRANSFORMATIVE</h3>
                    <p className="mb-2 text-[7px] text-black">
                      See how we developed a mobile app with the transformative power of advanced design.
                    </p>

                    <div className="flex space-x-2">
                      <p className="text-[7px]">GET IN TOUCH</p>
                      <img src={img3.src} className="h-3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="p-12 text-left font-geist">
          <h2 className="mb-6 text-2xl text-black">OUR OFFICES</h2>
          <p className="mb-8 text-[13px] text-gray-500">
            Computools Provides Software Development Services Worldwide. Get In Touch With One Of Our Experts In Your
            Region.
          </p>
          <div className="grid grid-cols-4 gap-[13rem] md:grid-cols-3">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="border-gray h-[13rem] w-[12rem] rounded-lg border bg-white p-6 shadow-md">
                <h3 className="mb-2 text-lg text-black">UNITED STATES</h3>
                <p className="mb-[4rem] text-[10px] text-gray-600">New York, 430 Park Ave, NY 10022</p>
                <p className="mb-2 text-[8px] text-gray-600">+44 (0) 793 9311 355</p>
                <p className="text-[8px] text-gray-600">mail@dashmicro.com</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="w-full py-6 text-white bg-gray-300">
          <div className="container flex items-center justify-between">
            <div className="p-9">
              <button className="mb-2 h-[2rem] w-[9rem] bg-black p-2 text-[9px] font-bold text-white">
                DASH MICRO SYSTEM
              </button>
              <div className="space-y-1">
                <p className="text-[10px] text-gray-500">Copyright © 2024</p>
                <p className="text-[10px] text-gray-500">DASH MICRO SYSTEMS pvt ltd</p>
              </div>
            </div>
            <div className="font-geist mt-[-2rem] grid grid-cols-4 gap-3 text-[8px] text-gray-500">
              <a href="#" className="hover:underline">
                HOME
              </a>
              <a href="#" className="hover:underline">
                INDUSTRIES
              </a>
              <a href="#" className="hover:underline">
                CASESTUDIES
              </a>
              <a href="#" className="hover:underline">
                ABOUT US
              </a>
              <a href="#" className="hover:underline">
                COMPANY
              </a>
              <a href="#" className="hover:underline">
                SERVICES
              </a>
              <a href="#" className="hover:underline">
                PRIVACYPOLICY
              </a>
            </div>
          </div>
          <div className="space-y-3 mx-9">
            <hr className="bg-black"></hr>
            <img src={img9.src} />
          </div>
        </footer>
      </main>
    </div>
  )
}
