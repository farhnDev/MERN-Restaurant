import React from 'react'
import { FaPlay } from "react-icons/fa";
import splash from '../assets/Images/Banner.png'

const Banner = () => {
    return (
        <div className='section-layout bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
            <div className='py-24 flex justify-between items-center flex-col md:flex-row gap-8'>
                <div className="md:w-1/2 space-y-7 px-4">
                    <h2 className='font-bold font-Inter md:text-5xl text-4xl md:leading-snug leading-snug'>Dive into Delights Of Delectable <span className='text-green'>Food</span></h2>
                    <p className=' font-Inter text-secondary text-xl'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                    <div className="flex gap-5 items-center ">
                        <a className="btn rounded-full px-8 flex justify-center items-center gap-2 bg-green text-white">
                            Order Now
                        </a>
                        <h3 className='font-bold font-Inter '>Watch Video</h3>
                        <button className="btn btn-ghost btn-circle hidden lg:flex shadow-lg">
                            <FaPlay className='md:w-5 md:h-5'/>
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 md:px-10">
                    <img src={splash} className='w-[500px]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner
