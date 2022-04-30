import React, { useContext } from "react";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/GiftCards/Consumer/multi-product/House/2022_fallback_HouseAds_1940x500_EN.jpg"
          alt="ad"
        />
        <div>
          <div className="checkout__title">
            <h3>Hello, {user?.email}</h3>
            <h2>Your Shopping Basket</h2>
          </div>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
