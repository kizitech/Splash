import { Link } from "react-router-dom";
import { DataContext } from "src/components/DataProvider";
import { Sizes, Colors, NavBarDark, StarRating } from "src/components";

import plus from "src/assets/icons/plus.svg";
import minus from "src/assets/icons/minus.svg";
import { VscChromeClose } from "react-icons/vsc";

import React, { useContext, useState, useEffect } from "react";

export default function Cart() {
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

  const reduction = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product from your cart?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  if (cart.length === 0)
    return (
      <>
        <NavBarDark />
        <div className="cart-empty">
          <h2 style={{ textAlign: "center", fontSize: "3.5rem" }}>
            Your Cart Is Empty
          </h2>
        </div>
      </>
    );

  return (
    <>
      <NavBarDark />
      <main className="cart">
        {cart.map((product) => (
          <div key={product._id} className="cart__product">
            <img
              src={product.images[0]}
              alt={product.title}
              className="cart__product-image"
            />

            <div className="cart__product-details">
              <h2 className="cart__product-title" title={product.title}>
                {product.title}
              </h2>
              <h3 className="cart__product-price">${product.price}</h3>
              <Colors colors={product.colors} />
              <Sizes sizes={product.sizes} />
              <p className="cart__product-description">{product.description}</p>

              <div className="cart__product-quantity">
                <button
                  onClick={() => reduction(product._id)}
                  className="cart__product-quantity-btn"
                >
                  <img
                    src={minus}
                    alt="remove item to cart"
                    className=" cart__product-quantity-btn--reduce"
                  />
                </button>
                <span className="cart__product-quantity-count">
                  {product.count}
                </span>
                <button
                  onClick={() => increase(product._id)}
                  className="cart__product-quantity-btn"
                >
                  <img
                    src={plus}
                    alt="add more item to cart"
                    className="cart__product-quantity-btn--increase"
                  />
                </button>
              </div>

              <div
                onClick={() => removeProduct(product._id)}
                className="cart__product-remove"
              >
                <VscChromeClose />
              </div>
            </div>
          </div>
        ))}

        <div className="cart__summary">
          <Link to="/payment" className="cart__summary-link">
            Pay
          </Link>
          <h3 className="cart__summary-total">Total: $ {total}</h3>
        </div>
      </main>
    </>
  );
}
