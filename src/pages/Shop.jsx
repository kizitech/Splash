import { Link } from "react-router-dom";
import React, { useState, useContext } from 'react';
import StarRating from "src/components/StarRating";
import NavBarDark from "src/components/NavBarDark";
import { DataContext } from 'src/components/DataProvider'

const Shop = () => {
  const [search, setSearch] = useState("");
  const value = useContext(DataContext)
  const [products] = value.products
  const addCart = value.addCart

  return (
    <>
        <NavBarDark />

        <main className="shop">
            <div className="shop__clothes">
                <div className="shop__clothes-heading"><h2>Shop</h2></div>
                <input type="text" name="search" className="input" placeholder="search..." onChange={(event) => {
              setSearch(event.target.value);
            }} />
                
                <div className="shop__clothes-container">

                    {products
                    .filter((val) => {
                if (search == " ") {
                  return val;
                } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
                  return val;
                }
              })

                    .map(product => (
                    <div className="shop__clothes-item" key={product._id}>

                        <Link className="shop__clothes-image" to={`/shop/products/${product._id}`}>
                            <img src={product.images[0]} alt={product.alt[0]}/>
                        </Link>

                        <div className="shop__clothes-details">
                            <div className="shop__clothes-text">
                                <h3  className="shop__clothes-title" title={product.title}><Link to={`/shop/products/${product._id}`}>{product.title}</Link></h3>
                                <p className="shop__clothes-price"><strong>${product.price}</strong></p>
                            </div>
                            <div className="shop__clothes-rating"><StarRating className="shop__clothes-star" /></div>
                            <div className="shop__clothes-buttons">
                                <Link className="shop__clothes-buttons-buy"to={`/shop/products/${product._id}`}>Buy Now</Link>
                                <Link className="shop__clothes-buttons-add"  onClick={() => addCart(product._id)}><button type="button">Add to cart</button></Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </main>
    </>
  );
};

export default Shop;
