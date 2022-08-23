import { Component } from "react";

class Contact extends Component{
    render(){
        return(
            
                <div className="containercontact mt-xl-5 mb-5">
    <div className="d-flex justify-content-center pt-5">
        <h2 className="font-weight-bold h2contact">Get in touch!</h2>
    </div>
    <div className="d-flex justify-content-center text-muted">Contact us for a quote, help to join the team.</div>
    <div className="d-md-flex flex-md-row justify-content-center py-4">
        <div className="d-md-flex flex-md-column contact px-4">
            <div className="d-md-flex justify-content-center icon py-2"> 
            <span className="fa fa-map-marker"></span> <span className="mobile-info p-2 pb-3">
                102 street 2714 Don</span> </div>
            <div className="contact-info"><p className="fontcolor">102 street 2714 Don</p></div>
        </div>
        <div className="d-flex flex-column contact px-4">
            <div className="d-md-flex justify-content-center icon py-2"> 
            <span className="fa fa-phone"></span> <span className="mobile-info p-2 pb-3">
            +02 1234 567</span> </div>
            <div className="contact-info"><p className="fontcolor">+02 1234 567</p></div>
        </div>
        <div className="d-flex flex-column contact px-4">
            <div className="d-md-flex justify-content-center icon py-2 fontcolor"> 
            <span className="fa fa-envelope"></span> <span className="mobile-info p-2 pb-3">
            dolakhasuppliers@gmail.com</span> </div>
            <div className="contact-info"><p className="fontcolor">dolakhasuppliers@gmail.com</p></div>
        </div>
    </div>
    <div className="d-flex flex-row justify-content-center">
        <form className="w-xl-50 w-lg-75 formcontact">
            <div className="containercontact">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group"> 
                        <label className="labelabout" htmlFor="name">OWNER NAME</label>
                            <div className="input-field"> <span className="fa fa-user-o p-2 border-right"></span> 
                            <input className="form-controlcontact" type="text" value={"Santosh Ghatani"} disabled /> </div>
                        </div>
                        <div className="form-group"> 
                        <label className="labelabout" htmlFor="name">Mail</label>
                            <div className="input-field"> <span className="fa fa-envelope-o p-2"></span> 
                            <input className="form-controlcontact" type="email" value={"santght90@gmail.com"} disabled /> </div>
                        </div>
                        <div className="form-group"> 
                        <label className="labelabout" htmlFor="name">PhoneNumber</label>
                            <div className="input-field"> <span className="fa fa-mobile p-2"></span> 
                            <input className="form-controlcontact" type="tel" value={"+977-9803740995"} disabled /> </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group"> 
                        {/* <label className="labelabout" htmlFor="msg">Message</label>
                            <div className="input-field bg-light"> 
                            <textarea name="message" id="msg" cols="10" rows="9" className="form-controlcontact bg-light" placeholder="Your Name"></textarea> 
                            </div> */}
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center w-100">
                        </div>
                </div>
            </div>
        </form>
    </div>
</div>
            
        )
    }
}

export default Contact;