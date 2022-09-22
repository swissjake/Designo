import React from "react";
import Footer from "./footer/Footer";
import LetsTalk from "./letsTalk/LetsTalk";
import Navbar from "./navbar/Navbar";

interface Props {
  children: any;
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
      <LetsTalk />
      <Footer />
    </div>
  );
};

export default Layout;
