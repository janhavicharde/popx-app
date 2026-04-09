const Settings = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        padding: "20px",
      }}
    >
      {/* HEADER */}
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "20px",
          color: "#222",
        }}
      >
        Account Settings
      </h3>

      {/* PROFILE SECTION */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        {/* IMAGE */}
        <div style={{ position: "relative" }}>
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="profile"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          {/* CAMERA ICON */}
          <div
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "#6a11cb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "12px",
            }}
          >
            📷
          </div>
        </div>

        {/* NAME + EMAIL */}
        <div>
          <h4
            style={{
              margin: 0,
              fontSize: "14px",
              fontWeight: "600",
              color: "#222",
            }}
          >
            Marry Doe
          </h4>

          <p
            style={{
              margin: 0,
              fontSize: "12px",
              color: "#7a7a7a",
            }}
          >
            Marry@gmail.com
          </p>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p
        style={{
          fontSize: "13px",
          color: "#555",
          lineHeight: "1.6",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam.
      </p>

      {/* DIVIDER */}
      <div
        style={{
          borderTop: "1px dashed #ddd",
          marginTop: "20px",
        }}
      />
    </div>
  );
};

export default Settings;