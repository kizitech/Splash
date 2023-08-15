import { Link } from "react-router-dom";
import { DataContext } from "src/components/DataProvider";
import { NavBarDark, PaymentNavBar } from "src/components";
import React, { useContext, useState, useEffect } from "react";

import visa from "src/assets/icons/visa.svg";
import paypal from "src/assets/icons/paypal.png";
import AE from "src/assets/icons/American Express.png";
import mastercard from "src/assets/icons/mastercard.svg";

function Payment() {
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

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", {
      cardNumber,
      expiry,
      cvv,
      phoneNumber,
    });

    setCardNumber("");
    setExpiry("");
    setCvv("");
    setPhoneNumber("");
  };

  return (
    <>
      <NavBarDark />

      <main className="payment">
        <PaymentNavBar />
        <section className="payment-form">
          <form action="" className="payment-form__form">
            <div className="payment-form__contact">
              <label htmlFor="contact" className="payment-form__label">
                Contact
              </label>
              <label htmlFor="contact" className="payment-form__change">
                change
              </label>
              <input
                type="number"
                name="contact"
                id="contact"
                className="payment-form__input"
              />
            </div>
            <div className="payment-form__ship-to">
              <label htmlFor="shipTo" className="payment-form__label">
                Ship To
              </label>
              <label htmlFor="shipTo" className="payment-form__change">
                change
              </label>
              <input
                type="text"
                name="shipTo"
                id="shipTo"
                className="payment-form__input"
              />
            </div>
            <div className="payment-form__total">
              <label htmlFor="total" className="payment-form__label">
                Total
              </label>
              <span id="total" className="payment-form__total-value">
                <strong>${total}</strong>
              </span>
            </div>

            <h2 className="payment-form__additional-info">
              Additional information
            </h2>

            <input
              type="number"
              name="customCode"
              placeholder="Personal Customs Code"
              className="payment-form__Code"
            />
          </form>
        </section>

        {/* CARD PAYMENT */}
        <section className="payment-payment">
          <div className="payment-payment__info">
            <h2 className="payment-payment__info-heading">Payment</h2>
            <p className="payment-payment__info-text">
              All transactions are secure and encrypted.
            </p>
          </div>

          <div className="payment-payment__options">
            <div className="payment-payment__card">
              <form
                onSubmit={handleSubmit}
                className="payment-payment__card-form"
              >
                <label
                  htmlFor="rdo-1"
                  className="btn-radio payment-payment__radio"
                >
                  <div className="payment-payment__radio-inner">
                    <input
                      type="radio"
                      id="rdo-1"
                      name="radio-grp"
                      className="payment-payment__radio-input"
                    />
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      className="payment-payment__radio-circle"
                    >
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
                    <span>Credit/Debit Cards</span>
                  </div>
                  <div className="payment-payment__card-icons">
                    <img
                      src={visa}
                      alt="visa"
                      className="payment-payment__card-icon"
                    />
                    <img
                      src={mastercard}
                      alt="master card"
                      className="payment-payment__card-icon"
                    />
                    <img
                      src={AE}
                      alt="american express"
                      className="payment-payment__card-icon"
                    />
                  </div>
                </label>

                {/* CARD INFORMATION */}
                <section className="payment-payment__card-details">
                  <h2 className="payment-payment__card-details-subheading">
                    Pay with your credit or debit card
                  </h2>
                  <div className="payment-payment__card-inputs">
                    <div className="payment-payment__card-input">
                      <label
                        htmlFor="cardNumber"
                        className="payment-payment__card-label"
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="XXXX    XXXX     XXXX     XXXX"
                        className="payment-payment__card-input-field"
                        required
                      />
                    </div>
                    <div className="payment-payment__card-input expiry">
                      <label
                        htmlFor="expiry"
                        className="payment-payment__card-label"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        placeholder="MM/YY"
                        className="payment-payment__card-input-field"
                        required
                      />
                    </div>
                    <div className="payment-payment__card-input cvv">
                      <label
                        htmlFor="cvv"
                        className="payment-payment__card-label"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="XXX"
                        className="payment-payment__card-input-field"
                        required
                      />
                    </div>
                    <div className="payment-payment__card-input">
                      <label
                        htmlFor="phoneNumber"
                        className="payment-payment__card-label"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="payment-payment__card-input-field"
                        required
                      />
                    </div>
                    <button type="submit">Send Details</button>
                  </div>

                  {/* SAVE CARD DETAILS */}
                  <div className="information__save-info payment-payment__card-save-info ">
                    <label className="information__save-info-checkbox">
                      <input type="checkbox" name="saveInfo" checked />
                      <svg viewBox="0 0 64 64" height="1.3em" width="1.3em">
                        <path
                          pathLength="575.0541381835938"
                          className="path"
                          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                        ></path>
                      </svg>
                    </label>
                    <p className="information__save-info-text">Save Card</p>
                  </div>
                </section>

                <label
                  htmlFor="rdo-2"
                  className="btn-radio payment-payment__radio"
                >
                  <div className="payment-payment__radio-inner">
                    <input
                      type="radio"
                      id="rdo-2"
                      name="radio-grp"
                      className="payment-payment__radio-input"
                    />
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 20 20"
                      className="payment-payment__radio-circle"
                    >
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
                    <span>PayPal</span>
                  </div>
                  <img
                    src={paypal}
                    alt="paypal"
                    className="payment-payment__paypal-icon"
                  />
                </label>
                <Link to="/shop/account-details">
                  <button
                    type="submit"
                    className="payment-payment__submit-button"
                  >
                    Make Payment
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Payment;
