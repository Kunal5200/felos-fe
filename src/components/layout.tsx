import React, { ReactNode } from "react";
import Subheader from "./subHeader";
import Header from "./header";
import Footer from "./footer";
import UnderHeader from "./underHeader";
import SubFooter from "./subFooter";
import Head from "next/head";
import { useMediaQuery } from "@mui/material";
import MobileHeader from "./mobileHeader";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <div>
      <Head>
        <link rel="icon" href="../../public/favicon.png"></link>
      </Head>
      {!phone && <Subheader />}
      {phone && <MobileHeader />}
      {!phone && <Header />}
      {!phone && <UnderHeader />}
      {children}
      <SubFooter />
      <Footer />
    </div>
  );
};

export default Layout;
