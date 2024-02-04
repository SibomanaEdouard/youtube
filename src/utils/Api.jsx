import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "in",
  },
  headers: {
    'X-RapidAPI-Key': '7220dfadeamsh1d692dea131bcd5p1cba27jsnfd7e65c9c4c8',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
