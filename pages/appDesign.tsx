import React from "react";
import AppDesign from "../components/appDesign/AppDesign";
import AppDesignCardList from "../components/appDesignCardList/AppDesignCardList";
import AppWebDesign from "../components/appWebDesign/AppWebDesign";

const appDesign: React.FC = (): JSX.Element => {
  return (
    <div>
      <AppDesign />
      <AppDesignCardList />
      <AppWebDesign />
    </div>
  );
};

export default appDesign;
