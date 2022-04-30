import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71P47BioYqL._SX3000_.jpg"
          //   src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="hero"
        />
        <div className="home__rows">
          <div className="home__row">
            <Product
              id="B07PNCXN8H"
              title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses [By ER]-[P..."
              image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
              price={29.99}
              rating={5}
            />
            <Product
              id="B006TH5DUK"
              title="Ray_Ban New Wayfarer Sunglasses (Matte Black Frame 55mm), Matte Black Frame Solid Black G15 Lens, 55 mm"
              image="https://m.media-amazon.com/images/I/51+TKek67sL._AC_UX695_.jpg"
              price={151.0}
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id="B0009U5OSO"
              title="Wecolor Disposable 3 Ply Earloop Face Masks, Suitable for Home, School, Office and Outdoors (Black)"
              image="https://m.media-amazon.com/images/I/71nePsQmsbL._AC_SY390_.jpg"
              price={10.99}
              rating={4}
            />
            <Product
              id="B01N6SA3JZ"
              title="Chanasya Ruched Luxurious Soft Faux Fur Throw Blanket - Fuzzy Plush and Elegant with Reversible Mink Blanket for Sofa Chair Couch Living Room Birthday Gift and Home Decor (50x65 Inches) Blue"
              image="https://images-na.ssl-images-amazon.com/images/I/51s7eYXxeLL._SX160_QL100_AC_SCLZZZZZZZ_.jpg"
              price={49.99}
              rating={4}
            />
            <Product
              id="B0165H0JHU"
              title="Davines OI All in One Milk | Hair Milk Spray | Powerful Hair Detangler + Heat Protection | Smoothes Frizzy Hair | 4.56 Fl Oz"
              image="https://m.media-amazon.com/images/I/71t-WfqFZVL._SY679_.jpg"
              price={36.49}
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id="B0002H0FMO"
              title="D'Addario Guitar Strings - Acoustic Guitar Strings - 80/20 Bronze - For 6 String Guitar - Deep, Bright, Projecting Tone..."
              image="https://m.media-amazon.com/images/I/818Hwf4Na1L._AC_SY400_.jpg"
              price={4.99}
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
