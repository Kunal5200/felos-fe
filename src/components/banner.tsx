import { COLORS } from "@/utils/colors";
import { poppins600 } from "@/utils/fonts";
import { BANNER_PROPS, BANNERPROPS } from "@/utils/types";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Banner = ({ img, heading }: BANNER_PROPS) => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${img})`,
          height: 200,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            backgroundColor: COLORS.DARK_OVERLAY,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography
              sx={{
                fontSize: 35,
                fontFamily: poppins600.style,
                color: COLORS.WHITE,
              }}
            >
              {heading}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
