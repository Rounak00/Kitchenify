import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import SwiperData from "../constant/SwiperData";

const swiper = () => {
  return (
    <>
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
     { 
       SwiperData.map((item,index)=>(
        <SwiperSlide key={index}>
          <img 
          src={item.address}
          alt="Slider" />
        </SwiperSlide>      
       ))
     }   
    
    </Swiper>
  </>
  )
}

export default swiper