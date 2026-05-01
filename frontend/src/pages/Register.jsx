import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const register=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:5000/api/auth/register",{name,email,password});
    navigate("/");
  };

  return (
    <div style={{ display:"flex", justifyContent:"center", marginTop:100 }}>
      <form onSubmit={register}>
        <h2>Register</h2>
        <input placeholder="Name" onChange={e=>setName(e.target.value)} /><br/>
        <input placeholder="Email" onChange={e=>setEmail(e.target.value)} /><br/>
        <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} /><br/>
        <button>Register</button>
        <p><Link to="/">Login</Link></p>
      </form>
    </div>
  );
}