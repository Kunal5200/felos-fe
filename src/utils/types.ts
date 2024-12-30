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
