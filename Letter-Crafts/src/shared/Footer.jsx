import React from 'react'
import letter from '../assets/lettercraft2.png'

function Footer() {
    return (
        <div className='w-full flex flex-col bg-black h-auto min-h-[499px]'>
            <div className='flex flex-col sm:flex-row flex-wrap flex-1 items-start justify-center gap-10 sm:gap-12 md:gap-14 lg:gap-20 pt-10 sm:pt-16 lg:pt-20 px-6 sm:px-10 lg:px-8'>

                {/* firts col */}
                <div className='text-[#FFFF] flex flex-col gap-[20px] w-full sm:w-auto'>
                    <img src={letter} alt="letter" className="w-[230px] h-[70px] object-contain" />
                    <p className='text-[15px] sm:text-[16px] font-regular font-DMSans text-[#FFFFFF]'>
                        We are a professional Translation <br /> company which offers exceptional <br /> language services
                    </p>
                    <br />
                    <div className='flex gap-5'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12C24 5.376 18.624 0 12 0C5.376 0 0 5.376 0 12C0 17.808 4.128 22.644 9.6 23.76V15.6H7.2V12H9.6V9C9.6 6.684 11.484 4.8 13.8 4.8H16.8V8.4H14.4C13.74 8.4 13.2 8.94 13.2 9.6V12H16.8V15.6H13.2V23.94C19.26 23.34 24 18.228 24 12Z" fill="white" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1.719C0 0.7695 0.789 0 1.7625 0H22.2375C23.211 0 24 0.7695 24 1.719V22.281C24 23.2305 23.211 24 22.2375 24H1.7625C0.789 24 0 23.2305 0 22.281V1.719ZM7.4145 20.091V9.2535H3.813V20.091H7.4145ZM5.6145 7.773C6.87 7.773 7.6515 6.942 7.6515 5.901C7.629 4.8375 6.8715 4.029 5.6385 4.029C4.4055 4.029 3.6 4.839 3.6 5.901C3.6 6.942 4.3815 7.773 5.5905 7.773H5.6145ZM12.9765 20.091V14.0385C12.9765 13.7145 13.0005 13.3905 13.0965 13.1595C13.356 12.513 13.9485 11.8425 14.9445 11.8425C16.248 11.8425 16.7685 12.8355 16.7685 14.2935V20.091H20.37V13.875C20.37 10.545 18.594 8.997 16.224 8.997C14.313 8.997 13.4565 10.047 12.9765 10.7865V10.824H12.9525C12.9605 10.8115 12.9685 10.799 12.9765 10.7865V9.2535H9.3765C9.4215 10.2705 9.3765 20.091 9.3765 20.091H12.9765Z" fill="white" />
                        </svg>
                    </div>
                </div>

                {/* Second col */}
                <div className='text-[#FFFF] flex flex-col gap-[20px] w-full sm:w-auto'>
                    <h1 className='text-[20px] sm:text-[22px] lg:text-[24px] font-bold font-DMSans text-[#FFFFFF]'>Services</h1>
                    <ul className='flex flex-col gap-4 sm:gap-5 marker:text-[#0189CF] list-disc pl-5'>
                        <li className='text-[15px] sm:text-[16px] font-regular font-lato text-[#FFFFFF]'>Business and Legal Translation</li>
                        <li className='text-[15px] sm:text-[16px] font-regular font-lato text-[#FFFFFF]'>Technical Translation</li>
                        <li className='text-[15px] sm:text-[16px] font-regular font-lato text-[#FFFFFF]'>Personal Translation</li>
                        <li className='text-[15px] sm:text-[16px] font-regular font-lato text-[#FFFFFF]'>Notarization</li>
                        <li className='text-[15px] sm:text-[16px] font-regular font-lato text-[#FFFFFF]'>Transcription</li>
                    </ul>
                </div>

                {/* third col */}
                <div className='text-[#FFFF] flex flex-col gap-[20px] w-full sm:w-auto'>
                    <h1 className='text-[20px] sm:text-[22px] lg:text-[24px] font-bold font-DMSans text-[#FFFFFF]'>Customer Care</h1>
                    <ul className='flex flex-col gap-4 sm:gap-5 marker:text-[#0189CF] list-disc pl-5'>
                        <li className='text-[15px] sm:text-[16px] font-regular font-lato text-[#FFFFFF]'>FAQs</li>
                        <li className='text-[15px] sm:text-[16px] font-regular font-lato text-[#FFFFFF]'>Case Studies</li>
                        <li className='text-[15px] sm:text-[16px] font-regular font-lato text-[#FFFFFF]'>Samples</li>
                        <li className='text-[15px] sm:text-[16px] font-regular font-lato text-[#FFFFFF]'>Privacy Policy</li>
                        <li className='text-[15px] sm:text-[16px] font-regular font-lato text-[#FFFFFF]'>Terms & Conditions</li>
                    </ul>
                </div>

                {/* fourth col */}
                <div className='flex flex-col justify-start lg:justify-between gap-6 sm:gap-8 lg:gap-[75px] w-full sm:w-auto max-w-sm'>
                    <h1 className='flex items-start gap-4 text-[16px] sm:text-[18px] lg:text-[20px] font-semibold font-lato text-[#FFFFFF]'>
                        <span className='w-[24px] h-[24px] flex-shrink-0'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className='text-[#0089CF]' xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.248 15.84C17.8747 15.4667 17.4613 15.28 17.008 15.28C16.5547 15.28 16.1147 15.4667 15.688 15.84L13.928 17.68C13.768 17.84 13.608 17.8667 13.448 17.76L12.248 17.12C10.7013 16.16 9.23467 14.8267 7.848 13.12C7.10133 12.2134 6.568 11.36 6.248 10.56C6.19467 10.3467 6.22133 10.1867 6.328 10.08L8.088 8.32004C8.51467 7.89337 8.728 7.45337 8.728 7.00004C8.728 6.54671 8.51467 6.1067 8.088 5.68004L5.288 2.88004C4.86133 2.5067 4.42133 2.32004 3.968 2.32004C3.51467 2.32004 3.10133 2.5067 2.728 2.88004L0.968 4.64004C0.381333 5.17337 0.0613333 5.84004 0.008 6.64004C-0.0453333 7.65337 0.168 8.8267 0.648 10.16C1.448 12.3467 2.728 14.48 4.488 16.56C6.728 19.1734 9.368 21.2267 12.408 22.72C13.9547 23.52 15.3947 23.9467 16.728 24C17.9013 24.0534 18.808 23.7067 19.448 22.96L21.128 21.28C21.5013 20.9067 21.688 20.4934 21.688 20.04C21.688 19.5867 21.5013 19.1467 21.128 18.72L18.248 15.84ZM17.288 11.92L19.128 11.6C18.8613 9.89337 18.088 8.40004 16.808 7.12004C15.528 5.84004 13.9813 5.06671 12.168 4.80004L11.848 6.64004C13.288 6.85337 14.5013 7.45337 15.488 8.44004C16.4747 9.4267 17.0747 10.5867 17.288 11.92ZM20.168 3.92004C18.0347 1.73337 15.448 0.426704 12.408 3.62396e-05L12.168 1.84004C14.7813 2.21337 17.0213 3.33337 18.888 5.20004C20.648 6.96004 21.7413 9.09337 22.168 11.6L24.008 11.28C23.528 8.40004 22.248 5.9467 20.168 3.92004Z" fill="#0089CF" />
                            </svg>
                        </span>
                        <span>+65 6711 0135</span>
                    </h1>
                    <h1 className='flex items-start gap-4 text-[16px] sm:text-[18px] lg:text-[20px] font-semibold font-lato text-[#FFFFFF]'>
                        <span className='w-[24px] h-[24px] flex-shrink-0'>
                            <svg width="24" height="24" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.84 18.8799C22.3733 18.8799 22.8533 18.6932 23.28 18.3199L16.48 11.5199L14.72 12.7199C14.4 12.9332 13.9867 13.1599 13.48 13.3999C12.9733 13.6399 12.48 13.7599 12 13.7599C11.52 13.7599 11.0267 13.6399 10.52 13.3999C10.0133 13.1599 9.6 12.9332 9.28 12.7199L7.52 11.5199L0.72 18.3199C1.14667 18.6932 1.62667 18.8799 2.16 18.8799H21.84ZM1.36 7.27988C0.826667 6.90655 0.373333 6.50655 0 6.07988V16.3999L6 10.4799L1.36 7.27988ZM22.64 7.27988C20.8267 8.50655 19.28 9.57322 18 10.4799L24 16.3999V6.07988C23.6267 6.50655 23.1733 6.90655 22.64 7.27988ZM21.84 -0.000116348H2.16C1.46667 -0.000116348 0.933333 0.239883 0.56 0.719883C0.186667 1.19988 0 1.78655 0 2.47988C0 3.01322 0.24 3.61322 0.72 4.27988C1.2 4.94655 1.73333 5.46655 2.32 5.83988L10.56 11.5199C10.8267 11.6799 11.08 11.7999 11.32 11.8799C11.56 11.9599 11.7867 11.9999 12 11.9999C12.2133 11.9999 12.44 11.9599 12.68 11.8799C12.92 11.7999 13.1733 11.6799 13.44 11.5199L14.16 11.1199L21.68 5.83988C22.3733 5.35988 22.9333 4.79988 23.36 4.15988C23.7867 3.51988 24 2.87988 24 2.23988C24 1.59988 23.7867 1.06655 23.36 0.639883C22.9333 0.213217 22.4267 -0.000116348 21.84 -0.000116348Z" fill="#0089CF" />
                            </svg>
                        </span>
                        <span>Info@lettercraft.org</span>
                    </h1>
                    <h1 className='flex items-start gap-4 text-[16px] sm:text-[18px] lg:text-[20px] font-semibold font-DMSans text-[#FFFFFF]'>
                        <span className='w-[24px] h-[24px] flex-shrink-0'>
                            <svg width="24" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.12 0C7.46667 0 5.94667 0.413334 4.56 1.24C3.17333 2.06667 2.06667 3.17333 1.24 4.56C0.413333 5.94667 0 7.46667 0 9.12C0 11.1467 0.613333 12.9867 1.84 14.64L8.64 23.76C8.8 23.92 8.98667 24 9.2 24C9.41333 24 9.57333 23.8933 9.68 23.68L16.56 14.4C17.68 12.8533 18.24 11.0933 18.24 9.12C18.24 7.46667 17.8267 5.94667 17 4.56C16.1733 3.17333 15.0667 2.06667 13.68 1.24C12.2933 0.413334 10.7733 0 9.12 0ZM9.12 14.08C7.78667 14.08 6.62667 13.6 5.64 12.64C4.65333 11.68 4.16 10.52 4.16 9.16C4.16 7.8 4.65333 6.64 5.64 5.68C6.62667 4.72 7.78667 4.24 9.12 4.24C10.4533 4.24 11.6133 4.72 12.6 5.68C13.5867 6.64 14.08 7.8 14.08 9.16C14.08 10.52 13.5867 11.68 12.6 12.64C11.6133 13.6 10.4533 14.08 9.12 14.08Z" fill="#0089CF" />
                            </svg>
                        </span>
                        <span>Servcorp, Suntec Tower Three,<br /> #42-01, 8 Temasek Boulevard <br /> Singapore 038988</span>
                    </h1>
                </div>

            </div>

            <div className='flex flex-col min-h-20 py-6 items-center justify-start gap-5 px-4'>
                <div className="w-[90%] sm:w-[85%] lg:w-[73%] h-px bg-[#FFFFFF]"></div>
                <p className='text-[#FFFFFF] font-regular font-lato text-[13px] sm:text-[15px] md:text-[16px] text-center'>© 2023 Designed by Techconsolution • All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
