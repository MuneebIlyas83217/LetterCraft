import React from 'react'

function SecondPage() {
    return (
        <div>
            <div className='bg-[#0089CF0D] w-full h-full flex flex-col'>

                <div className='flex flex-col items-center justify-center px-4'>
                    <h1 className='text-[26px] sm:text-[32px] lg:text-[35px] font-bold font-DMSans text-[#3C3B3B] mt-10 lg:mt-20 text-center'>
                        TRANSLATION <span className='text-[#0189CF]'> PROCESS</span>
                    </h1>

                    <p className='text-center text-[15px] lg:text-[17px] font-DMSans text-[#3C3B3B] mt-2'>
                        We strive for a smooth experience for our clients every <br /> single time.
                    </p>
                </div>

                {/* Steps Container */}
                <div className='flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-center items-center sm:items-start w-full gap-10 sm:gap-12 lg:gap-20 xl:gap-40 mt-10 lg:mt-20 px-6 lg:px-4'>
                    {/* Step 1 */}
                    <div className='flex flex-col items-start gap-2 w-full max-w-[280px] sm:max-w-none sm:w-[220px] lg:w-auto lg:max-w-none'>
                        <div className='ml-12'>
                            <svg width="100" height="90" viewBox="0 0 124 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M102.106 86.223C98.2313 86.223 95.2604 84.5587 93.1937 81.2299C91.1271 77.896 90.9979 74.4653 92.8063 70.938L100.75 54.8692H85.25C80.9875 54.8692 77.3398 53.3329 74.307 50.2602C71.269 47.1927 69.75 43.5034 69.75 39.1923V15.6769C69.75 11.3658 71.269 7.67646 74.307 4.60901C77.3398 1.53634 80.9875 0 85.25 0H108.5C112.762 0 116.413 1.53634 119.451 4.60901C122.484 7.67646 124 11.3658 124 15.6769V51.1459C124 52.3217 123.902 53.5314 123.706 54.7751C123.514 56.0136 123.096 57.1554 122.45 58.2005L111.406 80.3442C110.502 82.1731 109.21 83.6102 107.531 84.6553C105.852 85.7005 104.044 86.223 102.106 86.223ZM32.3563 86.223C28.4812 86.223 25.5104 84.5587 23.4438 81.2299C21.3771 77.896 21.2479 74.4653 23.0563 70.938L31 54.8692H15.5C11.2375 54.8692 7.58983 53.3329 4.557 50.2602C1.519 47.1927 0 43.5034 0 39.1923V15.6769C0 11.3658 1.519 7.67646 4.557 4.60901C7.58983 1.53634 11.2375 0 15.5 0H38.75C43.0125 0 46.6627 1.53634 49.7007 4.60901C52.7336 7.67646 54.25 11.3658 54.25 15.6769V51.1459C54.25 52.3217 54.1544 53.5314 53.9632 54.7751C53.7669 56.0136 53.3458 57.1554 52.7 58.2005L41.6562 80.3442C40.7521 82.1731 39.4604 83.6102 37.7812 84.6553C36.1021 85.7005 34.2938 86.223 32.3563 86.223Z" fill="#0189CF" fillOpacity="0.25" />
                            </svg>
                        </div>

                        <div className='flex items-center gap-3 -mt-2'>
                            <span className='font-semibold text-[#0189CF] text-[80px] lg:text-[90px] leading-none'>1</span>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='font-semibold font-DMSans text-[18px] lg:text-[20px] text-[#3C3B3B] leading-tight'>
                                    Get A
                                </p>
                                <p className='font-semibold font-DMSans text-[18px] lg:text-[20px] text-[#3C3B3B] leading-tight'>
                                    Quote
                                </p>
                            </div>
                        </div>

                        <div className='w-full lg:w-[120%] h-0.5 bg-[#0189CF40]'></div>

                        <div className='text-[#FFFF] flex flex-col gap-[20px]'>
                            <ul className='flex flex-col gap-1 marker:text-[#697587] list-disc pl-4 sm:pl-0'>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>Get an online quote</li>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>We accept all file formats</li>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>Share documents online</li>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>Make payment online</li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className='flex flex-col items-start gap-2 w-full max-w-[280px] sm:max-w-none sm:w-[220px] lg:w-auto lg:max-w-none'>
                        <div className='ml-12'>
                            <svg width="100" height="90" viewBox="0 0 124 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M49.6 113.15L74.4 88.3501H124V113.15H49.6ZM101.06 38.285L74.71 12.245L83.39 3.565C85.7667 1.18833 88.6869 0 92.1506 0C95.6102 0 98.5283 1.18833 100.905 3.565L109.585 12.245C111.962 14.6217 113.202 17.4902 113.305 20.8506C113.408 24.2069 112.272 27.0734 109.895 29.45L101.06 38.285ZM92.07 47.43L26.35 113.15H0V86.8001L65.72 21.08L92.07 47.43Z" fill="#0189CF" fillOpacity="0.25" />
                            </svg>
                        </div>

                        <div className='flex items-center gap-3 -mt-2'>
                            <span className='font-semibold text-[#0189CF] text-[80px] lg:text-[90px] leading-none'>2</span>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='font-semibold font-DMSans text-[18px] lg:text-[20px] text-[#3C3B3B] leading-tight'>
                                    We Begin
                                </p>
                                <p className='font-semibold font-DMSans text-[18px] lg:text-[20px] text-[#3C3B3B] leading-tight'>
                                    Translation
                                </p>
                            </div>
                        </div>

                        <div className='w-full lg:w-[120%] h-0.5 bg-[#0189CF40]'></div>

                        <div className='text-[#FFFF] flex flex-col gap-[20px]'>
                            <ul className='flex flex-col gap-1 marker:text-[#697587] list-disc pl-4 sm:pl-0'>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>Professional translators start working</li>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>Proof reading and reviews</li>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>Translation drafts shared for your <br />approval.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className='flex flex-col items-start gap-2 w-full max-w-[280px] sm:max-w-none sm:w-[220px] lg:w-auto lg:max-w-none'>
                        <div className='ml-12'>
                            <svg width="100" height="90" viewBox="0 0 124 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4 99.2C8.99 99.2 6.07187 97.9868 3.6456 95.5606C1.2152 93.1302 0 90.21 0 86.8V12.4C0 8.99 1.2152 6.07187 3.6456 3.6456C6.07187 1.2152 8.99 0 12.4 0H111.6C115.01 0 117.93 1.2152 120.361 3.6456C122.787 6.07187 124 8.99 124 12.4V86.8C124 90.21 122.787 93.1302 120.361 95.5606C117.93 97.9868 115.01 99.2 111.6 99.2H12.4ZM62 55.8L111.6 24.8V12.4L62 43.4L12.4 12.4V24.8L62 55.8Z" fill="#0189CF" fillOpacity="0.25" />
                            </svg>
                        </div>

                        <div className='flex items-center gap-3 -mt-2'>
                            <span className='font-semibold text-[#0189CF] text-[80px] lg:text-[90px] leading-none'>3</span>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='font-semibold font-DMSans text-[18px] lg:text-[20px] text-[#3C3B3B] leading-tight'>
                                    Receive
                                </p>
                                <p className='font-semibold font-DMSans text-[18px] lg:text-[20px] text-[#3C3B3B] leading-tight'>
                                    Translation
                                </p>
                            </div>
                        </div>

                        <div className='w-full lg:w-[120%] h-0.5 bg-[#0189CF40]'></div>

                        <div className='text-[#FFFF] flex flex-col gap-[20px]'>
                            <ul className='flex flex-col gap-1 marker:text-[#697587] list-disc pl-4 sm:pl-0'>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>Final version emailed as soft copies</li>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>Preview final versions in the <span className='text-[#0089CF]'>sample section</span></li>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>Hard copies available via SingPost (3-5 days)</li>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>Courier delivery to your doorstep (1 day)</li>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>Express courier service available upon request</li>
                            </ul>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className='flex flex-col items-start gap-2 w-full max-w-[280px] sm:max-w-none sm:w-[220px] lg:w-auto lg:max-w-none'>
                        <div className='ml-12'>
                            <svg width="100" height="100" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M66.4286 139.5C64.5464 139.5 62.9699 138.862 61.6989 137.587C60.4234 136.316 59.7857 134.739 59.7857 132.857C59.7857 130.975 60.4234 129.398 61.6989 128.127C62.9699 126.852 64.5464 126.214 66.4286 126.214H106.286V119.571H93C89.3464 119.571 86.2199 118.272 83.6203 115.672C81.0163 113.068 79.7143 109.939 79.7143 106.286V79.7143C79.7143 76.0607 81.0163 72.9319 83.6203 70.3279C86.2199 67.7284 89.3464 66.4286 93 66.4286H106.286V59.7857C106.286 46.9429 101.746 35.9821 92.6679 26.9036C83.5893 17.825 72.6286 13.2857 59.7857 13.2857C46.9429 13.2857 35.9821 17.825 26.9036 26.9036C17.825 35.9821 13.2857 46.9429 13.2857 59.7857V66.4286H26.5714C30.225 66.4286 33.3516 67.7284 35.9511 70.3279C38.5551 72.9319 39.8571 76.0607 39.8571 79.7143V106.286C39.8571 109.939 38.5551 113.068 35.9511 115.672C33.3516 118.272 30.225 119.571 26.5714 119.571H13.2857C9.63214 119.571 6.50336 118.272 3.89936 115.672C1.29979 113.068 0 109.939 0 106.286V59.7857C0 51.5929 1.57657 43.8694 4.72971 36.6154C7.88729 29.3659 12.1786 23.0286 17.6036 17.6036C23.0286 12.1786 29.3659 7.88729 36.6154 4.72971C43.8694 1.57657 51.5929 0 59.7857 0C67.9786 0 75.702 1.57657 82.956 4.72971C90.2056 7.88729 96.5429 12.1786 101.968 17.6036C107.393 23.0286 111.684 29.3659 114.842 36.6154C117.995 43.8694 119.571 51.5929 119.571 59.7857V126.214C119.571 129.868 118.272 132.997 115.672 135.601C113.068 138.2 109.939 139.5 106.286 139.5H66.4286Z" fill="#0189CF" fillOpacity="0.25" />
                            </svg>
                        </div>

                        <div className='flex items-center gap-3 -mt-2'>
                            <span className='font-semibold text-[#0189CF] text-[80px] lg:text-[90px] leading-none'>4</span>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='font-semibold font-DMSans text-[18px] lg:text-[20px] text-[#3C3B3B] leading-tight'>
                                    Post
                                </p>
                                <p className='font-semibold font-DMSans text-[18px] lg:text-[20px] text-[#3C3B3B] leading-tight'>
                                    Support
                                </p>
                            </div>
                        </div>

                        <div className='w-full lg:w-[120%] h-0.5 bg-[#0189CF40]'></div>

                        <div className='text-[#FFFF] flex flex-col gap-[20px]'>
                            <ul className='flex flex-col gap-1 marker:text-[#697587] list-disc pl-4 sm:pl-0'>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>Full support guaranteed for revisions (If any)</li>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>Translations can be notarized upon request</li>
                                <li className='text-[13px] font-regular font-lato text-[#697587]'>Affidavit signing and Court appearance <br />subject prior confirmation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center mt-12 lg:mt-20 px-4'>
                    <button className='bg-[#0189CF] text-[20px] text-white font-DMSans px-2 rounded-2xl w-[250px] h-[50px] hover:bg-[#0077B5] transition-colors cursor-pointer'>
                        Start Translation Now
                    </button>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />

            </div>
        </div>
    )
}

export default SecondPage
