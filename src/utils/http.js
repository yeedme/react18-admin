import axios from "axios";
//封装 
const BASE_URL = "http://localhost:8082";
function axiosGet(options) {
  axios
    .get(BASE_URL + options.url)
    .then((res) => {
      options.success(res.data);
    })
    .catch((err) => {
      options.error(err);
    });
}

 function axiosGetLoginStatus(id, password) {
  let account = new URLSearchParams();
  account.append("id", id);
  account.append("password", password);
  return new Promise((resolve, reject) => {
    axiosGet({
      url: `/test?${account}`,
      success(data) {
        resolve(data);
      },
      error(data) {
        reject(data);
      },
    });
  });
}
export {axiosGetLoginStatus}