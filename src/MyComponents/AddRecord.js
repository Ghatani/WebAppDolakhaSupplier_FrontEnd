import { useState } from "react";
import axios from "axios";

const Addrecord = () => {
    const [materialName, setMaterialName] = useState('');
    const [recordDate, setrecordDate] = useState('');
    const [cname, setcname] = useState('');
    const [caddress, setcaddress] = useState('');
    const [materialQty, setmaterialQty] = useState('');
    const [msg, setMsg] = useState('');

    const addrecords = (e) => {
        e.preventDefault();
        const recordData = { materialName, recordDate, cname, caddress, materialQty};
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }
        axios.post("http://localhost:90/record/add", recordData, config)
            .then(result => setMsg(result.data.msg))
            .catch()
    }

    return (
        <div className="marg">
        <div className="container items">
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's add your record!</div>

                <div className="input-container ic1">
                    <input id="MaterialName" className="input" type="text" placeholder=" " 
                    value={materialName}
                    onChange={(e)=>setMaterialName(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="MaterialName" className="placeholderM">Material Name</label>
                </div>

                <div className="input-container ic2">
                    <input id="recordDate" className="input" type="date" placeholder=" " 
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

                <button type="text" className="submit" onClick={addrecords}>Submit</button>
                <div className="subtitle">{msg}</div>
            </div>
            
            </div></div>
    )

}

export default Addrecord;
