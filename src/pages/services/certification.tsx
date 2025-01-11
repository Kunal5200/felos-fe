import Banner from "@/components/banner";
import React from "react";
import servicesBanner from "@/banner/services-banner.jpg";
import { Container, Grid2 } from "@mui/material";
import ServicesCard from "@/components/services/servicesCard";
import { RBITraining } from "@/utils/RBITraining";
import { useRouter } from "next/router";
const Certification = () => {
  const router = useRouter();

  const changePage = (path: string) => {
    router.push(path);
  };
  return (
    <div>
      <Banner img={servicesBanner.src} heading="Training & Certifications" />

      <Container sx={{ pt: 10, pb: 10 }}>
        <Grid2 container spacing={4}>
          {RBITraining.map((val, i) => (
            <Grid2 size={{ lg: 4, xs: 12 }} key={i}>
              <ServicesCard
                heading={val.heading}
                description={val.description}
                onClick={() => changePage("/contact/partner-enquiry")}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default Certification;
