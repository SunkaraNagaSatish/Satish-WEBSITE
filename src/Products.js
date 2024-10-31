import React, { useEffect, useState } from 'react';
import Productlist from './satish';


function Products() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    let res = await fetch('https://api.escuelajs.co/api/v1/products');
    let productList = await res.json();
    setProducts(productList);
    console.log(productList); // Log the fetched data
  }

  if (products.length === 0) {
    return <h2>Fetching data....</h2>;
  }

  return (
    <>
      {/* {products.map(product => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))} */}
      <div className='product-list'>
    {products.map((p,index) => <ul><li key={index}><Productlist {...p}/></li></ul>)}
        </div>
    </>
  );
}

export default Products;
