
import axios from "axios";
import { useState, useEffect } from "react";

const UpdateProfile =()=> {

    const[username, setusername]= useState('');
   // const[password, setpassword]= useState('');
    const[phnno, setphnno]= useState('');

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:90/profile/view", config)
        .then (result=>{
            //console.log(result.data)
            
            setusername(result.data.username)
            //setpassword(result.data.password)
            setphnno(result.data.phnno)         
            
        })
        .catch (e=>{

        },)
    },[])

    const updateuser =(e)=> {
        e.preventDefault();
        const userdata ={
            username , phnno
        }
        axios.put ("http://localhost:90/user/profile/update", userdata, config)

    }

    return(
        <div className="marg">
        <div className="container items">
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's edit your profile!</div>

                <div className="input-container ic1">
                    <input id="MaterialName" className="input" type="text" placeholder=" " 
                    value={username}
                    onChange={(e)=>setusername(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="username" className="placeholderM">UserName</label>
                </div>
              

                <div className="input-container ic2">
                    <input id="phnno" className="input" type="text" placeholder=" " 
                    value={phnno}
                    onChange={(e)=>setphnno(e.target.value)}/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="phnno" className="placeholderM">Phone No</label>
                </div>

                <button type="text" className="submit" onClick={updateuser}>Update</button>
            </div>
        </div></div>

    )

}

export default UpdateProfile;