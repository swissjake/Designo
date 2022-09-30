import React from "react";
import filter from "../../assets/webdesigncards/filter.jpeg";
import eye from "../../assets/webdesigncards/eye.jpeg";
import face from "../../assets/webdesigncards/face.jpeg";
import todo from "../../assets/webdesigncards/todo.jpeg";
import studio from "../../assets/webdesigncards/studio.jpeg";
import filtermb from "../../assets/webdesigncards/filtermb.png";
import eyemb from "../../assets/webdesigncards/eyemb.png";
import facemb from "../../assets/webdesigncards/facemb.png";
import todomb from "../../assets/webdesigncards/todomb.png";
import studiomb from "../../assets/webdesigncards/studiomb.png";
import WebDesignCards from "../resusableComponents/webDesignCards/WebDesignCards";

const items: { mobileImg: any; img: any; title: string; desc: string }[] = [
  {
    img: filter,
    mobileImg: filtermb,
    title: "airfilter",
    desc: "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    img: eye,
    mobileImg: eyemb,
    title: "eyecam",
    desc: "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    img: face,
    mobileImg: facemb,
    title: "faceit",
    desc: "Get to meet your favorite internet superstar with the faceit app",
  },
  {
    img: todo,
    mobileImg: todomb,
    title: "todo",
    desc: "A todo app that features cloud sync with light and dark mode",
  },
  {
    img: studio,
    mobileImg: studiomb,
    title: "loopstudios",
    desc: "A VR experience app made for Loopstudios",
  },
];
const AppDesignCardList = () => {
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

export default AppDesignCardList;
