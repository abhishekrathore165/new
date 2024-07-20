import img1 from '/public/images/bg.png'
import img10 from '/public/images/exam.png'
import img9 from '/public/images/ok.png'
import img11 from '/public/images/right.png'

export default function Home() {
  const data = [
    {
      no: '01',
      one: 'Accessibility',
      two: 'Developing an accessible platform that puts user needs and satisfaction first.',
    },
    {
      no: '02',
      one: 'Innovation',
      two: 'Leveraging technology thoughtfully to expand possibilities for expression, creativity, and community.',
    },
    {
      no: '03',
      one: 'Connection',
      two: 'Enabling deeper connections through shared experiences rather than unfiltered broadcasting.',
    },
    {
      no: '04',
      one: 'Ownership',
      two: 'Designing pathways for creators to own their content, thrive economically, and participate in governance',
    },
    {
      no: '05',
      one: 'Respect',
      two: 'Fostering respectful discourse and upholding legal speech by combining user oversight with safeguards.',
    },
    {
      no: '06',
      one: 'Control',
      two: 'Providing users control over their data and online footprint across spaces.',
    },
  ]

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
        <section className="p-10 text-left font-geist">
          <div className="bg-center bg-cover h-50" style={{ backgroundImage: `url(${img1})` }}>
            <h1 className="text-2xl text-black">ABOUT COMPUTOOLS</h1>
            <p className="text-[10px] text-gray-500">
              Computools shapes the future with products, services and solutions that businesses need to Unlock
              Tomorrow. We are a global company that delivers on the world-changing ideas that we co-create together
              with our clients.
            </p>
          </div>
        </section>

        <img src={img10.src} />

        <section className="p-10 text-left font-geist">
          <div className="">
            <h2 className="font-geist mb-2 text-left text-[1.6rem] text-black">SOPHIE IS BASED ON THREE PRINCIPLES</h2>
            <p className="mb-10 text-[8px] text-gray-500">
              As Head of Marketing, you want to use the web app as a dynamic platform for brand storytelling, targeted
              campaigns and personalised audience engagement. This will allow you to make the most of content marketing,
              integrate with social media, and personalise recommendations. This way, you can increase brand awareness,
              website traffic and provide qualified leads.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[16rem] overflow-x-hidden md:grid-cols-3">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="h-[16rem] w-[15rem] border border-gray-100 p-4 shadow-md">
                <h1 className="p-4 mb-6">01</h1>
                <p className="mb-8 text-[8px] text-gray-500">
                  As Head of Marketing, you want to use the web app as a dynamic platform for brand storytelling,
                  targeted campaigns and personalised audience engagement.
                </p>
                <p className="mb-5 text-[8px] text-gray-500">
                  This will allow you to make the most of content marketing, integrate with social media, and
                  personalise recommendations. This way, you can increase brand awareness, website traffic and provide
                  qualified leads.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-2 bg-white">
          <div className="mx-12 py-11">
            <div className="flex justify-between">
              <div className="">
                <h3 className="mb-1 text-2xl text-left text-black font-geist">VALUES</h3>
                <p className="font-geist mb-8 whitespace-normal text-left text-[8px] text-gray-600">
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
            <div className="grid grid-cols-4 gap-[16rem] overflow-x-hidden md:grid-cols-3">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="h-[10rem] w-[15rem] border border-gray-100 bg-white">
                  <div className="p-8">
                    <h3 className="mb-6 text-left text-black text-">01</h3>
                    <p className="text-[7px] text-gray-500">
                      As Head of Marketing, you want to use the web app as a dynamic platform for brand storytelling,
                      targeted campaigns and personalised audience engagement.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-7">
          <div className="mx-[3.5rem] mb-9">
            <h1 className="mb-1 text-2xl text-left text-white font-geist">THE DIFFERENCE</h1>
          </div>
          <div className="">
            {data.map((item, index) => (
              <div key={index} className="flex space-x-4 text-white space-y-9">
                <div className="mx-[4rem] flex space-x-[5rem]">
                  <p className="text-[14px]">{item.no}</p>
                  <p className="text-[14px]">{item.one}</p>
                </div>

                <p className="text-[8px] text-gray-300">{item.two}</p>
                <hr />
              </div>
            ))}
          </div>
        </section>

        <section className="p-10 mx-2 text-left font-geist">
          <div className="">
            <h2 className="font-geist mb-1 text-left text-[2rem] text-black">THE CHALLENGE</h2>
            <p className="mb-12 text-[8px] text-gray-600">
              As Head of Marketing, you want to use the web app as a dynamic platform for brand storytelling, targeted
              campaigns and personalised audience engagement. This will allow you to make the most of content marketing,
              integrate with social media, and personalise recommendations. This way, you can increase brand awareness,
              website traffic and provide qualified leads.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[16rem] overflow-x-hidden md:grid-cols-3">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="h-[16rem] w-[15rem] border border-gray-100 p-4 shadow-md">
                <h1 className="p-4 mb-6">01</h1>
                <p className="mb-8 text-[8px] text-gray-500">
                  As Head of Marketing, you want to use the web app as a dynamic platform for brand storytelling,
                  targeted campaigns and personalised audience engagement.{' '}
                </p>
                <p className="mb-5 text-[8px] text-gray-500">
                  This will allow you to make the most of content marketing, integrate with social media, and
                  personalise recommendations. This way, you can increase brand awareness, website traffic and provide
                  qualified leads.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-12 mx-3 text-left font-geist">
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
