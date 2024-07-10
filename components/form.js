import React from 'react'

const Form = () => {
    return (
        <div className="container flex flex-wrap gap-36 justify-center mx-auto py-[204px] max-sm:py-[50px]">
            <div className="image min-w-96 max-sm:order-2">
                <img src="/assets/images/Side Image.png" alt="Side Image.png" />
            </div>
            <div className="form flex flex-col w-full max-w-screen-md min-w[620px] max-sm:order-1 ">
                <h2 className="text-black text-[44px] text-right font-bold pb-12 max-xl:text-3xl">
                    We'd love to hear <br />
                    from you
                </h2>
                <form action="" className="">
                    <input className="w-full border border-neutral-950 pl-[53px] pt-[33px] pb-[29px] mb-[30px] text-[28px] leading-[38px] placeholder-[#101010]" type="text" id="Name*" name="name" placeholder="Name*" required />

                    <input className="w-full border border-neutral-950 pl-[53px] pt-[33px] pb-[29px] mb-[30px] text-[28px] leading-[38px] placeholder-[#101010]" type="email" id="email" name="email" placeholder="Email*" required />

                    <input className="w-full border border-neutral-950 pl-[53px] pt-[33px] pb-[29px] mb-[30px] text-[28px] leading-[38px] placeholder-[#101010]" type="url" id="web-url" name="web-url" placeholder="Website URL*" required />

                    <textarea className="w-full border border-neutral-950 pl-[53px] pt-[33px] pb-[29px] mb-[30px] text-[28px] leading-[38px] placeholder-[#101010]" id="project-detail" name="project-detail" placeholder="Project Details*" rows="3" required/>

                    <input className="w-full border border-transparent cursor-pointer text-[28px] leading-[38px] font-medium p-7 bg-black text-white hover:bg-white hover:text-black hover:border-neutral-950 transition-all duration-300" type="submit" value="Send Proposal" />
                </form>
            </div>
        </div>
    )
}

export default Form