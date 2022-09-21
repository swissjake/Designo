import { url } from "inspector";
import React from "react";
import circle from "../../assets/letstalk/circle.png";
import styles from "./LetsTalk.module.scss";

const LetsTalk = () => {
  return (
    <section className="container  md:px-[40px] xl:px-[165px] mt-[160px] md:pt-0 px-[24px] ">
      <div
        className=" h-[292px] w-full bg-red-400 rounded-[15px] lg:px-[95px]"
        style={{
          backgroundImage: `url(${circle.src})`,
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full w-full md:flex md:flex-col lg:flex-row items-center md:text-center lg:text-start">
          <div className="md:flex h-full md:flex-col md:justify-center">
            <p
              className={`${styles.letsTalkTitle} md:mx-auto lg:mx-0 w-full  md:w-[50%] lg:w-[40%] leading-[40px] font-medium`}
            >
              Let’s talk about your project
            </p>
            <p
              className={`${styles.letsTalkText} md:mx-auto lg:mx-0 w-full leading-[26px] md:w-[60%] lg:w-[58%] mt-4`}
            >
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div className="mb-12">
            <button className={`${styles.letsTalkButton}`}>get in touch</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;

// flex flex-col justify-center
