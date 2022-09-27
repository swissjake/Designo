import Image from "next/image";
import React from "react";
import styles from "./WebDesignCards.module.scss";

interface Props {
  img: any;
  title: string;
  desc: string;
}

const WebDesignCards = ({ img, title, desc }: Props) => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col ">
      <Image src={img.src} objectFit="contain" alt="express" />

      <div
        className={`${styles.container} mt-0 p-[32px] group hover:bg-[#E7816B] md:flex md:flex-col md:justify-center lg:rounded-b-[15px] transition-all duration-300 ease-in-out`}
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
  );
};

export default WebDesignCards;
