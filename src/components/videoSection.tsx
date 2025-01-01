import { Box, Container, Grid2, IconButton, Typography } from "@mui/material";
import React from "react";
import bannerVideo from "@/banner/banner-video.jpg";
import { COLORS } from "@/utils/colors";
import { poppins500, poppins600, poppins700 } from "@/utils/fonts";
import { PlayArrow } from "@mui/icons-material";
const VideoSection = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${bannerVideo.src})`,
          height: 400,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Grid2 container>
            <Grid2
              size={{ lg: 5, xs: 12 }}
              margin={"auto"}
              sx={{ textAlign: "-webkit-center" }}
            >
              <Typography
                sx={{
                  fontSize: 25,
                  color: COLORS.WHITE,
                  textAlign: "center",
                  fontFamily: poppins500.style,
                }}
              >
                People’s everyday routines will keep the{" "}
                <Typography
                  sx={{
                    fontSize: 25,
                    color: COLORS.PRIMARY,
                    textAlign: "center",
                    fontFamily: poppins700.style,
                  }}
                  component={"span"}
                >
                  stock market
                </Typography>{" "}
                going
              </Typography>
              <Box margin={"auto"} sx={{ textAlign: "-webkit-center", mt: 2 }}>
                <Box
                  sx={{
                    border: "10px solid #EBA80030",
                    borderRadius: "50%",
                    width: 90,
                    height: 90,
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      border: "10px solid #EBA80040",
                      borderRadius: "50%",
                      width: 80,
                      height: 80,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: COLORS.PRIMARY,

                        width: 80,
                        height: 80,
                        ":hover": {
                          backgroundColor: COLORS.PRIMARY,
                        },
                      }}
                    >
                      <PlayArrow sx={{ fontSize: 40, color: COLORS.WHITE }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default VideoSection;
