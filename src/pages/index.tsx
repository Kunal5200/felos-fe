import About from "@/components/about";
import ChooseUs from "@/components/chooseUs";
import ContactSection from "@/components/contact";
import ContinuousSlider from "@/components/continuousSlider";
import HeroSection from "@/components/heroSection";
import Investment from "@/components/investment";
import Offer from "@/components/offer";
import Partner from "@/components/partner";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import { BannerData } from "@/utils/bannerData";
import { data } from "@/utils/data";
import { Box } from "@mui/material";
import Head from "next/head";
import about from "@/banner/about.png";
import Faqs from "@/components/faqs";
import Counter from "@/components/counter";
export default function Home() {
  return (
    <>
      <Head>
        <title>Prefinn</title>
        <meta
          name="description"
          content="Your Trusted Finance & Fintech Solution"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box>
        <HeroSection data={BannerData} />
        <Box sx={{ pt: { lg: 10, xs: 5 } }}>
          <About
            heading1="Welcome to Prefinn"
            coloredHeading="Your Trusted Finance & Fintech Solution "
            heading2="Partner"
            description="Prefinn is a Fintech Solution firm specializing in Banking finance and fintech management services, founded by expert banking professionals with extensive experience in areas such as:"
            list={data.list1}
            description2="Our firm aims to bridge the gap between traditional financial institutions and innovative fintech solutions, thereby enhancing operational efficiency and profitability for its clients."
            img={about}
          />
        </Box>
        <Box sx={{ pt: { lg: 5, xs: 5 } }}>
          <Investment />
        </Box>
        <Box sx={{ pt: { lg: 5, xs: 5 } }}>
          <ChooseUs />
        </Box>
        <Box sx={{ pt: { lg: 5, xs: 5 } }}>
          <Offer />
        </Box>
        <Box sx={{ pt: { lg: 5, xs: 5 } }}>
          {/* <Projects /> */}
          <Counter />
        </Box>
        <Box sx={{ pt: { lg: 5, xs: 5 } }}>
          <Testimonials />
        </Box>
        <Box sx={{ pt: { lg: 5, xs: 5 } }}>
          <ContinuousSlider />
        </Box>
        <Box sx={{ pt: { lg: 5, xs: 5 } }}>
          <Partner />
        </Box>
        {/* <Box sx={{ pt: { lg: 5, xs: 5 } }}>
          <Faqs data={data.faqData} />
        </Box> */}
        <Box sx={{ pt: { lg: 5, xs: 5 }, pb: { lg: 5, xs: 5 } }}>
          <ContactSection />
        </Box>
      </Box>
    </>
  );
}
