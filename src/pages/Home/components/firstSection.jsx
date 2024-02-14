
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


export const FirstSection = () => {
    const [test, setTest] = useContext(MyContext)
    const [slide, setSlide] = useState([slide1, slide2, slide3, slide4])
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
                        <img src={one} alt="" className='hover:scale-110' />
                    </div>
                    <div className=' gap-7'>
                        <img src={fourth} alt="" className='hover:scale-110' />
                    </div>
                </div>
                <div className='flex flex-col gap-7  justify-center items-center '>
                    <div className='overflow-hidden'>
                        <img src={second} alt="" className='hover:scale-110' />
                    </div>
                    <div className='overflow-hidden'>
                        <img src={fifth} alt="" className='hover:scale-110' />
                    </div>
                </div>
                <div className='flex flex-col gap-7  justify-center items-center '>
                    <div className='overflow-hidden'>
                        <img src={third} alt="" className='hover:scale-110' />
                    </div>
                    <div className='overflow-hidden'>
                        <img src={sixth} alt="" className='hover:scale-110' />
                    </div>
                </div>

            </div>
            </div>
            

        </>
    );
}
