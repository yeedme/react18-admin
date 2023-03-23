import axios, { AxiosResponse, AxiosError } from "axios";

const Url = "http://127.0.0.1:5173";

interface Options {
  url: string;
  success: (data: any) => void;
  error: (error: AxiosError<any>) => void;
}

function axiosGet(options: Options) {
  axios
    .get(Url + options.url)
    .then((res: AxiosResponse<any>) => {
      options.success(res.data);
    })
    .catch((err: AxiosError<any>) => {
      options.error(err);
    });
}
//向后后台验证数据
export function axiosGetLogin(){
  return new Promise((resolve,reject)=>{
    axiosGet({
      url:"/src/assets/user.json",
      success(data: any) { 
        console.log(data);        
        resolve(data);
      },
      error(error: AxiosError<any>) {
        console.log(error);        
        reject(error);
      },
    })
  })
}

export function axiosCheckUser(){
  return new Promise((resolve,reject)=>{
    axiosGet({
      url:"/src/assets/user.json",
      success(data: any) { 
        console.log(data);        
        resolve(data);
      },
      error(error: AxiosError<any>) {
        console.log(error);        
        reject(error);
      },
    })
  })
}
//获取bashboard chart类型一
export function axiosGetChartOne(){
  return new Promise((resolve,reject)=>{
    axiosGet({
      url:"/src/assets/dataForChartOne.json",
      success(data) { 
        resolve(data.data);
      },
      error(error: AxiosError<any>) {    
        reject(error);
      },
    })
  })
}