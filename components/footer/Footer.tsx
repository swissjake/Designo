import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import styles from "./Footer.module.scss";
import facebook from "../../assets/socials/facebook.svg";
import youtube from "../../assets/socials/youtube.svg";
import twitter from "../../assets/socials/twitter.svg";
import pinterest from "../../assets/socials/pinterest.svg";
import instagram from "../../assets/socials/instagram.svg";
import { useRouter } from "next/router";

const navList: { name: string; ref: string }[] = [
  { name: "OUR COMPANY", ref: "/" },
  { name: "LOCATIONS", ref: "/location" },
  { name: "CONTACT", ref: "/contact" },
];

const images: { img: any }[] = [
  {
    img: facebook,
  },
  {
    img: youtube,
  },
  {
    img: twitter,
  },
  {
    img: pinterest,
  },
  {
    img: instagram,
  },
];

const Footer = () => {
  const router = useRouter();
  return (
    <section
      className={`${styles.container}  ${
        router.pathname === "/contact"
          ? "pt-[64px] md:pt-[80px] lg:pt-[70px]"
          : "pt-[253px] md:pt-[173px] lg:pt-[144px]"
      }  pb-[64px] md:pb-[80px] lg:pb-[72px] `}
    >
      <div className="relative container  md:px-[40px] xl:px-[165px] pt-[100px] md:pt-0 ">
        <div className="flex flex-col md:flex-row items-center justify-between text-white">
          <div className="flex  items-center mb-[32px] md:mb-0">
            <Image alt="logo" src={logo} />
          </div>
          <hr className="bg-white h-[1px] md:mt-[40px] lg:hidden" />

          <ul className="flex flex-col md:flex-row items-center gap-y-[32px] md:gap-x-[42px]">
            {navList.map((item, index) => (
              <li
                onClick={() => router.push(item.ref)}
                className={`${styles.footerList} tracking-[2px] cursor-pointer`}
                key={index}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <hr className="bg-white h-[1px] md:mt-[40px] hidden lg:block" />

        <div className="grid md:grid-cols-3 lg:grid-cols-4 mt-[40px] md:mt-[32px]">
          <div
            className={`${styles.footerList} text-white opacity-50 font-bold mx-auto md:mx-auto text-center md:text-start`}
          >
            <h1>Designo Central Office</h1>
            <p>3886 Wellington StreetToronto,</p>
            <p>Ontario M9C 3J5</p>
          </div>
          <div
            className={`${styles.footerList} mt-[40px] md:mt-0 lg:col-span-2 text-white opacity-50 font-bold mx-auto md:mx-auto text-center md:text-start`}
          >
            <h1>Contact Us (Central Office)</h1>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <div className="flex justify-end items-end gap-x-[16px] mx-auto md:mx-auto text-center md:text-start mt-[40px] md:mt-0">
            {images.map((image, index) => (
              <Image alt="socials" src={image.img} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
