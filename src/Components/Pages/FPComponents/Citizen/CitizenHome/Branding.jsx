import React, { useState } from 'react'
// import cm from '../assets/cm.png'
import cm from '../assets/cm.png'
import logo from '../assets/rmclogo.png'
// import secretary from '../assets/cmsecretary.jpeg'
import secretary from '../assets/cmsecretary.png'

const Branding = () => {

    const [toggle, setToggle] = useState(false)

    setTimeout(() => {
        setToggle(!toggle)
    }, 2000);

    return (
        <>
            <div className='relative w-full h-full bg-[#99B37C]'>
                <div className='absolute h-full w-full top-0 opacity-20'> </div>
                <div className='flex justify-between px-2 sm:px-20 py-1.5 items-center'>
                    <img src={toggle ? secretary : cm} alt="" className={`w-16 sm:w-20 h-16 sm:h-20 block border-2 shadow-md animate__animated animate__fadIn rounded-full transform ${toggle ? "" : "-scale-x-100"}`} />
                    {/* <img src={cm} alt="" className={`w-16 sm:w-20 h-16 sm:h-20 block border-2 shadow-md animate__animated animate__fadIn rounded-full transform `} /> */}
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-sm sm:text-4xl font-bold text-center uppercase'>Urban Development &amp; Housing Department</span>
                        <span className='text-xs sm:text-base'>Government of Jharkhand</span>
                    </div>
                    {/* <img src={"http://203.129.217.246:8000/Uploads/Icon/jharkhand.png"} alt="" className='w-16 sm:w-20 h-16 sm:h-20 block border-2 shadow-md rounded-full' /> */}
                    <img src={logo} alt="" className='w-16 sm:w-20 h-16 sm:h-20 block border-2 shadow-md rounded-full' />
                </div>
            </div>
        </>
    )
}

export default Branding