import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import {getAllCategories} from '../api/category'
import { useState } from 'react';
import { useEffect } from 'react';

function Home() {
    //let data = ['Electronics', 'Fashion', 'Food', 'Household', 'Applainces'];
    const [categories, setCategories] = useState();
    const init = async () => {
        const result = await getAllCategories();
        setCategories(result.data);
        console.log(result.data);
    }
    console.log(categories);

    useEffect(() => {
        init()
    }, []);

  return (
      <div>
          <Header/>
          <h2>Home Page</h2><br />
          <Link to="/products"><button type="button" class="btn btn-primary">View Products</button></Link>
          <div className='d-flex m-3'>
          {categories?.map((item, index) => (
                        
                        <div className="p-5  bg-dark text-white m-2" key={index} style={{borderRadius:'10px'}}>
                  <Link style={{ textDecoration: 'none', color: 'white',fontSize:'30px' }} to='/products'> {item.name} </Link><br />
                  <p>{ item.description}</p>
                  </div>
                  
          ))}
            </div>
          
      </div>
  )
}

export default Home