import { COLORS } from "@/utils/colors";
import {
  Box,
  Button,
  Card,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import sign from "@/logo/sign.png";
import Image from "next/image";
import { textField } from "@/utils/styles";
import { poppins600, poppins400, poppins500 } from "@/utils/fonts";
import { data } from "@/utils/data";
import { ABOUTDESCRIPTION } from "@/utils/types";
const About = ({
  heading1,
  coloredHeading,
  heading2,
  description,
  list,
  description2,
  listDescription
}: ABOUTDESCRIPTION) => {
  // console.log("ttt",list)
  return (
    <div>
      <Container maxWidth="lg">
        <Grid2 container>
          <Grid2 size={{ lg: 6, xs: 12 }} sx={{ pt: 10 }}>
            <Typography
              sx={{
                fontSize: 30,
                fontFamily: poppins400.style,
                fontWeight: "300 !important",
              }}
            >
              {heading1} ,{" "}
              <Typography
                sx={{
                  fontSize: 30,
                  fontFamily: poppins600.style,
                  fontWeight: "600 !important",
                  color: COLORS.PRIMARY,
                }}
                component={"span"}
              >
                {coloredHeading}
              </Typography>{" "}
              {heading2}.
            </Typography>
            <Typography
              sx={{
                mt: 5,
                fontSize: 16,
                color: COLORS.GREY,
                // fontWeight: "500 !important",
                fontFamily: poppins400.style,
              }}
            >
              {description}
            </Typography>
            <Typography
              sx={{
                mt: 5,
                fontSize: 16,
                color: COLORS.GREY,
                // fontWeight: "500 !important",
                fontFamily: poppins400.style,
              }}
            >
              {listDescription}
            </Typography>
            <List>
              {list?.map((val, i) => (
                <ListItem disablePadding key={i}>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontFamily: poppins400.style,
                          color: COLORS.GREY,
                        }}
                      >
                        {val.label}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Typography
              sx={{
                mt: 3,
                fontSize: 16,
                color: COLORS.GREY,
                // fontWeight: "500 !important",
                fontFamily: poppins400.style,
              }}
            >
              {description2}
            </Typography>

            {/* <Stack
              direction={{ lg: "row", xs: "column" }}
              alignItems={{ lg: "center", xs: "flex-start" }}
              justifyContent={"space-between"}
              mt={5}
            >
              <Box>
                <Typography
                  sx={{
                    color: COLORS.BLUE,
                    fontSize: 16,
                    fontFamily: poppins500.style,
                    fontWeight: "500 !important",
                  }}
                >
                  Mohamed Arafa
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontFamily: poppins500.style,
                    color: COLORS.GREY,
                  }}
                >
                  CO-Founder
                </Typography>
              </Box>
              <Image src={sign} alt="sign" />
            </Stack> */}
          </Grid2>
          <Grid2 size={6}>
            <Card sx={{ width: 300, margin: "auto", p: 2 }}>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: poppins500.style,
                  color: COLORS.GREY,
                }}
              >
                You think water moves fast? You should see ice gun from alaska.
              </Typography>

              <TextField
                label="Full Name"
                variant="standard"
                sx={{ ...textField, mb: 2, mt: 2 }}
                fullWidth
              />
              <TextField
                label="Email Address"
                variant="standard"
                sx={{ ...textField, mb: 2 }}
                fullWidth
              />
              <TextField
                label="Phone Number"
                variant="standard"
                sx={{ ...textField, mb: 2 }}
                fullWidth
              />
              <TextareaAutosize
                placeholder="Message"
                className="textArea"
                minRows={5}
              />
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Button
                  sx={{
                    fontSize: 13,
                    backgroundColor: COLORS.BLUE,
                    color: COLORS.WHITE,
                    fontFamily: poppins500.style,
                    width: 150,
                    borderRadius: 4,
                  }}
                >
                  Send Now
                </Button>
              </Box>
            </Card>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default About;
