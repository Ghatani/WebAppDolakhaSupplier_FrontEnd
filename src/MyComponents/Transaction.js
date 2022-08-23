import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Transaction = () =>{
    const [tdata, setTdata] = useState([]);

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }

    useEffect(() => {
        axios.get("http://localhost:90/transaction/all", config)
            .then(result => {
                //console.log(result.data)
                setTdata(result.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, []);

    const deletetransaction = (tid) => {
        //const pro_data = {tid}
        // console.log(tid)
        axios.delete("http://localhost:90/transaction/delete/" + tid, config)
            .then(result => { console.log(result.data) })
            .catch()
    }

    return(
        <div className="container">
            <div className="card-deck row">

            {tdata.map(singleData=>{
                return(
                    <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="card">



                        {/* <!--Card content--> */}
                        <div className="card-body">
                            <h4 className="card-title">{singleData.username}</h4>
                            <p className="card-text pd">
                                Type : {singleData.transName} <hr></hr>
                                Date : {singleData.transDate} <hr></hr>
                                Amount : {singleData.transAmount} <hr></hr>
                            </p>
                            <Link to={'/transaction/'+singleData._id} className="btn btn-light-blue btn-md">Update</Link>
                            
                            <button type="button" className="btn btn-light-blue btn-md"
                            onClick={()=>{deletetransaction(singleData._id)}}>Delete</button>
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
                            <h4 className="card-title">Transaction</h4>
                            <p className="card-text pd">
                                Type : Salary <hr></hr>
                                Date : 2022-02-10 <hr></hr>
                                Amount : 15000 <hr></hr>
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
                            <h4 className="card-title">Add new transaction</h4>
                            
                            <Link to="/transaction/add" type="button" className="btn btn-light-blue btn-md">Add more</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Transaction;