import axios from "axios";

export default axios.create({
    baseURL: "https://frozen-hamlet-89463.herokuapp.com/",
    responseType: "json", 
    headers: {
        Authorization: "bearer"
      }   
  });