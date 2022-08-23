import axios from "axios";
import { useState } from "react";

const Login = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const userLogin=(e)=>{
        e.preventDefault();
        const userData = {
            username, password
        }
        axios.post('http://localhost:90/user/login', userData)
        .then(result=>{
            if(result.data.token){
                //login success
                localStorage.setItem('token',result.data.token);
                window.location.replace('/user/profile');
            }
            else{
                //login fail
                setMessage("Invalid user!!")
            }
        })
        .catch()
    }

    return(
        <div className="container">
            <div className="row">
            {message}                                                                   
            </div>

            <section className="get-in-touch">
            <h1 className="title">LOGIN</h1>
            <form className="contact-form row">
            <div className="form-field col-lg-login">                     
            <input id="name" className="input-text js-input" type="text" required 
            onChange={(e)=>setUsername(e.target.value)} />
            <label className="label" htmlFor="name">Username</label>
            </div>
            
            <div className="form-field col-lg-login ">
            <input id="password" className="input-text js-input" type="password" required 
            onChange={(e)=>setPassword(e.target.value)} />
            <label className="label" htmlFor="company">Password</label>
            </div>
      
            <div className="form-field col-lg-12">
            <input className="submit-btn" type="submit" value="LOGIN" onClick={userLogin}/>
            </div> 
                      
            </form>
            </section>
           
        </div>
    )
}

export default Login;