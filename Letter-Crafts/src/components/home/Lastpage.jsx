import React from 'react'
import pic12 from '../../assets/GET.png'
import pic from '../../assets/clock.png'
import pic1 from '../../assets/badge.png'
import pic2 from '../../assets/star.png'
import { useState } from 'react'
import API from '../../API'
import GetUsers from '../../pages/GetUsers'

function Lastpage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        sourceLanguage: "",
        toLanguage: "",
        deliveryOptions: "",
        message: "",
        urgentReq: false,
        notarization: false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await API.post('/auth/register', form)
            console.log(res.data)
            alert("Form submitted successfully", res.data.message)
            setForm({
                name: "",
                email: "",
                phone: "",
                sourceLanguage: "",
                toLanguage: "",
                deliveryOptions: "",
                message: "",
                urgentReq: false,
                notarization: false
            })
        } catch (error) {
            console.error("Submission error:", error)
            alert("Failed to submit form")
        }
    }
    return (
        <div className='flex flex-col lg:flex-row bg-[linear-gradient(to_bottom,#0189CF0D_50%,white_50%)] w-full h-full mb-5 px-4 max-w-7xl mx-auto gap-8 lg:gap-12 justify-center items-center lg:items-start' >
            <div className='flex-[1] flex flex-col items-center justify-start w-full h-full'>
                <div className='flex h-[320px] sm:h-[420px] w-full max-w-[360px] justify-center'>
                    <img src={pic12} alt="picture" className='w-full h-full object-contain' />


                </div>
                <div className='flex flex-col items-start justify-start mt-5 gap-4 mb-10 lg:mb-20 w-full max-w-[360px]'>
                    <h1 className='text-[26px] sm:text-[30px] md:text-[35px] text-start font-bold font-DMSans text-[#000000]'>WE OFFER <span className='text-[#0189CF]'>CERTIFIED <br /> TRANSLATION</span></h1>

                    <p className='text-start text-[14px] sm:text-[15px] font-lato text-[#3C3B3B]'>Letter Crafts is a trusted translation services <br /> provider in Singapore, delivering accurate and <br /> high-quality translations worldwide. We help <br /> individuals and organizations communicate <br /> effectively by bridging language barriers through <br /> professional translations. </p>
                </div>
            </div>
            <div className='flex-[1] flex flex-col justify-start items-center w-full'>
                <div className='flex justify-center items-start border mt-6 shadow-lg rounded-xl bg-white w-[360px] h-[540px] max-w-full'>

                    <form onSubmit={handleSubmit} className="w-[330px] max-w-full h-[490px] flex flex-col gap-3 mt-8 text-DMSans">
                        <h1 className='text-[25px] text-start font-bold font-DMSans text-[#000000]'>Get a Quote in 30 mins </h1>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="w-full h-[40px] px-2 text-[13px] rounded-md border border-gray-300 outline-none focus:border-[#0189CF]"
                        />


                        <input
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="E- mail"
                            className="w-full h-[40px] px-2 text-[13px] rounded-md border border-gray-300 outline-none focus:border-[#0189CF]"
                        />


                        <input
                            id="phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            type="tel"
                            placeholder="Phone"
                            className="w-full h-[40px] px-2 text-[13px] rounded-md border border-gray-300 outline-none focus:border-[#0189CF]"
                        />

                        <input
                            id="sourceLanguage"
                            name="sourceLanguage"
                            value={form.sourceLanguage}
                            onChange={handleChange}
                            type="text"
                            placeholder="Source Language"
                            className="w-full h-[40px] px-2 text-[13px] rounded-md border border-gray-300 outline-none focus:border-[#0189CF]"
                        />
                        <input
                            id="toLanguage"
                            name="toLanguage"
                            value={form.toLanguage}
                            onChange={handleChange}
                            type="text"
                            placeholder="To Language"
                            className="w-full h-[40px] px-2 text-[13px] rounded-md border border-gray-300 outline-none focus:border-[#0189CF]"
                        />
                        <select
                            id="deliveryOptions"
                            name="deliveryOptions"
                            value={form.deliveryOptions}
                            onChange={handleChange}
                            className="w-full h-[40px] px-2 text-[13px] rounded-md border border-gray-300 outline-none focus:border-[#0189CF]"
                        >
                            <option value="">Delivery Options</option>
                            <option value="Standard Delivery">Standard Delivery</option>
                            <option value="Express Delivery">Express Delivery</option>
                            <option value="Shop Pick-Up">Store Pick-Up</option>
                        </select>

                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-2 text-[13px] py-3 rounded-md border border-gray-300 outline-none resize-none focus:border-[#0189CF]"
                        />
                        <div className='flex justify-start items-center gap-2'>
                            <input type="checkbox" name="urgentReq" id="urgentReq" onChange={handleChange} checked={form.urgentReq} />
                            <p className='text-[13px] text-start font-DMSans text-[#697587]'>Urgent Request</p>
                        </div>

                        <div className='flex justify-start items-center gap-2'>
                            <input type="checkbox" name="notarization" id="notarization" onChange={handleChange} checked={form.notarization} />
                            <p className='text-[13px] text-start font-DMSans text-[#697587]'>Notarization & Authentication Required</p>
                        </div>
                        <button
                            type="submit"
                            className="w-[80px] h-[60px] font-DMSans bg-[#0189CF] text-white rounded-full hover:bg-[#0077B5] transition cursor-pointer"
                        >
                            Submit
                        </button>

                    </form>
                </div>
                <div className='flex flex-wrap justify-between items-center w-full max-w-[360px] gap-2 sm:gap-3 mt-8 sm:mt-10 mb-8'>
                    <div className='flex flex-col justify-start items-center bg-white w-[75px] sm:w-[80px] h-[90px] cursor-pointer'>
                        <svg className='w-[40px] sm:w-[48px] h-[38px] sm:h-[46px] object-contain mb-2' width="48" height="46" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M41.9993 15.731V4.19994C42.001 3.64862 41.8938 3.10239 41.6839 2.5926C41.474 2.08281 41.1654 1.6195 40.776 1.22927C40.3865 0.839033 39.9238 0.529558 39.4145 0.318607C38.9051 0.107656 38.3591 -0.000617305 37.8078 2.64729e-06H26.2832C25.5276 0.00155743 24.803 0.301025 24.2667 0.833428L1.22703 23.8665C0.441239 24.6548 0 25.7225 0 26.8356C0 27.9486 0.441239 29.0163 1.22703 29.8046L12.1956 40.7732C12.9836 41.5591 14.0512 42.0005 15.1642 42.0005C16.2771 42.0005 17.3447 41.5591 18.1327 40.7732L41.1658 17.7476C41.6984 17.2114 41.9979 16.4867 41.9993 15.731ZM32.9994 11.9998C32.4061 11.9998 31.826 11.8239 31.3327 11.4942C30.8394 11.1646 30.4548 10.6961 30.2278 10.1479C30.0007 9.59974 29.9413 8.99655 30.0571 8.41461C30.1728 7.83268 30.4585 7.29814 30.8781 6.87858C31.2977 6.45903 31.8322 6.17332 32.4141 6.05756C32.9961 5.94181 33.5993 6.00122 34.1474 6.22828C34.6956 6.45534 35.1641 6.83985 35.4938 7.33319C35.8234 7.82653 35.9993 8.40654 35.9993 8.99988C35.9993 9.79551 35.6833 10.5586 35.1207 11.1212C34.5581 11.6838 33.795 11.9998 32.9994 11.9998Z" fill="#0189CF" />
                            <path d="M46.4994 4.5C46.1016 4.5 45.7201 4.65803 45.4388 4.93933C45.1575 5.22063 44.9995 5.60216 44.9995 5.99998V17.9407L20.502 42.4391C20.3568 42.577 20.2408 42.7426 20.1606 42.9261C20.0805 43.1095 20.0378 43.3072 20.0353 43.5074C20.0327 43.7076 20.0703 43.9063 20.1457 44.0917C20.2211 44.2772 20.3329 44.4457 20.4745 44.5872C20.6161 44.7288 20.7845 44.8406 20.97 44.916C21.1555 44.9915 21.3541 45.029 21.5543 45.0265C21.7545 45.0239 21.9522 44.9813 22.1357 44.9011C22.3191 44.821 22.4847 44.7049 22.6226 44.5597L47.1847 19.9976C47.446 19.7351 47.6526 19.4233 47.7924 19.0804C47.9323 18.7375 48.0026 18.3702 47.9994 17.9998V5.99998C47.9994 5.60216 47.8414 5.22063 47.5601 4.93933C47.2788 4.65803 46.8973 4.5 46.4994 4.5Z" fill="#0189CF" />
                        </svg>
                        <p className='text-[12px] font-medium font-DMSans text-[#000000] text-center leading-snug'>
                            Competitive <br /> Prices
                        </p>
                    </div>
                    <div className='flex flex-col justify-start items-center bg-white w-[75px] sm:w-[80px] h-[90px] cursor-pointer'>
                        <img src={pic} alt="picture" className='w-[40px] sm:w-[48px] h-[38px] sm:h-[45px] object-contain mb-2' />

                        <p className='text-[12px] font-medium font-DMSans text-[#000000] text-center leading-snug'>
                            Speed
                        </p>
                    </div>
                    <div className='flex flex-col justify-start items-center bg-white w-[75px] sm:w-[80px] h-[90px] cursor-pointer'>
                        <img src={pic1} alt="picture" className='w-[40px] sm:w-[48px] h-[38px] sm:h-[45px] object-contain mb-2' />
                        <p className='text-[12px] font-medium font-DMSans text-[#000000] text-center leading-snug'>
                            High <br /> Quality
                        </p>
                    </div>
                    <div className='flex flex-col justify-start items-center bg-white w-[75px] sm:w-[80px] h-[90px] cursor-pointer'>
                        <img src={pic2} alt="picture" className='w-[40px] sm:w-[48px] h-[38px] sm:h-[45px] object-contain mb-2' />
                        <p className='text-[12px] font-medium font-DMSans text-[#000000] text-center leading-snug'>
                            Customer <br /> Satisfaction
                        </p>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Lastpage
