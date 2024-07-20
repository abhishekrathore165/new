import React from 'react'
interface props {
   imgurl:string,
    title:string,
    desc:string,
   
}
const Studies = ({imgurl,title,desc}:props) => {
  return (
    <div className=" flex md:flex sm:justify-center justify-center ">
      <div  className="h-80 w-60 border   border-white bg-[#262626]">
        <div className="mb-4 p-4">
          <img src={imgurl} />
        </div>
        <div className="mx-5 space-y-3">
          <h3 className="text- text-left text-white">{title}</h3>
          <p className="text-xs text-white">
          {desc}
          </p>
        </div>
      </div>
  </div>
  )
}

export default Studies
