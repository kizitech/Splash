import React from "react";

export default function BackToTop() {
  return (
    <div className="Btn">
      <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
      </svg>
      <span className="text">
        <p>Back to Top</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            d="M13.5 1.5h.5a.5.5 0 0 0-.5-.5v.5Zm0-.5H8v1h5.5V1Zm-.5.5V7h1V1.5h-1Zm.146-.354l-12 12l.708.708l12-12l-.708-.708Z"
          />
        </svg>
      </span>
    </div>
  );
};
