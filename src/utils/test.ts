import axios, { AxiosError, AxiosResponse }  from "axios";
const url="";
interface Options{
    url:string; 
    success:(data:any)=>void;
    error:(eeror:AxiosError<any>)=>void;
}
function axiosGet(options:Options){
    axios
    .get(url+options.url)
    .then((res:AxiosResponse<any>)=>{
        options.success(res.data);
    })
    .catch((err:AxiosError<any>)=>{
        options.error(err);
    })
}

