import { COLORS } from "@/utils/colors";
import { poppins500, poppins800 } from "@/utils/fonts";
import { BANNERPROPS } from "@/utils/types";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import localFont from "next/font/local";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSection = ({ data }: BANNERPROPS) => {
  return (
    <div>
      <Swiper
        loop
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
          delay: 4000,
        }}
      >
        {data.map((val, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                backgroundImage: `url(${val.img})`,
                height: { lg: "100vh", xs: "60vh" },
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Container>
                <Grid2
                  container
                  className="animate__animated animate__fadeInDown"
                >
                  <Grid2 size={8}>
                    <Typography
                      sx={{
                        color: COLORS.WHITE,
                        fontSize: { lg: 18, xs: 14 },
                        letterSpacing: 4,
                        fontFamily: "poppins",
                        textTransform: "uppercase",
                      }}
                    >
                      {val.subHeading}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { lg: 60, xs: 30 },
                        fontFamily: poppins800.style,
                        color: COLORS.PRIMARY,
                        textTransform: "capitalize",
                      }}
                    >
                      {val.heading}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { lg: 16, xs: 12 },
                        fontFmaily: poppins500.style,
                        color: COLORS.WHITE,
                        fontWeight: "600 !important",
                      }}
                    >
                      {val.description}
                    </Typography>
                    <Stack
                      direction={{ lg: "row", xs: "column" }}
                      alignItems={{ lg: "center", xs: "flex-start" }}
                      spacing={2}
                      sx={{ mt: 2 }}
                    >
                      <Button
                        sx={{
                          backgroundColor: COLORS.BLUE,
                          color: COLORS.WHITE,
                          fontSize: 12,
                          fontFamily: poppins500.style,
                          width: 180,
                          borderRadius: 8,
                          fontWeight: "550 !important",
                          p: 1,
                        }}
                      >
                        About Company
                      </Button>
                      <Button
                        sx={{
                          backgroundColor: COLORS.TRANSPARENT,
                          color: COLORS.WHITE,
                          fontSize: 12,
                          fontFamily: poppins500.style,
                          width: 180,
                          borderRadius: 8,
                          fontWeight: "550 !important",
                          border: `1px solid ${COLORS.WHITE}`,
                          p: 1,
                        }}
                      >
                        Contact Us
                      </Button>
                    </Stack>
                  </Grid2>
                </Grid2>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
