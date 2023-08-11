import React  from 'react';
import { Link } from 'react-router-dom';
import { Country } from "country-state-city";
import { NavBarDark, PaymentNavBar, Dropdown } from "src/components";

import paypal from "src/assets/images/information/paypal.png";
import paystack from "src/assets/images/information/paystack.png";

function Information() {
  const countryName = Country.getAllCountries().map((country) => ({
    value: country.name,
    displayValue: country.name,
  }));

  return (
    <>
      <NavBarDark />

      <main className="information">
        <PaymentNavBar />

        <div className="information__content">
          <section className="information__section">
            <h3 className="information__section-title">Express Checkout</h3>
            <div className="information__payment">
              <div className="information__payment-paypal" title='paypal'><img src={paypal} alt="PayPal" /></div>
              <div className="information__payment-paystack" title='paystack'><img src={paystack} alt="Paystack" /></div>
            </div>
            <div className="information__divider">
              <hr className="information__divider-line" /><span className="information__divider-text">OR</span><hr className="information__divider-line" />
            </div>
          </section>

          <section className="information__section">
            <h2 className="information__section-heading">Shipping Address</h2>
            <form className="information__form" action="">
              <Dropdown options={countryName} className="information__country-dropdown" />
              <div className="information__form-name">
                <input type="text" className="information__input information__input--half" name="firstName" placeholder="First Name" />
                <input type="text" className="information__input information__input--half" name="lastName" placeholder="Last Name" />
              </div>
              <input type="number" className="information__input" name="phone" placeholder="Phone" />
              <input type="text" className="information__input" name="address" placeholder="Address" />
              <input type="text" className="information__input" name="apartment" placeholder="Apartment, suite etc. (optional)" />
              <input type="text" className="information__input" name="state" placeholder="State" />
            </form>
            <div className="information__save-info">
                <label className="information__save-info-checkbox">
                    <input type="checkbox" name="saveInfo" />
                    <svg viewBox="0 0 64 64" height="1.3em" width="1.3em">
                        <path pathLength="575.0541381835938" className="path" d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"></path>
                    </svg>
                </label>
                <p className="information__save-info-text">Save this information for next time</p>
            </div>
            <div className="information__continue">
              <Link to='/shop/shipping' className="information__continue-link">
                <button type="button" className="information__continue-button">Continue To Shipping</button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Information;
