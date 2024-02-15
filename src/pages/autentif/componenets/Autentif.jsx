import React from 'react';

export const AutentifSection = () => {
    return (
        <>
            <div className='w-[100%] flex gap-4 justify-center  p-32'>
                <div className='w-[40%] h-[30%] border-2 flex flex-col text-start'>
                    <div className='flex flex-col justify-start items-start p-8'>
                        <h1 className='text-black text-3xl'>
                            New Customer
                        </h1>
                        <p className='text-gray-500 font-bold'>
                            Register Account
                        </p>
                        <p className='text-gray-400 w-[90%]'>
                            By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
                        </p>
                    </div>

                    <button className='bg-black w-[200px] text-white p-4 ml-8 my-4  text-2xl hover:bg-[#e65540] '>CONTINUE</button>

                </div>
                <div className='w-[40%] border-2 flex flex-col text-start p-6'>
                    <h1 className='text-black text-3xl'>
                        Returning Customer
                    </h1>
                    <p className='text-gray-500 font-bold'>
                        I am returning costumer
                    </p>
                    <form action="" className='flex flex-col'>
                        <label htmlFor="">Email</label>
                        <input placeholder='Email' className='my-4' type="email" />
                        <label htmlFor="">Password</label>
                        <input placeholder='Password' className='my-4' type="password" />
                        <p className='cursor-pointer hover:bg-[#e65540] '>Forgot your password?</p>
                    </form>
                    <button type='submit' className='bg-black w-[200px] text-white p-4  text-2xl hover:bg-[#e65540] '>SIGN IN</button>

                </div>
            </div>
        </>
    );
};

