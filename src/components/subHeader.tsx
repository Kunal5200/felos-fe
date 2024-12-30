import { COLORS } from "@/utils/colors";
import { data } from "@/utils/data";
import { poppins } from "@/utils/fonts";

import { Box, Button, Container, IconButton, Stack } from "@mui/material";
import React from "react";

const Subheader = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: COLORS.SECONDARY }}>
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              {data.socialIcons.map((val, i) => (
                <IconButton
                  sx={{
                    color: COLORS.WHITE,
                    ":hover": {
                      svg: {
                        color: COLORS.PRIMARY,
                        transform: "scale(0.8)",
                      },
                    },
                    svg: {
                      transition: "0.5s ease all",
                      fontSize: 18,
                    },
                  }}
                  key={i}
                >
                  <val.icon />
                </IconButton>
              ))}
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
              <Box
                sx={{ backgroundColor: COLORS.PRIMARY, width: 30, height: 40 }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  sx={{
                    position: "relative",
                    backgroundColor: COLORS.PRIMARY,
                    width: 300,
                    height: 40,
                    borderRadius: 0,
                    fontSize: 12,
                    color: COLORS.WHITE,
                    textTransform: "uppercase",
                    overflow: "hidden",

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: 20,
                      height: "100%",
                      backgroundColor: COLORS.SECONDARY,
                      transform: "skew(-30deg)",
                      transformOrigin: "top left",
                    },
                    fontFamily: poppins.style,
                  }}
                >
                  Request for Quote
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default Subheader;
