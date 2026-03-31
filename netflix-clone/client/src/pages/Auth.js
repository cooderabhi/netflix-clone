import { useState } from "react";
import { loginUser, registerUser } from "../api";

function Auth({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async () => {
    try {
      let res;

      
      if (isLogin) {
        res = await loginUser({ email: form.email, password: form.password });
      } else {
        res = await registerUser(form);
      }

      console.log("RESPONSE:", res);

      
      if (res && res.user) {
        localStorage.setItem("user", JSON.stringify(res.user)); 
        setUser(res.user); 
      } else {
        alert(res?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Auth Error:", err);
      alert("Connection failed. Is your backend running?");
    }
  };

  return (
    <div style={container}>
      <div style={box}>
        <h2 style={{ textAlign: "center" }}>{isLogin ? "Login" : "Sign Up"}</h2>

        {!isLogin && (
          <input 
            style={inputStyle}
            placeholder="Name" 
            onChange={e => setForm({ ...form, name: e.target.value })} 
          />
        )}

        <input 
          style={inputStyle}
          placeholder="Email" 
          onChange={e => setForm({ ...form, email: e.target.value })} 
        />
        
        <input 
          style={inputStyle}
          type="password" 
          placeholder="Password" 
          onChange={e => setForm({ ...form, password: e.target.value })} 
        />

        <button style={buttonStyle} onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p 
          onClick={() => setIsLogin(!isLogin)} 
          style={{ cursor: "pointer", textAlign: "center", fontSize: "14px", marginTop: "10px" }}
        >
          {isLogin ? "New to Netflix? Sign up now." : "Already have an account? Sign in."}
        </p>
      </div>
    </div>
  );
}



const container = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#000", 
  color: "white",
  fontFamily: "Arial, sans-serif"
};

const box = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  width: "350px",
  padding: "40px",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  borderRadius: "8px"
};

const inputStyle = {
  padding: "12px",
  borderRadius: "4px",
  border: "none",
  backgroundColor: "#333",
  color: "white"
};

const buttonStyle = {
  padding: "12px",
  backgroundColor: "#e50914",
  color: "white",
  border: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px"
};

export default Auth;