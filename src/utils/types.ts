import { StaticImageData } from "next/image";
import { ElementType, ReactNode } from "react";

export interface SOCIALARRAY {
  icon: ReactNode;
}

export interface HEADERLINKSARRAY {
  label: string;
}

export interface LIST {
  label?: string;
  value?: string;
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
  list: LIST[];
  listHeading?: string;
  description?: string;
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

export interface TESTIMONIAL_DATA {
  img: StaticImageData;
  name: string;
  designation: string;
  content: string;
}

export interface SERVICESCARD {
  img: StaticImageData;
  title: string;
  content: string;
}

export interface BANNER_PROPS {
  img: string;
  heading: string;
}

export interface CONTACTDATA {
  img: string;
  location: string;
  officeType: string;
  data: CONTACTPROPS[];
  height: number | string;
}

export interface CONTACTPROPS {
  icon: ElementType | string;
  contact: string;
}

export interface ABOUTDESCRIPTION {
  heading1: string;
  coloredHeading: string;
  heading2: string;
  description: string;
  list?: LIST[];
  description2: string;
  listDescription?: string;
  img: StaticImageData;
}

export interface SERVICEDATA {
  heading: string;
  description: string;
  onClick?: () => void;
}

export interface CHOOSEPROPS {
  img: StaticImageData;
  heading: string;
  content: string;
}

export interface DataItem {
  label: string;
  url: string;
}

export interface Data {
  contactPage: DataItem[];
  services: DataItem[];
}
