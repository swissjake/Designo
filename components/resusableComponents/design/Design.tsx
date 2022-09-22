import React from "react";
import styles from "./Design.module.scss";

interface Props {
  title: string;
  text: string;
}

const Design = ({ title, text }: Props): JSX.Element => {
  return (
    <section>
      <div className="container pt-[100px] md:pt-0  md:px-[40px] xl:px-[165px]">
        <div
          className={`${styles.container} py-[64px] md:rounded-[15px] px-[24px] md:px-0`}
        >
          <div className="h-full flex flex-col items-center justify-center">
            <h1
              className={`${styles.containerTitle} leading-[36px] md:leading-[48px] font-medium `}
            >
              {title}
            </h1>
            <p
              className={`${styles.containerText} mx-auto text-center md:w-[50%] lg:w-[32%] leading-[25px] md:leading-[26px] mt-[24px]`}
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design;
// {title, text}:Props
