import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import projectBanner from "@/banner/project-background.jpg";
import { COLORS } from "@/utils/colors";
import CountUp from "react-countup";
import { poppins500 } from "@/utils/fonts";
import { data } from "@/utils/data";
import Image from "next/image";
const Counter = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${projectBanner.src})`,
          height: { lg: "50vh", xs: "100%" },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          pt: 2,
          pb: 2,
        }}
      >
        <Container>
          <Grid2 container spacing={3}>
            {data.counterData.map((val, i) => (
              <Grid2 size={{ lg: 3, xs: 12 }}>
                <Box
                  sx={{
                    borderTop: `4px solid ${COLORS.BLUE} !important`,
                    border: `1px solid ${COLORS.BLUE}`,
                    p: 1,
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: 200,
                  }}
                >
                  <Box>
                    <Box>
                      <Image src={val.img} alt="" width={40} />
                    </Box>

                    <CountUp
                      end={val.number}
                      style={{
                        fontSize: 45,
                        fontWeight: 700,
                        textAlign: "center",
                      }}
                      suffix={val.suffix}
                      duration={7}
                    />
                    <Typography
                      sx={{ fontSize: 20, fontFamily: poppins500.style, mt: 1 }}
                    >
                      {val.label}
                    </Typography>
                  </Box>
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default Counter;
