
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Cart() {
  return (
      <div>
          <Header/>
          <h2> Cart Page</h2><br/>
          <Link to="/"> <button type="button" class="btn btn-primary">Go to Login</button></Link>
      </div>
  )
}

export default Cart