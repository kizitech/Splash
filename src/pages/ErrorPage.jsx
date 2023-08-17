import React from "react";
                                                                                                                  
const ErrorPage = ({ errorCode }) => {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">{errorCode}</h1>
        <p className="error-message">Oops! Something went wrong.</p>
        <p className="error-description">We apologize for the inconvenience.</p>
        <div className="error-illustration">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 512 512"
          >
            <g fill="#e74c3c">{/* Your SVG path data here */}</g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
