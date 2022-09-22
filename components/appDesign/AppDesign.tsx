import React from "react";
import Design from "../resusableComponents/design/Design";

let title = "App Design";
let text =
  "Our mobile designs bring intuitive digital solutionsto your customers right at their fingertips.";

const AppDesign = () => {
  return (
    <div>
      <Design title={title} text={text} />
    </div>
  );
};

export default AppDesign;
