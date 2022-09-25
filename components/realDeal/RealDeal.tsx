import React from "react";
import styles from "./RealDeal.module.scss";
import img1 from "../../assets/realdeal/img1.png";
import img2 from "../../assets/realdeal/img2.jpeg";
import img3 from "../../assets/realdeal/img3.jpeg";

const RealDeal = () => {
  return (
    <section>
      <div className="container  md:px-[40px] xl:px-[165px] mt-[120px] lg:mt-[160px]">
        <div className="flex flex-col-reverse lg:flex-row">
          <div
            className={` ${styles.realContainer} text-center lg:text-start flex flex-col justify-center md:rounded-b-[15px] lg:rounded-br-none py-[80px] md:py-[68px] lg:py-0 px-[24px] md:px-[58px] lg:px-[95px]`}
          >
            <h1 className={`${styles.realTitle}`}>The real deal</h1>
            <p
              className={`${styles.realText} leading-[25px] md:leading-[26px] mt-[24px] md:mt-[32px]`}
            >
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
              <br className="md:hidden" />
              <br className="md:hidden" /> We are visual storytellers in
              appealing and captivating ways. By combining business and
              marketing strategies, we inspire audiences to take action and
              drive real results.
            </p>
          </div>
          {/* <div className="h-full"> */}
          <img
            className="  w-[100%] hidden lg:block  rounded-r-[15px]"
            src={img1.src}
            alt=""
          />
          <img
            className="  w-[100%] hidden md:block lg:hidden rounded-t-[15px]"
            src={img2.src}
            alt=""
          />
          <img className="  w-[100%] md:hidden" src={img3.src} alt="" />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default RealDeal;
