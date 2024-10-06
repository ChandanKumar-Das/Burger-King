import React from "react";
import Img2 from "../assets/burger/burger2.png";
import Img3 from "../assets/burger/burger3.png";
import HeaderTitle from "./HeaderTitle/HeaderTitle.js";
import { useContext } from "react"

import {AppContext} from '../context/Appcontext.js'
import { useNavigate } from "react-router-dom";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Burger",
    value:'ALL',
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img3,
    name: "Non-Veg",
    value: "NON_VEG",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Veg",
    value: "VEG",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];
const Services = () => {
  
   const {allData ,setFilterData} = useContext(AppContext)

   const navigate = useNavigate()

   const  handleFoodType = (value) => {
    //console.log(value);
    try{
      let filteredData;
      if (value === 'VEG') {
        filteredData = allData.filter((item) => item.category === 'veg');
      } else if (value === 'NON_VEG') {
        filteredData = allData.filter((item) => item.category === 'non-veg');
      } else {
        filteredData = allData;
      }

      setFilterData(filteredData);
      localStorage.setItem('burgerData',JSON.stringify(filteredData))
      navigate('/burger');
    }
    catch(error){
      console.log(error)
    }
      
  };

  return (
    <div className="bg-gray-100">
      <div className="py-12 lg:py-20">
        <div className="container">
          <HeaderTitle
            title="Services"
            subtitle=""
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt,"
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div key={service.id} onClick={()=>handleFoodType(service.value)}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className=" cursor-pointer rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-16
                   group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
