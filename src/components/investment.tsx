import videoBanner from "@/banner/video-banner.jpg";
import { COLORS } from "@/utils/colors";
import { data } from "@/utils/data";
import { poppins400, poppins500, poppins600 } from "@/utils/fonts";
import { PlayArrow } from "@mui/icons-material";
import { Box, Container, Grid2, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import Collapsable from "./collapse";
const Investment = () => {
  return (
    <div>
      <Container>
        <Grid2 container spacing={7}>
          <Grid2 size={6}>
            <Typography sx={{ fontSize: 32, fontFamily: poppins500.style }}>
              An{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: 32,
                  fontFamily: poppins600.style,
                  color: COLORS.PRIMARY,
                  fontWeight: "550 !important",
                }}
              >
                investment
              </Typography>{" "}
              in knowledge pays the best interest.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontSize: 15,
                fontFamily: poppins400.style,
                color: COLORS.GREY,
              }}
            >
              Why money’s in that office, right? If she start giving means about
              it ain’t there, and we got to go placing else and get it.
            </Typography>
            <Box sx={{ mt: 7 }}>
              <Collapsable data={data.accordionData} />
            </Box>
          </Grid2>
          <Grid2 size={6}>
            <Box sx={{ position: "relative" }}>
              <Image src={videoBanner} alt="" className="img-fluid" />
              <Box sx={{ position: "absolute", top: 30, left: 30 }}>
                <Box
                  sx={{ border: "10px solid #00000020", borderRadius: "50%" }}
                >
                  <Box
                    sx={{ border: "10px solid #00000040", borderRadius: "50%" }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: COLORS.WHITE,

                        width: 70,
                        height: 70,
                        ":hover": {
                          backgroundColor: COLORS.WHITE,
                        },
                      }}
                    >
                      <PlayArrow sx={{ fontSize: 40, color: COLORS.BLUE }} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Investment;