import React from "react";
import express from "../../assets/webdesigncards/express.jpeg";
import WebDesignCards from "../resusableComponents/webDesignCards/WebDesignCards";
import express2 from "../../assets/webdesigncards/Express2.png";

const items: { img: any; title: string; desc: string }[] = [
  {
    img: express,
    title: "express",
    desc: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    img: express2,
    title: "Transfer",
    desc: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    img: express,
    title: "express",
    desc: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    img: express,
    title: "express",
    desc: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    img: express,
    title: "express",
    desc: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    img: express,
    title: "express",
    desc: "A multi-carrier shipping website for ecommerce businesses",
  },
];

const WebDesignCardList: React.FC = (): JSX.Element => {
  return (
    <section>
      <div className="container mt-[96px] md:mt-[160px]  md:pt-0  md:px-[40px] xl:px-[165px] px-[24px]">
        <div className="grid  lg:grid-cols-3 gap-y-[40px] md:gap-[32px]">
          {items.map((item, index) => (
            <WebDesignCards {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesignCardList;
