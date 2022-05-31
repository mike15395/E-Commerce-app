
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import {getAllProducts} from '../api/products'
import { useState } from 'react';
import { useEffect } from 'react';

function Product() {
  const [products, setProducts] = useState();
  const init = async () => {
        const result = await getAllProducts();
        setProducts(result.data);
        console.log(result.data);
    }
    console.log(products);

    useEffect(() => {
        init()
    }, []);
  return (
      <div>
          <Header/>
          <h2>Product Page</h2><br />
      <Link to="/cart"><button type="button" class="btn btn-primary">Go to Cart</button></Link>
      <div className='d-flex space-evenly' >
      {products?.map((item, index) => (
        <div key={index} style={{backgroundColor:'black',color:'white',margin:'10px',padding:'20px',borderRadius:'10px'}}>
          <p style={{fontSize:'25px'}}>{item.name}</p><br />
          <p>{item.description}</p><br />
          <p>₹ {item.cost}</p>
          <button type='button' class="btn btn-success">Add to cart</button>
        </div>
      ))}
        </div>
      
          
    </div>
  )
}

export default Product