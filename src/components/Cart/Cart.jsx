import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const Cart = ({cart,deleteCart,children}) => {
    // const cart = props.cart;
    // const {cart} =props;

    let total = 0;
    let shipCost = 0;
    let quantity = 0;
    for(const product of cart){
        // check product quantity if available then provide the value unless provide 1 
        // process 1:
        // product.quantity = product.quantity || 1;
        // process 2:
        // if(product.quantity == 0){
        //     product.quantity = 1;
        // }

        quantity = quantity + product.quantity;
        total = total + (product.price * product.quantity);
        shipCost = shipCost + (product.shipping * product.quantity);

    }
     const subTotal = total + shipCost;
    const tax = parseFloat((subTotal * 0.05).toFixed(2));
    const grandTotal = (subTotal + tax);
    return (
        <div className='cart'>
                 <h2>Order Summary</h2>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipCost}</p>
                <p>SubTotal: {subTotal}</p>
                <p>Tax: ${tax}</p>
                <h4 id="grand">Grand Total: ${grandTotal.toFixed(2)}</h4>
                <div>
                    <button onClick={deleteCart} className='clear-btn'>
                        <span> Clear Cart</span> <FontAwesomeIcon  icon={faTrashAlt}/> </button>
                </div>
                {children}
        </div>
    );
};

export default Cart;