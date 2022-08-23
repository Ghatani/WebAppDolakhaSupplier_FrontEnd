import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Record = () => {
    const [rdata, setRdata] = useState([]);

    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }

    useEffect(() => {
        axios.get("http://localhost:90/records/all", config)
            .then(result => {
                //console.log(result.data)
                setRdata(result.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, []);

    const deleteRecord = (rid) => {
        //const pro_data = {rid}
        // console.log(rid)
        axios.delete("http://localhost:90/record/delete/" + rid, config)
            .then(result => { console.log(result.data) })
            .catch()
    }

    return (

        <div className="container">
            <div className="card-deck row">              

            {rdata.map(singleData=>{
                return(
                    <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="card">



                        {/* <!--Card content--> */}
                        <div className="card-body">
                            <h4 className="card-title">{singleData.username}</h4>
                            <p className="card-text pd">
                                Material Name : {singleData.materialName} <hr></hr>
                                Date : {singleData.recordDate} <hr></hr>
                                Customer : {singleData.cname} <hr></hr>
                                Address : {singleData.caddress} <hr></hr>
                                Quantity : {singleData.materialQty}
                            </p>
                            <Link to={'/record/'+singleData._id} className="btn btn-light-blue btn-md">Update</Link>
                            
                            <button type="button" className="btn btn-light-blue btn-md"
                            onClick={()=>{deleteRecord(singleData._id)}}>Delete</button>
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
                            <h4 className="card-title">Records</h4>
                            <p className="card-text pd">
                                Material Name : Brick <hr></hr>
                                Date : 2022-02-13 <hr></hr>
                                Customer : Ajay <hr></hr>
                                Address : Bhaktapur <hr></hr>
                                Quantity : 2
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
                            <h4 className="card-title">Add new record</h4>
                            
                            <Link to="/records/add" type="button" className="btn btn-light-blue btn-md">Add more</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Record;