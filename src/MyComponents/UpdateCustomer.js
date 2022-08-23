import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const UpdateCustomer=()=> {
    const {cid} = useParams();
    
    const[cname, setcname]= useState('');
    const[caddress, setcaddress]= useState('');
    const [cphnno, setcphnno] = useState('');

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }
    
    useEffect(()=>{
        axios.get("http://localhost:90/customer/single/"+cid, config)
        .then (customerdata=>{
            console.log(customerdata.data)
            //setmycustomer(result.data)
            setcname(customerdata.data.cname)
            setcaddress(customerdata.data.caddress)
            setcphnno(customerdata.data.cphnno)
        })
        .catch (e=>{

        },)
    },[])

    const updatecustomers =(e)=>{
        e.preventDefault();
        const customerdata ={
            cid, cname, caddress , cphnno
        }
        axios.put ("http://localhost:90/customer/update/", customerdata, config)
        .then(()=>{
            window.location.replace('/customer/all');
        })       
        .catch()
    }

    return(
        
        <div className="container items">
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's edit your record!</div>

                <div className="input-container ic1">
                    <input id="CustomerName" className="input" type="text" placeholder=" " 
                    value={cname}
                    onChange={(e)=>setcname(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="CustomerName" className="placeholderM">Customer Name</label>
                </div>

                <div className="input-container ic2">
                    <input id="Customeraddress" className="input" type="text" placeholder=" " 
                    value={caddress}
                    onChange={(e)=>setcaddress(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="Customeraddress" className="placeholderM">Address</label>
                </div>

                <div className="input-container ic2">
                    <input id="phoneno" className="input" type="text" placeholder=" " 
                    value={cphnno}
                    onChange={(e)=>setcphnno(e.target.value)}/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="phoneno" className="placeholderM">Phone No</label>
                </div>                      

                <button type="text" className="submit" onClick={updatecustomers}>Update</button>
            </div>
        </div>
    )

}

export default UpdateCustomer;