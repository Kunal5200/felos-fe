import icon1 from "@/offer/icons/icon-1.png";
import icon2 from "@/offer/icons/icon-2.png";
import icon3 from "@/offer/icons/icon-3.png";
import icon4 from "@/offer/icons/icon-4.png";
import icon5 from "@/offer/icons/icon-5.png";
import offerImage1 from "@/offer/img-1.jpeg";
import offerImage2 from "@/offer/img-2.jpeg";
import offerImage3 from "@/offer/img-3.jpeg";
import offerImage4 from "@/offer/img-4.jpeg";
import offerImage5 from "@/offer/img-5.jpeg";
import partner1 from "@/partner/partner-1.webp";
import partner2 from "@/partner/partner-2.webp";
import partner3 from "@/partner/partner-3.webp";
import partner4 from "@/partner/partner-4.webp";
import { Instagram, LocationOn, Phone, X, YouTube } from "@mui/icons-material";
import { FaFacebookF } from "react-icons/fa";

import serviceIcon1 from "@/aboutServices/icon-1.png";
import serviceIcon2 from "@/aboutServices/icon-2.png";
import serviceIcon3 from "@/aboutServices/icon-3.png";
import serviceIcon4 from "@/aboutServices/icon-4.png";
import serviceIcon5 from "@/aboutServices/icon-5.png";
import serviceIcon6 from "@/aboutServices/icon-6.png";
import img1 from "@/lending/img-1.webp";
import img2 from "@/lending/img-2.webp";
import img3 from "@/lending/img-3.webp";
import img4 from "@/lending/img-4.webp";
import img5 from "@/lending/img-5.webp";
import img6 from "@/lending/img-6.webp";
import img7 from "@/lending/img-7.webp";
import img8 from "@/lending/img-8.webp";
import img9 from "@/lending/img-9.webp";
import img10 from "@/lending/img-10.webp";
import img11 from "@/lending/img-11.webp";
import img12 from "@/lending/img-12.webp";
import img13 from "@/lending/img-13.webp";
import img14 from "@/lending/img-14.webp";
import img15 from "@/lending/img-15.webp";
import img16 from "@/lending/img-16.webp";
import img17 from "@/lending/img-17.webp";
import { SERVICESTABS } from "./enum";
import leadership from "@/icon/leadership.png";
import strategy from "@/icon/strategy_approach.png";
import result from "@/icon/result.png";
export const data = {
  socialIcons: [
    {
      icon: FaFacebookF,
    },
    {
      icon: X,
    },
    {
      icon: Instagram,
    },
    {
      icon: YouTube,
    },
  ],
  headerLinks: [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About Company",
      url: "/about",
    },
    // {
    //   label: "Success Stories",
    //   url: "/case",
    // },
    // {
    //   label: "News",
    //   url: "/news",
    // },
    {
      label: "Services",
      url: "/services",
    },
    {
      label: "Contact Us",
      url: "/contact",
    },
  ],
  offerData: [
    {
      img: offerImage1.src,
      icon: icon1,
      heading: "Home Loans",
      description:
        "Prefinn helps clients assess their home financing needs by partnering with experienced consultants. ",
    },
    {
      img: offerImage2.src,
      icon: icon2,
      heading: "Personal Loans",
      description:
        "Prefinn offers Personal Loans, including unsecured loans and overdraft facilities. ",
    },
    {
      img: offerImage3.src,
      icon: icon3,
      heading: "Business Loans",
      description:
        "Prefinn offers Business Loan services to help businesses assess their short-term financing needs. ",
    },
    {
      img: offerImage4.src,
      icon: icon4,
      heading: "Loan Against Property (LAP)",
      description:
        "Prefinn’s finance experts are here to help you secure a Loan Against Property (LAP) from top banks. ",
    },
    {
      img: offerImage5.src,
      icon: icon5,
      heading: "Working Capital Finance Partner",
      description:
        "Prefinn specializes in helping businesses assess their working capital needs to support growth. ",
    },
    // {
    //   img: offerImage6.src,
    //   icon: icon6,
    //   heading: "Financial Projection",
    //   description:
    //     "Why money's in that office, right If she start giving me about it ain't there. ",
    // },
    // {
    //   img: offerImage7.src,
    //   icon: icon7,
    //   heading: "Turnaround Consulting",
    //   description:
    //     "Why money's in that office, right If she start giving me about it ain't there. ",
    // },
  ],
  accordionData: [
    {
      label: "Finance Management",
      value:
        "We offers multiple Loan Products to Individuals and Corporate customers through our large network of Independent Business Owners (IBOs) through our 140+ Partner Banks, NBFCs and Fintechs.",
      description:
        "We collaborate with multiple stakeholders across the country to create a robust distribution network of our Loan Products.",
      lisHeading: "Our Distribution Partners:",
      list: [
        {
          label: "Independent Financial Advisors",
        },
        {
          label: "Insurance Product Advisors",
        },
        {
          label: "Real Estate Consultants",
        },
        {
          label: "Independent Tax Consultants",
        },
      ],
    },
    {
      label: "Fintech Management",
      value:
        "We collaborate with leading fintech companies to provide expert guidance on:",
      listHeading: "Fintech Consultancy:",
      list: [
        {
          label: "Digital Lending strategies",
        },
        {
          label: "Digital Payment Solutions",
        },
        {
          label: "Building New Partnerships",
        },
        {
          label: "Enhancing Financial Inclusion",
        },
        {
          label: "Expanding Distribution Channels",
        },
        {
          label: "VLE Training and Certifications",
        },
      ],
    },
    {
      label: "RBI-Mandated Trainings & Certifications",
      value:
        "We work with RBI-mandated institutions to align FinTech BCAs (Business Correspondent Agents) and MFI DRAs (Debt Recovery Agents) for:",
      list: [
        {
          label:
            "Completing IIBF (Indian Institute of Banking & Finance) training and certifications",
        },
        {
          label:
            "Implementing guided strategies to train Corporate BC/DR Agents to maximize Business and operational efficiency.",
        },
      ],
    },
  ],

  partner: [
    {
      img: partner1,
    },
    {
      img: partner2,
    },
    {
      img: partner3,
    },
    {
      img: partner4,
    },
  ],
  dataOptions: [
    {
      label: "I would like to discuss",
    },
    {
      label: "I would like to discuss",
    },
    {
      label: "I would like to discuss",
    },
    {
      label: "I would like to discuss",
    },
  ],

  footerLinks: [
    {
      heading: "Company",
      list: [
        {
          label: "Testimonials",
        },
        {
          label: "CEO message",
        },
        {
          label: "Partners",
        },
        {
          label: "Careers",
        },
        {
          label: "Success Stories",
        },
      ],
    },
    // {
    //   heading: "Company",
    //   list: [
    //     {
    //       label: "Turnaround Consulting",
    //     },
    //     {
    //       label: "Testimonials",
    //     },
    //     {
    //       label: "CEO message",
    //     },
    //     {
    //       label: "Partners",
    //     },
    //     {
    //       label: "Careers",
    //     },
    //     {
    //       label: "Our Advisors",
    //     },
    //   ],
    // },
    // {
    //   heading: "Company",
    //   list: [
    //     {
    //       label: "Turnaround Consulting",
    //     },
    //     {
    //       label: "Testimonials",
    //     },
    //     {
    //       label: "CEO message",
    //     },
    //     {
    //       label: "Partners",
    //     },
    //     {
    //       label: "Careers",
    //     },
    //     {
    //       label: "Our Advisors",
    //     },
    //   ],
    // },
  ],

  aboutServices: [
    {
      img: serviceIcon1,
      title: "Prefinn’s Business Correspondent Networks",
      content:
        "Why money's in that office, right If she start giving me about it ain't there someplace or anywhere or nowhere.",
    },
    {
      img: serviceIcon2,
      title: "Purchases",
      content:
        "Why money's in that office, right If she start giving me about it ain't there someplace or anywhere or nowhere.",
    },
    {
      img: serviceIcon3,
      title: "Collections",
      content:
        "Why money's in that office, right If she start giving me about it ain't there someplace or anywhere or nowhere.",
    },
    {
      img: serviceIcon4,
      title: "Investments",
      content:
        "Why money's in that office, right If she start giving me about it ain't there someplace or anywhere or nowhere.",
    },
    {
      img: serviceIcon5,
      title: "Considerations",
      content:
        "Why money's in that office, right If she start giving me about it ain't there someplace or anywhere or nowhere.",
    },
    {
      img: serviceIcon6,
      title: "Professional",
      content:
        "Why money's in that office, right If she start giving me about it ain't there someplace or anywhere or nowhere.",
    },
  ],

  londonData: [
    {
      icon: LocationOn,
      contact: "Plot No.77, Sector-37, Gurugram, Haryana-122001",
    },
    {
      icon: Phone,
      contact: "+91-965081233",
    },
  ],

  list1: [
    {
      label: "Banking Sales",
    },
    {
      label: "Digital Lending",
    },
    {
      label: "Fintech Business",
    },
    {
      label: "Project Management",
    },
  ],
  list2: [
    {
      label: "Mortgages and Lending",
    },
    {
      label: "Bank Product Sales",
    },
    {
      label: "Business Operations",
    },
    {
      label: "Fintech Business Development",
    },
  ],
  lendingPartner: [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
    {
      img: img7,
    },
    {
      img: img8,
    },
    {
      img: img9,
    },
    {
      img: img10,
    },
    {
      img: img11,
    },
    {
      img: img12,
    },
    {
      img: img13,
    },
    {
      img: img14,
    },
    {
      img: img15,
    },
    {
      img: img16,
    },
    {
      img: img17,
    },
  ],
  servicesTabs: [
    {
      label: SERVICESTABS.FINTECH_SOLUTIONS,
    },
    {
      label: SERVICESTABS.FINTECH_CONSULTANCY,
    },
    {
      label: SERVICESTABS.FINANCE_MANAGEMENT_SERVICES,
    },
    {
      label: SERVICESTABS.RBI_TRAINING_CERTIFICATIONS,
    },
  ],

  chooseData: [
    {
      img: leadership,
      heading: "Experienced Leadership",
      content:
        "A team of Banking and Fintech Professionals with proven Industry experience.",
    },
    {
      img: strategy,
      heading: "Strategic Approach",
      content: "Customized strategies to align with your business objectives.",
    },
    {
      img: result,
      heading: "Quick Results",
      content:
        "Helping you maximise Distribution business and achieve profitability.",
    },
  ],
};
