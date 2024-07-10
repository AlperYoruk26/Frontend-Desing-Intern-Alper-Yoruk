import React from "react"

const Heading = () => {
    return (
        <div className="relative h-screen min-w-full overflow-hidden bg-[#FDCA09]">
            <div className="flex justify-center h-full relative z-10 pt-60">
                <h2 className="text-black text-center flex text-8xl font-bold mt-11 max-md:text-6xl max-sm:text-5xl">
                    Let’s create something <br /> great together.
                </h2>
            </div>

            <div className="shapes">
                <img className="absolute top-[80px] left-[50px] z-0" src="/assets/shapes/shape1.png" alt="shape1.png" />
                <img className="absolute top-[10px] right-[50px] z-0 h-full" src="/assets/shapes/shape2.png" alt="shape2.png" />
            </div>

            <div className="hands absolute bottom-0 flex justify-center w-full">
                <img src="/assets/images/hand1.png" alt="hand1.png" className="max-xl:hidden" />
                <img src="/assets/images/hand2.png" alt="hand2.png" className="max-lg:hidden" />
                <img src="/assets/images/hand3.png" alt="hand3.png" />
                <img src="/assets/images/hand4.png" alt="hand4.png" />
                <img src="/assets/images/hand5.png" alt="hand5.png" className="max-lg:hidden" />
                <img src="/assets/images/hand6.png" alt="hand6.png" className="max-xl:hidden" />
            </div>
        </div>
    )
}

export default Heading