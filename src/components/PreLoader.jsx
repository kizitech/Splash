import React, { useEffect } from "react";
import { preLoaderAnim } from "src/components/items/Animation";

import logo from "src/assets/icons/logo.svg";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <>
      <div className="preloader">
        <div><img src={logo} alt="Logo" /></div>
        <div className="texts-container">
          <span>Make </span>
          <span>bold</span>
          <span>fashion </span>
          <span>choices </span>
          <span>with </span>
          <span>our </span>
          <span>outfits </span>
        </div>
      </div>
    </>
  );
};

export default PreLoader;
