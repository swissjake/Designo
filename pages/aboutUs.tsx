import React from "react";
import AboutUs from "../components/aboutUs/AboutUs";
import Location from "../components/location/Location";
import RealDeal from "../components/realDeal/RealDeal";
import WorldClassTalent from "../components/worldClassTalent/WorldClassTalent";

const aboutUs = () => {
  return (
    <div>
      <AboutUs />
      <WorldClassTalent />
      <Location />
      <RealDeal />
    </div>
  );
};

export default aboutUs;
