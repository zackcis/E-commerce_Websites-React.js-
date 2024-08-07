import './firstSection.sass'
import story from '../../../assets/story.jpg'
import back from '../../../assets/back.jpg'


export const FirstSectionAbout = () => {
    return (
        <>
                <div className='relative'>
                    <img src={back} alt="" />
                    <h1 className='absolute top-[50%] left-[50%] text-white font-bold text-5xl translate-x-[-50%]'>ABOUT</h1>
                </div>
            
            <div className='flex max-[430px]:flex-col justify-center items-start w-[100%] my-14 p-5 bg-white gap-4'>
                <div className='lg:w-[20%] h-full overflow-hidden ' >
                    <img className='hover:scale-110 relative transition delay-75 ' src={story} alt="" />
                </div>
                <div className='flex flex-col gap-2 justify-center lg:w-[40%]'>
                    <div className='text-black '>
                        <h2 className='text-3xl'><b>Our story</b></h2>
                    </div>
                    <p className='text-gray-400'> Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                    <div className='border-l-4 p-2 text-gray-400 '>
                        <p>
                            Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while
                        </p>
                        <p className='text-black py-4'>- Steve Job's</p>
                    </div>
                </div>
            </div>
        </>
    )
}
