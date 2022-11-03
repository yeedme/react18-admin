import axios from "axios";

const BASE_URL = "";
function axiosGet(options) {
  axios
    .get(BASE_URL + options.url)
    .then((res) => {
      options.success(res);
    })
    .catch((err) => {
      options.error(err);
    });
}

function axiosPost(options) {
    console.log(BASE_URL + options.url);
  axios
    .post(BASE_URL + options.url)
    .then((res) => {
      options.success(res);
    })
    .catch((err) => {
      options.error(err);
    });
}
function loginGet(){
    return new Promise( (resolve, reject)=>{
        axiosGet({
            url:'./data/account.json',
            success(data){
                return resolve(data.data)
            },
            error(data){
                return reject(data)
            }
        })
    } )
}
export { loginGet } 