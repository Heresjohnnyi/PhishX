import axios from "axios";

// Backend API base URL
const API_BASE_URL = "http://localhost:5000/api"; // Change this if needed

// Function to get phishing alerts
export const getPhishingAlerts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/alerts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching phishing alerts:", error);
    throw error;
  }
};

// Function to get user statistics
export const getUserStats = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user-stats`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user stats:", error);
    throw error;
  }
};

// Function to post phishing reports
export const reportPhishing = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/report`, data);
    return response.data;
  } catch (error) {
    console.error("Error reporting phishing:", error);
    throw error;
  }
};
