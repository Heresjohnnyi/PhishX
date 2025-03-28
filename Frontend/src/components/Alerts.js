import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    { url: "http://fakebank.com", status: "Phishing Detected" },
    { url: "http://secure-login.com", status: "Safe" },
  ]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">⚠️ Real-time Alerts</h2>
      <motion.div initial={{ y: 10 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        {alerts.map((alert, index) => (
          <div key={index} className={`p-2 rounded-md mt-2 ${alert.status.includes("Phishing") ? "bg-red-500" : "bg-green-500"}`}>
            {alert.url} - {alert.status}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Alerts;
