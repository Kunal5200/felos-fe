import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import projectBanner from "@/banner/project-background.jpg";
import { poppins600, poppins500 } from "@/utils/fonts";
import { COLORS } from "@/utils/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./projectCard";
import { PROJECTDATA } from "@/utils/projectData";
const Projects = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${projectBanner.src})`,
          height: "100%",
          pt: 10,
          pb: 10,
        }}
      >
        <Container>
          <Stack
            direction={{ lg: "row", xs: "column" }}
            alignItems={{ lg: "center", xs: "flex-start" }}
            justifyContent={"space-between"}
            mt={{ lg: 0, xs: 2 }}
            mb={{ lg: 0, xs: 4 }}
          >
            <Box>
              {/* <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: poppins600.style,
                  letterSpacing: "3.2px",
                  height: "34.8px",
                  borderBottom: `3px solid ${COLORS.PRIMARY}`,
                  width: 40,
                }}
              >
                Projects
              </Typography> */}
              <Typography
                sx={{
                  mt: 3,
                  fontSize: { lg: 32, xs: 25 },
                  fontFamily: poppins500.style,
                  width: { lg: 500, xs: "100%" },
                }}
              >
                Our{" "}
                <Typography
                  sx={{
                    fontSize: { lg: 32, xs: 25 },
                    color: COLORS.PRIMARY,
                    fontWeight: 600,
                    fontFamily: poppins600.style,
                  }}
                  component={"span"}
                >
                  Success Stories
                </Typography>
              </Typography>
            </Box>
            <Stack direction={"row"} alignItems={"center"} spacing={10}>
              <Button
                sx={{
                  borderTop: `2px solid ${COLORS.GREY}`,
                  width: 58,
                  position: "relative",
                  height: 47,
                  padding: "10px,3px",
                  borderLeft: `2px solid ${COLORS.GREY}`,
                  borderBottom: `2px solid ${COLORS.GREY}`,
                  borderRadius: 0,
                  borderRight: `2px solid ${COLORS.GREY}`,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    position: "absolute",
                    letterSpacing: 6,
                    right: -25,
                    backgroundImage: `url(${projectBanner.src})`,

                    color: COLORS.GREY,
                    fontFamily: poppins500.style,
                  }}
                >
                  Prev
                </Typography>
              </Button>
              <Button
                sx={{
                  borderTop: `2px solid ${COLORS.GREY}`,
                  width: 58,
                  position: "relative",
                  height: 47,
                  padding: "10px,3px",
                  borderLeft: `2px solid ${COLORS.GREY}`,
                  borderBottom: `2px solid ${COLORS.GREY}`,
                  borderRadius: 0,
                  borderRight: `2px solid ${COLORS.GREY}`,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    position: "absolute",
                    letterSpacing: 6,
                    left: -25,
                    backgroundImage: `url(${projectBanner.src})`,

                    color: COLORS.GREY,
                    fontFamily: poppins500.style,
                  }}
                >
                  Next
                </Typography>
              </Button>
            </Stack>
          </Stack>
          <Box sx={{ mt: 4 }}>
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
              {PROJECTDATA.map((val, i) => (
                <SwiperSlide key={i}>
                  <ProjectCard
                    img={val.img}
                    content={val.content}
                    heading={val.heading}
                    title={val.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Projects;
