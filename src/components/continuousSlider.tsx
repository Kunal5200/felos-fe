import { data } from "@/utils/data";
import { poppins600 } from "@/utils/fonts";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ContinuousSlider = () => {
  return (
    <div>
      <Typography
        sx={{ fontSize: 30, fontFamily: poppins600.style, textAlign: "center" }}
      >
        Our Lending Partners
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Marquee>
          {data.lendingPartner.map((val, i) => (
            <Box sx={{ px: 4 }} key={i}>
              <Image src={val.img} alt="" width={150} />
            </Box>
          ))}
        </Marquee>
      </Box>
    </div>
  );
};

export default ContinuousSlider;
