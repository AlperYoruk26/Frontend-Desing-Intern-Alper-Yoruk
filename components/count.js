import React from "react"

const Count = () => {
    return (
        <div className="count-box bg-black min-w-full py-[100px] max-sm:py-[50px]">
        <div className="container grid grid-cols-4 justify-between px-28 mx-auto max-2xl:grid-cols-2 max-lg:grid-cols-1">
          <div className="item flex flex-col justify-center text-center py-10">
            <div className="number text-[#FEC00A] text-6xl font-bold pb-4">
              350 +
            </div>
            <div className="text text-2xl text-white">
              Clients Worldwide
            </div>
          </div>
          <div className="item flex flex-col justify-center text-center py-10">
            <div className="number text-[#FEC00A] text-6xl font-bold pb-4">
              20 +
            </div>
            <div className="text text-2xl text-white">
              Team Members
            </div>
          </div>
          <div className="item flex flex-col justify-center text-center py-10">
            <div className="number text-[#FEC00A] text-6xl font-bold pb-4">
              100 +
            </div>
            <div className="text text-2xl text-white">
              Projects Completed
            </div>
          </div>
          <div className="item flex flex-col justify-center text-center py-10">
            <div className="number text-[#FEC00A] text-6xl font-bold pb-4">
              85M +
            </div>
            <div className="text text-2xl text-white">
              Revenue Generated
            </div>
          </div>
        </div>
      </div>
    )
}

export default Count