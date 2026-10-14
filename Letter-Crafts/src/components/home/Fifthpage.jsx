import React, { useState } from 'react'

import nus from '../../assets/nus.png'
import philips from '../../assets/philips.png'
import fairprice from '../../assets/fairprice.png'
import deloitte from '../../assets/deloitte.png'
import peoplesAssociation from '../../assets/peoples-association.png'

const categoryList = [

    'Govt & NGOs',
    'Banking finance',
    'Life Sciences',
    'IT & Telecom',
    'FMCG',
    'Media & Entertainment',
]

const brandData = [
    { id: 1, name: 'NUS', img: nus, categories: [ 'Govt & NGOs', 'Life Sciences', 'IT & Telecom'] },
    { id: 2, name: 'Philips', img: philips, categories: [ 'Life Sciences', 'IT & Telecom', 'FMCG'] },
    { id: 3, name: 'FairPrice', img: fairprice, categories: [ 'FMCG', 'Govt & NGOs', 'Life Sciences'] },
    { id: 4, name: 'Deloitte', img: deloitte, categories: [ 'Banking finance', 'IT & Telecom', 'Govt & NGOs'] },
    { id: 5, name: "People's Association", img: peoplesAssociation, categories: [ 'Govt & NGOs', 'Media & Entertainment'] },
    { id: 6, name: 'FairPrice Retail', img: fairprice, categories: [ 'FMCG', 'Banking finance'] },
    { id: 7, name: 'Philips Healthcare', img: philips, categories: [ 'Life Sciences', 'IT & Telecom', 'Media & Entertainment'] },
    { id: 8, name: 'NUS Research', img: nus, categories: [ 'Govt & NGOs', 'Life Sciences', 'Media & Entertainment'] },
    { id: 9, name: 'Deloitte Financial', img: deloitte, categories: [ 'Banking finance', 'IT & Telecom'] },
    { id: 10, name: 'FairPrice Group', img: fairprice, categories: [ 'FMCG', 'Banking finance', 'Govt & NGOs'] },
    { id: 11, name: "PA Community", img: peoplesAssociation, categories: [ 'Govt & NGOs', 'Media & Entertainment'] },
    { id: 12, name: 'Philips Electronics', img: philips, categories: [ 'IT & Telecom', 'FMCG', 'Media & Entertainment'] },
]

function Fifthpage() {
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredBrands = activeCategory === 'All'
        ? brandData
        : brandData.filter((item) => item.categories.includes(activeCategory))

    return (
        <div>
            <div className='w-full h-full flex flex-col'>
                <div className='flex flex-col items-center justify-center gap-2 px-4 text-center'>
                    <h1 className='text-[24px] sm:text-[30px] md:text-[35px] font-semibold font-DMSans text-[#3C3B3B] mt-12 md:mt-20'>
                        SUCCESS<span className='text-[#0189CF]'> STORIES</span>
                    </h1>

                    <p className='text-center text-[15px] sm:text-[17px] md:text-[19px] font-DMSans text-[#3C3B3B] max-w-3xl'>
                        Join satisfied businesses from diverse industries who have engaged with <br /> our translators for their professional translation needs. Experience the <br /> best translation service available!
                    </p>
                </div>

                {/* Filterable category elements */}
                <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 text-[14px] sm:text-[16px] font-semibold font-lato text-[#3C3B3B] mt-10 md:mt-16 px-4 max-w-6xl mx-auto'>
                    {categoryList.map((cat, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setActiveCategory(cat)}
                            className={`pb-1 transition-all duration-300 cursor-pointer ${
                                activeCategory === cat
                                    ? 'text-[#0189CF] border-b-2 border-[#0189CF] font-bold'
                                    : 'hover:text-[#0189CF] text-[#3C3B3B]'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Filtered brand logo cards */}
                <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-14 xl:gap-20 mt-8 md:mt-10 px-4 max-w-7xl mx-auto min-h-[220px] transition-all duration-300'>
                    {filteredBrands.map((item) => (
                        <div
                            key={item.id}
                            className='flex flex-col justify-center items-center bg-white w-[140px] min-[400px]:w-[160px] sm:w-[180px] md:w-[200px] h-[70px] sm:h-[80px] md:h-[90px] border border-[#E8F3F8] rounded-lg shadow-xl hover:shadow-md transition-all duration-300 cursor-pointer p-2'
                        >
                            <img src={item.img} alt={item.name} className='w-full h-full object-contain' />
                        </div>
                    ))}
                </div>

                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default Fifthpage
