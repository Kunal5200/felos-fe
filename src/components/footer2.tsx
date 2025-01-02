import {
  Box,
  Container,
  Divider,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
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
import { poppins400, poppins500, poppins600 } from "@/utils/fonts";
import { Email, LocationOn, Phone } from "@mui/icons-material";
const Footer2 = () => {
  const phone = useMediaQuery("(max-width:600px)");

  const contact = [
    {
      icon: <Phone />,
      label: "+91-965081233",
    },
    {
      icon: <Email />,
      label: "Support@prefinn.com",
    },
    {
      icon: <LocationOn />,
      label: "Plot No.77, Sector-37, Gurugram, Haryana-122001",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${footerBanner.src})`,
          height: { lg: "70vh", xs: "100%" },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(10, 78, 25, 0.95)",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container>
            <Grid2 container spacing={5}>
              <Grid2 size={{ lg: 4, xs: 12 }}>
                <Image src={logo} alt="" width={200} />
                <Typography
                  sx={{
                    fontFamily: poppins400.style,
                    fontSize: 15,
                    color: COLORS.WHITE,
                    p: 2,
                  }}
                >
                  Prefinn is a Fintech Solution Partner firm specializing in
                  finance and fintech, founded by expert banking professionals
                  with extensive experience in areas.
                </Typography>

                <Stack direction="row" alignItems={"center"} spacing={1} mt={2}>
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
                          fontSize: { lg: 25, xs: 14 },
                        },
                      }}
                      key={i}
                    >
                      <val.icon />
                    </IconButton>
                  ))}
                </Stack>
              </Grid2>
              <Grid2 size={{ lg: 4, xs: 12 }} sx={{ px: { lg: 10, xs: 0 } }}>
                {data.footerLinks.map((val, i) => (
                  <>
                    <Typography
                      sx={{
                        fontSize: { lg: 18, xs: 15 },
                        fontFamily: poppins600.style,
                        color: COLORS.WHITE,

                        mb: 1,
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
                                  fontSize: { lg: 14, xs: 12 },
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
                  </>
                ))}
              </Grid2>
              <Grid2 size={{ lg: 4, xs: 12 }}>
                <Typography
                  sx={{
                    fontSize: { lg: 18, xs: 14 },
                    fontFamily: poppins600.style,
                    color: COLORS.WHITE,

                    mb: 1,
                  }}
                >
                  Contact Information
                </Typography>
                <List>
                  {contact.map((val, i) => (
                    <ListItem key={i}>
                      <ListItemAvatar
                        sx={{
                          backgroundColor: COLORS.PRIMARY,
                          minWidth: 40,
                          height: 40,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 3,
                        }}
                      >
                        {val.icon}
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontSize: {lg:15,xs:12},
                              color: COLORS.WHITE,
                              ml: 4,
                              fontFamily: poppins600.style,
                            }}
                          >
                            {val.label}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid2>
            </Grid2>
            {/* <Stack
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
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            ></Stack> */}
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer2;