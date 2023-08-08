import { Link, useParams } from "react-router-dom";
import { DataContext } from "src/components/DataProvider";
import React, { useContext, useState, useRef } from "react";
import { Sizes, Colors, StarRating, NavBarDark, ProductThumbnails } from "src/components";

import add from "src/assets/icons/plus.svg";
import remove from "src/assets/icons/minus.svg";

export default function Details() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;

  const [index, setIndex] = useState(0);
  const imgDiv = useRef();

  const details = products.filter((product, index) => {
    return product._id === id;
  });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <>
      <NavBarDark />

      <div className="buy">
        <div className="buy__details">
          {details.map((product) => (
            <div key={product._id} className="buy__details-product">
              <div className="buy__details-image-container">
                <div className="buy__details-image" onMouseMove={handleMouseMove} style={{ backgroundImage: `url("${product.images[index]}")` }}
                ref={imgDiv} onMouseLeave={() => (imgDiv.current.style.backgroundPosition = `center`)} />

                <div className="buy__details-image-thumbnails">
                  <ProductThumbnails images={product.images} setIndex={setIndex} />
                </div>
              </div>

              <div className="buy__details-product-info">
                <h2 className="buy__details-product-title" title={product.title}>{product.title}</h2>
                <p className="buy__details-product-description">{product.description}</p>

                <div className="buy__details-product-rating"><StarRating /></div>
                <h2 className="buy__details-product-price"><strong>${product.price}</strong></h2>

                <div className="buy__details-product-quantity">
                  <h3 className="buy__details-product-quantity-title">Quantity</h3>
                  <div className="quantity">
                    <button onClick={() => reduction(product._id)}><img src={remove} alt="remove from cart" /></button>
                    <span>{product.count}</span>
                    <button onClick={() => increase(product._id)}><img src={add} alt="add to cart" /></button>
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

                <div className="buy__details-product-buttons">
                  <button onClick={() => addCart(product._id)}className="buy__details-add-to-cart-button">Add to Cart</button>
                  <Link to="/cart" className="buy__details-view-cart-link">View Cart</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
