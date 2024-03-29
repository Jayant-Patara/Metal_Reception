import React from 'react';
import "./css/Checkout.css";
import pic from "./css/mypic.jpg";
import {useStateValue} from "../StateProvider";
import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from "../components/Subtotal";

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_ad" src={pic} alt="" />
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout_title">Your Shopping Basket</h2>
                {/* CHECKOUT PRODUCT */}
                {basket.map((item) => (
                    <CheckoutProduct 
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
        <div className='checkout_right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout