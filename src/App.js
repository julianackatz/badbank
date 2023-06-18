import React from "react";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import AllData from "./components/Alldata";
import  NavBar  from "./Navbar"
import UserContext from "./userContext";
import {  Routes,  Route, } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


export default function Spa() {
  return (
   
      <div>
        <NavBar/>        
        <UserContext.Provider value={{users:[{name:'John Doe',email:'johndoe@gmail.com',password:'password123',balance:600}]}}>
          <div className="container" style={{padding: "20px"}}>
          <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/CreateAccount/" element={<CreateAccount />} />
           <Route path="/login/" element={<Login />} />
           <Route path="/deposit/" element={<Deposit />} />
           <Route path="/withdraw/" element={<Withdraw />} />
           <Route path="/Alldata/" element={<AllData />} />
          </Routes>
          </div>
        </UserContext.Provider>
      </div>
    
  );
}