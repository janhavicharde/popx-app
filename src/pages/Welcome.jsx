import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "100%",
      }}
    >
      <div style={{ textAlign: "left" }}>
        {/* TITLE */}
        <h2
    style={{
      fontWeight: "700",
      fontSize: "20px",
      color: "#222",
      marginBottom: "8px",
    }}
  >
    Welcome to PopX
  </h2>


        {/* SUBTEXT */}
          <p
    style={{
      color: "#7a7a7a",
      fontSize: "14px",
      lineHeight: "1.5",
      marginBottom: "20px",
    }}
  >
    Lorem ipsum dolor sit amet,
    <br />
    consectetur adipiscing elit.
  </p>


        {/* BUTTON 1 */}
        <button
          onClick={() => navigate("/signup")}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "8px",
            border: "none",
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
            color: "white",
            fontWeight: "600",
            marginBottom: "12px",
            cursor: "pointer",
          }}
        >
          Create Account
        </button>

        {/* BUTTON 2 */}
        <button
          onClick={() => navigate("/login")}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "8px",
            border: "none",
            background: "#dcd2f5",
            color: "#333",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;