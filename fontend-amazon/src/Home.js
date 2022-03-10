import React from "react";
import Footer from "./Footer";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home__container">
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42864220_.jpg"
          alt="home-banner"
        />
      </div>
      <div className="home__row">
        <Product
          id={12345678}
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={29.99}
          image="https://m.media-amazon.com/images/I/51T-sMqSMiL.jpg"
          rating={5}
        />
        <Product
          id={343564565}
          title="JBL Charge 4 - Waterproof Portable Bluetooth Speaker - Gray"
          price={109.99}
          image="https://m.media-amazon.com/images/I/71nluqY5jgL._AC_SY355_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id={657567667}
          title="HOME CUBE Metal 5 Layer Kitchen Rotating Trolley Portable Storage Rack Round Design Fruits and Vegetable Onion Cutlery, Spice, Jars Container, Basket Organizer Holder Stand for Kitchen - Black"
          price={19.99}
          image="https://m.media-amazon.com/images/I/81-s8GLdepL._SL1500_.jpg"
          rating={5}
        />
        <Product
          id={67567567}
          title="Espresso Machine & Cappuccino Maker with Milk Steamer- 15 Bar Pump, 7 Pc All-In-One Barista Bundle Set w/ Built-in Frother (Inc: Coffee Bean Grinder, Milk Frothing Cup, Tamper & 2 Cups), 1350W (Silver)"
          price={249.99}
          image="https://m.media-amazon.com/images/I/71aUK1y7VQL._AC_SX466_.jpg"
          rating={5}
        />
        <Product
          id={7567756756}
          title="Mass-Tech Extreme 2000 features 80g of protein, over 400g of carbs and 2,260 mass-producing calories, plus 8.2g of L-leucine (when mixed with 20 oz)"
          price={29.99}
          image="https://m.media-amazon.com/images/I/81nJ7zvWBqS._AC_SS450_.jpg"
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id={454534234}
          title="Yamaha's complete electric guitar package. Sporting the PAC012 electric guitar with a 15-watt Yamaha amp, this package rocks."
          price={29.99}
          image="https://m.media-amazon.com/images/I/71G5PCW47OL._AC_SX425_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
