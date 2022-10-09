import React from "react";
import styles from "./Award.module.scss";
import Rectangle1 from "../../assets/homepage/Rectangle1.png";
import oval from "../../assets/homepage/Oval.png";
import phone from "../../assets/homepage/phone.png";
import Image from "next/image";

const AwardWinning: React.FC = (): JSX.Element => {
  return (
    <section className="">
      <div className="relative container  md:px-[40px] xl:px-[165px] pt-[100px] md:pt-0 ">
        <div className="absolute top-[320px] left-0 hidden lg:block">
          <Image alt="rect" src={Rectangle1} role="image" />
        </div>
        <div
          className={`${styles.container} relative h-fit lg:px-[95px] lg:rounded-[15px] overflow-hidden px-[24px] md:px-0`}
        >
          <div className="absolute  lg:right-0 md:right-[-100px] md:bottom-[350px] lg:bottom-0">
            <Image alt="oval" src={oval} role="image" />
          </div>
          <div className="flex flex-col lg:flex-row   justify-between">
            <div className="py-[145px] relative z-20">
              <h1
                className={`${styles.containerHeader} text-center lg:text-start  mx-auto lg:mx-0 w-full md:w-[70%]  lg:w-[90%] font-medium leading-[36px] md:leading-[48px]`}
              >
                Award-winning custom designs and digital branding solutions
              </h1>
              <p
                className={`${styles.containerText} text-center lg:text-start mx-auto lg:mx-0 lg:w-[75%]  w-full md:w-[60%] md:leading-[26px] mt-6`}
              >
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
              <div className="relative z-20 flex justify-center lg:justify-start">
                <button className={`${styles.containerButton} mt-[40px]`}>
                  learn more
                </button>
              </div>
            </div>
            <div className="flex mx-auto  lg:self-end w-[50%] lg:w-[70%] h-[100%] mt-[-70px] lg:mt-0">
              <Image
                className="w-[30%] h-[30%]"
                objectFit="contain"
                alt="phone"
                role="image"
                src={phone}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardWinning;
