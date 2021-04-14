import axios from "axios";
const apis = axios.create({
  baseURL: "https://khanhsaodo.herokuapp.com",
});

export async function getQuestion() {
  return apis
  .get(`/questions`)
  .then((res) => {
    let question = res.data;
    return  question ;
  });
}
