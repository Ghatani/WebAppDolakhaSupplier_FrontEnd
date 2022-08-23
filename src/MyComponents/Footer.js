import { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component{
    render(){
        return(
            <footer className="footer-20192">
            <div className="site-section">
            <div className="container">

            <div className="cta d-block d-md-flex align-items-center px-5">
            <div>
              <h2 className="mb-0">Ready for a next house?</h2>
              <h3 className="text-dark">Let's get started!</h3>
            </div>
            <div className="ml-auto">
              <Link className="btn btn-dark rounded-0 py-3 px-5" to="/contact" >Contact us</Link>
            </div>
            </div>
            <div className="row">

            <div className="col-sm">
              <a href="#" className="footer-logo">DolakhaSuppliers</a>
              <p className="copyright">
                <small>&copy; 2022</small>
              </p>
            </div>
            <div className="col-sm">
              <h3>Customers</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Buyer</a></li>
                <li><a href="#">Supplier</a></li>
              </ul>
            </div>
            <div className="col-sm">
              <h3>Company</h3>
              <ul className="list-unstyled links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div className="col-sm">
              <h3>Further Information</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Follow us</h3>
              <ul className="list-unstyled social">
                
                <li><a href="#"><span className="icon-facebook"></span></a></li>
                <li><a href="#"><span className="icon-twitter"></span></a></li>
                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                <li><a href="#"><span className="icon-medium"></span></a></li>
                <li><a href="#"><span className="icon-paper-plane"></span></a></li>
              </ul>
            </div>
            
            </div>
            </div>
            </div>
            </footer>
        )
    }
}

export default Footer;