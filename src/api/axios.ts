import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.exchange.coinbase.com",
  headers: { Accept: "application/json" },
});

export default instance;
