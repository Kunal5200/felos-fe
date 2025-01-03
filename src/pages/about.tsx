import aboutBanner from "@/banner/about-banner.jpeg";
import About from "@/components/about";
import AboutServices from "@/components/aboutServices";
import Banner from "@/components/banner";
import ContinuousSlider from "@/components/continuousSlider";
import Investment from "@/components/investment";
import Partner from "@/components/partner";
import Testimonials from "@/components/testimonials";
import VideoSection from "@/components/videoSection";
import { COLORS } from "@/utils/colors";
import { data } from "@/utils/data";
import { poppins400, poppins500, poppins600 } from "@/utils/fonts";
import {
  Box,
  Card,
  Container,
  Grid2,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
const Company = () => {
  const list1 = [
    {
      label: "Finance Management",
    },
    {
      label: "Digital Lending",
    },
    {
      label: "Distribution Channel Setup",
    },
    {
      label: "Financial Inclusion and Compliance",
    },
  ];
  const list2 = [
    {
      label: "Launching new projects",
    },
    {
      label: "Building strategic bank partnerships",
    },
    {
      label: "Developing BC (Business Correspondent) business models",
    },
    {
      label: "Ensuring compliance with regulations",
    },
    {
      label: "Facilitating IIBF certifications for BC agents",
    },
  ];

  const approach = [
    {
      heading: "Our Vision",
      description:
        "At Prefinn, we aim to be the go-to consultants for fintech companies and the trusted financial partner for businesses and consumers. We achieve this through our expertise in the BFSI sector, our wide network, and our commitment to delivering innovative solutions and exceptional client support.",
    },
    {
      heading: "Our Approach",
      description:
        "At Prefinn, we focus on supporting institutions by leveraging our experience with BC partners and fostering collaborations to drive financial inclusion. We provide data-driven insights to guide regulatory and business decisions, offering fully customizable solutions tailored to each client's unique needs.",
    },
  ];
  return (
    <div>
      <Banner img={aboutBanner.src} heading="About Us" />
      <Box sx={{ pb: 10, pt: 10 }}>
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
      <Container>
        <Grid2 container spacing={6}>
          <Grid2 size={12}>
            <Card
              sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
            >
              <Typography sx={{ fontSize: 25, fontFamily: poppins600.style }}>
                Our Prefinn Team
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: poppins400.style,
                  color: COLORS.GREY,
                  mt: 2,
                }}
              >
                The Prefinn team is a group of highly skilled professionals with
                extensive experience in banking and fintech. Our expertise spans
                key areas, including:
              </Typography>
              <List>
                {list1.map((val, i) => (
                  <ListItemText
                    primary={
                      <Typography
                        key={i}
                        sx={{
                          fontSize: 14,
                          fontFamily: poppins400.style,
                          color: COLORS.GREY,
                        }}
                      >
                        {val.label}
                      </Typography>
                    }
                  />
                ))}
              </List>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: poppins400.style,
                  color: COLORS.GREY,
                  mt: 2,
                }}
              >
                Under the leadership of Mr. Rajesh Upadhyay, we are committed to
                delivering top-notch consulting services. We partner with
                fintech companies to guide on:
              </Typography>
              <List>
                {list2.map((val, i) => (
                  <ListItemText
                    primary={
                      <Typography
                        key={i}
                        sx={{
                          fontSize: 14,
                          fontFamily: poppins400.style,
                          color: COLORS.GREY,
                        }}
                      >
                        {val.label}
                      </Typography>
                    }
                  />
                ))}
              </List>

              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: poppins400.style,
                  color: COLORS.GREY,
                  mt: 2,
                }}
              >
                Our goal is to help fintechs achieve their business objectives
                while driving agent profitability and fostering sustainable
                channel growth. Let’s Prefinn be your trusted partner in achieving
                success!
              </Typography>
            </Card>
          </Grid2>
          {approach.map((val, i) => (
            <Grid2 size={{ lg: 6, xs: 12 }} key={i}>
              <Card
                sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
              >
                <Typography sx={{ fontSize: 25, fontFamily: poppins600.style }}>
                  {val.heading}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontFamily: poppins400.style,
                    color: COLORS.GREY,
                    mt: 2,
                  }}
                >
                  {val.description}
                </Typography>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
      <Box sx={{ pt: 10, pb: 10 }}>
        <Testimonials />
      </Box>
      {/* <Box sx={{ pb: 10 }}>
        <AboutServices />
      </Box> */}
      <Box sx={{ pb: 10 }}>
        <ContinuousSlider />
      </Box>
      {/* <Box sx={{ pb: 10 }}>
        <VideoSection />
      </Box> */}
      <Box sx={{ pb: 10 }}>
        <Partner />
      </Box>
    </div>
  );
};

export default Company;
