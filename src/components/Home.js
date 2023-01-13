import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function Home() {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full" style={{maxHeight: '500px'}}
                        src="https://plus.unsplash.com/premium_photo-1661476110320-b186794b7844?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full" style={{maxHeight: '500px'}}
                        src="https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full "style={{maxHeight: '500px'}}
                        src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvdXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default Home;