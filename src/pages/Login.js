
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [login, setLogin] = useState(false);
    function toggle() {
        setLogin(!login);
    }
  return (
      <div>
          <h2>Login Page</h2><br />
         
          {!login ? (
              <div>
              <input type="text" placeholder='Username'></input><br />
              <input type="password" placeholder='Password'></input><br />
             <Link to="/home"> <button  type="button" class="btn btn-primary" >Login</button></Link><br />
              <p style={{color:'blue'}} onClick={()=>toggle()}>Don't have an account? SignUp</p>
          </div>
          ):( <div>
              <input type="text" placeholder='Username'></input><br />
              <input type="password" placeholder='Password'></input><br />
             <Link to="/home"> <button  type="button" class="btn btn-primary" >Sign Up</button></Link><br />
              <p style={{color:'blue'}} onClick={()=>toggle()}>Already have an account? Login</p>
          </div>)}
          

         
          
    </div>
  )
}

export default Login