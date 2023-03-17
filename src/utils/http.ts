import axios, { AxiosResponse, AxiosError } from "axios";

const Url = "http";

interface Options {
  url: string;
  success: (data: any) => void;
  error: (error: AxiosError) => void;
}

function axiosGet(options: Options) {
  axios
    .get(Url + options.url)
    .then((res: AxiosResponse) => {
      options.success(res.data);
    })
    .catch((err: AxiosError) => {
      options.error(err);
    });
}

export function axiosGetLogin(){
  return new Promise((resolve,reject)=>{
    axiosGet({
      url:"/scr/assets/user.json",
      success(data) { 
        console.log(data);
        
        resolve(data);
      },
      error(error) {
        console.log(error);
        
        reject(error);
      },
    })
  })
}
