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
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import founder from "@/partner/founder.jpg";
import { ArrowForward } from "@mui/icons-material";
const Company = () => {
  const list1 = [
    {
      label: "Digital Lending Products",
    },
    {
      label: "Creating Loan Distribution Network",
    },
    {
      label: "Merchant Acquisition for PG Solutions",
    },
    {
      label: "New Bank/NBFCs Partnerships",
    },
    {
      label: "Developing BC/BF (Business Correspondent) Models",
    },
    {
      label: "Ensuring Business with Compliance ",
    },
    {
      label:
        "Facilitating IIBF/DRA Training & Certifications for BC and MFI Agents",
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
        "At Prefinn, we aim to be the trusted financial partner for Businesses and Consumers and go-to consultants for fintech companies. We achieve this through our expertise in the BFSI sector, our wide distribution network and our commitment to offer digital lending solutions and exceptional client service.",
    },
    {
      heading: "Our Approach",
      description:
        "At Prefinn, we focus on supporting institutions by leveraging our experience with financial sector and fostering collaborations to drive financial inclusion through distribution network. We work on large Bank network and data-driven insights for business decisions, offering customizable solutions tailored to each client's unique needs",
    },
  ];
  return (
    <div>
      <Banner img={aboutBanner.src} heading="About Prefinn" />

      <Box sx={{ pt: 5 }}>
        <Container>
          <Typography
            sx={{ mt: 1, fontSize: 15, fontFamily: poppins500.style }}
          >
            Prefinn is a Finance & Fintech Solution firm ventured by experienced
            Banking professionals having significant expertise in the areas of
            Digital Lending, Financial Inclusion, Fintech Products & Services.
          </Typography>
        </Container>
      </Box>
      <Box sx={{ pb: 5, pt: 5 }}>
        <About
          heading1="Our Founder"
          coloredHeading=""
          heading2=""
          description="Prefinn is founded by Mr. Rajesh Upadhyay, an IIM-C alumnus and seasoned Banker with over 20yrs of experience in finance and fintech business management. Throughout his BFSI career Mr. Upadhyay has held key business roles in leading organizations, including Axis Bank, Manipal Tech, Kotak Bank, HDFC Bank and ICICI Bank. "
          listDescription="With extensive expertise in Digital Lending, Fintech Business, Financial Inclusion Program and RBI Compliances, Mr. Upadhyay has played a pivotal role in driving Business growth and Innovation. His strategic vision and solutions empower fintech companies and financial institutions to achieve sustainable financial success."
          // list={data.list2}
          //           description2="With expertise in business development, P&L management, program execution, and RBI compliance, Mr. Upadhyay has played a pivotal role in driving growth and innovation.
          // His strategic vision and solutions empower fintech companies and financial institutions to achieve sustainable financial success.
          // "
          fontWeight="400"
          img={founder}
        />
      </Box>
      <Container sx={{ pb: 5 }}>
        <Grid2 container spacing={6}>
          <Grid2 size={12}>
            <Card
              sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
            >
              <Typography sx={{ fontSize: 25, fontFamily: poppins600.style }}>
                Our Team
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: poppins400.style,
                  color: COLORS.BLACK,
                  mt: 2,
                }}
              >
                The Prefinn team is a group of highly skilled finance
                professionals with extensive experience in Banking and Fintech
                Business.
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: poppins400.style,
                  color: COLORS.BLACK,
                  mt: 2,
                }}
              >
                Prefinn Team is committed to delivering top-notch services and
                products to its clients and Partners. We partner with & fintech
                companies to guide on:
              </Typography>
              <List>
                {list1.map((val, i) => (
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <ArrowForward htmlColor={COLORS.BLUE} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography
                          key={i}
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
              {/* <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: poppins400.style,
                  color: COLORS.BLACK,
                  mt: 2,
                }}
              >
                Our goal is to help our Partners and Clients achieve their
                business objectives while driving Digital Lending Products and
                fostering sustainable channel growth.
              </Typography>
              <List>
                {list2.map((val, i) => (
                  <ListItem disablePadding>
                    <ListItemAvatar>
                      <ArrowForward htmlColor={COLORS.BLUE} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography
                          key={i}
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
              </List> */}

              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: poppins400.style,
                  color: COLORS.BLACK,
                  mt: 2,
                }}
              >
                Our goal is to help our Partners and Clients achieve their
                business objectives while driving Digital Lending Products and
                fostering sustainable channel growth.
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: poppins600.style,
                  color: COLORS.BLACK,
                  mt: 2,
                }}
              >
                Let’s Prefinn be your trusted partner in achieving success!
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
                    color: COLORS.BLACK,
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

      <Box sx={{ pb: 5 }}>
        <ContinuousSlider />
      </Box>

      <Box sx={{ pb: 5 }}>
        <Partner />
      </Box>
    </div>
  );
};

export default Company;
