import React from 'react';
import logo from '../assets/logo.png'
import { RxAvatar } from "react-icons/rx";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



export const Nav = () => {
    const goto = useNavigate('')
    return (
        <>


            <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                    <img src={logo} className='cursor-pointer' alt="" />
                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse text-3xl gap-3">
                        <RxAvatar className=' cursor-pointer hover:text-[#e65540] border-r-2 w-[50px]' onClick={()=>{goto('/Authentif')}} />
                        <MdOutlineShoppingCart onClick={()=>{goto('/cart')}} className=' cursor-pointer hover:text-[#e65540] ' />
                        

                        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="hover:text-[#e65540] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={()=>{goto('/')}} aria-current="page" >Home</a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-[#e65540] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={()=>{goto('/shop')}}>Shop</a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-[#e65540] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={()=>{goto('/about')}}>About</a>
                            </li>
                            <li>
                                <a href="#" class="hover:text-[#e65540] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"onClick={()=>{goto('/contact')}}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};

