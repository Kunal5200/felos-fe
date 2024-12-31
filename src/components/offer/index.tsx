import React from "react";
import banner from "@/banner/offer.jpg";
import { Box, Container, Grid2, Typography } from "@mui/material";
import { COLORS } from "@/utils/colors";
import { poppins } from "@/utils/fonts";
import { Swiper, SwiperSlide } from "swiper/react";
import OfferCard from "./offerCard";
import { data } from "@/utils/data";
const Offer = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          height: 300,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Container>
          <Grid2 container>
            <Grid2 size={4}>
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontSize: 20,
                  fontFamily: poppins.style,
                }}
              >
                <Typography
                  component={"span"}
                  sx={{
                    color: COLORS.WHITE,
                    fontSize: 20,
                    fontFamily: poppins.style,
                    borderBottom: `2px solid ${COLORS.PRIMARY}`,
                  }}
                >
                  WHAT
                </Typography>{" "}
                WE OFFER FOR YOU
              </Typography>
              <Typography
                sx={{
                  color: COLORS.WHITE,
                  fontSize: 30,
                  fontFamily: poppins.style,
                  mt: 2,
                }}
              >
                Our{" "}
                <Typography
                  component={"span"}
                  sx={{
                    color: COLORS.PRIMARY,
                    fontSize: 30,
                    fontFamily: poppins.style,
                  }}
                >
                  Financial Advisors
                </Typography>{" "}
                Always Help You
              </Typography>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: COLORS.LIGHTGREY, px: 2, pb: 2, pt: 2 }}>
        <Container maxWidth="xl">
          <Swiper slidesPerView={6} spaceBetween={20}>
            {data.offerData.map((val, i) => (
              <SwiperSlide key={i}>
                <OfferCard
                  img={val.img}
                  heading={val.heading}
                  icon={val.icon}
                  description={val.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
    </div>
  );
};

export default Offer;
