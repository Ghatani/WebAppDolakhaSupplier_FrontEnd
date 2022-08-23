import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Customer = () => {
    const [cdata, setcdata] = useState([]);

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }

    useEffect(() => {
        axios.get("http://localhost:90/customer/view/all", config)
            .then(result => {
                
                setcdata(result.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, []);

    const deletecustomer = (cid) => {
        //const pro_data = {tid}
        // console.log(tid)
        axios.delete("http://localhost:90/customer/delete/" + cid, config)
            .then(result => { console.log(result.data) })
            .catch()
    }

    return(
        <div className="container">
            <div className="card-deck row">

            {cdata.map(singleData=>{
                return(
                    <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="card">



                        {/* <!--Card content--> */}
                        <div className="card-body">
                            <h4 className="card-title">{singleData.cname}</h4>
                            <p className="card-text pd">
                                Address : {singleData.caddress} <hr></hr>
                                Phone : {singleData.cphnno} <hr></hr>                              
                            </p>
                            <Link to={'/customer/single/'+singleData._id} className="btn btn-light-blue btn-md">Update</Link>
                            
                            <button type="button" className="btn btn-light-blue btn-md"
                            onClick={()=>{deletecustomer(singleData._id)}}>Delete</button>
                        </div>
                    </div>
                    </div>

                )
            },[])}
                {/* Demo */}
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="card">

                        {/* <!--Card content--> */}
                        <div className="card-body">
                            <h4 className="card-title">Customer</h4>
                            <p className="card-text pd">
                                Address : Ktm <hr></hr>                                
                                Phone : 15000 <hr></hr>
                            </p>
                            <button type="button" className="btn btn-light-blue btn-md">Read more</button>
                            <button type="button" className="btn btn-light-blue btn-md">Delete</button>
                        </div>
                    </div>
                </div>
                {/* --- */}

                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="card">

                        {/* <!--Card content--> */}
                        <div className="card-body">
                            <h4 className="card-title">Add new customers</h4>
                            
                            <Link to="/customer/add" type="button" className="btn btn-light-blue btn-md">Add more</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Customer;