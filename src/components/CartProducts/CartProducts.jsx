import React from 'react';
import './cartProducts.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrashAlt} from "@fortawesome/free-solid-svg-icons";

const CartProducts = ({cart,removeCart}) => {
    const{id,name,img,price,quantity} = cart;
    return (
        <div className='cart-info'>
             
             <img src={img} alt="images"  />
        
            <div className='product-details'>
             <p><span className='name-text'>{name}</span></p>
                <p>Price: $ <span className='orange-text'>{price}</span></p>
                <p>Quantity: {quantity}</p>
             </div>
            
         <button  onClick={()=> removeCart(id)} className='delete-btn'><FontAwesomeIcon className='icon-btn' icon={faTrashAlt} /></button>
        </div>
    );
};

export default CartProducts;