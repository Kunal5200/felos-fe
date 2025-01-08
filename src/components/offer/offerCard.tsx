import { Box, Card, CardActionArea, Typography } from "@mui/material";
import React, { useState } from "react";
import bg from "@/offer/img-1.jpeg";
import { COLORS } from "@/utils/colors";
import Image from "next/image";
import icon from "@/offer/icons/icon-1.png";
import { OFFERDATA } from "@/utils/types";
import { poppins500, poppins600 } from "@/utils/fonts";

const OfferCard = ({ img, heading, icon, description }: OFFERDATA) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          transition: "all 0.5s ease-in-out",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          boxShadow: "0px 0px 10px 10px rgb(0,0,0,0.10)",
        }}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Box
          sx={{
            backgroundImage: `url(${img})`,
            height: 240,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <Box
            sx={{
              backgroundColor: hovered ? COLORS.DARK_OVERLAY : COLORS.LIGHTGREY,
              height: "100%",
              p: 2,
              transition: "background-color 0.5s ease-in-out",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <Image src={icon} alt="" width={30} />
            </Box>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 16,
                color: hovered ? COLORS.WHITE : COLORS.BLACK,
                fontFamily: poppins600.style,
                fontWeight: "600 !important",
                transition: "color 0.5s ease-in-out",
                mt: 2,
              }}
            >
              {heading}
            </Typography>
            {!hovered && (
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: 14,
                  color: COLORS.GREY,
                  fontFamily: poppins500.style,
                  mt: 2,
                  opacity: hovered ? 0 : 1,
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                {description}
              </Typography>
            )}
            {hovered && (
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: 15,
                  fontFamily: poppins500.style,
                  color: COLORS.PRIMARY,
                  position: "absolute",
                  bottom: 20,
                  left: "50%",
                  transform: "translateX(-50%)", // Center text horizontally
                  transition: "all 0.5s ease-in-out",
                }}
              >
                Learn More
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            borderBottom: `4px solid ${
              hovered ? COLORS.PRIMARY : COLORS.TRANSPARENT
            }`,
            transition: "border-color 0.5s ease-in-out",
          }}
        ></Box>
      </Box>
    </Card>
  );
};

export default OfferCard;
