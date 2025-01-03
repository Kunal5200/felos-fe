import React from "react";
import banner from "@/banner/formBanner.jpg";
import { Box, Container, Grid2, useMediaQuery } from "@mui/material";
import men from "@/banner/form-person.png";
import Image from "next/image";
import Form from "./form";
const ContactSection = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${banner.src})`,
          height: { lg: "100vh", xs: "130vh" },
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: {lg:5,xs:1},
          pb: {lg:5,xs:2},
        }}
      >
        <Container>
          <Grid2 container alignItems={"center"}>
            <Grid2 size={{ lg: 6, xs: 12 }}>
              <Form />
            </Grid2>
            {!phone && (
              <Grid2 size={{ lg: 6, xs: 12 }} textAlign={"center"}>
                <Image src={men} alt="" width={phone ? 200 : 390} />
              </Grid2>
            )}
          </Grid2>
        </Container>
      </Box>
    </div>
  );
};

export default ContactSection;
