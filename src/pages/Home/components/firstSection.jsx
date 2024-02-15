
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



export const FirstSection = () => {
    const [test, setTest, products, setProducts] = useContext(MyContext)
    const [activeTab, setActiveTab] = useState('New');
    const [slide, setSlide] = useState([slide1, slide2, slide3, slide4]);

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

            <div className='w-[100%] h-[60vh]'>
                <Carousel>
                    {slide.map((slide, index) => (
                        <div key={slide} className=''>
                            <img className='relative' src={slide} alt={slide} />
                            <div className='absolute gap-6 translate-x-[-50] translate-y-[-50] top-[50%] left-[40%] justify-center items-center'>
                                <p className='font-bold text-2xl text-white'>Only women can wear this</p>
                                <h1 className='text-white font-bold text-6xl'>NEW ARRIVAL</h1>
                                <button className='bg-black w-[200px] text-white p-4  text-2xl hover:bg-[#e65540] rounded-full'>Send</button>
                            </div>
                        </div>
                    ))}

                </Carousel>
            </div>


            <div className='w-[100%] flex justify-center items-center'>
                <div className='w-[65%] gap-7 flex justify-center items-center p-10  '>
                    <div className='flex flex-col gap-7  justify-center items-center '>
                        <div className='overflow-hidden'>
                            <img src={one} alt="" className='hover:scale-110 relative transition delay-75' />
                            <button className='bg-white w-[200px] text-black bg-opacity-80 p-4  text-2xl hover:bg-[#e65540]  absolute translate-x-[45%]  translate-y-[-125%]'>Send</button>
                        </div>
                        <div className=' gap-7 overflow-hidden'>
                            <img src={fourth} alt="" className='hover:scale-110 relative transition delay-75' />
                            <button className='bg-white w-[200px] text-black bg-opacity-80 p-4  text-2xl hover:bg-[#e65540]  absolute translate-x-[45%]  translate-y-[-125%]'>Send</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-7  justify-center items-center '>
                        <div className='overflow-hidden'>
                            <img src={second} alt="" className='hover:scale-110 relative transition delay-75' />
                            <button className='bg-white w-[200px] text-black bg-opacity-80 p-4  text-2xl hover:bg-[#e65540]  absolute translate-x-[45%]  translate-y-[-125%]'>Send</button>
                        </div>
                        <div className='overflow-hidden'>
                            <img src={fifth} alt="" className='hover:scale-110 relative transition delay-75' />
                            <button className='bg-white w-[200px] text-black bg-opacity-80 p-4  text-2xl hover:bg-[#e65540]  absolute translate-x-[45%]  translate-y-[-125%]'>Send</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-7  justify-center items-center '>
                        <div className='overflow-hidden'>
                            <img src={third} alt="" className='hover:scale-110 relative transition delay-75' />
                            <button className='bg-white w-[200px] text-black bg-opacity-80 p-4  text-2xl hover:bg-[#e65540]  absolute translate-x-[45%]  translate-y-[-125%]'>Send</button>
                        </div>
                        <div className='overflow-hidden'>
                            <img src={sixth} alt="" className='hover:scale-110 relative transition delay-75' />
                            <button className='bg-white w-[200px] text-black bg-opacity-80 p-4  text-2xl hover:bg-[#e65540]  absolute translate-x-[45%]  translate-y-[-125%]'>Send</button>

                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[100% ] flex flex-col justify-center items-center'>
                <div className=' flex justify-center w-[30%] items-center font-bold text-4xl gap-10 mt-7 border-gray-700 border-2'>
                    <button onClick={() => setActiveTab('New')}>New</button>
                    <button onClick={() => setActiveTab('Old')}>Old</button>
                    <button onClick={() => setActiveTab('Sale')}>Sale</button>
                </div>
                <div className='w-[100%] p-24 flex gap-5 justify-center items-center '>
                    {filteredProducts.map(product => (
                        <div className='w-[20%]' key={product.name}>
                            <div className=' overflow-hidden'>
                                <img className=' hover:scale-110 relative transition delay-75' src={product.image} alt={product.name} />
                            </div>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                            <p>Condition: {product.condition}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-[#f2f2f2] w-[100%] flex p-10 gap-7 justify-center items-center '>
                <div className='w-[30%] overflow-hidden'>
                    <img className='relative hover:scale-110 transition delay-75' src={banner} alt="" />
                    <div className='flex flex-col gap-1 text-white text-center absolute translate-x-24 translate-y-[-200%]'>
                        <p className='font-bold text-4xl'>The Beauty</p>
                        <h1 className='font-bold text-7xl'>LOOKBOOK</h1>
                        <p>View COLLECTION</p>
                    </div>
                </div>
                <div className='w-[30%] overflow-hidden '>
                    <img className='relative transition delay-75 hover:scale-110' src={ndader} alt="" />
                    <div className='absolute translate-x-44 translate-y-[-350%] text-center text-black'>
                        <p>Boxy2 T-Shirt with Roll Sleeve</p>
                        <p>£20.00</p>
                    </div>
                </div>
            </div>
            <div className='w-[100%] bg-white flex flex-col p-11'>
                <h1 className='text-4xl font-bold text-center py-16'>OUR Blog</h1>
                <div className='w-[100%] flex justify-center items-center gap-7'>
                    <div className='w-[23%] flex flex-col  justify-center items-start gap-4  '>
                        <div className='overflow-hidden'>
                            <img className='transition delay-75 hover:scale-110' src={blog1} alt="" />
                        </div>
                        <h2 className='text-start text-black cursor-pointer hover:text-[#e65540] transition delay-75 '>Black Friday Guide: Best Sales & Discount Codes</h2>
                        <p className='text-gray-500'>by fashe-theme Admin on Dec 28,2017
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>
                    <div className='w-[23%] flex flex-col  justify-center items-start gap-4  '>
                        <div className='overflow-hidden'>
                            <img className='transition delay-75 hover:scale-110' src={blog2} alt="" />
                        </div>
                        <h2 className='text-start text-black cursor-pointer hover:text-[#e65540] transition delay-75 '>Black Friday Guide: Best Sales & Discount Codes</h2>
                        <p className='text-gray-500'>by fashe-theme Admin on Dec 28,2017
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>
                    <div className='w-[23%] flex flex-col  justify-center items-start gap-4  '>
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
    <h1 className='font-bold text-5xl p-28'>@ FOLLOW INSTAGRAM</h1>
</div>
        </>
    );
}
