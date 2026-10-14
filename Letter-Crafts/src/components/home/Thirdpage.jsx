import React, { useState, useEffect, useRef } from 'react'
import google from '../../assets/google.png'
import pic from '../../assets/UI.png'

const GoogleIcon = () => (
    <svg width="42" height="42" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#google_icon_clip)">
            <path d="M12.5425 1.18403C8.94558 2.43184 5.84357 4.80024 3.69214 7.94134C1.54071 11.0824 0.453265 14.8307 0.589533 18.6355C0.725802 22.4403 2.0786 26.1011 4.44922 29.0803C6.81985 32.0594 10.0833 34.1999 13.7604 35.1872C16.7414 35.9564 19.8646 35.9901 22.8616 35.2856C25.5766 34.6758 28.0866 33.3713 30.146 31.5C32.2893 29.4928 33.8451 26.9394 34.646 24.1143C35.5162 21.0421 35.6711 17.8114 35.0988 14.67H18.3588V21.614H28.0535C27.8597 22.7216 27.4445 23.7786 26.8327 24.7219C26.2209 25.6653 25.4251 26.4754 24.4929 27.104C23.3092 27.8874 21.9746 28.4143 20.575 28.6509C19.1714 28.912 17.7318 28.912 16.3282 28.6509C14.9055 28.3571 13.5597 27.7699 12.3766 26.9268C10.4758 25.5813 9.0485 23.6698 8.29848 21.465C7.53598 19.2189 7.53598 16.7839 8.29848 14.5378C8.83236 12.9634 9.71495 11.5299 10.8804 10.3443C12.214 8.96269 13.9025 7.97508 15.7605 7.48987C17.6185 7.00465 19.5742 7.04058 21.4132 7.59371C22.8498 8.0345 24.1635 8.805 25.2494 9.84371C26.3425 8.75621 27.4338 7.6659 28.5232 6.57278C29.0857 5.98496 29.6988 5.42528 30.2529 4.8234C28.595 3.2808 26.6491 2.08038 24.5266 1.2909C20.6614 -0.112564 16.4322 -0.150281 12.5425 1.18403Z" fill="white" />
            <path d="M12.5381 1.18429C16.4274 -0.15092 20.6567 -0.114196 24.5222 1.28836C26.645 2.0832 28.5901 3.2894 30.2456 4.83773C29.6831 5.43961 29.0897 6.00211 28.5159 6.58711C27.4247 7.67648 26.3344 8.76211 25.245 9.84398C24.1591 8.80526 22.8454 8.03477 21.4087 7.59398C19.5704 7.03891 17.6147 7.0009 15.7562 7.48413C13.8977 7.96736 12.2083 8.95316 10.8731 10.3334C9.70772 11.5189 8.82514 12.9524 8.29125 14.5268L2.46094 10.0127C4.54784 5.87431 8.16117 2.70874 12.5381 1.18429Z" fill="#E33629" />
            <path d="M0.915148 14.4843C1.22829 12.9312 1.74856 11.4271 2.46202 10.0125L8.29234 14.5378C7.52984 16.7839 7.52984 19.2188 8.29234 21.465C6.34984 22.965 4.4064 24.4725 2.46202 25.9875C0.676509 22.4333 0.131959 18.3839 0.915148 14.4843Z" fill="#F8BD00" />
            <path d="M18.3567 14.6672H35.0967C35.669 17.8086 35.5141 21.0394 34.6439 24.1116C33.843 26.9367 32.2873 29.4901 30.1439 31.4972C28.2623 30.0291 26.3723 28.5722 24.4908 27.1041C25.4236 26.4749 26.2198 25.6638 26.8317 24.7195C27.4435 23.7752 27.8584 22.717 28.0514 21.6085H18.3567C18.3539 19.2966 18.3567 16.9819 18.3567 14.6672Z" fill="#587DBD" />
            <path d="M2.46094 25.9875C4.40531 24.4875 6.34875 22.98 8.29125 21.465C9.04277 23.6705 10.4721 25.5822 12.375 26.9268C13.5617 27.766 14.9105 28.3484 16.335 28.6368C17.7386 28.8979 19.1783 28.8979 20.5819 28.6368C21.9815 28.4003 23.316 27.8733 24.4997 27.09C26.3813 28.5581 28.2712 30.015 30.1528 31.4831C28.0938 33.3554 25.5837 34.6609 22.8684 35.2715C19.8715 35.9761 16.7482 35.9423 13.7672 35.1731C11.4095 34.5436 9.20721 33.4338 7.29844 31.9134C5.2783 30.3092 3.62822 28.2879 2.46094 25.9875Z" fill="#319F43" />
        </g>
        <defs>
            <clipPath id="google_icon_clip">
                <rect width="36" height="36" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

const StarRating = () => (
    <div className='flex items-center gap-1'>
        {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16667 13.9975L14.8317 17.4167L13.3283 10.9725L18.3333 6.63667L11.7425 6.0775L9.16667 0L6.59083 6.0775L0 6.63667L5.005 10.9725L3.50167 17.4167L9.16667 13.9975Z" fill="#FFD700" />
            </svg>
        ))}
    </div>
)

