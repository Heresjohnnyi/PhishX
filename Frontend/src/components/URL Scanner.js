import React, { useState } from "react";
import axios from "axios";

const URLScanner = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);

  const scanURL = async () => {
    try {
      const response = await axios.post("http://localhost:8080/detect", { url });
      setResult(response.data);
    } catch (error) {
      console.error("Error detecting phishing:", error);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">🔍 Scan a URL</h2>
      <input
        type="text"
        className="p-2 rounded-md w-full bg-gray-700 mt-2"
        placeholder="Enter URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={scanURL}
        className="mt-3 p-2 bg-green-500 rounded-md hover:bg-green-600"
      >
        Scan
      </button>

      {result && (
        <div className={`mt-3 p-2 rounded-md ${result.isPhishing ? "bg-red-500" : "bg-green-500"}`}>
          {result.isPhishing ? "⚠️ This is a phishing site!" : "✅ Safe URL"}
        </div>
      )}
    </div>
  );
};

export default URLScanner;
