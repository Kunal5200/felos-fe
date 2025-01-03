import { COLORS } from "@/utils/colors";
import { poppins600 } from "@/utils/fonts";
import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import ChooseCard from "./chooseusCard";
import { data } from "@/utils/data";

const ChooseUs = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.LIGHTGREY, p: 4 }}>
      <Container>
        <Typography sx={{ fontSize: 30, fontFamily: poppins600.style }}>
          Why Choose Us?
        </Typography>

        <Grid2 container mt={4} spacing={4}>
          {data.chooseData.map((val, i) => (
            <Grid2 size={{ lg: 4, xs: 12 }} key={i}>
              <ChooseCard
                img={val.img}
                heading={val.heading}
                content={val.content}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
};

export default ChooseUs;
