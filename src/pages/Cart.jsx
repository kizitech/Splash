import { Link } from "react-router-dom";
import { DataContext } from "src/components/DataProvider";
import { Sizes, Colors, NavBarDark, StarRating } from "src/components";

import plus from "src/assets/icons/plus.svg";
import minus from "src/assets/icons/minus.svg";

import { RiDeleteBin6Line } from "react-icons/ri";
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

  const clearCart = () => {
    if (window.confirm("Do you want to empty your cart?")) {
      setCart([]);
    }
  };

  if (cart.length === 0)
    return (
      <>
        <NavBarDark />
        <div className="cart-empty">
          <h2>Your Cart Is Empty</h2>
          <Link to="/shop">
            <button type="button">Start Shopping</button>
          </Link>
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

            <div className="buy__details-product-info">
              <h2 className="buy__details-product-title" title={product.title}>
                {product.title}
              </h2>
              <p className="buy__details-product-description">
                {product.description}
              </p>

              <div className="buy__details-product-rating">
                <StarRating />
              </div>
              <h2 className="buy__details-product-price">
                <strong>${product.price}</strong>
              </h2>

              <div className="buy__details-product-quantity">
                <h3 className="buy__details-product-quantity-title">
                  Quantity
                </h3>
                <div className="quantity">
                  <button onClick={() => reduction(product._id)}>
                    <img src={minus} alt="remove one from cart" />
                  </button>
                  <span>{product.count}</span>
                  <button onClick={() => increase(product._id)}>
                    <img src={plus} alt="add one more to cart" />
                  </button>
                </div>
              </div>

              <div className="buy__details-product-colors">
                <h3 className="buy__details-product-colors-title">Colors:</h3>
                <Colors colors={product.colors} />
              </div>

              <div className="buy__details-product-sizes">
                <h3 className="buy__details-product-sizes-title">Sizes:</h3>
                <Sizes sizes={product.sizes} />
              </div>

              <div
                onClick={() => removeProduct(product._id)}
                title="Remove item from cart"
                className="cart__product-remove"
              >
                <VscChromeClose className="close-menu" />
              </div>
            </div>
          </div>
        ))}

        <div className="cart__summary">
          <div>
            <button type="submit" onClick={() => clearCart()}>
              Clear Cart <RiDeleteBin6Line />
            </button>
            <button className="cart__summary-total">Total: $ {total}</button>
          </div>
          <Link to="/shop/information" className="cart__summary-link">
            Pay
          </Link>
        </div>
      </main>
    </>
  );
}
