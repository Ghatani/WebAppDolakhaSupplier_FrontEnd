import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Profile = () => {
    
    const[username, setusername]= useState('');
    //const[password, setpassword]= useState('');
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

    return(
        <div className="container d-flex justify-content-center mt-5">
        <div className="cardProfile">
        <div className="top-container"> <img src="https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg" 
        className="img-fluid profile-image" width="70" alt="" />
            <div className="ml-3">
                <h5 className="name">{username}</h5>
                <p className="mail">{phnno}</p>
            </div>
        </div>
        <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
            <div className="dollar-div px-3">
                <div className="round-div"><i className="fa fa-dollar dollar"></i></div>
            </div>
            <div className="d-flex flex-column text-right mr-2"> <span className="current-balance">CURRENT ROLE</span> 
            <span className="amount">USER</span> </div>
        </div>
        <div className="recent-border mt-4"> <span className="recent-orders">View profile</span> </div>
        <div className="wishlist-border pt-2"> 
        <Link to="/user/profile/update">
        <span className="wishlist">Update profile</span></Link> </div>      
        </div>
        </div>
    )


}

export default Profile;