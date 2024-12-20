// Import the Axios library for HTTP requests
import axios from "axios";

// Create and export a pre-configured Axios instance
export default axios.create({
  // Base URL for all API requests
  baseURL: 'http://localhost:8080',

  // Maximum time (in milliseconds) to wait for a response
  timeout: 20000, 

  // Default headers to include in every request
  headers: {
    "Content-Type": "application/json" // Specify JSON as the request/response format
  }
});