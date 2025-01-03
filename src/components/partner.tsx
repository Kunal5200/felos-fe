import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import partner1 from "@/partner/partner-1.jpg";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import { data } from "@/utils/data";
import { poppins500, poppins600 } from "@/utils/fonts";
const Partner = () => {
  return (
    <div>
      <Container>
        <Typography
          sx={{
            fontSize: 30,
            fontFamily: poppins600.style,
            textAlign: "center",
          }}
        >
          Our Strategic Partners
        </Typography>
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
            <SwiperSlide
              key={i}
              style={{
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 200,
                }}
              >
                <Image src={val.img} alt="" width={200} />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Partner;
