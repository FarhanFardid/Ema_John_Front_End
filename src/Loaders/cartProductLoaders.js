// import { getShoppingCart } from "../utilities/fakedb";

import { getShoppingCart } from "../utilities/fakedb";

// const cartProductLoader = async () => {
//     const loadedProducts = await fetch('http://localhost:5000/products');
//     const products = await loadedProducts.json();
//     // console.log(products);

//     const storedCart = getShoppingCart();
//     const savedCart =[];

//     for(const id in storedCart){
//         const addedProduct = products.find(pd=> pd._id === id);

//         if(addedProduct){
//             const quantity = storedCart[id];
//             addedProduct.quantity =quantity;
//             savedCart.push(addedProduct);
//         }
//     }

//     return savedCart;

// }

// export default cartProductLoader;

const cartProductLoader = async () => {
  const storedCart = getShoppingCart();
//   console.log(storedCart);
  const ids = Object.keys(storedCart);
  console.log(ids);
  const loadedProducts = await fetch(`https://6-ema-john-server.vercel.app/productsByIds`, {
 
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body:JSON.stringify(ids)
  });

  const products = await loadedProducts.json();
  console.log(products);

  const savedCart = [];

  for (const id in storedCart) {
    const addedProduct = products.find((product) => product._id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  return savedCart;
};

export default cartProductLoader;
