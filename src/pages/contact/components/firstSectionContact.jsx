import React from 'react';
import back from '../../../assets/back.jpg'
export const FirstSectionContact = () => {
    return (
        <>
            <div className='relative'>
                <img src={back} alt="" />
                <h1 className='absolute top-[50%] left-[50%] text-white font-bold text-5xl translate-x-[-50%]'>CONTACT</h1>
            </div>
            <div className='flex justify-center items-center w-[100%] h-[80vh] gap-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.6931206764!2d-6.245704099999999!3d53.324320099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2z2K_vupHZhNmG2Iwg2KPZitix2YTZhtiv2Kc!5e0!3m2!1sar!2sma!4v1707918570621!5m2!1sar!2sma"
                    width="700" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className='flex flex-col justify-center items-start'>
                    <form action="" className='gap-4 flex flex-col'>
                        <h1 className='text-3xl'>Send your message</h1>
                        <input className='w-[25vw]' type="text" placeholder='Your Name' />
                        <input className='w-[25vw]' type="email" placeholder='Your email' />
                        <input className='w-[25vw]' type="number" placeholder='Your Number Phone' />
                        <textarea className='w-[25vw]' name="" placeholder='Message' id="" cols="30" rows="10"></textarea>
                    </form>
                    <button className='bg-black text-white p-4 px-16 text-2xl hover:bg-[#e65540] rounded-full'>Send</button>
                </div>
            </div>
        </>
    );
};

