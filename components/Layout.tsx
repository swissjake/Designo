import Router from "next/router";
import React from "react";
import Footer from "./footer/Footer";
import LetsTalk from "./letsTalk/LetsTalk";
import Navbar from "./navbar/Navbar";
import { useRouter } from "next/router";

interface Props {
  children: any;
}
const Layout = ({ children }: Props) => {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      {children}
      {router.pathname === "/contact" ? null : <LetsTalk />}

      <div
        className={`${
          router.pathname === "/contact" ? " mt-[120px] lg:mt-[160px]" : null
        }`}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
