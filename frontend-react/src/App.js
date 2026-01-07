import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://127.0.0.1:8000/submit", {
        name,
        phone,
        email,
      });

      setMessage(res.data.message);
      setName("");
      setPhone("");
      setEmail("");
    } catch (err) {
      setMessage("Error submitting data");
      console.error(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5", // light grey background
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff", // white box
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>Good Morning!</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                padding: "10px",
                margin: "10px 0",
                width: "100%",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={{
                padding: "10px",
                margin: "10px 0",
                width: "100%",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: "10px",
                margin: "10px 0",
                width: "100%",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Submit
          </button>
        </form>
        {message && (
          <p style={{ marginTop: "20px", color: "#333", fontWeight: "500" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
