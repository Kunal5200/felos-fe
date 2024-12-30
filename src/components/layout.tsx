import React, { ReactNode } from "react";
import Subheader from "./subHeader";
import Header from "./header";
import Footer from "./footer";
import UnderHeader from "./underHeader";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Subheader />
      <Header />
      <UnderHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
