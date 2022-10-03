import React from "react";
import img2 from "../../assets/worldclass/img2.jpeg";
import img4 from "../../assets/worldclass/img4.png";
import img3 from "../../assets/worldclass/img2.png";
import pics from "../../assets/worldclass/pics.png";
import styles from "./WorldClass.module.scss";

const WorldClassTalent: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className="container  md:px-[40px] xl:px-[165px] md:mt-[120px] lg:mt-[160px]">
        <div className="flex flex-col lg:flex-row ">
          <div className="hidden lg:block w-[100%]">
            <img
              className="md:h-[30%] lg:h-[100%]  w-[100%] rounded-l-[15px]"
              src={pics.src}
              alt="image"
            />
          </div>

          {/* Tablet */}
          <div className="hidden md:block lg:hidden">
            <img className="md:h-[30%]  w-[100%]" src={img3.src} alt="image" />
          </div>

          {/* Mobile */}
          <div className=" md:hidden">
            <img className="md:h-[30%]  w-[100%]" src={img4.src} alt="image" />
          </div>

          <div
            className={`${styles.worldClassContainer} text-center lg:text-start lg:flex flex-col justify-center bg-[#FDF3F0] md:rounded-bl-[15px] lg:rounded-bl-none rounded-r-[15px] lg:w-[100%] py-[80px] md:py-[64px] md:px-[58px] lg:py-[154px] lg:px-[94px] px-[24px]`}
          >
            <h1
              className={`${styles.worldClassTitle} leading-[36px] md:leading-[48px]`}
            >
              World-class talent
            </h1>
            <p
              className={`${styles.worldClassText} leading-[25px] md:leading-[26px] mt-[32px]`}
            >
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
              <br className="md:hidden" />
              <br className="md:hidden" /> Our team is multi-disciplinary and we
              are not merely interested in form — content and meaning are just
              as important. We give great importance to craftsmanship, service,
              and prompt delivery. Clients have always been impressed with our
              high-quality outcomes that encapsulates their brand’s story and
              mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldClassTalent;
