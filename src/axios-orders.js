import axios from "axios";

const instance = axios.create({
  baseURL: "https://reactburgerthesecond.firebaseio.com/",
});

export default instance;
