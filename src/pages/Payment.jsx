import { DataContext } from "src/components/DataProvider";
import React, { useContext, useState, useEffect } from "react";
import { NavBarDark, PaymentNavBar } from "src/components";

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

  return (
    <>
      <NavBarDark />

      <main>
        <PaymentNavBar />
        <section>
          <div>
            <label htmlFor="contact">Contact</label>
            <label htmlFor="contact">change</label>
            <input type="number" name="contact" id="contact" />
          </div>
          <div>
            <label htmlFor="shipTo">Ship To</label>
            <label htmlFor="shipTo">change</label>
            <input type="text" name="shipTo" id="shipTo" />
          </div>
          <div>
            <label htmlFor="total">Total</label>
            <span id="total"><strong>{total}</strong></span>
          </div>
        </section>
      </main>
    </>
  );
}

export default Payment;
