import React from "react"

const Team = () => {
  return (
    <div className="container mx-auto py-[100px] max-sm:py-[50px]">
      <div className="flex flex-wrap justify-center text-center mb-[110px]">
        <div className="w-full lg:w-6/12 px-4">
          <h1 className="text-black text-4xl font-bold max-xl:text-3xl">
            Meet the heroes behind the magic
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly gap-[70px]">
        <div className="w-full lg:w-3/12 mb-3 px-2 md:w-6/12 sm:px-2">
          <a href="#" className="flex flex-col p-4 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 max-md:w-fit mx-auto">
            <div>
              <img className="" src="/assets/images/Avatar1.png" alt="Avatar1.png" />
            </div>
            <div className="text-left">
              <h2 className="text-black text-[34px] lea font-bold mt-11 max-xl:text-[30px]">
                Esther Howard
              </h2>

              <div className="text-gray-400 text-2xl my-2">
                Founder
              </div>
            </div>
          </a>
        </div>

        <div className="w-full lg:w-3/12 mb-3 px-2 md:w-6/12 sm:px-2">
          <a href="#" className="flex flex-col p-4 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 max-md:w-fit mx-auto">
            <div>
              <img className="" src="/assets/images/Avatar2.png" alt="Avatar2.png" />
            </div>

            <div className="text-left">
              <h2 className="text-black text-[34px] font-bold mt-11 max-xl:text-3xl">
                Cody Fisher
              </h2>

              <div className="text-gray-400 text-2xl my-2">
                Developer
              </div>
            </div>
          </a>
        </div>

        <div className="w-full lg:w-3/12 mb-3 px-2 md:w-6/12 sm:px-2">
          <a href="#" className="flex flex-col p-4 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 max-md:w-fit mx-auto">
            <div>
              <img className="" src="/assets/images/Avatar3.png" alt="Avatar3.png" />
            </div>

            <div className="text-left">
              <h2 className="text-black text-[34px] font-bold mt-11 max-xl:text-3xl">
                Brooklyn Simmons
              </h2>

              <div className="text-gray-400 text-2xl my-2">
                Designer
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Team