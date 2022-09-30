import React from "react";
import timbrown from "../../assets/webdesigncards/timbrown.jpeg";
import boxed from "../../assets/webdesigncards/boxed.jpeg";
import science from "../../assets/webdesigncards/science.jpeg";
import timbrownmb from "../../assets/webdesigncards/timbrownmb.png";
import boxedmb from "../../assets/webdesigncards/boxedmb.png";
import sciencemb from "../../assets/webdesigncards/sciencemb.png";
import WebDesignCards from "../resusableComponents/webDesignCards/WebDesignCards";

const items: { mobileImg: any; img: any; title: string; desc: string }[] = [
  {
    img: timbrown,
    mobileImg: timbrownmb,
    title: "tim brown",
    desc: "A book cover designed for Tim Brown’s new release, ‘Change’",
  },
  {
    img: boxed,
    mobileImg: boxedmb,
    title: "boxed water",
    desc: "A simple packaging concept made for Boxed Water",
  },
  {
    img: science,
    mobileImg: sciencemb,
    title: "science",
    desc: "A poster made in collaboration with the Federal Art Project",
  },
];
const GraphicCardList: React.FC = (): JSX.Element => {
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

export default GraphicCardList;
