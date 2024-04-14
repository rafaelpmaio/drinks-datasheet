import axios from "axios";

const httpDatasheets = axios.create({
  baseURL: "http://localhost:3001/",
});

export { httpDatasheets };
