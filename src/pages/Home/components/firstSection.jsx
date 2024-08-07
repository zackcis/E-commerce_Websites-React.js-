
import React from 'react';
import { useContext, useState } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/contextProvider';
import slide1 from '../../../assets/master-slide-01.jpg'
import slide2 from '../../../assets/master-slide-02.jpg'
import slide3 from '../../../assets/master-slide-03.jpg'
import slide4 from '../../../assets/master-slide-05.jpg'
import { Carousel } from 'flowbite-react';
import one from '../../../assets/img1.jpg'
import second from '../../../assets/img2.jpg'
import third from '../../../assets/img3.jpg'
import fourth from '../../../assets/img4.jpg'
import fifth from '../../../assets/img5.jpg'
import sixth from '../../../assets/img6.jpg'
import banner from '../../../assets/banner-08.jpg'
import ndader from '../../../assets/shop-item-09.jpg'
import blog1 from '../../../assets/blog-08.jpg'
import blog2 from '../../../assets/blog-09.jpg'
import blog3 from '../../../assets/blog-10.jpg'
import { useNavigate } from 'react-router-dom';



export const FirstSection = () => {
    const [products, setProducts] = useContext(MyContext)
    const [activeTab, setActiveTab] = useState('New');
    const [slide, setSlide] = useState([slide1, slide2, slide3, slide4]);
    const goto = useNavigate('')

    console.log(products);

    const filteredProducts = products.filter((product, index) => {
        if (activeTab === 'New') {
            return product.condition === 'new';
        } else if (activeTab === 'Old') {
            return product.condition === 'old';
        } else if (activeTab === 'Sale') {
            return product.condition === 'sale';
        }
        return true;
    }).slice(0, 4);;
    return (
        <>

            <div className='w-[100%] h-[68vh] '>
                <Carousel>
                    {slide.map((slide, index) => (
                        <div key={slide} className='lg:h-[90vh]'>
                            <img className='relative h-full' src={slide} alt={slide} />
                            <div className='absolute  lg:translate-y-[-50] lg:top-[50%] top-[60%] lg:left-[37%] left-[15%] justify-center items-center text-center '>
                                <p className='font-bold text-2xl text-white'>Only women can wear this</p>
                                <h1 className='lg:text-white font-bold lg:text-6xl text-3xl py-4'>NEW ARRIVAL</h1>
                                <button onClick={()=>{goto('/shop')}} className='bg-black w-[200px] text-white p-4  text-2xl hover:bg-[#e65540] rounded-full'>Shop Now</button>
                            </div>
                        </div>
                    ))}

                </Carousel>
            </div>
            <div className='w-[100%] flex justify-center items-center'>
                <div className='w-[65%] gap-7 flex max-[430px]:flex-col justify-center items-center lg:p-10  '>
                    <div className='flex flex-col gap-7  justify-center items-center '>
                        <div className='overflow-hidden'>
                            <img src={one} alt="" className='hover:scale-110 relative transition delay-75' />
                            <button onClick={()=>{goto('/shop')}} className='bg-white w-[200px] text-black bg-opacity-80 p-4   text-2xl hover:bg-[#e65540]  absolute translate-x-[22%]  translate-y-[-125%]'>Shop</button>
                        </div>
                        <div className=' gap-7 overflow-hidden'>
                            <img src={fourth} alt="" className='hover:scale-110 relative transition delay-75' />
                            <button onClick={()=>{goto('/shop')}} className='bg-white w-[200px] text-black bg-opacity-80 p-4   text-2xl hover:bg-[#e65540]  absolute translate-x-[22%]  translate-y-[-125%]'>Shop</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-7  justify-center items-center '>
                        <div className='overflow-hidden'>
                            <img src={second} alt="" className='hover:scale-110 relative transition delay-75' />
                            <button onClick={()=>{goto('/shop')}} className='bg-white w-[200px] text-black bg-opacity-80 p-4   text-2xl hover:bg-[#e65540]  absolute translate-x-[22%]  translate-y-[-125%]'>Shop</button>
                        </div>
                        <div className='overflow-hidden'>
                            <img src={fifth} alt="" className='hover:scale-110 relative transition delay-75' />
                            <button onClick={()=>{goto('/shop')}} className='bg-white w-[200px] text-black bg-opacity-80 p-4   text-2xl hover:bg-[#e65540]  absolute translate-x-[22%]  translate-y-[-125%]'>Shop</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-7  justify-center items-center '>
                        <div className='overflow-hidden'>
                            <img src={third} alt="" className='hover:scale-110 relative transition delay-75' />
                            <button onClick={()=>{goto('/shop')}} className='bg-white w-[200px] text-black bg-opacity-80 p-4   text-2xl hover:bg-[#e65540]  absolute translate-x-[22%]  translate-y-[-125%]'>Shop</button>
                        </div>
                        <div className='overflow-hidden'>
                            <img src={sixth} alt="" className='hover:scale-110 relative transition delay-75' />
                            <button onClick={()=>{goto('/shop')}} className='bg-white w-[200px] text-black bg-opacity-80 p-4   text-2xl hover:bg-[#e65540]  absolute translate-x-[22%]  translate-y-[-125%]'>Shop</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[100% ] flex flex-col justify-center items-center'>
                <div className=' flex  justify-center lg:w-[30%] items-center font-bold text-4xl gap-10 mt-7 border-gray-700 border-2'>
                    <button className='hover:text-[#e65540] ' onClick={() => setActiveTab('New')}>New</button>
                    <button className='hover:text-[#e65540] ' onClick={() => setActiveTab('Old')}>Old</button>
                    <button className='hover:text-[#e65540] ' onClick={() => setActiveTab('Sale')}>Sale</button>
                </div>
                <div className='w-[100%] lg:p-24 p-16 flex max-[430px]:flex-col gap-5 justify-center items-center '>
                    {filteredProducts.map(product => (
                        <div className='lg:w-[20%]' key={product.name}>
                            <div className=' overflow-hidden'>
                                <img className=' hover:scale-110 relative transition delay-75' src={product.image} alt={product.name} />
                            </div>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                            <p>Condition: {product.condition}</p>
                            <button onClick={()=>{goto('/shop')}} className='bg-white w-[200px] text-black bg-opacity-80 p-4  text-2xl hover:bg-[#e65540]  absolute translate-x-[18%]  translate-y-[-235%]'>Shop</button>

                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-[#f2f2f2] w-[100%] flex max-[430px]:flex-col p-10 gap-7 justify-center items-center '>
                <div className='lg:w-[30%] overflow-hidden'>
                    <img className='relative hover:scale-110 transition delay-75' src={banner} alt="" />
                    <div className='flex flex-col gap-1 text-white text-center absolute lg:translate-x-[3%] translate-x-[38%] translate-y-[-200%]'>
                        <p className='font-bold lg:text-4xl text-2xl'>The Beauty</p>
                        <h1 className='font-bold lg:text-7xl text-4xl'>LOOKBOOK</h1>
                        <p>View COLLECTION</p>
                    </div>
                </div>
                <div className='lg:w-[30%] overflow-hidden '>
                    <img className='relative transition delay-75 hover:scale-110' src={ndader} alt="" />
                    <div className='absolute lg:translate-x-[50%] translate-x-[35%] translate-y-[-250%] text-center text-black'>
                        <p>Boxy2 T-Shirt with Roll Sleeve</p>
                        <p>£20.00</p>
                    </div>
                </div>
            </div>
            <div className='w-[100%] bg-white flex flex-col lg:p-11'>
                <h1 className='text-4xl font-bold text-center py-16'>OUR Blog</h1>
                <div className='w-[100%] flex max-[430px]:flex-col justify-center items-center gap-7'>
                    <div className='lg:w-[23%] max-[430px]:w-[90%] flex flex-col  justify-center items-start gap-4  '>
                        <div className='overflow-hidden'>
                            <img className='transition delay-75 hover:scale-110' src={blog1} alt="" />
                        </div>
                        <h2 className='text-start text-black cursor-pointer hover:text-[#e65540] transition delay-75 '>Black Friday Guide: Best Sales & Discount Codes</h2>
                        <p className='text-gray-500'>by fashe-theme Admin on Dec 28,2017
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>
                    <div className='lg:w-[23%] max-[430px]:w-[90%] flex flex-col  justify-center items-start gap-4  '>
                        <div className='overflow-hidden'>
                            <img className='transition delay-75 hover:scale-110' src={blog2} alt="" />
                        </div>
                        <h2 className='text-start text-black cursor-pointer hover:text-[#e65540] transition delay-75 '>Black Friday Guide: Best Sales & Discount Codes</h2>
                        <p className='text-gray-500'>by fashe-theme Admin on Dec 28,2017
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>
                    <div className='lg:w-[23%] max-[430px]:w-[90%] flex flex-col  justify-center items-start gap-4  '>
                        <div className='overflow-hidden'>
                            <img className='transition delay-75 hover:scale-110' src={blog3} alt="" />
                        </div>
                        <h2 className='text-start text-black cursor-pointer hover:text-[#e65540] transition delay-75 '>Black Friday Guide: Best Sales & Discount Codes</h2>
                        <p className='text-gray-500'>by fashe-theme Admin on Dec 28,2017
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>
                </div>
            </div>
            <div className='w-[100%] flex justify-center items-center '>
                <h1 className='font-bold text-5xl lg:p-28 p-10 text-center'>@ FOLLOW INSTAGRAM</h1>
            </div>
            <div className='flex max-[430px]:flex-col max-[430px]:gap-10 w-[100%] justify-center items-center lg:p-20 p-10 '>
                <div className='lg:w-[30%] flex flex-col justify-center items-center  '>
                    <h1 className='text-black text-2xl '>
                        Free Delivery Worldwide
                    </h1>
                    <p className='text-gray-500 '>
                        Mirum est notare quam littera gothica
                    </p>
                </div>
                <div className='lg:w-[30%] flex flex-col justify-center items-center border-r-2 border-l-2 px-5 '>
                    <h1 className='text-black text-2xl '>
                        Free Delivery Worldwide
                    </h1>
                    <p className='text-gray-500 '>
                        Mirum est notare quam littera gothica
                    </p>
                </div>
                <div className='lg:w-[30%] flex flex-col justify-center items-center  '>
                    <h1 className='text-black text-2xl '>
                        Free Delivery Worldwide
                    </h1>
                    <p className='text-gray-500 '>
                        Mirum est notare quam littera gothica
                    </p>
                </div>
            </div>
        </>
    );
}
