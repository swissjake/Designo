import Image from "next/image";
import React from "react";
import passion1 from "../../assets/passion/passion1.png";
import passion2 from "../../assets/passion/passion2.png";
import passion3 from "../../assets/passion/passion3.png";
import styles from "./Passion.module.scss";

const items: { img: any; title: string; text: string }[] = [
  {
    img: passion1,
    title: "passionate",
    text: "Each project starts with an in-depth brand research to ensure we on create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    img: passion2,
    title: "resourceful",
    text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    img: passion3,
    title: "friendly",
    text: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];
const Passion: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className="container  md:px-[40px] xl:px-[165px] mt-[160px] md:pt-0 px-[24px] ">
        <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-y-[80px] md:gap-y-[32px] lg:gap-x-[30px]">
          {items.map((item, index) => (
            <div
              className=" w-full flex flex-col md:flex-row lg:flex-col md:gap-x-[48px]   justify-between items-center  "
              key={index}
            >
              <div
                className={`${styles.roundedCircle} flex  justify-center items-center rounded-full h-[202px] w-[202px]`}
              >
                <Image
                  objectFit="cover"
                  width={150}
                  height={130}
                  src={item.img}
                  alt="ksksk"
                />
              </div>
              <div className="text-center md:text-start lg:text-center md:w-[70%] lg:w-[100%]  mt-[48px] lg:mt-[48px] md:mt-0">
                <h1
                  className={`${styles.title} uppercase font-medium tracking-[5px]`}
                >
                  {item.title}
                </h1>
                <p className={`${styles.text} mt-[32px] md:mt-0 lg:mt-[32px]`}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Passion;
