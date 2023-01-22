import axios from "axios";
import React from "react";

const GetReq = async () => {
  let res = await axios.get("http://localhost:8080/mens_data")
  return res;
};

export default GetReq;
