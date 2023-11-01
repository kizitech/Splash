import React from 'react';
import "src/sass/mainStyles/Main.scss";
import ScrollToTop from "react-scroll-to-top";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer, DataProvider, ScrollRestoration, PreLoader, BackToTop as Top } from "./components";
import { Buy, Home, Cart, Blog, Shop, About, Contact, BuyHome, Payment, Shipping, ErrorPage, Information, AccountDetails, PaymentSuccessful } from "./pages";


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <PreLoader />
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
            <Route path="/shop/products/:id" element={<Buy />} />
            <Route path="/shop/shipping" element={<Shipping />} />
            <Route path="*" element={<ErrorPage errorCode={404} />} />
            <Route path="/shop/information" element={<Information />} />
            <Route path="/shop/home-products/:id" element={<BuyHome />} />
            <Route path="/shop/account-details" element={<AccountDetails />} />
            <Route path="/shop/payment-successful" element={<PaymentSuccessful />}/>
          </Routes>
          <Footer />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
