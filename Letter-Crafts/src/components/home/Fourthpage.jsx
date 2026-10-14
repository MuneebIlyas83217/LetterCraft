import React from 'react'
import pic from '../../assets/output.png'
import pic2 from '../../assets/output2.png'
import pic3 from '../../assets/output3.png'

function Fourthpage() {
    return (
        <div >
            <div className='bg-[#0089CF0D] w-full h-full flex flex-col'>

                <div className='flex flex-col items-center justify-center gap-2 px-4 text-center'>
                    <h1 className='text-[24px] sm:text-[30px] md:text-[35px] font-bold font-DMSans text-[#3C3B3B] mt-12 md:mt-20'>SAMPLES OF <span className='text-[#0189CF]'> CERTIFIED TRANSLATIONS</span></h1>

                    <p className='text-center text-[15px] sm:text-[17px] font-DMSans text-[#3C3B3B] max-w-3xl'>Our translation mirrors your source document's format, presented on <br />lettercrafts letterhead with a signed and stamped Certificate of Translation <br />as the coversheet.</p>
                </div>
                {/* secondrow */}
                <div className='flex flex-wrap justify-center items-center w-full gap-8 sm:gap-10 lg:gap-20 mt-8 md:mt-10 px-4 max-w-7xl mx-auto'>
                    <div className='flex flex-col bg-white w-[250px] h-[400px] border border-[#E8F3F8] rounded-2xl shadow-lg hover:shadow-md transition-all duration-300 cursor-pointer'>
                        <div className='flex items-start justify-end'>
                            <img src={pic} alt="picture" className='w-[250px] h-[300px]' />

                        </div>
                        <div className='flex flex-col items-center justify-center mt-5'>
                            <p className='text-center text-[17px] font-DMSans text-[#0189CF] font-medium'>Notarization of Translations</p>
                            <p className='text-center text-[10px] font-DMSans text-[#000000] font-regular'>Starting From: <span className='text-[17px] font-DMSans text-[#000000] font-bold'> S$215.00</span></p>
                        </div>

                    </div>
                    <div className='flex flex-col bg-white w-[250px] h-[400px] border border-[#E8F3F8] rounded-2xl shadow-lg hover:shadow-md transition-all duration-300 cursor-pointer'>
                        <div className='flex items-start justify-end'>
                            <img src={pic2} alt="picture" className='w-[250px] h-[300px]' />

                        </div>
                        <div className='flex flex-col items-center justify-center mt-5'>
                            <p className='text-center text-[17px] font-DMSans text-[#0189CF] font-medium'>Birth Certificate</p>
                            <p className='text-center text-[10px] font-DMSans text-[#000000] font-regular'>Starting From: <span className='text-[17px] font-DMSans text-[#000000] font-bold'> S$38.00</span></p>
                        </div>

                    </div>
                    <div className='flex flex-col bg-white w-[250px] h-[400px] border border-[#E8F3F8] rounded-2xl shadow-lg hover:shadow-md transition-all duration-300 cursor-pointer'>
                        <div className='flex items-start justify-end'>
                            <img src={pic3} alt="picture" className='w-[250px] h-[300px]' />

                        </div>
                        <div className='flex flex-col items-center justify-center mt-5'>
                            <p className='text-center text-[17px] font-DMSans text-[#0189CF] font-medium'>Certificate of Translations</p>
                            <p className='text-center text-[10px] font-DMSans text-[#000000] font-regular'> <span className='text-[17px] font-DMSans text-[#000000] font-bold'> Free of Cost</span></p>
                        </div>

                    </div>
                </div>
                <div className='flex items-center justify-center mt-12 md:mt-20'>
                    <button className='px-8 py-3 rounded-xl border bg-[#0089CF] text-white font-DMSans font-medium hover:bg-[#0077B5] transition-colors cursor-pointer'>See More</button>
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}

export default Fourthpage
