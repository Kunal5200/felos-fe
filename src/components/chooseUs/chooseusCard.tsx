import { Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import leadership from "@/icon/leadership.png";
import { poppins400, poppins500 } from "@/utils/fonts";
import { COLORS } from "@/utils/colors";
import { CHOOSEPROPS } from "@/utils/types";
const ChooseCard = ({ img, heading, content }: CHOOSEPROPS) => {
  return (
    <div>
      <Card sx={{ p: 2, height: 180 }}>
        <Image src={img} alt="" width={40} />

        <Typography sx={{ fontSize: 20, fontFamily: poppins500.style, mt: 1 }}>
          {heading}
        </Typography>
        <Typography
          sx={{
            fontSize: 17,
            fontFamily: poppins400.style,
            mt: 1,
            color: COLORS.GREY,
          }}
        >
          {content}
        </Typography>
      </Card>
    </div>
  );
};

export default ChooseCard;
