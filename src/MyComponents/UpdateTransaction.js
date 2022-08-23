import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const UpdateTransaction =()=> {
    const {tid} = useParams();

    //const[mytransaction, setmytransaction] = useState([]);
    const[transName, settransName]= useState('');
    const[transDate, settransDate]= useState('');
    const[transAmount, settransAmount]= useState('');

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:90/transaction/one/"+tid, config)
        .then (result=>{
            //console.log(result.data)
            //setmytransaction(result.data)
            settransName(result.data.transName)
            settransDate(result.data.transDate)
            settransAmount(result.data.transAmount)
            
        })
        .catch (e=>{

        },)
    },[])
    
    const updatetrans =(e)=>{
        e.preventDefault();
        const transdata ={
            tid, transName, transDate, transAmount
        }
        //console.log(transdata)
        axios.put ("http://localhost:90/transaction/update", transdata, config)
    }

    return(
        <div className="container items"> 
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's add transaction!</div>

                <div className="input-container ic1">
                    <input id="transName" className="input" type="text" placeholder=" " 
                    value={transName}
                    onChange={(e)=>settransName(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="transName" className="placeholderM">Transaction Type</label>
                </div>

                <div className="input-container ic2">
                    <input id="transDate" className="input" type="date" placeholder=" " 
                    value={transDate}
                    onChange={(e)=>settransDate(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="transDate" className="placeholderM">Date</label>
                </div>

                <div className="input-container ic2">
                    <input id="transAmount" className="input" type="number" placeholder=" " 
                    value={transAmount}
                    onChange={(e)=>settransAmount(e.target.value)}/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="transAmount" className="placeholderM">Amount</label>
                </div>        
                <button type="text" className="submit" onClick={updatetrans}>Update</button>
            </div>
            
            </div>

    )

}

export default UpdateTransaction;