import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const UpdateRecord =()=> {
    const {rid} = useParams();

    //const[myrecord, setmyrecord] = useState([]);
    const[recordDate, setrecordDate]= useState('');
    const[materialName, setmaterialName]= useState('');
    const[cname, setcname]= useState('');
    const[caddress, setcaddress]= useState('');
    const[materialQty, setmaterialQty]= useState('');


    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:90/record/single/"+rid, config)
        .then (result=>{
            //console.log(result.data)
            //setmyrecord(result.data)
            setmaterialName(result.data.materialName)
            setrecordDate(result.data.recordDate)
            setcname(result.data.cname)
            setcaddress(result.data.caddress)
            setmaterialQty(result.data.materialQty)
            
        })
        .catch (e=>{

        },)
    },[])

    const updaterecords =(e)=>{
        e.preventDefault();
        const recorddata ={
            rid, recordDate, materialName, cname, caddress , materialQty
        }
        axios.put ("http://localhost:90/record/update", recorddata, config)
    }

    return(
        <div className="marg">
        <div className="container items">
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's edit your record!</div>

                <div className="input-container ic1">
                    <input id="MaterialName" className="input" type="text" placeholder=" " 
                    value={materialName}
                    onChange={(e)=>setmaterialName(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="MaterialName" className="placeholderM">Material Name</label>
                </div>

                <div className="input-container ic2">
                    <input id="recordDate" className="input" type="text" placeholder=" " 
                    value={recordDate}
                    onChange={(e)=>setrecordDate(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="recordDate" className="placeholderM">Date</label>
                </div>

                <div className="input-container ic2">
                    <input id="cname" className="input" type="text" placeholder=" " 
                    value={cname}
                    onChange={(e)=>setcname(e.target.value)}/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="cname" className="placeholderM">Customer</label>
                </div>

                <div className="input-container ic2">
                    <input id="caddress" className="input" type="text" placeholder=" " 
                    value={caddress}
                    onChange={(e)=>setcaddress(e.target.value)}/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="caddress" className="placeholderM">Address</label>
                </div>

                <div className="input-container ic2">
                    <input id="materialQty" className="input" type="number" placeholder=" " 
                    value={materialQty}
                    onChange={(e)=>setmaterialQty(e.target.value)}/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="materialQty" className="placeholderM">Material Quantity</label>
                </div>

                <button type="text" className="submit" onClick={updaterecords}>Update</button>
            </div>
        </div></div>

    )

}

export default UpdateRecord;