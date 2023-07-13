import React from "react";
import {useState} from "react";
import axios from "axios";

export default function StudentSignUpForm() {
const [studentForm, setStudentForm] = useState({
  email: "",
  name: "",
  password: "",
});

const handleSubmitStudentForm = async (e) =>{
  try{
    e.preventDefault()
    const response = await axios.post("http://localhost:3000/api/signup/student", studentForm)
    console.log(response)
  }catch(error){
    console.log(error)
}
}
console.log("studentForm", studentForm)


  return (
    <form 
    onSubmit={(e) => handleSubmitStudentForm(e)}
    >
      <input
      onChange={(e) => setStudentForm({...studentForm, email: e.target.value})}
      placeholder="EMAIL"
      value={studentForm.email}
      ></input>
      <input 
      onChange={(e) => setStudentForm({...studentForm, name: e.target.value})}
      placeholder="name"
      value={studentForm.name}
      ></input>
      <input placeholder="Password"
      onChange={(e) => setStudentForm({...studentForm, password: e.target.value})}
      value={studentForm.password}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
