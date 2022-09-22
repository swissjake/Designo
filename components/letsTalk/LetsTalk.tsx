import { url } from "inspector";
import React from "react";
import circle from "../../assets/letstalk/circle.png";
import styles from "./LetsTalk.module.scss";

const LetsTalk = () => {
  return (
    <section className="">
      <div className="container  md:px-[40px] xl:px-[165px] mt-[121px] md:pt-0 px-[24px] mb-[-200px] md:mb-[-100px] lg:mb-[-80px] relative z-20  ">
        <div
          className={`${styles.bgImage} lg:h-[292px] w-full bg-red-400 rounded-[15px] lg:px-[95px]  py-[64px] md:py-[57px] lg:py-0  px-[24px]`}
          // style={{
          //   backgroundImage: `url(${circle.src})`,
          //   backgroundSize: "contain",
          //   backgroundPosition: "right",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          <div className="h-full w-full md:flex md:flex-col lg:flex-row md:items-center md:text-center lg:text-start">
            <div className="md:flex md:h-full md:flex-col md:justify-center">
              <p
                className={`${styles.letsTalkTitle} text-center lg:text-start mx-auto lg:mx-0 w-[80%]  md:w-[40%] lg:w-[40%] leading-[40px] font-medium`}
              >
                Let’s talk about your project
              </p>
              <p
                className={`${styles.letsTalkText} text-center lg:text-start md:mx-auto lg:mx-0 w-full leading-[26px] md:w-[63%] lg:w-[58%] mt-4`}
              >
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>
            <div className="flex justify-center mt-[32px] lg:mt-0 ">
              <button className={`${styles.letsTalkButton}`}>
                get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
