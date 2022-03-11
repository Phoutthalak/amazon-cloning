import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-844c3.cloudfunctions.net/api", // the API (cloud function) URL
});

export default instance;

