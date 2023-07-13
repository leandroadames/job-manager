import React from "react";
import {useState} from "react";
import axios from "axios";


export default function AdminSignUpForm() {
  const [adminForm, setAdminForm] = useState({
    email: "",
    name: "",
    password: "",
  });
  
  const handleSubmitAdminForm = async (e) =>{
    try{
      e.preventDefault()
      const response = await axios.post("http://localhost:3000/api/signup/admin", adminForm)
      console.log(response)
    }catch(error){
      console.log(error)
  }
  }
  console.log("adminForm", adminForm)
  
  
    return (
      <form 
      onSubmit={(e) => handleSubmitAdminForm(e)}
      >
        <input
        onChange={(e) => setAdminForm({...adminForm, email: e.target.value})}
        placeholder="EMAIL"
        value={adminForm.email}
        ></input>
        <input 
        onChange={(e) => setAdminForm({...adminForm, name: e.target.value})}
        placeholder="name"
        value={adminForm.name}
        ></input>
        <input placeholder="Password"
        onChange={(e) => setAdminForm({...adminForm, password: e.target.value})}
        value={adminForm.password}
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
}
