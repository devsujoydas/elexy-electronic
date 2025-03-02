
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
  

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='hero-bg-1  p-5' >
          <div className='md:min-h-[75vh]  max-w-7xl flex items-center mx-auto' >
            <div className=' w-fit grid gap-5'>
              <p className='text-[#B4976C] md:text-xl text-xs '>DISCOUNT UPTO 75%, HURRY UP!</p>
              <h1 className='md:text-7xl text-2xl font-semibold'>Next generation <br /> Virtual reality</h1>
              <p className='md:text-xl text-xs'>VR is the most quick access to notifications, calls, messages, <br /> apps right on your wrist, reducting the constantly check.</p>
              <div className='md:text-md text-xs font-medium'>
                <button className='md:px-7 md:py-3 px-4 py-2 border rounded-full cursor-pointer active:scale-95 hover:-translate-y-1 transition-all bg-[#B4976C] mr-5 hover:bg-gray-300 hover:textblack'>Buy Now</button>
                <button className='md:px-7 md:py-3 px-4 py-2 border rounded-full cursor-pointer active:scale-95 hover:-translate-y-1 transition-all '>View More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='hero-bg-2  p-5'>
          <div className='md:min-h-[75vh]  w-7xl flex items-center mx-auto' >
            <div className=' w-fit grid gap-5'>
              <p className='text-[#B4976C] md:text-xl text-xs '>LET&apos;S BE SMARTER</p>
              <h1 className='md:text-7xl text-2xl font-semibold'>Enjoy your daily <br /> life Smart way...</h1>
              <p className='md:text-xl text-xs'>Smartwatches provide quick access to notifications, calls, messages, and <br />
              apps right on your wrist, reducing the constantly check your phone.</p>
              <div className='md:text-md text-xs font-medium'>
                <button className='md:px-7 md:py-3 px-4 py-2 border rounded-full cursor-pointer active:scale-95 hover:-translate-y-1 transition-all bg-[#B4976C] mr-5 hover:bg-gray-300 hover:textblack'>Pre Order</button>
                <button className='md:px-7 md:py-3 px-4 py-2 border rounded-full cursor-pointer active:scale-95 hover:-translate-y-1 transition-all'>View More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='hero-bg-3  p-5'>
          <div className='md:min-h-[75vh]  w-7xl flex items-center mx-auto' >
            <div className=' w-fit grid gap-5'>
              <p className='text-[#B4976C] md:text-xl text-xs '>DISCOUNT UPTO 75%, HURRY UP!</p>
              <h1 className='md:text-7xl text-2xl font-semibold'>Next generation <br /> Virtual reality</h1>
              <p className='md:text-xl text-xs'>VR is the most quick access to notifications, calls, messages, <br /> apps right on your wrist, reducting the constantly check.</p>
              <div className='md:text-md text-xs font-medium'>
                <button className='md:px-7 md:py-3 px-4 py-2 border rounded-full cursor-pointer active:scale-95 hover:-translate-y-1 transition-all bg-[#B4976C] hover:bg-gray-300 hover:textblack mr-5 '>Buy Now</button>
                <button className='md:px-7 md:py-3 px-4 py-2 border rounded-full cursor-pointer active:scale-95 hover:-translate-y-1 transition-all'>View More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default Hero