import React from "react";
import styles from "../styles/Location.module.scss";
import map1 from "../assets/maps/map1.png";
import circle from "../assets/maps/circle.png";
import imgBg from "../assets/maps/imgBg.png";
import Image from "next/image";

const items: {
  country: string;
  title2: string;
  str: string;
  address: string;
  phone: string;
  email: string;
}[] = [
  {
    country: "canada",
    title2: "designo central office",
    str: "3886 Wellington Street",
    address: "Toronto, Ontario M9C 3J5",
    phone: " P : +1 253-863-8967",
    email: "M : contact@designo.co",
  },
  {
    country: "australia",
    title2: "designo AU office",
    str: "19 balonne Street",
    address: "new south wales 2443",
    phone: " P : (02) 6720 9092",
    email: "M : contact@designo.au",
  },
  {
    country: "united kingdom",
    title2: "designo UK office",
    str: "13 colorado way",
    address: "Rhyd-y-fro SA8 9GA",
    phone: "P : 078 3115 1400 ",
    email: "M : contact@designo.uk",
  },
];
const location: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className="container  md:px-[40px] xl:px-[165px] pt-[100px] md:pt-0">
        {items.map((item, index) => {
          return (
            <div
              className={`w-full flex flex-col-reverse ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } mb-[40px] md:mb-[120px] lg:mb-[32px] gap-x-[30px]`}
              key={index}
            >
              <div
                className={`${styles.container}  w-full overflow-hidden  md:rounded-[15px] h-[400px] md:h-fit`}
              >
                <div className="flex flex-col md:flex-row ml-[-30px] ">
                  <div className="h-fit relative">
                    <Image src={circle} alt="circle" objectFit="contain" />
                    <div
                      className={`absolute ${
                        index === 2 ? "md:left-[80%]" : " md:left-[60%]"
                      } left-[50%]  top-[50%] translate-x-[-50%] translate-y-[-50%] text-center md:text-start`}
                    >
                      <h1
                        className={`${styles.contactTitle} capitalize whitespace-nowrap leading-[36px] md:leading-[48px] font-medium`}
                      >
                        {item.country}
                      </h1>
                      <h3
                        className={`${styles.contactText} whitespace-nowrap font-bold capitalize mt-4 md:mt-2`}
                      >
                        {item.title2}
                      </h3>
                      <p className=" whitespace-nowrap font-normal">
                        {item.str} <br />
                        {item.address}
                      </p>
                    </div>
                  </div>
                  <div className="h-fit relative">
                    <div className="hidden md:block">
                      <Image src={circle} alt="circle" objectFit="contain" />
                    </div>
                    <div className="absolute left-[50%] md:left-[60%] top-[50%] translate-x-[-50%] translate-y-[-50%] md:mt-8 text-center md:text-start">
                      <h3
                        className={`${styles.contactText} whitespace-nowrap font-bold capitalize mt-2`}
                      >
                        contact
                      </h3>
                      <p className=" whitespace-nowrap font-normal">
                        {item.phone}
                        <br />
                        {item.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* MAPS */}
              <div className="relative hidden lg:block lg:w-[50%] ">
                <Image src={map1} alt="map" layout="fill" />
              </div>
              <div className="flex hidden md:block lg:hidden md:mb-[32px]">
                <Image
                  className=""
                  width={1000}
                  height={400}
                  src={map1}
                  alt="map"
                />
              </div>
              <div className="flex md:hidden md:mb-[32px]">
                <Image
                  className=""
                  width={1000}
                  height={800}
                  src={imgBg}
                  alt="map"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default location;
