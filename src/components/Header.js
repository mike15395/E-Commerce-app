import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
      <div className='bg-light px-5 py-2 text-center'>
          <div className="row">
              <div className="col">
                  <h3>Ecommerce website</h3>
              </div>

              <div className="col">
                  <Link to='/cart' style={{textDecoration:'none' ,color:'black'}}><h3>Cart</h3></Link>
              </div>

              <div className="col">
                 <h4>Hi, user</h4>
              </div>

             <div className="col">
               <Link to="/"><button type="button" class="btn btn-danger">Logout</button></Link>
              </div>

          </div>
          
    </div>
  )
}

export default Header