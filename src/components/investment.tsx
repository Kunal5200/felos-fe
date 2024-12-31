import { COLORS } from "@/utils/colors";
import { poppins } from "@/utils/fonts";
import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import Collapsable from "./collapse";

const Investment = () => {
  return (
    <div>
      <Container>
        <Grid2 container>
          <Grid2 size={6}>
            <Typography sx={{ fontSize: 32, fontFamily: poppins.style }}>
              An{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: 32,
                  fontFamily: poppins.style,
                  color: COLORS.PRIMARY,
                  fontWeight: "550 !important",
                }}
              >
                investment
              </Typography>{" "}
              in knowledge pays the best interest.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontSize: 18,
                fontFamily: poppins.style,
                color: COLORS.GREY,
              }}
            >
              Why money’s in that office, right? If she start giving means about
              it ain’t there, and we got to go placing else and get it.
            </Typography>
            <Box sx={{ mt: 10 }}>
              <Collapsable />
            </Box>
          </Grid2>
          <Grid2 size={6}></Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Investment;
