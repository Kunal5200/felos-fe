import { Box, Typography } from "@mui/material";
import React from "react";
import bg from "@/offer/img-1.jpeg";
import { COLORS } from "@/utils/colors";
import Image from "next/image";
import icon from "@/offer/icons/icon-1.png";
const OfferCard = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${bg.src})`,
          height: 200,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{ backgroundColor: COLORS.DARK_OVERLAY, height: "100%", p: 2 }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Image src={icon} alt="" width={30} />
          </Box>
          <Typography sx={{ textAlign: "center", fontSize: 20 }}>
            Turnaround Consulting
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default OfferCard;
