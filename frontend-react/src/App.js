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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Good Morning!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: "10px", margin: "5px", width: "300px" }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{ padding: "10px", margin: "5px", width: "300px" }}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: "10px", margin: "5px", width: "300px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
