import Image from "next/image";
import React from "react";
import styles from "./WebDesignCards.module.scss";

interface Props {
  img: any;
  title: string;
  desc: string;
  mobileImg: any;
}

const WebDesignCards = ({ img, title, desc, mobileImg }: Props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-col ">
        <div className="flex md:hidden lg:flex">
          <Image
            className="lg:rounded-t-[15px]  "
            src={img}
            objectFit="contain"
            alt="express"
            role="design"
          />
        </div>
        <div className="flex hidden md:inline-flex lg:hidden">
          <Image
            className="rounded-l-[15px]  "
            src={mobileImg}
            objectFit="contain"
            alt="express"
            role="design"
          />
        </div>

        <div
          className={`${styles.container} w-full mt-0 p-[32px] group hover:bg-[#E7816B] md:flex md:flex-col md:justify-center rounded-b-[15px] md:rounded-r-[15px] lg:rounded-tr-none md:rounded-b-none lg:rounded-b-[15px] transition-all duration-300 ease-in-out`}
        >
          <h1
            className={`${styles.containerTitle} text-center group-hover:text-white  tracking-[5px] font-medium uppercase leading-[26px]`}
          >
            {title}
          </h1>
          <p
            className={`${styles.containerText} text-center group-hover:text-white font-normal  leading-[26px] mt-[16px]`}
          >
            {desc}
          </p>
        </div>
      </div>

      {/* Medium devices */}

      {/* <div className="flex flex-col md:flex-row lg:flex-col  ">
        <div
          className={`${styles.container} w-full mt-0 p-[32px] group hover:bg-[#E7816B] md:flex md:flex-col md:justify-center rounded-b-[15px] md:rounded-r-[15px] lg:rounded-r-none md:rounded-b-none lg:rounded-b-[15px] transition-all duration-300 ease-in-out`}
        >
          <h1
            className={`${styles.containerTitle} text-center group-hover:text-white  tracking-[5px] font-medium uppercase leading-[26px]`}
          >
            {title}
          </h1>
          <p
            className={`${styles.containerText} text-center group-hover:text-white font-normal  leading-[26px] mt-[16px]`}
          >
            {desc}
          </p>
        </div>
      </div> */}
    </>
  );
};

export default WebDesignCards;
