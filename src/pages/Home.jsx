import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import NavBar from "src/components/NavBar";
import StarRating from "src/components/StarRating";
import { DataContext } from 'src/components/DataProvider'

import heroImage from "src/assets/images/home/Rectangle 88.png";
import { latestArrivals } from "../components/items/Home";

const Home = () => {
  const value = useContext(DataContext)
  const [homeProducts] = value.homeProducts
  const addHomeCart = value.addHomeCart

  return (
    <>
      <NavBar />

      <main className="home">
  <section className="home__section">
    <div className="home__hero">
      <div className="home__hero-bg">
        <img className="home__hero-image" src={heroImage} alt="hero image" />
      </div>
      <div className="home__hero-content">
        <h1 className="home__hero-title">Make a statement with every outfit</h1>
        <Link to="/shop" className="home__hero-link">
          <button type="button" className="home__hero-button">Start shopping</button>
        </Link>
      </div>
    </div>
    <div className="home__top-collection">
      <div className="home__top-collection-heading">
        <h2>Top Collections</h2>
      </div>
      <div className="home__top-collection-container">
         {homeProducts.map((homeProduct) => (
          <div className="home__top-collection-item" key={homeProduct._id}>
            <Link className="home__top-collection-image" to={`/shop/home-products/${homeProduct._id}`}>
              <img src={homeProduct.images[0]} alt={homeProduct.alt[0]}/>
            </Link>
            <div className="home__top-collection-details">
              <div className="home__top-collection-text">
                <h3 className="home__top-collection-title" title={homeProduct.title}><Link to={`/shop/home-products/${homeProduct._id}`}>{homeProduct.title}</Link></h3>
                <p className="home__top-collection-price">
                  <strong>${homeProduct.price}</strong>
                </p>
              </div>
              <div className="home__top-collection-rating">
                <StarRating className="home__top-collection-star" />
              </div>
              <div className="home__top-collection-buttons">
                <Link className="home__top-collection-buttons-buy"to={`/shop/home-products/${homeProduct._id}`}>Buy Now</Link>
                <Link className="home__top-collection-buttons-add"  onClick={() => addHomeCart(homeProduct._id)}><button type="button">Add to cart</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> 

    <div className="home__latest-arrivals">
      <div className="home__latest-arrivals-heading">
        <h2>Latest Arrivals</h2>
      </div>
      <div className="home__latest-arrivals-container">
        {latestArrivals.map((model) => (
          <div className="home__latest-arrivals-item" key={model.id}>
            <img className="home__latest-arrivals-image" src={model.image} alt={model.alt} />
            <div className="home__latest-arrivals-details">
              <h2 className="home__latest-arrivals-title">{model.title}</h2>
              <p className="home__latest-arrivals-description">{model.description}</p>
              <Link to="/shop" className="home__latest-arrivals-button">
                <button type="button">Explore now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</main>

    </>
  );
};

export default Home;
