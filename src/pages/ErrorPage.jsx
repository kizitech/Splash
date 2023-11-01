import React from "react";
import { Link } from "react-router-dom";
                                                                                                                  
const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! Something went wrong.</p>
        <p className="error-description">We apologize for the inconvenience.</p>
        <div className="error-illustration">
          <Link>Go To Home Page</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
