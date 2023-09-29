import React from "react"
import { Link } from "react-router-dom";
import './Login.css'
import login from './Register.png'

function Login(){
    return(
        <>
        <div className="outer">
       
        
      <div className="main">
      <div className="left">
        <h1>Login </h1>
        <p>Doesn't have an account yet?
            <Link className="link" to='/signup'>signup</Link>
        </p>
        <form>
            <table align="center">

                <tr>
                <td>
                   Email
                    </td>
                </tr>
                <tr>
                    
                    <td><input type="email" size="50"  id="email"  placeholder="Enter Email" /> </td>
                </tr>
                <tr>
                <td>
                   Password</td>
                </tr>
                <tr>
                    
                    <td><input type="password" id="pass" size="50"  placeholder="Enter Password" /> </td>
                </tr>
                <tr>
                    <td id="check">
                        <input type="checkbox" id="rem" />
                       Remember me
                        <a> forget password</a>
                    </td>
                    
                </tr>
                <tr>
                <button className="btn">Login</button>
                </tr>
              
            </table>
            <fieldset>
            <legend align="center"> Login With </legend>
            </fieldset>
            
            <div className="butt">
            <button>Google</button>
            <button>Facebook</button> 
            </div>
           
        </form>
       
      </div>
        <div className="right">
            <img src={login} alt="photo nahi hai " />
        </div>

      </div>
        </div>
       
        </>
    );
}
export default Login;