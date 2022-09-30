import React from "react";
import express from "../../assets/webdesigncards/express.jpeg";
import WebDesignCards from "../resusableComponents/webDesignCards/WebDesignCards";
import express1 from "../../assets/webdesigncards/Express1.jpeg";
import transfer from "../../assets/webdesigncards/transfer.jpeg";
import blog from "../../assets/webdesigncards/blog.jpeg";
import camp from "../../assets/webdesigncards/camp.jpeg";
import photon from "../../assets/webdesigncards/Express2.png";
import expressmb from "../../assets/webdesigncards/expressmb.png";
import transfermb from "../../assets/webdesigncards/transfermb.png";
import photomb from "../../assets/webdesigncards/photomb.png";
import buidmb from "../../assets/webdesigncards/buidmb.png";
import blogmb from "../../assets/webdesigncards/blogmb.png";
import campmb from "../../assets/webdesigncards/campmb.png";

const items: { mobileImg: any; img: any; title: string; desc: string }[] = [
  {
    img: express1,
    mobileImg: expressmb,
    title: "express",
    desc: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    img: transfer,
    mobileImg: transfermb,
    title: "Transfer",
    desc: "Site for low-cost money transfers and sending money within seconds",
  },
  {
    img: photon,
    mobileImg: photomb,
    title: "photon",
    desc: "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    img: express,
    mobileImg: buidmb,
    title: "builder",
    desc: "Connects users with local contractors based on their location",
  },
  {
    img: blog,
    mobileImg: blogmb,
    title: "blogr",
    desc: "Blogr is a platform for creating an online blog or publication",
  },
  {
    img: camp,
    mobileImg: campmb,
    title: "camp",
    desc: "Get expert training in coding, data, design, and digital marketing",
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
