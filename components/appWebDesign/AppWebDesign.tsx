import Image from "next/image";
import React from "react";
import graphic from "../../assets/projects/graphicdesign.png";
import app from "../../assets/projects/appdesign.png";
import { FiChevronRight } from "react-icons/fi";
import styles from "./AppWebDesign.module.scss";
import { useRouter } from "next/router";

const AppWebDesign = () => {
  const router = useRouter();
  return (
    <section>
      <div className="container  md:px-[40px] xl:px-[165px] mt-[160px] px-[24px] ">
        <div className="flex flex-col lg:flex-row items-center gap-y-[24px] lg:gap-x-[30px] justify-center">
          <div className=" w-full relative">
            <img
              className="w-full md:h-[200px] lg:h-[280px]"
              alt="web design"
              src={app.src}
            />
            <div className="absolute text-center left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <p
                className={`${styles.designText} tracking-[2px] whitespace-nowrap  font-medium leading-[48px]`}
              >
                APP DESIGN
              </p>
              <div
                onClick={() => router.push("/appDesign")}
                className="flex justify-center items-center mt-[24px]"
              >
                <p
                  className={`${styles.designText2}  tracking-[5px] whitespace-nowrap  font-medium leading-[48px] cursor-pointer`}
                >
                  VIEW PROJECTS
                </p>
                <FiChevronRight className="ml-[21px] text-[#E7816B]" />
              </div>
            </div>
          </div>

          <div className="w-full relative">
            <img
              className="w-full md:h-[200px] lg:h-[280px]"
              alt="web design"
              src={graphic.src}
            />
            <div className="absolute z-20 text-center left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <p
                className={`${styles.designText} tracking-[2px] whitespace-nowrap  font-medium leading-[48px]`}
              >
                GRAPHIC DESIGN
              </p>
              <div
                onClick={() => router.push("/graphicDesign")}
                className="flex justify-center items-center mt-[24px]"
              >
                <p
                  className={`${styles.designText2} tracking-[5px] whitespace-nowrap  font-medium leading-[48px] cursor-pointer`}
                >
                  VIEW PROJECTS
                </p>
                <FiChevronRight className="ml-[21px] text-[#E7816B]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppWebDesign;
