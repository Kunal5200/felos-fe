import About from "@/components/about";
import HeroSection from "@/components/heroSection";
import Investment from "@/components/investment";
import Offer from "@/components/offer";
import Projects from "@/components/projects";
import { BannerData } from "@/utils/bannerData";
import { Box } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <HeroSection data={BannerData} />
        <Box>
          <About />
        </Box>
        <Box sx={{ pt: 10, pb: 10 }}>
          <Offer />
        </Box>
        <Box sx={{ pt: 10, pb: 10 }}>
          <Investment />
        </Box>
        <Box sx={{ pt: 10, pb: 10 }}>
          <Projects />
        </Box>
      </Box>
    </>
  );
}
