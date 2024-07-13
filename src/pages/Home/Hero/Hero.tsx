import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import hero1 from "../../../assets/images/hero1.jpg";
import hero2 from "../../../assets/images/hero2.jpg";
import hero3 from "../../../assets/images/hero3.jpg";

const Hero = () => {
  return (
    <div className=" max-w-full mx-auto px-2 mb-24 lg:mb-0">
      <Swiper
        cssMode={true}
        loop={true}
        pagination={true}
        mousewheel={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="lg:h-[100vh] h-[83vh] bg-cover bg-center rounded-md flex items-center justify-center"
            style={{
              backgroundImage: `url(${hero2})`,
            }}
          >
            <div className="text-center text-white px-4">
              <h2 className="text-xl uppercase mb-2 tracking-wider">
                Make your next camping trip stress free
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
                Classic Instant 300
              </h1>
              <p className="text-lg mb-6">
                Easy to Pop Up & Simple to Take Down
              </p>
              <button className="px-6 py-2 bg-white text-black font-bold border border-white hover:bg-transparent hover:text-white transition-all">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="lg:h-[100vh] h-[83vh] bg-cover bg-center rounded-md flex items-center justify-center"
            style={{
              backgroundImage: `url(${hero1})`,
            }}
          >
            <div className="text-center text-white px-4">
              <h2 className="text-xl uppercase mb-2 tracking-wider">
                Gear Up for Your Next Adventure
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
                Ultimate Camping Gear
              </h1>
              <p className="text-lg mb-6">
                High-Quality Gear for an Unforgettable Experience
              </p>
              <button className="px-6 py-2 bg-white text-black font-bold border border-white hover:bg-transparent hover:text-white transition-all">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="lg:h-[100vh] h-[83vh] bg-cover bg-center rounded-md flex items-center justify-center"
            style={{
              backgroundImage: `url(${hero3})`,
            }}
          >
            <div className="text-center text-white px-4">
              <h2 className="text-xl uppercase mb-2 tracking-wider">
                Discover the Best Camping Gear
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">
                Top-Notch Camping Supplies
              </h1>
              <p className="text-lg mb-6">
                Explore Our Wide Range of Camping Products
              </p>
              <button className="px-6 py-2 bg-white text-black font-bold border border-white hover:bg-transparent hover:text-white transition-all">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
