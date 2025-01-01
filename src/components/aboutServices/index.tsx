import { COLORS } from "@/utils/colors";
import { poppins500, poppins600 } from "@/utils/fonts";
import { Box, Container, Divider, Grid2, Typography } from "@mui/material";
import React from "react";
import AboutServiceCard from "./aboutServiceCard";
import { data } from "@/utils/data";

const AboutServices = () => {
  return (
    <div>
      <Box sx={{ textAlign: "center" }}>
        <Grid2 container>
          <Grid2 size={{ lg: 4, xs: 12 }} margin="auto">
            <Typography
              sx={{
                fontSize: 14,
                color: COLORS.BLUE,
                letterSpacing: 4,
                fontFamily: poppins600.style,
              }}
            >
              Strategy Development
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Divider
                sx={{
                  width: 30,
                  borderColor: COLORS.PRIMARY,
                  borderWidth: 1,
                  margin: "auto",
                }}
              />
            </Box>
            <Typography
              sx={{ fontSize: 30, mt: 2, fontFamily: poppins500.style }}
            >
              Vision Without a Strategy Remains an{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: 30,
                  fontFamily: poppins600.style,
                  color: COLORS.PRIMARY,
                }}
              >
                Illusion
              </Typography>
            </Typography>
          </Grid2>
        </Grid2>
        <Container sx={{ mt: 6 }}>
          <Grid2 container spacing={7}>
            {data.aboutServices.map((val, i) => (
              <Grid2 size={{ lg: 4, xs: 12 }} key={i}>
                <AboutServiceCard
                  img={val.img}
                  title={val.title}
                  content={val.content}
                />
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default AboutServices;
