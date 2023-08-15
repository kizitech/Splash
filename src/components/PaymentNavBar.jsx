import React from "react";
import { NavLink } from "react-router-dom";
import chevronRight from "src/assets/icons/chevron-right.svg";

function ActiveLink({ to, children }) {
  const isActive = window.location.pathname === to;

  const activeLinkStyle = {
    fontWeight: isActive ? 700 : "normal",
  };

  return (
    <NavLink to={to} style={activeLinkStyle}>
      {children}
    </NavLink>
  );
}

function PaymentNavBar() {
  return (
    <main>
      <nav>
        <ul style={styles.paymentNav}>
          <li><ActiveLink to="/shop/information">Information</ActiveLink></li>

          <li><img src={chevronRight} alt="Continue to shipping" className="open-menu" /></li>

          <li><ActiveLink to="/shop/shipping">Shipping</ActiveLink></li>

          <li><img src={chevronRight} alt="Continue to payment" className="open-menu" /></li>

          <li><ActiveLink to="/shop/payment">Payment</ActiveLink></li>
        </ul>
      </nav>
    </main>
  );
}


const styles = {
  paymentNav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
}; 

export default PaymentNavBar;
