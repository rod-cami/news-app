import { getData } from "../services/servicesApi";

const URL = process.env.REACT_APP_API_URL;

const getDataForPageAndQuery = async ({query,page}) => {
  const response_api = await getData(`${URL}?query=${query}&page=${page}`)
  if (response_api.status === 200) {
    const data = await response_api.json();
    return data.hits;
  } else{
    const error = await response_api.json();
    console.log(error);
  }
}

export {getDataForPageAndQuery}