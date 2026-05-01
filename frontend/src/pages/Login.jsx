import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");
  };

  return (
    <div style={{ display:"flex", justifyContent:"center", marginTop:100 }}>
      <form onSubmit={login}>
        <h2>Login</h2>
        <input placeholder="Email" onChange={e=>setEmail(e.target.value)} /><br/>
        <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} /><br/>
        <button>Login</button>
        <p><Link to="/register">Register</Link></p>
      </form>
    </div>
  );
}