import React from "react";
import Design from "../resusableComponents/design/Design";

let title = "Web Design";
let text =
  "We build websites that serve as powerful marketing tools and bring memorable brand experiences.";

const WebDesign = () => {
  return (
    <div>
      <Design title={title} text={text} />
    </div>
  );
};

export default WebDesign;
