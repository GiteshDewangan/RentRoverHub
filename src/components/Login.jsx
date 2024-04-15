import React, { useState } from "react";
import './Login.scss';
const Login=()=>{
    const[option,setoption]=useState('SignUp');
    return(<>
    <div className="MainDiv">
        <h5>{option}</h5>
       {option=="SignUp"?<div className="Login"><input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Lame"/>
        <input type="email" placeholder="Enter Email"/>
        <input type="password" placeholder="Password"/>
        <input type="text" placeholder="Username"/></div>:<div className="Login">
        <input type="text" placeholder="Username"/>
        <input type="email" placeholder="Enter Email"/>
        <input type="password" placeholder="Password"/>
            </div>}
        
    <div className="BUDIV">
    <button id="BUTTON" className={option=="SignUp"?"CHANGE":''} onClick={()=>setoption('SignUp')}>SignUp</button>
        <button id="BUTTON" className={option=="Login"?"CHANGE":''} onClick={()=>setoption('Login')}>Login</button>
        
    </div>
    </div>
    </>)
}
export default Login;
       