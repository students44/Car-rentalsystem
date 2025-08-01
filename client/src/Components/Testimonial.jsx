import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import '../index.css'


const Testimonial = () => {
  // testimonial data
  const testimonials = [
    {
      name: "Tania Jameel",
      location: "Islamabad",
      image: assets.testimonial_image_1,
      Testimonial:"I’ve used many car rental services before, but this one stands out! The booking process was smooth, the car was clean and well-maintained, and everything was right on time. Perfect for my business trip — highly recommended!" ,
    },
    {
      name: "Alan walker",
      location: "Germany",
      image: assets.testimonial_image_2,
      Testimonial:
        "We rented an SUV for our family vacation and it was a fantastic experience. The vehicle was spacious, comfortable, and fuel-efficient. Customer support was helpful and friendly. Will definitely use this service again!",
    },
    {
      name: "Nima",
      location: "France",
      image:assets.testimonial_image_2,
      Testimonial:"As a first-time renter, I was a bit nervous, but the entire process was simple and hassle-free. The app made everything easy, and I got a great car at an affordable price. 10/10 experience",
    },
  ];



  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44" style={{ backgroundColor: '#F3F4F6' }}>
      {/* mount title components */}
      <Title
        title="What Your Customer Says"
        subtitle="Discover why discerning travelers choose stayVenture  for their luxury accomodations around the world."
      />


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mt-18">
  {testimonials.map((testimonial, index) => (
    <div
      key={index}
      className="testimonial-card bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500 relative"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 rounded-full"
            src={testimonial.image}
            alt={testimonial.name}
          />
          <div>
            <p className="text-xl">{testimonial.name}</p>
            <p className="text-gray-500">{testimonial.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 mt-4">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <img key={index} src={assets.star_icon} alt="star icon not found" />
            ))}
        </div>
        <p className="text-gray-500 max-w-90 mt-4 font-light">
          "{testimonial.Testimonial}"
        </p>
      </div>
    </div>
  ))}
</div>



    </div>
  );
};

export default Testimonial;
