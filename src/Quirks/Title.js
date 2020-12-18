import React from "react";
import vid from "./logvid.mp4";

function Title() {
  return (
    <div>
      <video width="220" height="300" muted autoPlay>
        <source src={vid} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default Title;
