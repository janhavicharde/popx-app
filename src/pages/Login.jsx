import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: "60px",
        textAlign: "left",
      }}
    >
      {/* CONTENT */}
      <div>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "700",
            marginBottom: "10px",
            color: "#222",
          }}
        >
          Signin to your <br /> PopX account
        </h2>

        <p
          style={{
            color: "#7a7a7a",
            marginBottom: "20px",
            fontSize: "14px",
          }}
        >
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        {/* EMAIL */}
        <input
          type="text"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "90%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #e0e0e0",
            background: "#ffffff",   // ✅ FIXED
            color: "#000",           // ✅ FIXED
            fontSize: "14px",
            outline: "none",
          }}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "90%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #e0e0e0",
            background: "#ffffff",   // ✅ FIXED
            color: "#000",           // ✅ FIXED
            fontSize: "14px",
            outline: "none",
          }}
        />
      </div>

      {/* BUTTON */}
      
        <button
  onClick={() => navigate("/settings")}
  style={{
    width: "98%",
    padding: "14px",
    borderRadius: "8px",
    border: "none",
   background: "#6a11cb", // grey
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  }}
>
  Login
</button>
      </div>
   
  );
};

export default Login;