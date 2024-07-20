import React from 'react'
interface props {
    state:string,
    city:string,
    phone:string,
    email:string,
}
const Officess = ({state, city,phone,email}:props) => {
  return (
    <div className="flex">
    <div className="h-[267px]  w-[345.62px] lg:m-2 md:m-1 rounded-lg border right-0 border-gray-300 bg-white p-6 shadow-md" >
      <h3 className="mb-2 text-xl font-medium text-[#525252]">{state}</h3>
      <p className="mb-[4rem] text-sm text-[#525252]">{city}</p>
      <p className="text-md mb-2 text-black">{phone}</p>
      <p className="text-md text-black">{email}</p>
    </div>
</div>
  )
}

export default Officess
