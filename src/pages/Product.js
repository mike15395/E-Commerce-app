
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Product() {
  return (
      <div>
          <Header/>
          <h2>Product Page</h2><br />
          <Link to="/cart"><button type="button" class="btn btn-primary">Go to Cart</button></Link>
          
    </div>
  )
}

export default Product