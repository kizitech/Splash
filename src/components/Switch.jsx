import $ from "jquery";
import React, { useEffect } from "react";

function Switch() {
  useEffect(() => {
    $("#cb1").on("click", function () {
      $("body").toggleClass("dark-mode");
    });

    return () => {
        $("#cb1").off("click");
    };
  }, []); 

  return (
    <div className="switch">
      <div className="button-con">
        <input className="toggle" id="cb1" type="checkbox" />
        <label className="toggle-button" htmlFor="cb1"></label>
      </div>
      <div className="switch-text">
        <span>n</span>
        <span>ff</span>
      </div>
    </div>
  );
}

export default Switch;
