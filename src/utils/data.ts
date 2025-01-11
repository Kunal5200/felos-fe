import icon1 from "@/icon/globe.png";
import icon2 from "@/offer/icons/loan.png";
import icon3 from "@/offer/icons/interest-rate.png";
import icon4 from "@/offer/icons/hands-and-gestures.png";
import icon5 from "@/offer/icons/debt.png";
import offerImage1 from "@/offer/img-1.jpeg";
import offerImage2 from "@/offer/img-2.jpeg";
import offerImage3 from "@/offer/img-3.jpeg";
import offerImage4 from "@/offer/img-4.jpeg";
import offerImage5 from "@/offer/img-5.jpeg";
import partner1 from "@/partner/partner-1.webp";
import partner2 from "@/partner/partner-2.webp";
import partner3 from "@/partner/partner-3.webp";
import partner4 from "@/partner/partner-4.webp";
import {
  Instagram,
  KeyboardArrowDown,
  LocationOn,
  Phone,
  X,
  YouTube,
} from "@mui/icons-material";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

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
import customer from "@/icon/customer-satisfaction.png";
import loan from "@/icon/loan-dispursed.png";
import finance from "@/icon/finance-partners.png";
import distribution from "@/icon/distribution-partners.png";
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
    {
      icon: FaLinkedinIn,
    },
  ],
  headerLinks: [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About Us",
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
      icon: true,
    },
    {
      label: "Contact Us",
      url: "/contact",
      icon: true,
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
      heading: "Working Capital Loans",
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
      label: "Loan Distribution",
      // value:
      //   "We offers multiple Loan Products to Individuals and Corporate customers through our large network of Independent Business Owners (IBOs) through our 140+ Partner Banks, NBFCs and Fintechs.",
      value:
        "We offers multiple Loan Products to Individuals and Corporate customers through our large network of Independent Business Owners (IBOs) & 130+ Partner Banks and NBFCs.",
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
      label: "Our Loan Products",
      // value:
      //   "We work with RBI-mandated institutions to align FinTech BCAs (Business Correspondent Agents) and MFI DRAs (Debt Recovery Agents) for:",
      value:
        "We offers multiple Loan Products to Individuals and Corporate customers through our large network of Independent Business Owners (IBOs) through our 130+ Partner Banks, NBFCs and Fintechs.",
      list: [
        {
          label: "Home Loans",
        },
        {
          label: "Personal Loans",
        },
        {
          label: "Business Loans",
        },
        {
          label: "Loan Against Property (LAP)",
        },
        {
          label: "Working Capital Loans",
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
          label: "About Prefinn",
          url: "/about",
        },
        {
          label: "Founders Message",
          url: "/founder-message",
        },
        {
          label: "Join Our team",
          url: "https://forms.gle/1aH21nC5w32hnz1N8",
        },
        {
          label: "Terms & Conditions",
        },
        {
          label: "Privacy Policy",
        },
        {
          label: "Apply for a Loan",
          url: "/contact/loan-enquiry",
        },
        {
          label: "Become a Partner",
          url: "/contact/partner-enquiry",
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
      label: "Banking Products",
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
    // {
    //   label: SERVICESTABS.FINTECH_SOLUTIONS,
    // },
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
      heading: "Largest Bank Distribution Network",
      content:
        "Opportunity to Avail all Loan Products from 130+ Partner bank and NBFC’s.",
    },
    {
      img: result,
      heading: "Zero Investment for Partners",
      content:
        "No Joining Fees,work as Independent Business Owners for Prefinn and Unlock your Financial Growth Potential!!",
    },
    {
      img: strategy,
      heading: "Strategic Approach",
      content: "Customized strategies to align with your business objectives.",
    },
    {
      img: leadership,
      heading: "Experienced Leadership",
      content:
        "A team of Banking and Fintech Professionals with proven Industry experience.",
    },
  ],

  contactPage: [
    {
      label: "Partner Enquiry",
      url: "/contact/partner-enquiry",
    },
    {
      label: "Loan Enquiry",
      url: "/contact/loan-enquiry",
    },
  ],
  loanProducts: [
    {
      label: "Home Loan",
    },
    {
      label: "Personal Loans",
    },
    {
      label: "Business Loans",
    },
    {
      label: "Loan Against Property(LAP)",
    },
    {
      label: "Working Capital Loans",
    },
  ],
  faqData: [
    {
      label: "Who can partner with Prefinn?",
      value:
        "Anyone from loan agents, ex-bankers, financial analysts, Insurance agents, mutual fund agents, chartered accountants, builders, or professionals from any other field can become an Independent Business Owner by partnering with Prefinn.",
    },
    {
      label: "Is there any charge for joining as a partner with Prefinn?",
      value: "No, there is absolutely no charge for joining Prefinn.",
    },
    {
      label: "How to become a partner with Prefinn?",
      list: [
        {
          label:
            "Step 1: Visit the Prefinn website and click on the ‘Become a Partner’ option.",
        },
        {
          label:
            "Step 2: Complete the registration form by fillng in your details and submitting it.",
        },
        {
          label:
            "Step 3: A member of the Prefinn support team will contact you to guide you through the next steps and arrange a meeting.",
        },
        {
          label:
            "Step 4: During the meeting, a Prefinn Manager will explain the lead generation process and provide you with all the necessary information.",
        },
        {
          label:
            "Step 5: Once you understand and are comfortable with the processes, an agreement will be signed between you and Prefinn.",
        },
      ],
    },
    {
      label: "What documents are required for becoming a partner with Prefinn?",
      list: [
        {
          label: "Aadhaar Card",
        },
        {
          label: "PAN Card",
        },
        {
          label: "Two passport-size photographs",
        },
        {
          label: "GST Registration (for companies, if applicable)",
        },
        {
          label:
            "Proof of Employment: Salary slips if employed; account statements and address proof if running a business; or invoices and financial statements if self-employed.",
        },
        {
          label:
            "Bank Account Details: Your bank statement for the last 3 months",
        },
      ],
    },
    {
      label: "How do Partner earn with Prefinn?",
      value:
        "Partners will earn successful disbursement-based commission fees for every type of loan.",
    },
    {
      label: "What support do Prefinn provide to its partner?",
      list: [
        {
          label:
            "Comprehensive Training: We provide detailed training sessions to help you understand our products, processes, and the market.",
        },
        {
          label:
            "Marketing Support: You can get leads, marketing materials, and strategies from Prefinn to promote your services effectively.",
        },
        {
          label:
            "Timely Payouts: We ensure that you receive your commissions on time, providing a smooth and transparent payout process",
        },
        {
          label:
            "By partnering with Prefinn, you get all the support you need to grow and succeed as a partner.",
        },
      ],
    },
  ],
  stepData: [
    {
      label: "Step-01",
      description1:
        "Fill out the online Apply Loan form on website and provide your Basic details..Call Prefinn Team or wait for Call Back.",
      description2:
        "Prefinn Support Team will call you within 24 Hrs to collect your requirements and provide you the suitable Bank options and confirm the terms, conditions, contracts & your loan needs",
    },
    {
      label: "Step-02",
      description1:
        "While Discussing with Prefinn Team, select the Bank/NBFC of your Choice for your Loan requirements and provide the required documents and details to our Loan Executive for Filing your Loan Application with your choice of Bank.",
    },
    {
      label: "Step-03",
      description1:
        "Once Your Loan Application is filed. Have a personal discussion with Bank Loan Manager and finalise the Loan Amount and Terms and conditions.",
    },
    {
      label: "Step-04",
      description1:
        "Meet the Loan Manager in person, sign the original Loan Application file and take Disbursement of Loan Amount in your preferred Bank Account.",
    },
  ],

  counterData: [
    {
      label: "Happy Customers",
      number: 32,
      suffix: "+",
      img: customer,
    },
    {
      label: "Loan Disbursed",
      img: loan,
      number: 22.5,
      suffix: "cr",
    },
    {
      label: "Finance Partners",
      img: finance,
      number: 130,
      suffix: "+",
    },
    {
      label: "Distribution Partners",
      img: distribution,
      number: 70,
      suffix: "+",
    },
  ],
};
