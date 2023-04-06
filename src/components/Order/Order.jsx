import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import CartProducts from '../CartProducts/CartProducts';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import './Order.css'

const Order = () => {
    const savedCart = useLoaderData();
    
    const [cart,setCart] = useState(savedCart);

    const removeCart = (id) => {

        const remainingCart = cart.filter(product => product.id !== id);
        setCart(remainingCart);
        removeFromDb(id);
     console.log(id);
    }
    const deleteCart = ()=>{
        setCart([]);
        deleteShoppingCart();
    }
   
    return (
        <div className='shop'>
        <div className='order-review'>
              {
               cart.map(cart=> <CartProducts
                 cart={cart}
                 key ={cart.id}
                 removeCart={removeCart}></CartProducts>)
            
              }
              
        </div>
        <div className='product-summary'>
       <Cart cart={cart}
       deleteCart={deleteCart}>
          <Link to="/checkout"> <button className='proceed-btn'><span> Proceed Checkout</span><FontAwesomeIcon icon={faCheckToSlot} /></button></Link>
       </Cart>
      
        </div>
    </div>
    );
};

export default Order;