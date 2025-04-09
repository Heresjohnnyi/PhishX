import React, { useState } from "react";
import { detectPhishing } from "./components/api";

function App() {
    const [url, setUrl] = useState("");
    const [result, setResult] = useState(null);

    const checkPhishing = async () => {
        const response = await detectPhishing(url);
        setResult(response);
    };

    return (
        <div className="container">
            <h1>Phishing Detector</h1>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" />
            <button onClick={checkPhishing}>Check</button>
            {result && <p>{result.isPhishing ? "⚠️ Phishing Detected!" : "✅ Safe"}</p>}
        </div>
    );
}

export default App;
