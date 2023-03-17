import React, { useState } from "react";

//login 页面 组件
interface inputProps {
    title: string;
    type:string;
    dataChange:any;//接受父组件的方法 用与获取输入框内容；
}
function Yinput(props: inputProps) {
    //焦距的时候 输入框样式变化
    const [focus, setFocus] = useState<boolean>(false);
    const [inputData,SetInputData]=useState<string>('');
    function inputFilter(value:string){
        value = value.replaceAll(/[^\w]/g, '');
        SetInputData(value);
        props.dataChange(value);
    }
    return (
        <div className=" w-60 h-12 bg-slate-700 flex ">
            <div className={`' w-2 h-12 mr-1 ' + ${focus ? ' bg-orange-300 ':' '}`} />
            <form className="text-slate-100">
                <h2 className="text-slate-400">{props.title}</h2>
                <input type={props.type == 'password' ? 'password' : 'text'} 
                className="w-full input" 
                onFocus={() => setFocus(true)} 
                onBlur={() => setFocus(false)} 
                value={inputData}
                onChange={(e)=>inputFilter(e.target.value)}
               
            />
            </form>
        </div>
    );
}

export default Yinput;
