import testimonialBanner from "@/banner/testimonial_banner.jpg";
import { TestimonialData } from "@/utils/testimonialData";
import {
  Box,
  Container,
  Divider,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./testimonialCard";
import { COLORS } from "@/utils/colors";
import { poppins500, poppins600 } from "@/utils/fonts";
import Image from "next/image";
const Testimonials = () => {
  return (
    <div>
      <Box
        sx={{
          // backgroundImage: `url(${testimonialBanner.src})`,
          height: { lg: 350, xs: 300 },
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: COLORS.LIGHTGREY,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 25,
              fontFamily: poppins600.style,
              color: COLORS.PRIMARY,
              mb: 5,
            }}
          >
            Client Testimonials
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
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {TestimonialData.map((val, i) => (
              <SwiperSlide key={i}>
                {/* <TestimonialCard
                  img={val.img}
                  content={val.content}
                  name={val.name}
                  designation={val.designation}
                /> */}
                <Box
                  sx={{
                    boxShadow: "0px 0px 5px 5px rgb(0,0,0,0,0.50)",
                    borderRadius: 2,
                    p: 2,
                    backgroundColor: COLORS.WHITE,
                  }}
                >
                  <Typography
                    sx={{ fontSize: 14, fontFamily: poppins500.style }}
                  >
                    {val.content}
                  </Typography>
                  <Divider sx={{ mt: 2, mb: 2 }} />
                  <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Image
                      src={val.img}
                      alt=""
                      width={50}
                      style={{ borderRadius: "50%" }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          color: COLORS.PRIMARY,
                          fontFamily: poppins600.style,
                        }}
                      >
                        {val.name},
                      </Typography>
                      <Typography
                        sx={{
                          color: COLORS.BLACK,
                          fontFamily: poppins500.style,
                        }}
                      >
                        {val.designation}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
    </div>
  );
};

export default Testimonials;
