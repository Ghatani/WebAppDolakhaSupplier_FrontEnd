import { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component{
    render(){

        const logout=()=>{
            localStorage.clear();
            window.location.replace('/');
        }      
        var menu;

        if(localStorage.getItem('token')){
            menu=(
            <div className="row">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto tm-navbar-nav">
                    <li className="nav-item active"><Link className="nav-link" to="/user/profile">Profile</Link></li>                                   
                    <li className="nav-item"><Link className="nav-link" to="/customer/all">Customer</Link></li>                        
                    
                    <li className="nav-item"><Link className="nav-link" to="/material/show">Material</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/records/all">Records</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/transaction/all">Transactions</Link></li>
                    {/* <li className="nav-item"><button onClick={logout}>Log out</button></li> */}
                    <li className="navigation">                   
                        <a className="alog button" href="/" onClick={logout}>
                        <img className="imgLog" 
                        src="https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg" 
                        alt="" />
                        <div className="logout">LOGOUT</div>
                        </a>                                        
                    </li> 
                </ul>
            </div></div>
            )
        }
        else{
            menu=(
            <div className="row">
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto tm-navbar-nav">
                    <li className="nav-item active"><Link className="nav-link" to="/">Home
                    </Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>

                    {/* <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li> */}
                    {/* <li className="nav-item"><Link className="nav-link" to="/records/all">Records</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/transaction/all">Transactions</Link></li> */}
                    <li className="nav-item"><Link className="nav-link" to="user/register">Register</Link></li>               
                    <li className="nav-item"><Link className="nav-link" to="/user/login">Login</Link></li> 
                                
                </ul>
                </div>
            </div>
            )
        }

        return(
            <>
            
            {/* page header */}           
            {/* <div className="container" id="home">
            <div className="col-12 text-center">
            <div className="tm-page-header">
            <i className="fas fa-4x fa-chart-bar mr-4"></i>
            <h1 className="d-inline-block text-uppercase">DOLAKHA SUPPLIERS</h1>
            
            </div>
            </div>
            </div> */}

            <div className="tm-nav-section">
            <div className="container">
            <div className="row">
            <div className="col-12">
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">WELCOME</a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
                
              </button>
              {menu}
              </nav> */}
              <nav className="navbar navbar-expand-md navbar-light">
                <div className="container-fluid">
                <p className="head" data-text="DOLAKHA SUPPLIERS">DOLAKHA SUPPLIERS</p>
                <button className="navbar-toggler" type="button" 
                data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                {menu}
                </div>
            </nav>


              </div></div></div></div>

              
            
            </>
        )
    }
}

export default Header;