import React, { useState } from 'react'
import GetUsers from '../../pages/GetUsers'

function SixthPage() {
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)

    return (
        <div className='flex flex-col w-full h-full mb-16 md:mb-32 mt-12 md:mt-20'>
            <div className='flex flex-col items-center justify-center gap-2 px-4 text-center'>
                <h1 className='text-[24px] sm:text-[30px] md:text-[35px] font-semibold font-DMSans text-[#3C3B3B]'>
                    FREQUENTLY ASKED <span className='text-[#0189CF]'> QUESTIONS</span>
                </h1>
            </div>

            <div className='flex flex-col lg:flex-row w-full justify-center items-center lg:items-start gap-5 lg:gap-10 mt-8 md:mt-10 px-4 max-w-7xl mx-auto'>
                {/* Left Column */}
                <div className='flex flex-col gap-5 w-full max-w-[566px]'>
                    {/* Item 1 */}
                    <div
                        className='flex flex-col bg-white w-full max-w-[566px] h-full border border-[#E8F3F8] rounded-lg shadow-xl hover:shadow-md transition-all duration-300 cursor-pointer'
                        onClick={() => setOpen(!open)}
                    >
                        <div className='flex justify-between p-3 items-center gap-3'>
                            <p className='font-DMSans text-[#000000] text-[15px] sm:text-[16px] font-semibold'>
                                Is Notarization required for ICA submissions?
                            </p>
                            <button
                                type="button"
                                className={`w-[36px] h-[35px] ${!open ? 'bg-[#F7F7FF]' : 'bg-[#0189CF]'} rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 cursor-pointer`}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setOpen(!open)
                                }}
                            >
                                {open ? (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 8H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.5V12.5M3.5 8H12.5" stroke="#6F6C90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {open && (
                            <p className='text-start ml-3 mr-3 font-DMSans text-[#3C3B3B] text-[13px] sm:text-[14px] leading-relaxed mb-3'>
                                Yes, Only non-english documents require translation and <br /> notarization by a Singaporean or document-issuing <br /> country's notary public. For full guidelines, you may please <br /> refer to page 2 of the document provided by ICA.
                            </p>
                        )}
                    </div>

                    {/* Item 2 */}
                    <div
                        className='flex flex-col bg-white w-full max-w-[566px] h-full border border-[#E8F3F8] rounded-lg shadow-xl hover:shadow-md transition-all duration-300 cursor-pointer'
                        onClick={() => setOpen1(!open1)}
                    >
                        <div className='flex justify-between p-3 items-center gap-3'>
                            <p className='font-DMSans text-[#000000] text-[15px] sm:text-[16px] font-semibold'>
                                Is Notarization required for ICA submissions?
                            </p>
                            <button
                                type="button"
                                className={`w-[36px] h-[35px] ${!open1 ? 'bg-[#F7F7FF]' : 'bg-[#0189CF]'} rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 cursor-pointer`
                                } onClick={(e) => {
                                    e.stopPropagation()
                                    setOpen1(!open1)
                                }}
                            >
                                {open1 ? (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 8H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.5V12.5M3.5 8H12.5" stroke="#6F6C90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {open1 && (
                            <p className='text-start ml-3 mr-3 font-DMSans text-[#3C3B3B] text-[13px] sm:text-[14px] leading-relaxed mb-3'>
                                Yes, Only non-english documents require translation and <br /> notarization by a Singaporean or document-issuing <br /> country's notary public. For full guidelines, you may please <br /> refer to page 2 of the document provided by ICA.
                            </p>
                        )}
                    </div>

                    {/* Item 3 */}
                    <div
                        className='flex flex-col bg-white w-full max-w-[566px] h-full border border-[#E8F3F8] rounded-lg shadow-xl hover:shadow-md transition-all duration-300 cursor-pointer'
                        onClick={() => setOpen2(!open2)}
                    >
                        <div className='flex justify-between p-3 items-center gap-3'>
                            <p className='font-DMSans text-[#000000] text-[15px] sm:text-[16px] font-semibold'>
                                Is Notarization required for ICA submissions?
                            </p>
                            <button
                                type="button"
                                className={`w-[36px] h-[35px] ${!open2 ? 'bg-[#F7F7FF]' : 'bg-[#0189CF]'} rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 cursor-pointer`}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setOpen2(!open2)
                                }}
                            >
                                {open2 ? (
                                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 8H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.5V12.5M3.5 8H12.5" stroke="#6F6C90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {open2 && (
                            <p className='text-start ml-3 mr-3 font-DMSans text-[#3C3B3B] text-[13px] sm:text-[14px] leading-relaxed mb-3'>
                                Yes, Only non-english documents require translation and <br /> notarization by a Singaporean or document-issuing <br /> country's notary public. For full guidelines, you may please <br /> refer to page 2 of the document provided by ICA.
                            </p>
                        )}
                    </div>
                </div>

                {/* Right Column */}
                <div className='flex flex-col gap-5 w-full max-w-[566px]'>
                    {/* Item 4 */}
                    <div
                        className='flex flex-col bg-white w-full max-w-[566px] h-full border border-[#E8F3F8] rounded-lg shadow-xl hover:shadow-md transition-all duration-300 cursor-pointer'
                        onClick={() => setOpen3(!open3)}
                    >
                        <div className='flex justify-between p-3 items-center gap-3'>
                            <p className='font-DMSans text-[#000000] text-[15px] sm:text-[16px] font-semibold'>
                                Is Notarization required for ICA submissions?
                            </p>
                            <button
                                type="button"
                                className={`w-[36px] h-[35px] ${!open3 ? 'bg-[#F7F7FF]' : 'bg-[#0189CF]'} rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 cursor-pointer`
                                } onClick={(e) => {
                                    e.stopPropagation()
                                    setOpen3(!open3)
                                }}
                            >
                                {open3 ? (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 8H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.5V12.5M3.5 8H12.5" stroke="#6F6C90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {open3 && (
                            <p className='text-start ml-3 mr-3 font-DMSans text-[#3C3B3B] text-[13px] sm:text-[14px] leading-relaxed mb-3'>
                                Yes, Only non-english documents require translation and <br /> notarization by a Singaporean or document-issuing <br /> country's notary public. For full guidelines, you may please <br /> refer to page 2 of the document provided by ICA.
                            </p>
                        )}
                    </div>

                    {/* Item 5 */}
                    <div
                        className='flex flex-col bg-white w-full max-w-[566px] h-full border border-[#E8F3F8] rounded-lg shadow-xl hover:shadow-md transition-all duration-300 cursor-pointer'
                        onClick={() => setOpen4(!open4)}
                    >
                        <div className='flex justify-between p-3 items-center gap-3'>
                            <p className='font-DMSans text-[#000000] text-[15px] sm:text-[16px] font-semibold'>
                                Is Notarization required for ICA submissions?
                            </p>
                            <button
                                type="button"
                                className={`w-[36px] h-[35px] ${!open4 ? 'bg-[#F7F7FF]' : 'bg-[#0189CF]'} rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 cursor-pointer`
                                } onClick={(e) => {
                                    e.stopPropagation()
                                    setOpen4(!open4)
                                }}
                            >
                                {open4 ? (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 8H12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.5V12.5M3.5 8H12.5" stroke="#6F6C90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {open4 && (
                            <p className='text-start ml-3 mr-3 font-DMSans text-[#3C3B3B] text-[13px] sm:text-[14px] leading-relaxed mb-3'>
                                Yes, Only non-english documents require translation and <br /> notarization by a Singaporean or document-issuing <br /> country's notary public. For full guidelines, you may please <br /> refer to page 2 of the document provided by ICA.
                            </p>
                        )}
                    </div>
                </div>

            </div>
            <GetUsers/>

        </div>
    )
}

export default SixthPage
