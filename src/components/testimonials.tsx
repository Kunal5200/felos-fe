import testimonialBanner from "@/banner/testimonial_banner.jpg";
import { TestimonialData } from "@/utils/testimonialData";
import { Box } from "@mui/material";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./testimonialCard";
const Testimonials = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${testimonialBanner.src})`,
          height: {lg:450,xs:300},
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Swiper>
          {TestimonialData.map((val, i) => (
            <SwiperSlide>
              <TestimonialCard
                img={val.img}
                content={val.content}
                name={val.name}
                designation={val.designation}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default Testimonials;
