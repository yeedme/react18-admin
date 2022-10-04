import axios from "axios";
//axios封装
const BASE_URL = "http://localhost:8082";
function axiosGet(options) {
  console.log(BASE_URL + options.url);
  axios
    .get(BASE_URL + options.url)
    .then((res) => {
      options.success(res.data);
    })
    .catch((err) => {
      options.error(err);
    });
}
//login调用
function axiosGetLoginStatus(id, password) {
  //建立参数
  let account = new URLSearchParams();
  account.append("UserName", id);
  account.append("Password", password);

  return new Promise((resolve, reject) => {
    axiosGet({
      url: `/login?${account}`,
      success(data) {
        resolve(data);
      },
      error(data) {
        reject(data);
      },
    });
  });
}

//overView调用
function axiosGetDataCard(id) {
  let account = new URLSearchParams();
  account.append("UserName", id);
  return new Promise((resolve, reject) => {
    axiosGet({
      url: `/datacard?${account}`,
      success(result) {
        resolve(result.data);
      },
      error(data) {
        reject(data);
      },
    });
  });
}
function axiosGetOrderData() {
  return new Promise((resolve, reject) => {
    axiosGet({
      url: `/OrderData`,
      success(result) {
        resolve(result.data);
      },
      error(data) {
        reject(data);
      },
    });
  });
}

export { axiosGetLoginStatus, axiosGetDataCard, axiosGetOrderData };
