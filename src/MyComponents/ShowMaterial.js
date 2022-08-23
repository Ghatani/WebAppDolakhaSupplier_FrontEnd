import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShowMaterial =()=>{
    const [mdata, setMdata] = useState([]);

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:90/material/view", config)
        .then(result=>{
            //console.log(result.data)
            setMdata(result.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[]);

    const deleteMaterial=(mid)=>{
        //const pro_data = {mid}
       // console.log(mid)
        axios.delete("http://localhost:90/material/delete/"+mid, config)
        .then(result=>{console.log(result.data)})
        .catch()
    }

    return(
        <div className="container">
            <div className="row">                       

            {mdata.map(singleData=>{
                return(
                    // <div className="col-md-4">
                    // <h2>Material Name : {singleData.materialName}</h2>
                    // <p><img src={'http://localhost:90/'+singleData.materialImage} className="img-fluid"  /></p>
                    // <p className="pname">Material Price : {singleData.materialPrice}</p>
                    
                    // <p>Material Quantity : {singleData.materialQuantity}</p>
                    // <button onClick={()=>{deleteMaterial(singleData._id)}}>Delete</button>
                    // <Link to={'/updateMaterial/'+singleData._id}>Read More..</Link>                                               
                    // </div>      
                    
                    <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="card">

                        {/* <!--Card content--> */}
                        <div className="card-body">
                            <div>
                            <img className="img-fluid materialimage" 
                            src={'http://localhost:90/'+singleData.materialImage} 
                            alt="" />
                            </div>
                            <h4 className="card-title"> {singleData.materialName}</h4>
                            <p className="card-text pd">                            
                                Material Price: Rs. {singleData.materialPrice} <hr></hr>
                                Material Quantity :  {singleData.materialQuantity} <hr></hr>                              
                            </p>
                            <Link to={'/material/single/'+singleData._id} className="btn btn-light-blue btn-md">Update</Link>
                            {/* <button type="button" className="btn btn-light-blue btn-md">Update</button> */}
                            <button type="button" className="btn btn-light-blue btn-md"
                            onClick={()=>{deleteMaterial(singleData._id)}}>Delete</button>
                        </div>
                    </div>
                    </div>
                   
                )
            },[])}

                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="card">
                    
                        {/* <!--Card content--> */}
                        <div className="card-body">
                        <div>
                            <img className="img-fluid materialimage" src="https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg" alt="" />
                            </div>
                            <h4 className="card-title">Materials</h4>
                            <p className="card-text pd">                               
                                Material Price: Rs. 10000 <hr></hr>
                                Material Quantity :  25 <hr></hr>                              
                            </p>
                            <button type="button" className="btn btn-light-blue btn-md">Read more</button>
                            <button type="button" className="btn btn-light-blue btn-md">Delete</button>
                        </div>
                    </div>
                </div>         

                <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Add new material</h4>                    
                            <Link to="/material/add" type="button" className="btn btn-light-blue btn-md">Add more</Link>
                        </div>
                    </div>
                </div>
                   
                                         
            </div>
        </div>
    )

}

export default ShowMaterial;