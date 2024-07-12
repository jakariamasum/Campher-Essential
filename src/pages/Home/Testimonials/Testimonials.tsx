import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Campers Shop provided me with all the essentials for my camping trip. The quality of the gear was top-notch and made my experience unforgettable.",
      image: "../../../assets/images/category1.jpg",
    },
    {
      name: "Jane Smith",
      feedback:
        "I love shopping at Campers Shop! Their customer service is excellent, and they have a great selection of products. I highly recommend them!",
      image: "/images/testimonials/jane_smith.jpg",
    },
    {
      name: "Alex Johnson",
      feedback:
        "The tents and backpacks I bought from Campers Shop were perfect for our family camping trip. They made our adventure comfortable and enjoyable.",
      image: "/images/testimonials/alex_johnson.jpg",
    },
  ];

  return (
    <div className="max-w-[1230px] mx-auto my-12 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-4">
          What Our Customers <span className="text-[#22A1F0]">Say</span>
        </h1>
        <p className="text-lg text-gray-400">
          Hear from our satisfied customers about their experiences with Campers
          Shop. We value your feedback!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center mb-2">
              {testimonial.name}
            </h3>
            <p className="text-gray-600 text-center">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
