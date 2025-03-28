import React, { useState } from "react";

const Reports = () => {
  const [reports, setReports] = useState([
    { url: "http://malicious-site.com", detectedAt: "2025-03-24" },
    { url: "http://safe-site.com", detectedAt: "2025-03-23" },
  ]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">📊 Reported Threats</h2>
      <ul className="mt-3">
        {reports.map((report, index) => (
          <li key={index} className="p-2 border-b border-gray-700">
            {report.url} - {report.detectedAt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
