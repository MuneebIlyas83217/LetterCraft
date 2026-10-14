import React from 'react'
import pic from '../../assets/pic3.png'
import pic1 from '../../assets/1.png'
import pic2 from '../../assets/2.png'
import pic3 from '../../assets/3.png'
import pic4 from '../../assets/4.png'
import pic5 from '../../assets/5.png'
import pic6 from '../../assets/6.png'
import pic7 from '../../assets/7.png'
import pic8 from '../../assets/8.png'

const cardData = [
    { img: pic, title: <>Chinese <br /> Language</> },
    { img: pic1, title: <>Malay <br /> Language</> },
    { img: pic2, title: <>Indonesian <br /> Language</> },
    { img: pic3, title: <>Personal <br /> Documents</> },
    { img: pic4, title: <>Business <br /> Documents</> },
    { img: pic5, title: <>Transcription <br /> Services</> },
    { img: pic6, title: <>Medical <br /> Documents</> },
    { img: pic7, title: <>Legal <br /> Documents</> },
    { img: pic8, title: <>IT & <br /> Technical</> },
]

function Card() {
    return (
        <div>
            <div className='grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-5 mt-5 sm:mt-10'>
                {cardData.map((item, index) => (
                    <div
                        key={index}
                        className='flex flex-col justify-center items-center bg-white w-[88px] h-[82px] sm:w-[96px] sm:h-[88px] md:w-[100px] md:h-[90px] border border-[#E8F3F8] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer'
                    >
                        <img src={item.img} alt="picture" className='w-7 h-7 sm:w-9 sm:h-9 object-contain mb-1 sm:mb-2' />
                        <p className='text-[10.5px] sm:text-[12px] font-semibold font-lato text-[#3C3B3B] text-center leading-tight sm:leading-snug'>
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card
