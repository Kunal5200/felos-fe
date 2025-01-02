import aboutBanner from "@/banner/about-banner.jpeg";
import About from "@/components/about";
import AboutServices from "@/components/aboutServices";
import Banner from "@/components/banner";
import Investment from "@/components/investment";
import Partner from "@/components/partner";
import Testimonials from "@/components/testimonials";
import VideoSection from "@/components/videoSection";
import { data } from "@/utils/data";
import { Box } from "@mui/material";
const Company = () => {
  return (
    <div>
      <Banner img={aboutBanner.src} heading="About Us" />
      <Box sx={{ pb: 10 }}>
        <About
          heading1="Our Founder"
          coloredHeading=""
          heading2=""
          description="Prefinn was founded by Mr. Rajesh Upadhyay, an IIM-C alumnus and seasoned banker with over 20 years of experience in banking, finance, and fintech."
          listDescription="Throughout his career in the BFSI sector, Mr. Upadhyay has held key roles in leading organizations, including Axis Bank, Manipal Tech, Kotak Bank, HDFC Bank, and ICICI Bank. He has excelled in various domains such as:"
          list={data.list2}
          description2="With expertise in business development, P&L management, program execution, and RBI compliance, Mr. Upadhyay has played a pivotal role in driving growth and innovation.
His strategic vision and solutions empower fintech companies and financial institutions to achieve sustainable financial success.
"
        />
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
