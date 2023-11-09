import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    const handleLogin = async () => {
      try {
        const response = await fetch("https://api.denzo.io/api/cus/v1/login", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "+918086808680",
            password: "123456",
            store_id: "10",
          }),
        });
  
        const data = await response.json();
  
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/products"); 
        } else {
          
          alert("Login failed. Please check your credentials.");
        }
      } catch (error) {
        
        console.error("Login error:", error);
      }
    };
    
  

  return (
    <div className="container w-75" style={{ height: "747px" }}>
      <div className="text-center" style={{ paddingTop: "100px" }}>
        <h1 style={{ fontFamily: "fantasy" }}>Welcome</h1>
      </div>
      <form>
        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <h2 style={{ color: "blue" }}>Email address :</h2>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            <h2 style={{ color: "blue" }}>Password :</h2>
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-center" style={{ paddingTop: "50px" }}>
          <button type="button" className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
