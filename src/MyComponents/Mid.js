import { Component } from "react";
import Home from "./Home";
import About from "./About";
import {Route, Routes} from 'react-router-dom';
import Contact from "./Contact";
import UpdateMaterial from "./UpdateMaterial";
import Register from "./Register";
import Login from "./Login";
import Addmaterial from "./AddMaterial";
import ShowMaterial from "./ShowMaterial";
import Record from "./Record";
import Addrecord from "./AddRecord";
import Transaction from "./Transaction";
import Addtransaction from "./AddTransaction";
import PrivateRoute from "./ProtectedRoute";
import UpdateRecord from "./UpdateRecord";
import UpdateTransaction from "./UpdateTransaction";
import Customer from "./Customer";
import Addcustomer from "./AddCustomer";
import UpdateCustomer from "./UpdateCustomer";
import Profile from "./Profile";
import UpdateProfile from "./UpdateProfile";

class Mid extends Component{
    render(){
        return(
            <div>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="/material/single/:mid" element={<UpdateMaterial />} />
                    <Route path="/record/:rid" element={<UpdateRecord />} />
                    <Route path="/transaction/:tid" element={<UpdateTransaction />} /> 
                    <Route path="/customer/single/:cid" element={<UpdateCustomer />} />
                    <Route path="/user/profile/update" element={
                        <PrivateRoute><UpdateProfile /></PrivateRoute>
                    } />
                    <Route path='/user/register' element={<Register />} />
                    <Route path='/user/login' element={<Login />} />
                    <Route path='/user/profile' element={
                        <PrivateRoute><Profile /></PrivateRoute>
                    } />
                    <Route path='/material/add' element={
                        <PrivateRoute><Addmaterial /></PrivateRoute> 
                    }/>
                    <Route path='/material/show' element={
                        <PrivateRoute><ShowMaterial /></PrivateRoute> 
                    }/>
                    <Route path='/records/all' element={
                        <PrivateRoute><Record /></PrivateRoute>
                    }/>
                    <Route path='/records/add' element={
                        <PrivateRoute><Addrecord /></PrivateRoute>
                    }/>
                    <Route path='/transaction/all' element={
                        <PrivateRoute><Transaction /></PrivateRoute>
                    }/> 
                    <Route path='/transaction/add' element={
                        <PrivateRoute><Addtransaction /></PrivateRoute>
                    }/>
                    <Route path="/customer/all" element={
                        <PrivateRoute><Customer /></PrivateRoute>
                    }/>
                    <Route path="/customer/add" element={
                        <PrivateRoute><Addcustomer /></PrivateRoute>
                    }/>
                </Routes>
                
            </div>
        )
    }
}

export default Mid;