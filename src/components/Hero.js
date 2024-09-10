import React, { useState } from "react";
import BiryaniImg1 from "../assets/burger/burger1.png";
import BiryaniImg2 from "../assets/burger/burger2.png";
import BiryaniImg3 from "../assets/burger/burger3.png";
import Vector from "../assets/vector.png";
import { motion } from "framer-motion"; // Import framer-motion

const ImageList = [
  {
    id: 1,
    img: BiryaniImg1,
  },
  {
    id: 2,
    img: BiryaniImg2,
  },
  {
    id: 3,
    img: BiryaniImg3,
  },
];

const Hero = () => {
  const [imageId, setImageId] = useState(BiryaniImg1);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div className="min-h-[650px] bg-gray-100 " style={bgImage}>
        <div className="min-h-[650px] backdrop-blur-md flex justify-center items-center">
          <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }} // Starting state
                  animate={{ opacity: 1, y: 0 }} // Final state
                  transition={{ duration: 0.8 }} // Duration for the animation
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                >
                  Welcome to{" "}
                  <span
                    class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary drop-shadow-[4px_4px_0_rgba(255, 255, 255,1)] "
                    style={{
                      filter: "drop-shadow(4px 4px 0 rgba(255, 255, 255,1))",
                    }}
                  >
                    Burger
                  </span>{" "}
                  King
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }} // Delayed animation
                  className="text-sm"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio
                </motion.p>
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 }} // Button animation
                >
                  <button className="bg-gradient-to-r from-primary to-white hover:scale-105 duration-200 text-black font-bold py-2 px-4 rounded-full border-2 border-white">
                    Order Now
                  </button>
                </motion.div>
              </div>

              {/* Image section */}
              <div className="min-h-[400px] flex justify-center items-center relative order-1 sm:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }} // Image slide-in effect
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={imageId}
                    alt="biryani img"
                    className="max-w-[430px] hover:scale-105 duration-300 w-full mx-auto drop-shadow-[-6px_20px_15px_rgba(0,0,0,1)]"
                  />
                </motion.div>
                <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[-30px] lg:-right-10 bg-white/30 rounded-full">
                  {ImageList.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ scale: 1.1 }} // Zoom-in effect on hover
                      transition={{ duration: 0.3 }}
                      data-aos="zoom-in"
                      data-aos-offset="0"
                    >
                      <img
                        src={item.img}
                        onClick={() => {
                          setImageId(
                            item.id === 1
                              ? BiryaniImg1
                              : item.id === 2
                              ? BiryaniImg2
                              : BiryaniImg3
                          );
                        }}
                        alt="biryani img"
                        className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
