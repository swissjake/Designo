import React from "react";
import AppWebDesign from "../components/appWebDesign/AppWebDesign";
import GraphicCardList from "../components/graphicCardList/GraphicCardList";
import GraphicDesign from "../components/graphicDesign/GraphicDesign";

const graphicDesign: React.FC = (): JSX.Element => {
  return (
    <div>
      <GraphicDesign />
      <GraphicCardList />
      <AppWebDesign />
    </div>
  );
};

export default graphicDesign;
