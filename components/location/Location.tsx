import React from "react";
import styles from "./Location.module.scss";
import img1 from "../../assets/location/img1.png";
import img2 from "../../assets/location/img2.png";
import img3 from "../../assets/location/img3.png";
import Image from "next/image";
import { useRouter } from "next/router";

const items: { img: any; title: string; btnText: string }[] = [
  { img: img1, title: "canada", btnText: "See Location" },
  { img: img2, title: "australia", btnText: "See Location" },
  { img: img3, title: "united kingdom", btnText: "See Location" },
];

const Location = (): JSX.Element => {
  const router = useRouter();
  return (
    <section>
      <div className="container  md:px-[40px] xl:px-[165px] mt-[120px] lg:mt-[160px]">
        <div className="grid lg:grid-cols-3 gap-y-[48px]">
          {items &&
            items.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col items-center justify-center">
                  <div>
                    <Image src={item.img} alt="image" objectFit="contain" />
                  </div>
                  <div className="text-center">
                    <p
                      className={`${styles.locationTitle} uppercase leading-[26px] mt-[48px]`}
                    >
                      {item.title}
                    </p>
                    <div>
                      <button
                        onClick={() => router.push("/location")}
                        className={`${styles.locationBtn} mt-[32px]`}
                      >
                        {item.btnText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
