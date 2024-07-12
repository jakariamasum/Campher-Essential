import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import avater from "../../../assets/images/avater2.jpg";
import avater2 from "../../../assets/images/avater3.jpg";
import avater3 from "../../../assets/images/avatar.png";
import avater4 from "../../../assets/images/avatar4.jpg";
import avater5 from "../../../assets/images/avatar5.jpg";
import quote from "../../../assets/images/qoute.png";
import top_vector from "../../../assets/images/top_vector.png";
import bottom_vector from "../../../assets/images/bottom_vector.png";
import star from "../../../assets/images/star.png";

const Testimonials = () => {
  const reviews = [
    {
      id: "01",
      image: avater,
      quote:
        "Amazing camping gear! The quality is top-notch and made my trip unforgettable.",
      name: "John Doe",
      position: "Outdoor Enthusiast",
    },
    {
      id: "02",
      image: avater2,
      quote:
        "Excellent service and fast delivery. I'll definitely shop here again.",
      name: "Jane Smith",
      position: "Adventure Seeker",
    },
    {
      id: "03",
      image: avater3,
      quote:
        "The tent I bought was easy to set up and very durable. Highly recommend!",
      name: "Michael Brown",
      position: "Camper",
    },
    {
      id: "04",
      image: avater4,
      quote:
        "Great variety of products and competitive prices. Very satisfied with my purchase.",
      name: "Emily Johnson",
      position: "Backpacker",
    },
    {
      id: "05",
      image: avater5,
      quote:
        "Customer service was very helpful in choosing the right gear for my trip.",
      name: "Chris Lee",
      position: "Hiker",
    },
  ];

  return (
    <section className="w-full mx-auto max-w-[1400px] px-6 mt-24 overflow-hidden">
      <div className="mx-auto text-center">
        <h2 className="text-[25px] md:text-[40px] text-textColor font-[600]">
          Check what our{" "}
          <span className="text-blue-500">clients are saying</span>{" "}
        </h2>
        <p className="text-lg text-gray-400">
          Here are some of the most reviews we receive about our products and
          services. Take a look here.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-12"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className=" flex flex-col lg:flex-row gap-6  items-center p-6 bg-white rounded-lg shadow-lg">
              <div className="relative">
                <img
                  src={top_vector}
                  alt="vector_image"
                  className="absolute top-[-50px] left-[-50px] z-10"
                />
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-[250px] md:w-[350px]"
                />
                <img
                  src={bottom_vector}
                  alt="vector_image"
                  className="w-[80px] md:w-[120px] absolute bottom-[-70px] right-[-70px] z-10"
                />
              </div>
              <div className="w-full text-center">
                <img
                  src={quote}
                  alt="quote"
                  className="mb-6 w-[20px] md:w-[50px] mx-auto"
                />
                <img
                  src={star}
                  alt="star"
                  className="w-[100px] md:w-[200px] mx-auto"
                />
                <p className="text-[20px] md:text-[30px] font-[500] my-3">
                  {review.quote}
                </p>
                <h2 className="text-[18px] md:text-[20px] font-[500] mt-6">
                  {review.name}
                </h2>
                <p className="text-[14px] md:text-[16px] text-[#757095]">
                  {review.position}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
