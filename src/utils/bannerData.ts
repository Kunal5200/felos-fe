import { BANNERDATA } from "./types";
import img1 from "@/slider/sliderImage1.jpg";
import img2 from "@/slider/sliderImage2.jpg";
import img3 from "@/banner/trainings.jpg";
export const BannerData: BANNERDATA[] = [
  {
    img: img1.src,
    subHeading: "Maximise your savings with",
    heading: "Finance Management",
    description:
      "Advantages of selecting right Loan Products & Pricing through 100+ Partner Banks & Financial Institutions through expert professionals",
  },
  {
    img: img2.src,
    subHeading: "Grow your business with",
    heading: "Fintech Solutions",
    description:
      "Professional Consultancy to assist Fintech with strategic partnerships, program management & new business opportunities ",
  },
  {
    img: img3.src,
    subHeading: "Maximise Channel Productivity",
    heading: "Trainings & Certifications",
    description:
      "Curated Training Programs for channel partners to comply with regulatory guidelines and increase productivity ",
  },
];
