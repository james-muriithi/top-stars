// import Vue from 'vue';
import axios from "axios";

const config = {
  baseURL: "https://api.github.com"
};

const axiosInstance = axios.create(config);
export default axiosInstance;