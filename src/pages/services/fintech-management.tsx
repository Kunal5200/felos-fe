import Banner from "@/components/banner";
import React from "react";
import servicesBanner from "@/banner/services-banner.jpg";
import { Container, Grid2 } from "@mui/material";
import { fintechConsultancy } from "@/utils/fintechConsultancy";
import ServicesCard from "@/components/services/servicesCard";
import { useRouter } from "next/router";
const FintechManagement = () => {
  const router = useRouter();
  const changePage = (path: string) => {
    router.push(path);
  };
  return (
    <div>
      <Banner img={servicesBanner.src} heading="Fintech Management" />

      <Container sx={{ pt: 10, pb: 10 }}>
        <Grid2 container spacing={4}>
          {fintechConsultancy.map((val, i) => (
            <Grid2 size={{ lg: 4, xs: 12 }} key={i}>
              <ServicesCard
                heading={val.heading}
                description={val.description}
                onClick={() => changePage("/contact/loan-enquiry")}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </div>
  );
};

export default FintechManagement;
