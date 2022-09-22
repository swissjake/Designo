import React from "react";
import WebDesign from "../components/webDesign/WebDesign";
import WebDesignCards from "../components/resusableComponents/webDesignCards/WebDesignCards";
import WebDesignCardList from "../components/webDesignCardList/WebDesignCardList";

const webDesign = () => {
  return (
    <div>
      <WebDesign />
      <WebDesignCardList />
    </div>
  );
};

export default webDesign;
