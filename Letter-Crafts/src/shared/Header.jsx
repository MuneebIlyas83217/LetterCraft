import React, { useState } from 'react'
import letterImg from '../assets/letter.png'
import { Link } from 'react-router-dom'
import Home from '../pages/Home.jsx'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [mobileExpanded, setMobileExpanded] = useState({
        services: false,
        languages: false,
        resources: false,
    })

    const toggleMobile = (key) => {
        setMobileExpanded((prev) => ({
            ...prev,
            [key]: !prev[key],
        }))
    }

    const navDropdowns = {
        services: [
            { name: 'Personal Documents Translation', href: '#' },
            { name: 'Business Documents Translation', href: '#' },
            { name: 'Legal Documents Translation', href: '#' },
            { name: 'Medical Documents Translation', href: '#' },
            { name: 'Transcription Services', href: '#' },
            { name: 'Notary & SAL Authentication', href: '#' },
        ],
        languages: [
            { name: 'Chinese Translation', href: '#' },
            { name: 'Malay Translation', href: '#' },
            { name: 'Indonesian Translation', href: '#' },
            { name: 'Tamil & Hindi Translation', href: '#' },
            { name: 'Japanese & Korean Translation', href: '#' },
            { name: 'European Languages (French, German, etc.)', href: '#' },
            { name: 'View All 80+ Languages', href: '#', isHighlight: true },
        ],
        resources: [
            { name: 'ICA Requirements & Guidelines', href: '#' },
            { name: 'Rates & Instant Pricing Calculator', href: '#' },
            { name: 'Frequently Asked Questions', href: '#' },
            { name: 'Client Reviews & Case Studies', href: '#' },
        ],
    }

    const ChevronIcon = ({ className = '' }) => (
        <span className={`w-[11px] h-[6px] inline-flex items-center justify-center transition-transform duration-300 ${className}`}>
            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.2719 1.18894L5.62672 5.84792C5.57142 5.90322 5.51151 5.94248 5.447 5.96571C5.38248 5.98893 5.31336 6.00036 5.23962 5.99999C5.16589 5.99999 5.09677 5.98838 5.03225 5.96515C4.96774 5.94193 4.90783 5.90285 4.85253 5.84792L0.193548 1.18894C0.064516 1.05991 0 0.898616 0 0.705068C0 0.511519 0.0691243 0.345622 0.207373 0.207373C0.345622 0.0691242 0.506912 0 0.691243 0C0.875575 0 1.03686 0.0691242 1.17511 0.207373L5.23962 4.27188L9.30413 0.207373C9.43317 0.0783405 9.59224 0.0138245 9.78137 0.0138245C9.97049 0.0138245 10.134 0.0829487 10.2719 0.221198C10.4101 0.359446 10.4792 0.520736 10.4792 0.705068C10.4792 0.8894 10.4101 1.05069 10.2719 1.18894Z"
                    fill="currentColor"
                />
            </svg>
        </span>
    )

    return (
        <header className="w-full bg-white relative z-50 shadow-sm border-b border-[#E8F3F8]">
            <div className="flex items-center justify-between w-full h-[80px] lg:h-[111px] px-6 sm:px-10 lg:px-16 xl:px-20">
                {/* Logo */}
                <div className='flex items-center justify-center w-[150px] h-[57px] cursor-pointer hover:opacity-90 transition-opacity'>
                    <img src={letterImg} alt="letter" className="w-full h-full object-contain" />
                </div>

                {/* Desktop Navigation (visible on xl+) */}
                <nav className="hidden xl:flex items-center justify-center gap-6 2xl:gap-8 h-[46px]">
                  
                   <Link to= "/"> <a
                        href="#"
                        className='font-medium font-DMSans text-[18px] 2xl:text-[20px] text-[#697587] hover:text-[#0073ae] transition-colors duration-200'
                    >
                        Home
                    </a></Link>

                    {/* Services Dropdown */}
                    <div className="relative group flex items-center h-full">
                        <button
                            type="button"
                            className='flex items-center justify-center gap-2 font-medium font-DMSans text-[18px] 2xl:text-[20px] text-[#697587] group-hover:text-[#0189CF] transition-colors duration-200 cursor-pointer py-2'
                        >
                            Services
                            <ChevronIcon className="group-hover:rotate-180" />
                        </button>

                        <div className="absolute top-full left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
                            <div className="bg-white rounded-xl shadow-xl border border-[#E8F3F8] py-2 px-1.5">
                                {navDropdowns.services.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className="block px-3.5 py-2.5 rounded-lg text-[15px] font-DMSans font-medium text-[#3C3B3B] hover:text-[#0189CF] hover:bg-[#F0F9FF] transition-all duration-150"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Languages Dropdown */}
                    <div className="relative group flex items-center h-full">
                        <button
                            type="button"
                            className='flex items-center justify-center gap-2 font-medium font-DMSans text-[18px] 2xl:text-[20px] text-[#697587] group-hover:text-[#0189CF] transition-colors duration-200 cursor-pointer py-2'
                        >
                            Languages
                            <ChevronIcon className="group-hover:rotate-180" />
                        </button>

                        <div className="absolute top-full left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
                            <div className="bg-white rounded-xl shadow-xl border border-[#E8F3F8] py-2 px-1.5">
                                {navDropdowns.languages.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className={`block px-3.5 py-2.5 rounded-lg text-[15px] font-DMSans font-medium transition-all duration-150 ${
                                            item.isHighlight
                                                ? 'text-[#0189CF] font-semibold bg-[#E0F2FE]/50 hover:bg-[#BAE6FD]/60'
                                                : 'text-[#3C3B3B] hover:text-[#0189CF] hover:bg-[#F0F9FF]'
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Resources Dropdown */}
                    <div className="relative group flex items-center h-full">
                        <button
                            type="button"
                            className='flex items-center justify-center gap-2 font-medium font-DMSans text-[18px] 2xl:text-[20px] text-[#697587] group-hover:text-[#0189CF] transition-colors duration-200 cursor-pointer py-2'
                        >
                            Resources
                            <ChevronIcon className="group-hover:rotate-180" />
                        </button>

                        <div className="absolute top-full left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
                            <div className="bg-white rounded-xl shadow-xl border border-[#E8F3F8] py-2 px-1.5">
                                {navDropdowns.resources.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className="block px-3.5 py-2.5 rounded-lg text-[15px] font-DMSans font-medium text-[#3C3B3B] hover:text-[#0189CF] hover:bg-[#F0F9FF] transition-all duration-150"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <a
                        href="#"
                        className='font-medium font-DMSans text-[18px] 2xl:text-[20px] text-[#697587] hover:text-[#0189CF] transition-colors duration-200'
                    >
                        About Us
                    </a>
                    <a
                        href="#"
                        className='font-medium font-DMSans text-[18px] 2xl:text-[20px] text-[#697587] hover:text-[#0189CF] transition-colors duration-200'
                    >
                        Contact Us
                    </a>

                    <button className='flex items-center justify-center font-medium font-lato font-semibold text-[13px] px-4 gap-1.5 rounded-3xl text-[#FFFFFF] bg-[#0189CF] hover:bg-[#0073ae] hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 h-[40px]'>
                        <span className='w-[20px] h-[19px]'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.248 15.84C17.8747 15.4667 17.4613 15.28 17.008 15.28C16.5547 15.28 16.1147 15.4667 15.688 15.84L13.928 17.68C13.768 17.84 13.608 17.8667 13.448 17.76L12.248 17.12C10.7013 16.16 9.23467 14.8267 7.848 13.12C7.10133 12.2134 6.568 11.36 6.248 10.56C6.19467 10.3467 6.22133 10.1867 6.328 10.08L8.088 8.32004C8.51467 7.89337 8.728 7.45337 8.728 7.00004C8.728 6.54671 8.51467 6.1067 8.088 5.68004L5.288 2.88004C4.86133 2.5067 4.42133 2.32004 3.968 2.32004C3.51467 2.32004 3.10133 2.5067 2.728 2.88004L0.968 4.64004C0.381333 5.17337 0.0613333 5.84004 0.008 6.64004C-0.0453333 7.65337 0.168 8.8267 0.648 10.16C1.448 12.3467 2.728 14.48 4.488 16.56C6.728 19.1734 9.368 21.2267 12.408 22.72C13.9547 23.52 15.3947 23.9467 16.728 24C17.9013 24.0534 18.808 23.7067 19.448 22.96L21.128 21.28C21.5013 20.9067 21.688 20.4934 21.688 20.04C21.688 19.5867 21.5013 19.1467 21.128 18.72L18.248 15.84ZM17.288 11.92L19.128 11.6C18.8613 9.89337 18.088 8.40004 16.808 7.12004C15.528 5.84004 13.9813 5.06671 12.168 4.80004L11.848 6.64004C13.288 6.85337 14.5013 7.45337 15.488 8.44004C16.4747 9.4267 17.0747 10.5867 17.288 11.92ZM20.168 3.92004C18.0347 1.73337 15.448 0.426704 12.408 3.62396e-05L12.168 1.84004C14.7813 2.21337 17.0213 3.33337 18.888 5.20004C20.648 6.96004 21.7413 9.09337 22.168 11.6L24.008 11.28C23.528 8.40004 22.248 5.9467 20.168 3.92004Z" fill="white" />
                            </svg>
                        </span>
                        +65 6711 0135
                    </button>

                    <button className='flex items-center justify-center font-medium font-lato font-semibold text-[13px] px-6 rounded-3xl text-[#FFFFFF] bg-[#0189CF] hover:bg-[#0073ae] hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 h-[40px] gap-1.5'>
                        <span className='w-[20px] h-[19px]'>
                            <svg width="20" height="20" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.84 18.8799C22.3733 18.8799 22.8533 18.6932 23.28 18.3199L16.48 11.5199L14.72 12.7199C14.4 12.9332 13.9867 13.1599 13.48 13.3999C12.9733 13.6399 12.48 13.7599 12 13.7599C11.52 13.7599 11.0267 13.6399 10.52 13.3999C10.0133 13.1599 9.6 12.9332 9.28 12.7199L7.52 11.5199L0.72 18.3199C1.14667 18.6932 1.62667 18.8799 2.16 18.8799H21.84ZM1.36 7.27988C0.826667 6.90655 0.373333 6.50655 0 6.07988V16.3999L6 10.4799L1.36 7.27988ZM22.64 7.27988C20.8267 8.50655 19.28 9.57322 18 10.4799L24 16.3999V6.07988C23.6267 6.50655 23.1733 6.90655 22.64 7.27988ZM21.84 -0.000116348H2.16C1.46667 -0.000116348 0.933333 0.239883 0.56 0.719883C0.186667 1.19988 0 1.78655 0 2.47988C0 3.01322 0.24 3.61322 0.72 4.27988C1.2 4.94655 1.73333 5.46655 2.32 5.83988L10.56 11.5199C10.8267 11.6799 11.08 11.7999 11.32 11.8799C11.56 11.9599 11.7867 11.9999 12 11.9999C12.2133 11.9999 12.44 11.9599 12.68 11.8799C12.92 11.7999 13.1733 11.6799 13.44 11.5199L14.16 11.1199L21.68 5.83988C22.3733 5.35988 22.9333 4.79988 23.36 4.15988C23.7867 3.51988 24 2.87988 24 2.23988C24 1.59988 23.7867 1.06655 23.36 0.639883C22.9333 0.213217 22.4267 -0.000116348 21.84 -0.000116348Z" fill="white" />
                            </svg>
                        </span>
                        Info@lettercraft.org
                    </button>
                </nav>

                {/* Mobile / Tablet Toggle Icon (visible below xl) */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="xl:hidden p-2 text-[#0189CF] hover:bg-[#E8F3F8] rounded-lg transition-colors cursor-pointer"
                    aria-label="Toggle Navigation"
                >
                    {isOpen ? (
                        /* Close icon (X) */
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        /* Hamburger icon */
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile / Tablet Dropdown Menu (opens vertically) */}
            {isOpen && (
                <div className="xl:hidden w-full bg-white border-t border-[#E8F3F8] shadow-lg px-6 py-5 flex flex-col gap-4">
                    <a
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className='font-medium font-DMSans text-[18px] text-[#697587] hover:text-[#0073ae] transition-colors py-1'
                    >
                        Home
                    </a>

                    {/* Services Mobile Accordion */}
                    <div className="flex flex-col border-b border-[#F0F4F8] pb-3">
                        <button
                            type="button"
                            onClick={() => toggleMobile('services')}
                            className='flex items-center justify-between font-medium font-DMSans text-[18px] text-[#697587] hover:text-[#0189CF] transition-colors py-1 text-left w-full cursor-pointer'
                        >
                            <span>Services</span>
                            <ChevronIcon className={mobileExpanded.services ? 'rotate-180 text-[#0189CF]' : 'text-[#697587]'} />
                        </button>
                        {mobileExpanded.services && (
                            <div className="flex flex-col gap-2 pl-4 pt-2">
                                {navDropdowns.services.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-[15px] font-DMSans text-[#697587] hover:text-[#0189CF] hover:bg-[#F0F9FF] px-2 py-1 rounded transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Languages Mobile Accordion */}
                    <div className="flex flex-col border-b border-[#F0F4F8] pb-3">
                        <button
                            type="button"
                            onClick={() => toggleMobile('languages')}
                            className='flex items-center justify-between font-medium font-DMSans text-[18px] text-[#697587] hover:text-[#0189CF] transition-colors py-1 text-left w-full cursor-pointer'
                        >
                            <span>Languages</span>
                            <ChevronIcon className={mobileExpanded.languages ? 'rotate-180 text-[#0189CF]' : 'text-[#697587]'} />
                        </button>
                        {mobileExpanded.languages && (
                            <div className="flex flex-col gap-2 pl-4 pt-2">
                                {navDropdowns.languages.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-[15px] font-DMSans px-2 py-1 rounded transition-colors ${
                                            item.isHighlight
                                                ? 'text-[#0189CF] font-semibold bg-[#E0F2FE]/50'
                                                : 'text-[#697587] hover:text-[#0189CF] hover:bg-[#F0F9FF]'
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Resources Mobile Accordion */}
                    <div className="flex flex-col border-b border-[#F0F4F8] pb-3">
                        <button
                            type="button"
                            onClick={() => toggleMobile('resources')}
                            className='flex items-center justify-between font-medium font-DMSans text-[18px] text-[#697587] hover:text-[#0189CF] transition-colors py-1 text-left w-full cursor-pointer'
                        >
                            <span>Resources</span>
                            <ChevronIcon className={mobileExpanded.resources ? 'rotate-180 text-[#0189CF]' : 'text-[#697587]'} />
                        </button>
                        {mobileExpanded.resources && (
                            <div className="flex flex-col gap-2 pl-4 pt-2">
                                {navDropdowns.resources.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-[15px] font-DMSans text-[#697587] hover:text-[#0189CF] hover:bg-[#F0F9FF] px-2 py-1 rounded transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    <a
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className='font-medium font-DMSans text-[18px] text-[#697587] hover:text-[#0189CF] transition-colors py-1'
                    >
                        About Us
                    </a>
                    <a
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className='font-medium font-DMSans text-[18px] text-[#697587] hover:text-[#0189CF] transition-colors py-1'
                    >
                        Contact Us
                    </a>

                    <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-[#E8F3F8]">
                        <button className='flex items-center justify-center font-medium font-lato font-semibold text-[13px] px-4 gap-1.5 rounded-3xl text-[#FFFFFF] bg-[#0189CF] hover:bg-[#0073ae] hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 h-[40px] w-full sm:w-[160px]'>
                            <span className='w-[20px] h-[19px]'>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.248 15.84C17.8747 15.4667 17.4613 15.28 17.008 15.28C16.5547 15.28 16.1147 15.4667 15.688 15.84L13.928 17.68C13.768 17.84 13.608 17.8667 13.448 17.76L12.248 17.12C10.7013 16.16 9.23467 14.8267 7.848 13.12C7.10133 12.2134 6.568 11.36 6.248 10.56C6.19467 10.3467 6.22133 10.1867 6.328 10.08L8.088 8.32004C8.51467 7.89337 8.728 7.45337 8.728 7.00004C8.728 6.54671 8.51467 6.1067 8.088 5.68004L5.288 2.88004C4.86133 2.5067 4.42133 2.32004 3.968 2.32004C3.51467 2.32004 3.10133 2.5067 2.728 2.88004L0.968 4.64004C0.381333 5.17337 0.0613333 5.84004 0.008 6.64004C-0.0453333 7.65337 0.168 8.8267 0.648 10.16C1.448 12.3467 2.728 14.48 4.488 16.56C6.728 19.1734 9.368 21.2267 12.408 22.72C13.9547 23.52 15.3947 23.9467 16.728 24C17.9013 24.0534 18.808 23.7067 19.448 22.96L21.128 21.28C21.5013 20.9067 21.688 20.4934 21.688 20.04C21.688 19.5867 21.5013 19.1467 21.128 18.72L18.248 15.84ZM17.288 11.92L19.128 11.6C18.8613 9.89337 18.088 8.40004 16.808 7.12004C15.528 5.84004 13.9813 5.06671 12.168 4.80004L11.848 6.64004C13.288 6.85337 14.5013 7.45337 15.488 8.44004C16.4747 9.4267 17.0747 10.5867 17.288 11.92ZM20.168 3.92004C18.0347 1.73337 15.448 0.426704 12.408 3.62396e-05L12.168 1.84004C14.7813 2.21337 17.0213 3.33337 18.888 5.20004C20.648 6.96004 21.7413 9.09337 22.168 11.6L24.008 11.28C23.528 8.40004 22.248 5.9467 20.168 3.92004Z" fill="white" />
                                </svg>
                            </span>
                            +65 6711 0135
                        </button>
                        <button className='flex items-center justify-center font-medium font-lato font-semibold text-[13px] px-6 rounded-3xl text-[#FFFFFF] bg-[#0189CF] hover:bg-[#0073ae] hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 h-[40px] gap-1.5 w-full sm:w-[190px]'>
                            <span className='w-[20px] h-[19px]'>
                                <svg width="20" height="20" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.84 18.8799C22.3733 18.8799 22.8533 18.6932 23.28 18.3199L16.48 11.5199L14.72 12.7199C14.4 12.9332 13.9867 13.1599 13.48 13.3999C12.9733 13.6399 12.48 13.7599 12 13.7599C11.52 13.7599 11.0267 13.6399 10.52 13.3999C10.0133 13.1599 9.6 12.9332 9.28 12.7199L7.52 11.5199L0.72 18.3199C1.14667 18.6932 1.62667 18.8799 2.16 18.8799H21.84ZM1.36 7.27988C0.826667 6.90655 0.373333 6.50655 0 6.07988V16.3999L6 10.4799L1.36 7.27988ZM22.64 7.27988C20.8267 8.50655 19.28 9.57322 18 10.4799L24 16.3999V6.07988C23.6267 6.50655 23.1733 6.90655 22.64 7.27988ZM21.84 -0.000116348H2.16C1.46667 -0.000116348 0.933333 0.239883 0.56 0.719883C0.186667 1.19988 0 1.78655 0 2.47988C0 3.01322 0.24 3.61322 0.72 4.27988C1.2 4.94655 1.73333 5.46655 2.32 5.83988L10.56 11.5199C10.8267 11.6799 11.08 11.7999 11.32 11.8799C11.56 11.9599 11.7867 11.9999 12 11.9999C12.2133 11.9999 12.44 11.9599 12.68 11.8799C12.92 11.7999 13.1733 11.6799 13.44 11.5199L14.16 11.1199L21.68 5.83988C22.3733 5.35988 22.9333 4.79988 23.36 4.15988C23.7867 3.51988 24 2.87988 24 2.23988C24 1.59988 23.7867 1.06655 23.36 0.639883C22.9333 0.213217 22.4267 -0.000116348 21.84 -0.000116348Z" fill="white" />
                            </svg>
                        </span>
                        Info@lettercraft.org
                    </button>
                </div>
            </div>
        )}
    </header>
)
}

export default Header
