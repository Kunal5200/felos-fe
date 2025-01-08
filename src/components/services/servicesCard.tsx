import { COLORS } from "@/utils/colors";
import { poppins400, poppins500 } from "@/utils/fonts";
import { SERVICEDATA } from "@/utils/types";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
// interface ServicesProps {
//   yellowIcon: string | StaticImageData;
//   blackIcon: string | StaticImageData;
//   heading: string;
//   description: string;
//   //   dataAos: string | undefined;
//   onClick?: () => void;
// }
const ServicesCard = ({ heading, description, onClick }: SERVICEDATA) => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const changePage = (title: string) => {
    router.push(`services/${title}/services-details`);
  };
  return (
    <div>
      <Card
        sx={{
          boxShadow: "none",
          backgroundColor: hovered ? COLORS.BLUE : COLORS.TRANSPARENT,
          border: `1px solid ${COLORS.BLUE}`,
          borderRadius: 2,
          p: 3,
          position: "relative",
          overflow: "hidden",
          height: 250,
          ":hover": {
            backgroundColor: COLORS.BLUE,
          },
          transition: "0.5s ease all",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-150%",
            width: "300%",
            height: "100%",
            background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)`,
            transform: "rotate(45deg)",
            animation: hovered ? "beam-animation 1s ease-in-out" : "none",
            zIndex: 0,
          },
          "@keyframes beam-animation": {
            "0%": { left: "-150%" },
            "100%": { left: "150%" },
          },
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
      >
        <Stack spacing={2} sx={{ position: "relative", zIndex: 1 }}>
        
          <Typography
            sx={{
              textTransform: "capitalize",
              color: hovered ? COLORS.WHITE : COLORS.BLUE,
              fontSize: "15px !important",
              fontFamily: poppins500.style,
              fontWeight: 550,
            }}
          >
            {heading}
          </Typography>
          <Typography
            sx={{
              color: hovered ? COLORS.WHITE : COLORS.GREY,
              fontSize: 18,
              mt: 10,
            }}
          >
            {description ? description.slice(0, 130) + "..." : ""}
          </Typography>
          <Box>
            <Button
              className=""
              endIcon={<ArrowForward />}
              sx={{
                color: hovered ? COLORS.WHITE : COLORS.BLUE,
                ":hover": {
                  svg: {
                    transform: "translateX(8px)",
                  },
                },
                svg: {
                  transition: "0.5s ease all",
                },
                fontFamily: poppins400.style,
                fontSize: 14,
                fontWeight: 500,
                position: "absolute",
                bottom: -50,
              }}
              onClick={onClick}
            >
              Read More
            </Button>
          </Box>
        </Stack>
      </Card>
    </div>
  );
};

export default ServicesCard;
