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

//获取 login数据 
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
//customer页面调用 
function customerGet(){
  return new Promise( (resolve, reject)=>{
      axiosGet({
          url:'./data/customer.json',
          success(data){
            console.log(data.data);
              return resolve(data.data)
          },
          error(data){
              return reject(data)
          }
      })
  } )
}
//dashbord调用 
function totalDataGet(){
  return new Promise((resolve,reject)=>{
    axiosGet({
      url:'./data/toaldata.json',
      success(data){
        return resolve(data.data)
      },
      error(data){
        return reject(data)
      }
    })
  })
}
function revenueDataGet(type){
  return new Promise( ( resolve,reject ) =>{
    axiosGet({
      url:`./data/revenue/${type}.json`,
      success(data){
        return resolve(data.data)
      },
      error(data){
        return reject(data.data)
      }
    })
  })
}
function summaryDataGet(type){
  return new Promise( ( resolve,reject) =>{
    axiosGet({
      url:`./data/summary/${type}.json`,
      success(data){
        return resolve(data.data)
      },
      error(data){
        return reject(data.data)
      } 
    })
  })
}
export { loginGet , customerGet, totalDataGet,revenueDataGet,summaryDataGet} 