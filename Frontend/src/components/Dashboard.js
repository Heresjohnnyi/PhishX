import React, { useState } from "react";
import URLScanner from "./URLScanner";
import Alerts from "./Alerts";
import Reports from "./Reports";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      className="p-6 flex flex-col gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <URLScanner />
      <Alerts />
      <Reports />
    </motion.div>
  );
};

export default Dashboard;
