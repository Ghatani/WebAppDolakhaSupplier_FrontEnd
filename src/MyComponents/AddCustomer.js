import { useState } from "react";
import axios from "axios";

const Addcustomer=()=> {

    const[cname, setcname]= useState('');
    const[caddress, setcaddress]= useState('');
    const [cphnno, setcphnno] = useState('');
    const [msg, setMessage] = useState('');

    const config ={
        headers : {
            Authorization : 'Bearer ' + localStorage.getItem('token')
        }
    }

    const addcustomers=(e)=>{
        e.preventDefault();
        const custData = {
            cname, caddress, cphnno
        }

        axios.post("http://localhost:90/customer/add", custData, config)
        .then(result=>{
            if(result.data.success){
                // data inserted
                setMessage("Inserted Successfully!!");

            }
            else{
                setMessage("Something went wrong!!");
            }
        })
        .catch(e=>{
            setMessage("Something went wrong!!");
        });
    }

    return(
        <div className="container items">
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's add your material!</div>

                <div className="input-container ic1">
                    <input id="CustomerName" className="input" type="text" placeholder=" " 
                    value={cname}
                    onChange={e=>{setcname(e.target.value)}}/>
                    <div className="cut"></div>
                    <label htmlFor="CustomerName" className="placeholderM">Customer Name</label>
                </div>

                <div className="input-container ic1">
                    <input id="CustomerAddress" className="input" type="text" placeholder=" " 
                    value={caddress}
                    onChange={e=>{setcaddress(e.target.value)}}/>
                    <div className="cut"></div>
                    <label htmlFor="CustomerAddress" className="placeholderM">Address</label>
                </div>
                    
                <div className="input-container ic1">
                    <input id="PhoneNo" className="input" type="text" placeholder=" " 
                    value={cphnno}
                    onChange={e=>{setcphnno(e.target.value)}}/>
                    <div className="cut"></div>
                    <label htmlFor="PhoneNo" className="placeholderM">Phone No</label>
                </div>    

                <button type="text" className="submit" onClick={addcustomers}>Submit</button>   
                <div className="subtitle">{msg}</div>                   
            </div>           
        </div>
    )
}

export default Addcustomer;