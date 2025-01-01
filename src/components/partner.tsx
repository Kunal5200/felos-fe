import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import partner1 from "@/partner/partner-1.jpg";
import Image from "next/image";
import { Container } from "@mui/material";
import { data } from "@/utils/data";
const Partner = () => {
  return (
    <div>
      <Container>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {data.partner.map((val, i) => (
            <SwiperSlide key={i} style={{textAlign:"center"}}>
              <Image src={val.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Partner;
