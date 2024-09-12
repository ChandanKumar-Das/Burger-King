import React from "react";
import Slider from "react-slick";
import HeaderTitle from "./HeaderTitle/HeaderTitle";

const settings = {
  dots: false,
  arrows: false,
  loop: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  mobileFirst: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
};
const TestimonialData = [
  {
    id: 1,
    name: "Samuel",
    testimonial:
      "The burgers here are absolutely incredible! Every bite is packed with juicy, flavorful goodness that leaves you craving more. The bun is perfectly toasted, the meat is cooked to perfection, and the toppings are fresh and vibrant. It’s honestly the best burger I’ve ever had. If you’re looking for a mouthwatering experience that hits all the right notes, this is the place to be!"

,
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    testimonial:
      "The burgers here are absolutely incredible! Every bite is packed with juicy, flavorful goodness that leaves you craving more. The bun is perfectly toasted, the meat is cooked to perfection, and the toppings are fresh and vibrant. It’s honestly the best burger I’ve ever had. If you’re looking for a mouthwatering experience that hits all the right notes, this is the place to be!"

,
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    testimonial:
      "The burgers here are absolutely incredible! Every bite is packed with juicy, flavorful goodness that leaves you craving more. The bun is perfectly toasted, the meat is cooked to perfection, and the toppings are fresh and vibrant. It’s honestly the best burger I’ve ever had. If you’re looking for a mouthwatering experience that hits all the right notes, this is the place to be!"

,
    img: "https://picsum.photos/103/103",
  },
];
const Testimonial = () => {
  return (
    <>
      <div className=" bg-gray-100">
        <div className="container ">
          {/* Header  */}
          <HeaderTitle
            title="Testimonial"
            subtitle="What our customers say"
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt,"
            }
          />
          {/* testimonial */}
          <div className="max-w-[800px]  mx-auto">
           
            <Slider {...settings}>

              {TestimonialData.map((data) => (
                <div data-aos="fade-up" className="" key={data.id}>
                  <div className="text-center bg-[#ffffff] shadow-lg p-4 rounded-xl space-y-3 my-8 mx-5">
                    <img
                      className="rounded-full block mx-auto"
                      src={data.img}
                      alt=""
                    />
                    <p className="text-gray-500 text-sm">{data.testimonial}</p>
                    <h1 className="text-xl font-bold">{data.name}</h1>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
