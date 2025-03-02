import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { MdOutlineStarPurple500 } from "react-icons/md";



const OurClients = () => {
    return (
        <div className="bg-[#333333] font-open-sans">
            <div className="md:w-7xl grid gap-10 md:mx-auto py-20">
                <div className="flex md:mx-0 mx-5 md:flex-row flex-col justify-between items-end font-open-sans">
                    <div className="grid gap-3">
                        <h1 className="md:text-4xl text-2xl font-bold ">Our Client’s Happiness
                        </h1>
                        <p className="">The Best electronics products continue to drive innovation and shape <br />
                            the way we live, work, and interact with our environment.
                        </p>
                    </div>
                    <Link to={'/'} className='px-7 py-3 border rounded-full cursor-pointer active:scale-95 hover:-translate-y-1 transition-all'>View More</Link>
                </div>
                <div>

                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[]}
                    className="mySwiper w-[100%] h-[100%]"
                >
                    <SwiperSlide>
                        <div>
                            <div className="flex items-center text-xl text-[#B4976C]">
                                <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 />
                            </div>
                            <h1 className="font-bold py-4">Best quality product</h1>
                            <p className="mb-4">“This smart home assistant has become very important part of my daily routine. From managing my schedule and setting reminders to controlling smart home devices and answering questions.”</p>
                            <h1 className="font-bold">Lisa Decamp</h1>
                            <p className="text-gray-400">Investor, Zemlex Co.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <div className="flex items-center text-xl text-[#B4976C]">
                                <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 />
                            </div>
                            <h1 className="font-bold py-4">Smart Home Assistant</h1>
                            <p className="mb-4">“This smart home assistant has become very important part of my daily routine. From managing my schedule and setting reminders to controlling smart home devices and answering questions.”</p>
                            <h1 className="font-bold">Willie Bradley</h1>
                            <p className="text-gray-400">Reporter</p>
                        </div>
                    </SwiperSlide>
                   
                    

                    <SwiperSlide>
                        <div>
                            <div className="flex items-center text-xl text-[#B4976C]">
                                <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 />
                            </div>
                            <h1 className="font-bold py-4">Amazing build quality</h1>
                            <p className="mb-4">“This smart home assistant has become very important part of my daily routine. From managing my schedule and setting reminders to controlling smart home devices and answering questions.”</p>
                            <h1 className="font-bold">Cameron Williamson</h1>
                            <p className="text-gray-400">Banker, Simtom Bank Co.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div>
                            <div className="flex items-center text-xl text-[#B4976C]">
                                <MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 /><MdOutlineStarPurple500 />
                            </div>
                            <h1 className="font-bold py-4">Smart Home Assistant</h1>
                            <p className="mb-4">“This smart home assistant has become very important part of my daily routine. From managing my schedule and setting reminders to controlling smart home devices and answering questions.”</p>
                            <h1 className="font-bold">Brain Armstrong</h1>
                            <p className="text-gray-400]">CEO Deplex Group</p>
                        </div>
                    </SwiperSlide>
                   
                    

                </Swiper>
            </div>
        </div>
    )
}

export default OurClients







