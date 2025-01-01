import aboutBanner from "@/banner/about-banner.jpeg";
import AboutServices from "@/components/aboutServices";
import Banner from "@/components/banner";
import Investment from "@/components/investment";
import Partner from "@/components/partner";
import Testimonials from "@/components/testimonials";
import VideoSection from "@/components/videoSection";
import { Box } from "@mui/material";
const Company = () => {
  return (
    <div>
      <Banner img={aboutBanner.src} heading="About Us" />
      <Box sx={{ pt: 10, pb: 10 }}>
        <Investment />
      </Box>
      <Box sx={{ pt: 10, pb: 10 }}>
        <Testimonials />
      </Box>
      <Box sx={{ pb: 10 }}>
        <AboutServices />
      </Box>
      <Box sx={{ pb: 10 }}>
        <VideoSection />
      </Box>
      <Box sx={{ pb: 10 }}>
        <Partner />
      </Box>
    </div>
  );
};

export default Company;
