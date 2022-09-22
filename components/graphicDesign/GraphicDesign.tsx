import React from "react";
import Design from "../resusableComponents/design/Design";

let title = "Graphic Design";
let text =
  "We deliver eye-catching branding materials that are tailored to meet your business objectives.";

const GraphicDesign = () => {
  return (
    <div>
      <Design title={title} text={text} />
    </div>
  );
};

export default GraphicDesign;
