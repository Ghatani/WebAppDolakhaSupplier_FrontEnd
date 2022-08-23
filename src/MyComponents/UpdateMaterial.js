import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const UpdateMaterial =()=>{
    const {mid} = useParams();

    //const[mymaterial, setmymaterial] = useState([]);
    const[materialName, setmaterialName]= useState('');
    const[materialQuantity, setmaterialQuantity]= useState('');
    const [materialPrice, setmaterialPrice] = useState('');

    const config ={
        headers : {
            Authorization : 'Bearer '+ localStorage.getItem('token')
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:90/material/single/"+mid, config)
        .then (result=>{
            console.log(result.data)
            //setmymaterial(result.data)
            setmaterialName(result.data.materialName)
            setmaterialQuantity(result.data.materialQuantity)
            setmaterialPrice(result.data.materialPrice)
        })
        .catch (e=>{

        },)
    },[])

    const updatematerials =(e)=>{
        e.preventDefault();
        const materialdata ={
            mid, materialName, materialQuantity , materialPrice
        }
        axios.put ("http://localhost:90/material/update", materialdata, config)
        .then(()=>{
            window.location.replace('/material/show');
        })       
        .catch()
    }


    return(
        

        <div className="container items">
            <div className="form">
            {/* <div className="title">material id {mid}</div> */}
                <div className="title">Welcome</div>
                <div className="subtitle">Edit your material!</div>
                
                <div className="input-container ic1">
                    <input id="MaterialName" className="input" type="text" placeholder=" " 
                    value={materialName} 
                    onChange={(e)=>setmaterialName(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="MaterialName" className="placeholderM">Material Name</label>
                </div>
                <div className="input-container ic2">
                    <input id="MaterialPrice" className="input" type="number" placeholder=" " 
                    value={materialPrice}
                    onChange={(e)=>setmaterialPrice(e.target.value)}/>
                    <div className="cut"></div>
                    <label htmlFor="MaterialPrice" className="placeholderM">Material Price</label>
                </div>
                <div className="input-container ic2">
                    <input id="MaterialQuantity" className="input" type="number" placeholder=" " 
                    value={materialQuantity}
                    onChange={(e)=>setmaterialQuantity(e.target.value)}/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="MaterialQuantity" className="placeholderM">Quantity</label>
                </div>
                <button type="text" className="submit" onClick={updatematerials}>Update</button>
            </div>
        </div>
    )
}


export default UpdateMaterial;