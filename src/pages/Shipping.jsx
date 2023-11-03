import React from "react";
import { Link } from "react-router-dom";
import { NavBarDark, PaymentNavBar } from "/src/components";

function Shipping() {
  return (
    <>
      <NavBarDark />

      <main className="shipping">
        <PaymentNavBar />
        <div className="shipping__content">
          <form className="shipping__form" action="" method="post">
            <input
              type="text"
              className="shipping__input"
              name="contact"
              placeholder="Contact"
            />
            <input
              type="text"
              className="shipping__input"
              name="shipTo"
              placeholder="Ship To"
            />

            <h2 className="shipping__title">Shipping Method</h2>

            <input
              type="text"
              className="shipping__input shipping__input--long1"
              name="shipping"
              placeholder="10-15 working days  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $20.000"
            />
            <input
              type="text"
              className="shipping__input shipping__input--long2"
              name="shipping"
              placeholder="10-15 working days    &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $20.000"
            />
          </form>
          <Link to="/shop/payment" className="shipping__link">
            <button className="shipping__button">Continue To Payment</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Shipping;
