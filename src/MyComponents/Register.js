import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phnno, setPhone] = useState('');
    const [msg, setMsg] = useState('');
    const userRegister=(e)=>{
        e.preventDefault();  //stops page from default bahaviour (refresh)
        //console.log({username},{password},{phnno});
        const userData = {username,password,phnno};
        //console.log(userData);
        axios.post("http://localhost:90/user/register", userData)
        .then(result=>setMsg(result.data.message))
        .catch()
    }
    return (
        <div className="container">
            <div className="row">
            {/* <div className="col-md-4">
                    
                </div>
            <div className="col-md-4">                
            <form className="form-group">
                <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Enter Username"
                onChange={(e)=>setUsername(e.target.value)} />    
                </div>
                <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter Password"
                onChange={(e)=>setPassword(e.target.value)} />  
                </div>
                <div className="form-group">
                <label>Phone Number</label>
                <input type="text" className="form-control" placeholder="Enter Phone number"
                onChange={(e)=>setPhone(e.target.value)} />    
                </div>
                <div className="text-center">
                <button type="submit" className="btn btn-primary" onClick={userRegister}>Submit</button>
                </div>
                
            </form>   
            </div>
                {/* {username} <br></br>
                {password} <br></br>
                {phnno}  */}
                {msg} 
        </div>

        <section className="get-in-touch">
        <h1 className="title">REGISTER NEW USER</h1>
        <form className="contact-form row">
      <div className="form-field col-lg-6">
         <input id="name" className="input-text js-input" type="text" required 
         onChange={(e)=>setUsername(e.target.value)} />
         <label className="label" htmlFor="name">Username</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="email" className="input-text js-input" type="email" required />
         <label className="label" htmlFor="email">E-mail</label>
      </div>
      <div className="form-field col-lg-6 ">
         <input id="password" className="input-text js-input" type="password" required 
         onChange={(e)=>setPassword(e.target.value)} />
         <label className="label" htmlFor="company">Password</label>
      </div>
       <div className="form-field col-lg-6 ">
         <input id="phone" className="input-text js-input" type="text" required 
         onChange={(e)=>setPhone(e.target.value)} />
         <label className="label" htmlFor="phone">Contact Number</label>
      </div>
      
      <div className="form-field col-lg-12">
         <input className="submit-btn" type="submit" value="Submit" onClick={userRegister}/>
      </div>
    </form>
    </section>

        </div>
            
    )
}

export default Register;