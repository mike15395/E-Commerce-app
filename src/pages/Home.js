import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Home() {
    let data = ['Electronics', 'Fashion', 'Food', 'Household', 'Applainces'];
  return (
      <div>
          <Header/>
          <h2>Home Page</h2><br />
          <Link to="/products"><button type="button" class="btn btn-primary">View Products</button></Link>
          <div className='d-flex m-3'>
          {data.map((item, index) => (
                        
                        <div className="p-5  bg-dark text-white m-2" key={index}>
                           <Link style={{textDecoration:'none', color:'white'}} to='/products'> {item} </Link>   
                  </div>
                  
          ))}
              </div>
          
      </div>
  )
}

export default Home