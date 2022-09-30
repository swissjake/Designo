import React from "react";
import styles from "./About.module.scss";
import img1 from "../../assets/aboutUs/img1.jpeg";
import img2 from "../../assets/aboutUs/img2.png";
import img3 from "../../assets/aboutUs/img3.png";
import Image from "next/image";
import aboutBg2 from "../../assets/backrounds/aboutusBg2.png";

const AboutUs: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className="relative container  md:px-[40px] xl:px-[165px] ">
        <div className="hidden lg:block absolute top-[300px] z-[-1] left-0">
          <Image src={aboutBg2} alt="image" objectFit="contain" />
        </div>
        <div className="flex flex-col-reverse lg:flex-row ">
          <div
            className={`${styles.bgImg} md:rounded-b-[15px] lg:rounded-br-none  lg:rounded-l-[15px] py-[80px] md:py-[64px] lg:py-[135px] md:px-[58px] lg:px-[85px] lg:w-[58%] px-[24px]`}
          >
            <h1
              className={`${styles.aboutUsTitle} text-center lg:text-start font-medium leading-[36px] md:leading-[48px]`}
            >
              About Us
            </h1>
            <p
              className={`${styles.aboutUsText} text-center lg:text-start leading-[25px] md:leading-[26px] mt-[32px]`}
            >
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
          <div>
            <img
              className="h-full hidden lg:block"
              src={img1.src}
              alt="image1"
            />
          </div>
          <img
            className="h-full rounded-t-[15px] hidden md:block lg:hidden"
            src={img2.src}
            alt="tabletImg"
          />
          <img
            className="h-full rounded-t-[15px]  md:hidden"
            src={img3.src}
            alt="mobileImg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
