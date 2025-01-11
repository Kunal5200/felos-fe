import { COLORS } from "@/utils/colors";
import {
  Box,
  Button,
  Card,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import sign from "@/logo/sign.png";
import Image from "next/image";
import { textField } from "@/utils/styles";
import { poppins600, poppins400, poppins500 } from "@/utils/fonts";
import { data } from "@/utils/data";
import { ABOUTDESCRIPTION } from "@/utils/types";
import { ArrowForward } from "@mui/icons-material";
const About = ({
  heading1,
  coloredHeading,
  heading2,
  description,
  list,
  description2,
  listDescription,
  img,
  fontWeight,
}: ABOUTDESCRIPTION) => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Container maxWidth="lg">
        <Grid2
          container
          spacing={10}
          alignItems={fontWeight ? "start" : "center"}
        >
          <Grid2 size={{ lg: 6, xs: 12 }} data-aos="fade-right">
            <Typography
              sx={{
                fontSize: fontWeight ? 20 : 30,
                fontFamily: fontWeight ? poppins600.style : poppins400.style,
              }}
            >
              {heading1}{" "}
              <Typography
                sx={{
                  fontSize: 30,
                  fontFamily: poppins600.style,
                  fontWeight: "600 !important",
                  color: COLORS.DARKPRIMARY,
                }}
                component={"span"}
              >
                {coloredHeading}
              </Typography>{" "}
              {heading2}
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontSize: 14,
                color: COLORS.BLACK,
                // fontWeight: "500 !important",
                fontFamily: poppins400.style,
              }}
            >
              {description}
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontSize: 14,
                color: COLORS.BLACK,
                // fontWeight: "500 !important",
                fontFamily: poppins400.style,
              }}
            >
              {listDescription}
            </Typography>
            <List>
              {list?.map((val, i) => (
                <ListItem disablePadding key={i}>
                  <ListItemAvatar>
                    <ArrowForward sx={{ color: COLORS.BLUE }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontFamily: poppins400.style,
                          color: COLORS.BLACK,
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
          <Grid2 size={{ lg: 6, xs: 11 }} sx={{ textAlign: "center" }}>
            <Image src={img} alt="" width={phone ? 350 : 300} />
          </Grid2>
        </Grid2>

        <Typography
          sx={{
            mt: 2,
            fontSize: 14,
            color: COLORS.BLACK,

            fontFamily: poppins400.style,
          }}
        >
          {description2}
        </Typography>
      </Container>
    </div>
  );
};

export default About;
