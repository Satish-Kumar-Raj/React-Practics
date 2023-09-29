import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import login from './Register.png'

function Signup(){
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPassword]=useState("");
    const navigate=useNavigate();
   function Login(){
    if(fname=="satish" && lname=="kumar" && email=="satish@gmail.com" && pass=="1234")
    navigate('/Home')
   else{
    alert("Nahi Hua");
   }
}
    return(
        <>
        <div className="outer">
       
        
      <div className="main">
      <div className="left">
        <h1>SignUp </h1>
        <p>Already Register?
            <Link className="link" to='/signup'>Login</Link>
        </p>
        <form>
            <table align="center">
                    <tr>
                        <td>
                       
                            FName
                       
                        </td>
                       
                    </tr>
                <tr>
                <td>
                            <input type="text" size="50" value={fname} onChange={(e)=>setFname(e.target.value)} />
                        </td>
               
                </tr>
                {/*  */}
                <tr>
                        <td>
                       
                            LName
                       
                        </td>
                       
                    </tr>
                <tr>
                <td>
                            <input type="text" size="50" value={lname} onChange={(e)=>setLname(e.target.value)} />
                        </td>
               
                </tr>

                {/*  */}
                <tr>
                    <td>Email</td>
                </tr>
                <tr>
                    
                    <td><input type="email" size="50"  id="email"  placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} /> </td>
                </tr>
                <tr>
                <td>
                  Password</td>
                </tr>
                <tr>
                    
                    <td><input type="password" id="pass" size="50"  placeholder="Enter Password" value={pass} onChange={(e)=>setPassword(e.target.value)} /> </td>
                </tr>
                <tr>
                    <td id="check">
                        <input type="checkbox" id="rem" />
                       Remember me
                        <a> forget password</a>
                    </td>
                    
                </tr>
                <tr>
                <button className="btn" onClick={Login}>Signup</button>
                </tr>
              
            </table>
            {/* <fieldset>
            <legend align="center"> SignUp </legend>
            </fieldset> */}
            
            {/* <div className="butt">
            <button>Google</button>
            <button>Facebook</button> 
            </div> */}
           
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
export default Signup;