import React from "react";
import profile from "@/banner/profile.jpg";
import { Avatar, Box, Divider, Grid2, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { COLORS } from "@/utils/colors";
import { poppins400, poppins500, poppins600 } from "@/utils/fonts";
import { TESTIMONIAL_DATA } from "@/utils/types";
const TestimonialCard = ({
  img,
  content,
  name,
  designation,
}: TESTIMONIAL_DATA) => {
  return (
    <Box
      sx={{
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        borderRadius: 10,
        p: 3,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{ 
          fontSize: { lg: 21, xs: 12 },
          color: COLORS.BLACK,
          fontFamily: poppins400.style,
          textAlign: "center",
          mt: 2,
          lineHeight: "30px",
        }}
      >
        {content}
      </Typography>
      <Divider />
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Avatar></Avatar>
        <Box>
          <Typography
            textAlign={"center"}
            mt={2}
            sx={{ color: COLORS.PRIMARY, fontFamily: poppins600.style }}
          >
            {name},{" "}
            <Typography component={"span"} sx={{ color: COLORS.BLACK }}>
              {designation}
            </Typography>
          </Typography>
        </Box>
      </Stack>
      {/* <Box textAlign={"center"} sx={{ borderRadius: "50%" }}>
        <Image src={img} alt="" width={50} style={{ borderRadius: "50%" }} />
      </Box>
      <Typography
        sx={{
          fontSize: { lg: 21, xs: 12 },
          color: COLORS.BLACK,
          fontFamily: poppins400.style,
          textAlign: "center",
          mt: 2,
          lineHeight: "30px",
        }}
      >
        {content}
      </Typography>
      <Typography
        textAlign={"center"}
        mt={2}
        sx={{ color: COLORS.PRIMARY, fontFamily: poppins600.style }}
      >
        {name},{" "}
        <Typography component={"span"} sx={{ color: COLORS.BLACK }}>
          {designation}
        </Typography>
      </Typography> */}
    </Box>
  );
};

export default TestimonialCard;
