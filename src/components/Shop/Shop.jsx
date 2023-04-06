import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
    const [products,setProducts] = useState([]);

    const [cart, setCart] =useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[]);

    // retrieve data from localStorage
    useEffect(()=>{
      const storedCart = getShoppingCart();
      let savedCart =[];
    //   step 1: get id from stored cart
         for(const id in storedCart){
            // step 2: get product from products data by id
          const addedProduct = products.find(product => product.id === id);
    //   console.log(addedProduct);
          if(addedProduct){
            // step 3: set the quantity of the products
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // step 4: saved the addedCart to an array
 
            savedCart.push(addedProduct);
          }
         

         }
        //  step 5: set the savedcart to cart
        setCart(savedCart);
    },[products])

    const addToCart =(product) =>{
let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist then set the quantity 1
        // if exist then update the quantity by 1
        const exist = cart.find(pd=> pd.id === product.id)
       if(!exist){
        product.quantity =1;
        newCart = [...cart, product]; 

       } 
       else{
        exist.quantity = exist.quantity + 1;
        const remaining  = cart.filter(pd=> pd.id !== product.id);
        newCart =[...remaining, exist];
       }
        setCart(newCart);
        addToDb(product.id);
       
    }

    const deleteCart = ()=>{
        setCart([]);
      deleteShoppingCart();
    }
    return (
        <div className='shop'>
            <div className='product-container'>
                  {
                    products.map(product => <Product
                         product={product} 
                         key={product.id}
                         addToCart={addToCart}
                         ></Product>)
                    
                  }
                  
            </div>
            <div className='product-summary'>
           <Cart cart={cart}
           deleteCart={deleteCart}>

                <Link to="/orders"> <button className='preview-btn'> <span>Review Order</span> <FontAwesomeIcon icon={faArrowRight} /></button></Link>
           </Cart>
       
            </div>
        </div>
    );
};

export default Shop;