import { Link } from "react-router-dom";
import { DataContext } from "src/components/DataProvider";
import { NavBarDark, PaymentNavBar } from "src/components";
import React, { useContext, useState, useEffect } from "react";

import uba from "src/assets/icons/uba.png";
import visa from "src/assets/icons/visa.svg";

function AccountDetails() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  return (
    <>
      <NavBarDark />

      <main className="account-details">
        <section className="account-details__section">
          <div className="account-details__icons">
            <img src={uba} alt="united bank for africa" className="account-details__uba" />
            <img src={visa} alt="visa" className="account-details__visa" />
          </div>
          <div className="account-details__message">
            <p>
              For security reasons, a one-time password will be sent to your
              mobile number or via your email. Please select your desired option.
            </p>
          </div>
          <div className="account-details__options">
            <label htmlFor="rdo-1" className="account-details__radio-label btn-radio">
              <input type="radio" id="rdo-1" name="radio-grp" className="account-details__radio-input" />
              <svg width="20px" height="20px" viewBox="0 0 20 20" className="account-details__radio-svg">
                <circle cx="10" cy="10" r="9"></circle>
                <path
                  d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                  className="inner open-menu"
                ></path>
                <path
                  d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                  className="outer open-menu"
                ></path>
              </svg>
              <span className="account-details__radio-text">Email</span>
            </label>
            <label htmlFor="rdo-2" className="account-details__radio-label btn-radio">
              <input type="radio" id="rdo-2" name="radio-grp" className="account-details__radio-input" />
              <svg width="20px" height="20px" viewBox="0 0 20 20" className="account-details__radio-svg">
                <circle cx="10" cy="10" r="9"></circle>
                <path
                  d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                  className="inner open-menu"
                ></path>
                <path
                  d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                  className="outer open-menu"
                ></path>
              </svg>
              <span className="account-details__radio-text">Sms</span>
            </label>
          </div>
          <div className="account-details__resend">
            <p>Click here to resend OTP</p>
            <form className="account-details__form" action="">
              <h2 className="account-details__form-heading">Transaction Details</h2>
              <div className="account-details__form-group">
                <div className="account-details__form-labels">
                  <label htmlFor="merchant" className="account-details__label">Merchant:</label>
                  <label htmlFor="transactionAmount" className="account-details__label">Transaction Amount:</label>
                  <label htmlFor="cardNumber" className="account-details__label">Card Number:</label>
                  <label htmlFor="code" className="account-details__label">Enter Code:</label>
                </div>
                <div className="account-details__form-values">
                  <h3 className="account-details__value-heading">Splash</h3>
                  <h4 className="account-details__value-amount">${total}</h4>
                  <input type="number" className="account-details__value-input" placeholder="XXXX XXXX XXXX 1234" />
                  <input
                    type="number"
                    name="code"
                    id="code"
                    className="account-details__value-input"
                    placeholder="XXXX"
                  />
                </div>
              </div>
            </form>
            <div className="account-details__buttons">
              <Link to="/shop/payament" className="account-details__link"><button className="account-details__button" type="button">Go Back</button></Link>
              <Link to="/shop/payment-successful" className="account-details__link"><button className="account-details__button" type="submit">Submit</button></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AccountDetails;