// 7 cards so sliding by 1 card on desktop doesn't create blank space
const cardList = [0, 1, 2, 3, 4, 5, 6]

function Thirdpage() {
    const [active, setActive] = useState(0)
    const cardRef = useRef(null)
    const [step, setStep] = useState(362)

    useEffect(() => {
        const updateStep = () => {
            if (cardRef.current) {
                setStep(cardRef.current.offsetWidth + 32)
            }
        }
        updateStep()
        window.addEventListener('resize', updateStep)
        return () => window.removeEventListener('resize', updateStep)
    }, [])

    return (
        <div className='flex flex-col justify-center items-center mt-16 lg:mt-28 w-full'>
            <div className='w-full text-center px-4'>
                <h1 className='text-[24px] sm:text-[30px] lg:text-[35px] font-bold font-DMSans text-[#3C3B3B]'>
                    OUR TRACK RECORDS <span className='text-[#0189CF]'>HIGHLIGHTS OUR EXPERTISE</span>
                </h1>
            </div>

            <div className='flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 mt-10 lg:mt-16 px-4 w-full'>
                {/* 5y+ Experience */}
                <div className='flex items-center justify-center gap-3'>
                    <span className='shrink-0'>
                        <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="60" height="60" rx="30" fill="#0189CF" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M23.92 21.46L21.95 21.29L20.39 24.08L19.4 21.04L16.36 20.47L16.53 20.14L18.91 18.66L18.58 15.46L20.96 17.35L23.67 16.03L24.0 16.12L22.93 19.07L25.07 21.13L25.07 21.37Z M38.87 17.27L40.85 15.54L41.26 15.54L40.85 18.66L43.31 20.22L43.23 20.63L40.27 21.04L39.37 24.08L39.12 24.0L37.89 21.37L34.68 21.46L34.68 21.13L36.74 19.15L35.75 16.12L36.08 16.03L38.46 17.35Z M11.6 27.45L12.17 26.22L10.28 23.76L13.49 24.08L15.05 21.62L15.38 21.62L15.46 21.87L15.87 24.66L18.83 25.48L18.66 25.89L16.12 27.12L16.2 30.25L15.87 30.25L13.98 28.19L10.86 29.18Z M35.18 41.75L35.26 42.65L21.04 42.65L20.31 42.08L20.39 41.09L21.29 38.87L23.43 36.24L26.3 34.52L29.42 33.86L31.23 33.94L33.45 34.52L35.34 35.5L36.41 36.41L35.26 39.04Z M47.25 35.67L48.9 37.56L49.72 40.11L49.47 42.82L48.24 45.12L46.51 46.6L43.88 47.5L41.34 47.34L38.79 46.02L37.31 44.3L36.41 41.58L36.74 38.63L37.97 36.49L39.78 35.01L42.49 34.19L44.95 34.44Z M24.99 27.62L25.48 25.73L26.71 24.25L28.44 23.35L30.49 23.18L32.55 23.92L33.86 25.15L34.77 27.21L34.77 29.01L34.11 30.74L32.71 32.22L30.74 33.04L29.01 33.04L27.12 32.3L25.89 31.15L25.07 29.51Z M49.39 23.84L47.58 26.22L48.9 29.1L48.49 29.18L45.77 28.19L43.8 30.25L43.47 30.25L43.56 27.04L40.85 25.65L41.26 25.32L43.88 24.66L44.38 21.62L44.79 21.7L46.27 24.08L48.98 23.67Z M30.0 19.32L29.67 19.24L27.62 20.72L27.12 20.8L27.86 17.76L25.48 15.79L25.97 15.46L28.6 15.38L29.75 12.5L30.08 12.58L31.15 15.38L33.78 15.46L34.27 15.7L31.89 17.68L32.63 20.39L32.55 20.8Z M41.09 40.35L40.35 39.69L39.61 39.69L39.12 40.11L39.04 41.01L41.67 43.72L42.57 43.8L46.92 39.53L47.09 38.54L46.43 37.89L45.53 38.05L42.24 41.42Z" fill="white" />
                        </svg>
                    </span>
                    <div className='flex flex-col justify-start items-start'>
                        <p className='font-bold text-[40px] leading-none font-DMSans text-[#0189CF]'>
                            5y+
                        </p>
                        <p className='text-[13px] font-medium font-DMSans text-[#000000] mt-1'>
                            EXPERIENCE
                        </p>
                    </div>
                </div>

                {/* 2000+ Happy Clients */}
                <div className='flex items-center justify-center gap-3'>
                    <span className='shrink-0'>
                        <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="60" height="60" rx="30" fill="#0189CF" />
                            <path d="M30.1719 14C21.3495 14 14.1719 21.1776 14.1719 30C14.1719 38.8224 21.3495 46 30.1719 46C38.9943 46 46.1719 38.8224 46.1719 30C46.1719 21.1776 38.9943 14 30.1719 14ZM30.1719 42.8C23.1143 42.8 17.3719 37.0576 17.3719 30C17.3719 22.9424 23.1143 17.2 30.1719 17.2C37.2295 17.2 42.9719 22.9424 42.9719 30C42.9719 37.0576 37.2295 42.8 30.1719 42.8Z" fill="white" />
                            <path d="M24.5719 30C25.8974 30 26.9719 28.9255 26.9719 27.6C26.9719 26.2745 25.8974 25.2 24.5719 25.2C23.2464 25.2 22.1719 26.2745 22.1719 27.6C22.1719 28.9255 23.2464 30 24.5719 30Z" fill="white" />
                            <path d="M35.7599 29.9776C37.0792 29.9776 38.1487 28.9081 38.1487 27.5888C38.1487 26.2695 37.0792 25.2 35.7599 25.2C34.4406 25.2 33.3711 26.2695 33.3711 27.5888C33.3711 28.9081 34.4406 29.9776 35.7599 29.9776Z" fill="white" />
                            <path d="M30.1719 39.6C36.5719 39.6 38.1719 33.2 38.1719 33.2H22.1719C22.1719 33.2 23.7719 39.6 30.1719 39.6Z" fill="white" />
                        </svg>
                    </span>
                    <div className='flex flex-col justify-start items-start'>
                        <p className='font-bold text-[40px] leading-none font-DMSans text-[#0189CF]'>
                            2000+
                        </p>
                        <p className='text-[13px] font-medium font-DMSans text-[#000000] mt-1'>
                            Happy Clients
                        </p>
                    </div>
                </div>

                {/* 99% Project Done */}
                <div className='flex items-center justify-center gap-3'>
                    <span className='shrink-0'>
                        <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="60" height="60" rx="30" fill="#0189CF" />
                            <path d="M16.4576 42.9293H43.8862C45.1433 42.9293 46.1719 43.9578 46.1719 45.215C46.1719 46.4721 45.1433 47.5007 43.8862 47.5007H16.4576C15.2004 47.5007 14.1719 46.4721 14.1719 45.215C14.1719 43.9578 15.2004 42.9293 16.4576 42.9293ZM27.909 33.5578C27.0495 34.4062 25.8892 34.8801 24.6814 34.8758C23.4737 34.8715 22.3168 34.3895 21.4633 33.535L16.4576 28.5293C15.2004 27.2721 15.2233 25.2378 16.5262 24.0264C17.7604 22.8378 19.7262 22.8836 20.9147 24.0721L24.6862 27.8436L39.3833 13.1464C40.6176 11.9121 42.6062 11.9121 43.8404 13.1464L43.9319 13.2378C45.1662 14.4721 45.1662 16.4836 43.909 17.7178L27.909 33.5578Z" fill="white" />
                        </svg>
                    </span>
                    <div className='flex flex-col justify-start items-start'>
                        <p className='font-bold text-[40px] leading-none font-DMSans text-[#0189CF]'>
                            99%
                        </p>
                        <p className='text-[13px] font-medium font-DMSans text-[#000000] mt-1'>
                            Project Done
                        </p>
                    </div>
                </div>

                {/* 20+ Team Experts */}
                <div className='flex items-center justify-center gap-3'>
                    <span className='shrink-0'>
                        <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="60" height="60" rx="30" fill="#0189CF" />
                            <path d="M30.1719 11.7793C26.5719 11.7793 24.1719 14.1793 24.1719 16.5793C24.1719 20.1793 25.3719 22.5793 26.5719 23.7793V24.9793H33.7719V23.7793C34.9719 22.5793 36.1719 20.1793 36.1719 16.5793C36.1719 14.1793 33.7719 11.7793 30.1719 11.7793ZM25.4019 16.679L30.1719 18.2668L34.9419 16.679L32.0019 24.0268L30.7419 23.5318L32.6019 18.8818L30.1719 19.6918L27.7419 18.8818L29.6019 23.5318L28.3419 24.0268L25.4019 16.679ZM19.1544 22.6093C17.3994 22.8343 15.8094 24.8968 15.8094 27.5518C15.8094 29.0218 16.3194 30.3193 17.0619 31.2193L17.9544 32.2843L16.5819 32.5393C15.6144 32.7268 14.9094 33.2368 14.3019 34.0693C13.6944 34.9018 13.2294 36.0568 12.9069 37.3993C12.3219 39.8143 12.1869 42.7693 12.1719 45.3793H15.3819L15.5499 47.6293H23.6919L23.8419 45.3793H26.9019C26.9019 42.7393 26.8719 39.7468 26.3394 37.3018C26.0394 35.9593 25.5969 34.8043 24.9819 33.9793C24.3669 33.1543 23.6244 32.6443 22.5369 32.4793L21.1494 32.2618L22.0269 31.1593C22.7394 30.2668 23.2194 28.9843 23.2194 27.5518C23.2194 24.7168 21.4494 22.6168 19.5144 22.6168L19.1544 22.6093ZM40.4244 22.6093C38.6694 22.8343 37.0794 24.8968 37.0794 27.5518C37.0794 29.0218 37.5894 30.3193 38.3319 31.2193L39.2244 32.2843L37.8519 32.5393C36.8844 32.7268 36.1794 33.2368 35.5719 34.0693C34.9644 34.9018 34.4994 36.0568 34.1769 37.3993C33.5919 39.8143 33.4569 42.7693 33.4419 45.3793H36.6519L36.8169 47.6293H44.9619L45.1119 45.3793H48.1719C48.1719 42.7393 48.1419 39.7468 47.6094 37.3018C47.3094 35.9593 46.8669 34.8043 46.2519 33.9793C45.6369 33.1543 44.8944 32.6443 43.8069 32.4793L42.4194 32.2618L43.2969 31.1593C44.0094 30.2668 44.4894 28.9843 44.4894 27.5518C44.4894 24.7168 42.7194 22.6168 40.7844 22.6168L40.4244 22.6093ZM26.5719 26.2543V27.6043H33.7719V26.2543H26.5719ZM27.7719 28.8043V30.1543H32.5719V28.8043H27.7719Z" fill="white" />
                        </svg>
                    </span>
                    <div className='flex flex-col justify-start items-start'>
                        <p className='font-bold text-[40px] leading-none font-DMSans text-[#0189CF]'>
                            20+
                        </p>
                        <p className='text-[13px] font-medium font-DMSans text-[#000000] mt-1'>
                            Team Experts
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-[220px] sm:w-[250px] h-auto mt-12 lg:mt-16 flex justify-center'>
                <img src={google} alt="google" className="w-full h-full object-contain" />
            </div>

            {/* Cards Slider */}
            <div className='w-full max-w-[1440px] px-4 mt-8 lg:mt-10 overflow-hidden'>
                <div
                    className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style={{
                        transform: `translateX(-${active * step}px)`,
                    }}
                >
                    {cardList.map((_, index) => (
                        <div
                            key={index}
                            ref={index === 0 ? cardRef : null}
                            className='flex flex-col bg-white w-[330px] h-[345px] shrink-0 border border-[#E8F3F8] rounded-2xl shadow-lg hover:shadow-md transition-all duration-300 cursor-pointer'
                        >
                            <div className='flex items-start justify-end gap-16 mr-8 mt-5'>
                                <img src={pic} alt="picture" className='w-20 h-20 object-contain' />
                                <GoogleIcon />
                            </div>
                            <div className='flex flex-col items-center justify-center text-[#697587] font-lato text-[15px] gap-1 px-4'>
                                <h1 className='text-[20px] font-bold font-lato text-[#000000]'>Brandon Morata</h1>
                                <StarRating />
                                <div className='mt-5 text-center leading-normal'>
                                    <p>"Consistently excellent service from</p>
                                    <p>Letter Crafts for my second time</p>
                                    <p>using their service. Quick and</p>
                                    <p>transparent process with prompt</p>
                                    <p>responses. Thanks to AK and the</p>
                                    <p>team for their help.”</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Slider Dots */}
            <div className='flex items-center justify-center gap-4 mt-8 md:mt-10'>
                {[0, 1, 2, 3].map((index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setActive(index)}
                        className={`w-2 h-2 rotate-45 cursor-pointer transition-colors duration-300 ${
                            active === index ? 'bg-[#0189CF]' : 'bg-[#BAE6FD]'
                        }`}
                    />
                ))}
            </div>

            <br />
            <br />
            <br />
        </div>
    )
}

export default Thirdpage
