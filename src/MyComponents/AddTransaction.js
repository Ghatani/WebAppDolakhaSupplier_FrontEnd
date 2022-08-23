import { useState } from "react";
import axios from "axios";

const Addtransaction = () => {
    // const[username, setusername]= useState('');
    // const [userId, setuserId] = useState('');
    const [transName, settransName] = useState('');
    const [transDate, settransDate] = useState('');
    const [transAmount, settransAmount] = useState('');
    const [msg, setMsg] = useState('');

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }

    const addtransactions = (e) => {
        e.preventDefault();
        const transData = { transName, transDate, transAmount};
        console.log(transData)
        
        axios.post("http://localhost:90/transaction/insert", transData, config)
        .then(resultsup=>{
            if(resultsup.data.success){
                setMsg("Successfully inserted!");
                console.log(resultsup.data)
            }
                   
            else{
                setMsg("Someting went wrong!!");
        
            }
        })
        .catch(e=>{
            setMsg("Somethings went wrong!!");
        
        });

    }

    return (
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
                <button type="text" className="submit" onClick={addtransactions}>Submit</button>
                <div className="subtitle">{msg}</div>
            </div>         
            </div>
    )

}

export default Addtransaction;