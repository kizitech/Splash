import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import sass from './sass/mainStyles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer, DataProvider, ScrollRestoration, BackToTop as Top } from "./components";
import { Buy, Home, Cart, Blog, Shop, About, Contact, BuyHome, Payment, Shipping, Information, AccountDetails, PaymentSuccessful } from "./pages";


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <ScrollRestoration />
          <ScrollToTop smooth top={200} component={<Top />} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop/payment" element={<Payment />} />
            <Route path="/shop/shipping" element={<Shipping />} />
            <Route path="/shop/products/:id" element={<Buy />} />
            <Route path="/information" element={<Information />} />
            <Route path="/shop/home-products/:id" element={<BuyHome />} />
            <Route path="/shop/account-details" element={<AccountDetails />} />
            <Route path="/shop/payment-successful" element={<PaymentSuccessful />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
