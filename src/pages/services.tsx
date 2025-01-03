import Banner from "@/components/banner";
import React from "react";
import servicesBanner from "@/banner/services-banner.jpg";
import { Box } from "@mui/material";
import ServicesTab from "@/components/services";
import ContinuousSlider from "@/components/continuousSlider";
import VideoSection from "@/components/videoSection";
import Partner from "@/components/partner";
import Testimonials from "@/components/testimonials";
const Services = () => {
  return (
    <div>
      <Banner heading="Services" img={servicesBanner.src} />

      <Box sx={{ pt: 10, pb: 10 }}>
        <ServicesTab />
      </Box>
      <Box sx={{ pb: 10 }}>
        <ContinuousSlider />
      </Box>
      <Box sx={{ pb: 10 }}>
        <Testimonials />
      </Box>
      <Box sx={{ pb: 10 }}>
        <Partner />
      </Box>
    </div>
  );
};

export default Services;
