import React from 'react';
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";






const Footer = () => {
    return (
        <>
            <footer className='flex flex-col justify-around items-center bg-[#f0f0f0] w-[100%] '>
                <div className='flex justify-around  w-[100%] p-20 '>

                    <div className='flex-col '>
                        <h3 className='pb-7'><b>GET IN TOUCH</b></h3>
                        <p className='py-8 w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, commodi?</p>
                        <div className='flex gap-6 text-3xl'>
                            <TiSocialTwitter className='cursor-pointer hover:text-[#e65540]  text-gray-600' />
                            <FaFacebook className='cursor-pointer hover:text-[#e65540] text-gray-600' />
                            <FaPinterest className='cursor-pointer hover:text-[#e65540] text-gray-600' />
                            <FaGooglePlusG className='cursor-pointer hover:text-[#e65540] text-gray-600' />
                            <FiInstagram className='cursor-pointer hover:text-[#e65540] text-gray-600' />
                        </div>
                    </div>
                    <div>
                        <h3 className='pb-7'><b>CATEGORIES</b></h3>
                        <div>
                            <p className='cursor-pointer hover:text-[#e65540] py-2'>Men</p>
                            <p className='cursor-pointer hover:text-[#e65540] py-2'>Women</p>
                            <p className='cursor-pointer hover:text-[#e65540] py-2'>Dresses</p>
                            <p className='cursor-pointer hover:text-[#e65540] py-2'>Sunglasses</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='pb-7'><b>Links</b></h3>
                        <div>
                            <p className='cursor-pointer hover:text-[#e65540] py-2'>Search</p>
                            <p className='cursor-pointer hover:text-[#e65540] py-2'>About US</p>
                            <p className='cursor-pointer hover:text-[#e65540] py-2'>Contact Us</p>
                            <p className='cursor-pointer hover:text-[#e65540] py-2'>Return</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='pb-7'><b>Links</b></h3>
                        <div>
                            <p className='cursor-pointer hover:text-[#e65540] py-2'>Search</p>
                            <p className='cursor-pointer hover:text-[#e65540] py-2'>About US</p>
                            <p className='cursor-pointer hover:text-[#e65540] py-2'>Contact Us</p>
                            <p className='cursor-pointer hover:text-[#e65540] py-2'>Return</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <h2 className='pb-20'><b>NEWSLETTER</b></h2>
                        <form action="">
                            <input className='outline-none bg-[#f0f0f0] border-b-2 border-black border-none ' type="email" placeholder='Email Address' />
                        </form>
                        <button className='bg-black text-white p-4 px-7 hover:bg-[#e65540] rounded-full'>SUBSCRIBE</button>
                    </div>
                </div>
                <div className='w-[80%] text-center p-5'>
                    <p>Copyright © 2022 <span className='cursor-pointer hover:text-[#e65540]'>Shopify Theme Developed by MassTechnologist</span> All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;