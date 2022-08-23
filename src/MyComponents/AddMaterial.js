import { useState } from "react";
import axios from "axios";

const Addmaterial = () => {
    const [materialName, setMaterialName] = useState('');
    const [materialPrice, setMaterialPrice] = useState('');
    const [materialQuantity, setMaterialQuantity] = useState('');
    const [materialImage, setmaterialImage] = useState('');
    const [msg, setMsg] = useState('');

    

    const addmaterials = (e) => {
        e.preventDefault();

        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }

        //const materialData = {materialName, materialPrice, materialQuantity};

        const materialData = new FormData();
        materialData.append('materialName', materialName);
        materialData.append('materialPrice', materialPrice);
        materialData.append('materialQuantity', materialQuantity);
        materialData.append('materialImage', materialImage);

        //console.log(materialData);

        axios.post("http://localhost:90/material/add", materialData, config)
        // .then(result => setMsg(result.data.message))
        // .catch()
        .then(result=>{
            if(result.data.success){
                // data inserted
                setMsg("Inserted Successfully!!");

            }
            else{
                setMsg("Something went wrong!!");
            }
        })
        .catch(e=>{
            setMsg("Something went wrong!!");
        });
    }
    
    return (
        <div className="container items">
            <div className="form">
                <div className="title">Welcome</div>
                <div className="subtitle">Let's add your material!</div>
                
                <div className="input-container ic1">
                    <input id="MaterialName" className="input" type="text" placeholder=" " 
                    value={materialName}
                    onChange={e=>{setMaterialName(e.target.value)}}/>
                    <div className="cut"></div>
                    <label htmlFor="MaterialName" className="placeholderM">Material Name</label>
                </div>
                <div className="input-container ic2">
                    <input id="MaterialPrice" className="input" type="number" placeholder=" " 
                    value={materialPrice}
                    onChange={e=>{setMaterialPrice(e.target.value)}}/>
                    <div className="cut"></div>
                    <label htmlFor="MaterialPrice" className="placeholderM">Material Price</label>
                </div>
                <div className="input-container ic2">
                    <input id="MaterialQuantity" className="input" type="number" placeholder=" " 
                    value={materialQuantity}
                    onChange={e=>{setMaterialQuantity(e.target.value)}}/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="MaterialQuantity" className="placeholderM">Quantity</label>
                </div>

                <div className="input-container ic2">
                    <input id="MaterialImage" className="input" type="file" placeholder=" "                    
                    onChange={e=>{setmaterialImage(e.target.files[0])}} />
                    <div className="cut cut-short"></div>
                    <label htmlFor="MaterialImage" className="placeholderM">Image</label>
                </div>

                <button type="text" className="submit" onClick={addmaterials}>Submit</button>
                
                <div className="subtitle"> {msg} </div>
            </div>         
        </div>
    )
}

export default Addmaterial;