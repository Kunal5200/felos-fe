import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import icon from "@/aboutServices/icon-1.png";
import { COLORS } from "@/utils/colors";
import { poppins400, poppins500, poppins600 } from "@/utils/fonts";
import { SERVICESCARD } from "@/utils/types";
const AboutServiceCard = ({ img, title, content }: SERVICESCARD) => {
  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
          ":hover": {
            ".icon_box": {
              backgroundColor: COLORS.SECONDARY,
            },
          },
          ".icon_box": {
            transition: "all 0.5s ease",
          },
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            backgroundColor: COLORS.PRIMARY,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
          className={"icon_box"}
        >
          <Image src={img} alt="" width={30} />
        </Box>
        <Typography sx={{ mt: 2, fontFamily: poppins600.style }}>
          {title}
        </Typography>
        <Typography
          sx={{
            mt: 2,
            fontFamily: poppins400.style,
            fontSize: 13,
            color: COLORS.GREY,
          }}
        >
          {content}
        </Typography>
      </Box>
    </div>
  );
};

export default AboutServiceCard;
