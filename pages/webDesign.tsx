import React from "react";
import WebDesign from "../components/webDesign/WebDesign";
import WebDesignCards from "../components/resusableComponents/webDesignCards/WebDesignCards";
import WebDesignCardList from "../components/webDesignCardList/WebDesignCardList";
import AppWebDesign from "../components/appWebDesign/AppWebDesign";

const webDesign = () => {
  return (
    <div>
      <WebDesign />
      <WebDesignCardList />
      <AppWebDesign />
    </div>
  );
};

export default webDesign;
