import React, { useState, useEffect } from 'react'
import letterImg from '../../assets/pic.png'
import Img1 from '../../assets/brands/philips.png'
import Img2 from '../../assets/brands/peoples-association.png'
import Img3 from '../../assets/brands/fairprice.png'
import Img4 from '../../assets/brands/deloitte.png'
import Img5 from '../../assets/brands/nus.png'
import backgroundImage from '../../assets/Path.png'
import letter2 from '../../assets/pic2.png'
import Card from './Card'



function Firstpage() {
    const imgData = [

        { img: Img1 },
        { img: Img2 },
        { img: Img3 },
        { img: Img4 },
        { img: Img5 }


    ]
    const slides = [
        {
            title: "Personal Documents Translation",
            desc: (
                <>
                    Certified Translation Services for Personal <br />Documents. Accepted by ICA, MOM, LTA <br /> and Govt Agencies and Embassies. Ask for <br /> our Notary and SAL Authentication Service <br /> for ICA submissions.
                </>
            ),
        },
        {
            title: "Business Documents Translation",
            desc: (
                <>
                    Certified Translation Services for Business <br />Documents. Accepted by ACRA, IRAS, MOM <br /> and Financial Institutions. Ask for our <br /> Certified & Native Industry Experts <br /> for corporate submissions.
                </>
            ),
        },
        {
            title: "Legal Documents Translation",
            desc: (
                <>
                    Certified Translation Services for Legal <br />Documents. Accepted by Courts, Law Firms <br /> and Government Bodies. Ask for our <br /> Notary and SAL Authentication Service <br /> for official submissions.
                </>
            ),
        },
        {
            title: "Medical Documents Translation",
            desc: (
                <>
                    Certified Translation Services for Medical <br />Documents. Accepted by Hospitals, MOH <br /> and Insurance Providers. Ask for our <br /> Specialized Medical Translators <br /> for accurate reports.
                </>
            ),
        },
    ]

    const [active, setActive] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [active, slides.length])

    return (
        <div className=' w-full h-full  '>
            {/* first block */}
            <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-40 mt-5 px-4'>
                <div className='flex flex-col justify-start items-center lg:items-start w-full max-w-[560px]'>
                    {/* Slider text container */}
                    <div className='w-full overflow-hidden'>
                        <div
                            className='flex transition-transform duration-500 ease-in-out'
                            style={{ transform: `translateX(-${active * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className='w-full shrink-0 flex flex-col justify-start items-center lg:items-start gap-6 lg:gap-10 text-center lg:text-left'
                                >
                                    <p className='text-[18px] sm:text-[22px] md:text-[24px] font-DMSans text-[#3C3B3B] leading-snug'>
                                        {slide.desc}
                                    </p>

                                    <div className='flex flex-col items-center lg:items-start self-center lg:self-start'>
                                        <h2 className='text-[20px] sm:text-[25px] font-medium font-DMSans text-[#3C3B3B]'>
                                            {slide.title}
                                        </h2>
                                        <div className='w-full h-[3px] bg-[#0089CF] mt-1'></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Diamond indicator buttons */}
                    <div className='flex items-center justify-center lg:justify-start gap-2.5 mt-3 self-center lg:self-start'>
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                aria-label={`Go to slide ${index + 1}`}
                                onClick={() => setActive(index)}
                                className={`w-2.5 h-2.5 rotate-45 cursor-pointer transition-colors duration-300 ${active === index ? 'bg-[#0089CF]' : 'bg-[#BAE6FD]'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-[530px] h-[400px] max-w-full' >

                    <img src={letterImg} alt="letter" className="w-full h-full justify-center items-center object-contain" />

                </div>

            </div>
            {/* second block */}
            <div className='flex flex-col w-full h-full items-center justify-center px-4 text-center mt-10'>
                <h1 className='text-[26px] sm:text-[35px] font-bold font-DMSans text-[#3C3B3B]' >LETTER CRAFT <span className='text-[#0189CF]' > TRANSLATION</span></h1>

                <p className='text-[15px] sm:text-[17px] font-DMSans text-[#3C3B3B]'>Professional Translators Delivering High Quality, Fast & Affordable</p>
                <p className='text-[15px] sm:text-[17px] font-DMSans text-[#3C3B3B]'>Translation Services In Singapore. <span className='font-bold text-[15px] sm:text-[17px] text-[#0089CF]' > Starting S$38 per page</span> & no additional gst.</p>
                <button className='bg-[#0189CF] text-[18px] text-white font-DMSans px-6 py-2 rounded-2xl w-[274px] h-[56px] mt-5 '>Get A Quote For</button>

            </div>
            {/* third Block */}
            <div className='flex flex-col w-full h-full justify-center items-center mt-10 bg-[#0089CF0D] py-4'>

                <h1 className='text-[26px] sm:text-[35px] font-bold font-DMSans text-[#3C3B3B] mt-5 text-center px-4' >BRANDS THAT <span className='text-[#0189CF]' > TRUST US</span></h1>
                <div className='flex gap-8 lg:gap-10 w-full h-[190px] justify-start lg:justify-center items-center px-6 overflow-x-auto'>
                    {imgData.map((item, index) => (
                        <img src={item.img} alt="Philips" className="w-[175px] h-[75px] object-contain flex-shrink-0" />
                    ))}
                </div>

            </div>
            {/* fourth */}

            <div className=' flex flex-col w-full h-full mt-12 lg:mt-20 ' >
                <div className='flex flex-col justify-center items-center w-full h-full  ' style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "50%", backgroundPosition: "start", backgroundRepeat: "no-repeat" }} >


                    <h1 className='text-[26px] sm:text-[35px] font-bold font-DMSans text-[#3C3B3B] text-center px-4' >TRANSLATION <span className='text-[#0189CF]' >SERVICES</span></h1>
                    <p className='text-[15px] sm:text-[17px] font-DMSans text-[#3C3B3B] text-center px-4'>Letter Crafts is your partner for over 80 languages.</p>
                    <p className='text-[15px] sm:text-[17px] font-DMSans text-[#3C3B3B] text-center px-4'>Our team of native translators and industry experts </p>
                    <p className='text-[15px] sm:text-[17px] font-DMSans text-[#3C3B3B] text-center px-4'>can cater to all your translation needs.</p>

                    <div className='flex flex-col lg:flex-row justify-center items-center w-full h-full mt-10 gap-10 lg:gap-40 xl:gap-80 px-4' >
                        {/* right div */}
                        <Card />
                        {/* left div */}
                        <div className=' w-[530px] h-[400px] max-w-full flex justify-center items-center ' >

                            <img src={letter2} alt="letter" className="w-full h-full object-contain" />

                        </div>

                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                </div>

            </div>


        </div>
    )
}

export default Firstpage
