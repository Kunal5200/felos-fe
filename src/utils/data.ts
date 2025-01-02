import { Instagram, LocationOn, Phone, X, YouTube } from "@mui/icons-material";
import { FaFacebookF } from "react-icons/fa";
import icon1 from "@/offer/icons/icon-1.png";
import icon2 from "@/offer/icons/icon-2.png";
import icon3 from "@/offer/icons/icon-3.png";
import icon4 from "@/offer/icons/icon-4.png";
import icon5 from "@/offer/icons/icon-5.png";
import icon6 from "@/offer/icons/icon-6.png";
import icon7 from "@/offer/icons/icon-7.png";
import offerImage1 from "@/offer/img-1.jpeg";
import offerImage2 from "@/offer/img-2.jpeg";
import offerImage3 from "@/offer/img-3.jpeg";
import offerImage4 from "@/offer/img-4.jpeg";
import offerImage5 from "@/offer/img-5.jpeg";
import offerImage6 from "@/offer/img-6.jpeg";
import offerImage7 from "@/offer/img-7.jpeg";
import partner1 from "@/partner/partner-1.jpg";
import partner2 from "@/partner/partner-2.jpg";
import partner3 from "@/partner/partner-3.jpg";

import serviceIcon1 from "@/aboutServices/icon-1.png";
import serviceIcon2 from "@/aboutServices/icon-2.png";
import serviceIcon3 from "@/aboutServices/icon-3.png";
import serviceIcon4 from "@/aboutServices/icon-4.png";
import serviceIcon5 from "@/aboutServices/icon-5.png";
import serviceIcon6 from "@/aboutServices/icon-6.png";
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
      label: "Company",
      url: "/about",
    },
    {
      label: "cases",
      url: "/case",
    },
    // {
    //   label: "News",
    //   url: "/news",
    // },
    {
      label: "Contact",
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
      label: "Fintech Consultancy",
      value:
        "We collaborate with leading fintech companies to provide expert guidance on:",
      list: [
        {
          label: "Digital Lending Strategies",
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
            "Implementing guided strategies to maximize operational efficiency and profitability",
        },
      ],
    },
    // {
    //   label: "Professional Data Analysis",
    //   value:
    //     "Why money's in that office, right If she start giving me about it ain't there someplace.Why money's in that office, right If she start giving me about it ain't there someplace.Why money's in that office, right If she start giving me about it ain't there someplace.",
    // },
    // {
    //   label: "Customer Strategy & Marketing",
    //   value:
    //     "Why money's in that office, right If she start giving me about it ain't there someplace.Why money's in that office, right If she start giving me about it ain't there someplace.Why money's in that office, right If she start giving me about it ain't there someplace.",
    // },
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
      img: partner2,
    },
    {
      img: partner1,
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
          label: "Turnaround Consulting",
        },
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
          label: "Our Advisors",
        },
      ],
    },
    {
      heading: "Company",
      list: [
        {
          label: "Turnaround Consulting",
        },
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
          label: "Our Advisors",
        },
      ],
    },
    {
      heading: "Company",
      list: [
        {
          label: "Turnaround Consulting",
        },
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
          label: "Our Advisors",
        },
      ],
    },
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
      label: "Fintech Initiatives",
    },
    {
      label: "Financial Inclusion Programs",
    },
  ],
};
