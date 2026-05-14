import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const predictSpam = async () => {
    if (!message.trim()) {
      alert("Please enter a message");
      return;
    }

    try {
      const response = await axios.post("/predict/", {
        message: message,
      });

      setResult(response.data.prediction);
    } catch (error) {
      console.error(error);
      setResult("Error connecting to backend");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>SMS Spam Detector</h1>

        <textarea
          placeholder="Enter SMS message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={predictSpam}>Predict</button>

        {result && <h2>{result}</h2>}
      </div>
    </div>
  );
}

export default App;
