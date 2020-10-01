import axios from "axios";

const getGhResponse = async () => {
  let response = await axios.get("/");
  return response.data;
};

export { getGhResponse };