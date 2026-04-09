import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fields = [
    { label: "Full Name*", name: "fullName" },
    { label: "Phone number*", name: "phone" },
    { label: "Email address*", name: "email" },
    { label: "Password*", name: "password", type: "password" },
    { label: "Company name", name: "company" },
  ];

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      {/* TOP CONTENT */}
      <div style={{ paddingTop: "40px" }}>
        {/* TITLE */}
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "700",
            color: "#222",
            marginBottom: "20px",
          }}
        >
          Create your <br /> PopX account
        </h2>

        {/* INPUT FIELDS */}
        {fields.map((field, index) => (
          <div
            key={index}
            style={{
              marginBottom: "12px",
              position: "relative",
            }}
          >
            {/* FLOATING LABEL */}
            <label
              style={{
                position: "absolute",
                top: "-6px",
                left: "12px",
                background: "#fff",
                padding: "0 5px",
                fontSize: "11px",
                color: "#7b61ff",
                fontWeight: "500",
              }}
            >
              {field.label}
            </label>

            {/* INPUT */}
            <input
              type={field.type || "text"}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              style={{
                width: "90%",
                padding: "16px 12px 10px", // FIXED spacing
                borderRadius: "6px",
                border: "1px solid #d9d9d9",
                background: "#fff",
                color: "#000",
                outline: "none",
                fontSize: "14px",
              }}
            />
          </div>
        ))}

        {/* RADIO BUTTON */}
        <div style={{ marginTop: "12px" }}>
          <p style={{ fontSize: "13px", marginBottom: "10px" }}>
            Are you an Agency?
          </p>

          <label style={{ marginRight: "20px", fontSize: "14px" }}>
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={form.agency === "yes"}
              onChange={handleChange}
              style={{ marginRight: "5px" }}
            />
            Yes
          </label>

          <label style={{ fontSize: "14px" }}>
            <input
              type="radio"
              name="agency"
              value="no"
              checked={form.agency === "no"}
              onChange={handleChange}
              style={{ marginRight: "5px" }}
            />
            No
          </label>
        </div>
      </div>

      {/* BUTTON AT BOTTOM */}
      <div style={{ marginTop: "auto", marginBottom: "20px" }}>
        <button
          onClick={() => navigate("/settings")}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "8px",
            border: "none",
            background: "#6a11cb",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;