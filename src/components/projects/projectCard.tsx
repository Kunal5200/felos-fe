import { Box, Typography } from "@mui/material";
import React from "react";
import img1 from "@/projects/img-1.jpg";
import { COLORS } from "@/utils/colors";
import { poppins500, poppins600, poppins700 } from "@/utils/fonts";
import { PROJECT_DATA } from "@/utils/types";

const ProjectCard = ({ img, heading, title, content }: PROJECT_DATA) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: 400,
        overflow: "hidden",
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        "&:hover .initialContent": {
          opacity: 0,
          visibility: "hidden",
          transform: "translateY(10px)",
          transition: "all 0.5s ease-in-out",
        },
        "&:hover .hoverContent": {
          transform: "translateY(0)",
          opacity: 1,
          visibility: "visible",
        },
      }}
    >
      {/* Hover Content */}
      <Box
        className="hoverContent"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(10, 44, 78, 0.80)",
          transform: "translateY(100%)",
          opacity: 0,
          visibility: "hidden",
          transition: "all 0.5s ease-in-out",
          px: 3,
          py: 4,
          top: 0,
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            color: COLORS.WHITE,
            fontFamily: poppins700.style,
            lineHeight: 1.5,
            mb: 2,
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontFamily: poppins500.style,
            color: COLORS.PRIMARY,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "2.6px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            color: COLORS.WHITE,
            fontFamily: poppins500.style,
            mt: 2,
            mb: 2,
          }}
        >
          {content}
        </Typography>
        <Typography
          sx={{
            color: COLORS.PRIMARY,
            fontSize: 12,
            fontFamily: poppins600.style,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Learn More
        </Typography>
      </Box>

      {/* Initial Content */}
      <Box
        className="initialContent"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background:
            "linear-gradient(0deg,#0a2c4e 0%,rgba(255,255,255,0) 100%)",
          px: 3,
          py: 4,
          transition: "all 0.5s ease-in-out",
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            color: COLORS.WHITE,
            fontFamily: poppins700.style,
            lineHeight: 1.5,
            mb: 2,
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontFamily: poppins500.style,
            color: COLORS.PRIMARY,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "2.6px",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectCard;
