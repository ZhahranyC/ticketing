import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // We are on the server

    return axios.create({
      baseURL: "http://www.ticketing-zhahrany-dev.xyz/",
      headers: req.headers,
    });
  } else {
    // We are on the browser

    return axios.create({
      baseURL: "/",
    });
  }
};

export default buildClient;
