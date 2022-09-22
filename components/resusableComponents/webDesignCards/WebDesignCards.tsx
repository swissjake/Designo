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
    <div className="">
      <div className="flex flex-col md:flex-row lg:flex-col ">
        <div>
          <Image src={img} objectFit="contain" alt="express" />
        </div>
        <div
          className={`${styles.container} p-[32px] md:flex md:flex-col md:justify-center`}
        >
          <h1
            className={`${styles.containerTitle} text-center tracking-[5px] font-medium uppercase leading-[26px]`}
          >
            {title}
          </h1>
          <p
            className={`${styles.containerText} text-center font-normal  leading-[26px] mt-[16px]`}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDesignCards;
