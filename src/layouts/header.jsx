import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png'
import { RxAvatar } from "react-icons/rx";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { MyContext } from '../utils/contextProvider';
import './header.sass'





export const Nav = () => {
    const navigate = useNavigate();
    const [sidebaropened, setSidebaropened] = useState(false);

    const clickonsidebar = () => {
        setSidebaropened(!sidebaropened);
        console.log(sidebaropened);
    }
    const handleLinkClick = (path) => {
        navigate(path);
        setSidebaropened(false); // Close the sidebar
    }
    const [products, setProducts, users, setUsers] = useContext(MyContext);

    const Delete = (index) => {
        const newUsers = [...users[0].products];
        newUsers.splice(index, 1);
        setUsers([{ ...users[0], products: newUsers }]);
    };
    const productCount = users[0]?.products.length || 0;

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <img src={logo} className='cursor-pointer' alt="" />
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse text-3xl gap-3">
                        <RxAvatar className=' cursor-pointer hover:text-[#e65540] border-r-2 w-[50px]' onClick={() => { navigate('/Authentif') }} />
                        <MdOutlineShoppingCart onClick={() => handleLinkClick('/cart')} className='relative cursor-pointer hover:text-[#e65540]' />
                        <FaBars className=' lg:hidden' onClick={clickonsidebar} />
                        <div className='absolute max-[430px]:top-9 max-[430px]:right-[15%] right-[8.5%] top-11 p-2 h-[25px] rounded-full bg-red-700  flex justify-center items-center'>
                            <p className='text-white  count  '>{productCount}</p>
                        </div>
                    </div>
                    <div className={` items-center justify-between w-full md:flex md:w-auto md:order-1 ${sidebaropened ? '' : 'hidden'}`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a  href="#" className="hover:text-[#e65540] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => handleLinkClick('/')} aria-current="page">Home</a>
                            </li>
                            <li>
                                <a  href="#" className="hover:text-[#e65540] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => handleLinkClick('/shop')}>Shop</a>
                            </li>
                            <li>
                                <a  href="#" className="hover:text-[#e65540] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => handleLinkClick('/about')}>About</a>
                            </li>
                            <li>
                                <a  href="#" className="hover:text-[#e65540] block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={() => handleLinkClick('/contact')}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}
