import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import web from "../../assets/projects/webdesign.png";
import app from "../../assets/projects/appdesign.png";
import graphic from "../../assets/projects/graphicdesign.png";
import mobileImg1 from "../../assets/projects/mobileImg1.jpeg";
import styles from "./Project.module.scss";
import { FiChevronRight } from "react-icons/fi";

const items: { img: any; title: string; text: string; link: string }[] = [
  {
    img: mobileImg1,
    title: "web design",
    text: "view Projects",
    link: "/webDesign",
  },
  { img: app, title: "app design", text: "view Projects", link: "/appDesign" },
  {
    img: graphic,
    title: "graphic design",
    text: "view Projects",
    link: "/graphicDesign",
  },
];

const Project: React.FC = (): JSX.Element => {
  const router = useRouter();
  return (
    <section>
      <div className="container  md:px-[40px] xl:px-[165px] mt-[160px] md:pt-0 px-[24px] ">
        <div className="lg:flex flex-col lg:flex-row lg:items-center hidden ">
          {/* THE FIRST SECTION */}
          <div className="flex relative group ">
            {/* FOR DESKTOP */}

            <Image
              alt="web design"
              objectFit="contain"
              src={web}
              role="design"
            />

            <div className="z-10 absolute text-center left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <p
                className={`${styles.designText} tracking-[2px] whitespace-nowrap  font-medium leading-[48px]`}
              >
                WEB DESIGN
              </p>
              <div
                onClick={() => router.push("/webDesign")}
                className="flex justify-center items-center"
              >
                <p
                  className={`${styles.designText2} tracking-[5px] whitespace-nowrap  font-medium leading-[48px] cursor-pointer`}
                >
                  VIEW PROJECTS
                </p>
                <FiChevronRight className="ml-[21px] text-[#E7816B]" />
              </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 opacity-70 lg:group-hover:bg-[#E7816B] transition-all duration-200 ease-in-out  rounded-[15px]" />
          </div>

          {/* second container */}
          <div className="flex flex-col justify-center items-center  ml-[24px]">
            <div className="w-[100%] relative mb-[20px] group">
              <Image
                className="w-screen"
                alt="web design"
                objectFit="cover"
                priority
                role="design"
                src={app}
              />

              <div className="z-10 absolute text-center left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p
                  className={`${styles.designText} tracking-[2px] whitespace-nowrap  font-medium leading-[48px]`}
                >
                  APP DESIGN
                </p>
                <div
                  onClick={() => router.push("/appDesign")}
                  className="flex justify-center items-center"
                >
                  <p
                    className={`${styles.designText2} tracking-[5px] whitespace-nowrap  font-medium leading-[48px] cursor-pointer`}
                  >
                    VIEW PROJECTS
                  </p>
                  <FiChevronRight className="ml-[21px] text-[#E7816B]" />
                </div>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-1.5 opacity-70 lg:group-hover:bg-[#E7816B] transition-all duration-200 ease-in-out  rounded-[15px]" />
            </div>

            {/* GRAPHIC DESIGN SECTION */}
            <div className="z-10 relative group">
              <Image
                className=""
                alt="web design"
                objectFit="contain"
                src={graphic}
                role="design"
              />
              <div className="z-10 absolute text-center left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p
                  className={`${styles.designText} tracking-[2px] whitespace-nowrap  font-medium leading-[48px]`}
                >
                  GRAPHIC DESIGN
                </p>
                <div
                  onClick={() => router.push("/graphicDesign")}
                  className="flex justify-center items-center"
                >
                  <p
                    className={`${styles.designText2} tracking-[5px] whitespace-nowrap  font-medium leading-[48px] cursor-pointer`}
                  >
                    VIEW PROJECTS
                  </p>
                  <FiChevronRight className="ml-[21px] text-[#E7816B]" />
                </div>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-1.5 opacity-70 lg:group-hover:bg-[#E7816B] transition-all duration-200 ease-in-out  rounded-[15px]" />
            </div>
          </div>
        </div>

        {/* FOR MOBILE */}
        <div className="flex flex-col justify-center items-center lg:hidden ">
          {items.map((item, index) => (
            <div
              className="w-full  relative mb-[20px] rounded-[15px]"
              key={index}
            >
              <img
                className="h-[250px] md:h-[200px] w-full rounded-[15px]"
                alt="web design"
                src={item.img.src}
              />

              <div className="absolute text-center left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                <p
                  className={`${styles.designText} uppercase tracking-[1.4px]  md:tracking-[2px] whitespace-nowrap  font-medium leading-[48px]`}
                >
                  {item?.title}
                </p>
                <div
                  onClick={() => router.push(item.link)}
                  className="flex justify-center items-center"
                >
                  <p
                    className={`${styles.designText2} uppercase tracking-[5px] whitespace-nowrap  font-medium leading-[48px] cursor-pointer`}
                  >
                    {item?.text}
                  </p>
                  <FiChevronRight className="ml-[21px] text-[#E7816B]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
