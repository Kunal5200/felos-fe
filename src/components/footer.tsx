import {
  Box,
  Container,
  Divider,
  Grid2,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import footerBanner from "@/banner/footer_banner.jpg";
import Image from "next/image";
import logo from "@/logo/logo.png";
import { data } from "@/utils/data";
import { COLORS } from "@/utils/colors";
import { poppins500, poppins600 } from "@/utils/fonts";
const Footer = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${footerBanner.src})`,
          height: { lg: "100vh", xs: "100%" },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(10,44,78,0.95)",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 3,
            pt: 0,
          }}
        >
          <Container>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Image src={logo} alt="" width={phone ? 100 : 200} />
              <Stack direction="row" alignItems={"center"} spacing={1}>
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
                        fontSize: { lg: 18, xs: 14 },
                      },
                    }}
                    key={i}
                  >
                    <val.icon />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
            <Divider sx={{ mt: 4, borderColor: "#f8f8f8" }} />

            <Grid2 container spacing={10} mt={3}>
              {data.footerLinks.map((val, i) => (
                <Grid2 size={{ lg: 4, xs: 6 }}>
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontFamily: poppins600.style,
                      color: COLORS.WHITE,
                    }}
                  >
                    {val.heading}
                  </Typography>
                  <List>
                    {val.list.map((item, index) => (
                      <ListItemButton
                        key={index}
                        sx={{ padding: 0, paddingBottom: 1 }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                fontSize: 12,
                                fontFamily: poppins500.style,
                                color: COLORS.WHITE,
                              }}
                            >
                              {item.label}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Grid2>
              ))}
            </Grid2>
            <Divider sx={{ mt: 4, borderColor: "#f8f8f8" }} />
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>

            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
