import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface SOCIALARRAY {
  icon: ReactNode;
}

export interface HEADERLINKSARRAY {
  label: string;
}

export interface BANNERDATA {
  subHeading: string;
  img: StaticImageData | string;
  heading: string;
  description: string;
}

export interface BANNERPROPS {
  data: BANNERDATA[];
}

export interface OFFERDATA {
  img: StaticImageData | string;
  icon: StaticImageData;
  heading: string;
  description: string;
}

export interface ACCORDION_DATA {
  label: string;
  value: string;
}

export interface ACCORDIONPROPS {
  data: ACCORDION_DATA[];
}

export interface PROJECT_DATA {
  heading: string;
  img: string;
  title: string;
  content: string;
}
