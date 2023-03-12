import React, { useState } from "react";
//login 页面 组件
interface inputProps {
    title: string;
    dataChange:any;//接受父组件的方法 用与获取输入框内容；
}
function Yinput(props: inputProps) {
    const [focus, setFocus] = useState<boolean>(false);

    return (
        <div className=" w-60 h-12 bg-slate-700 flex ">
            <div className={`' w-2 h-12 mr-2 ' + ${focus ? ' bg-orange-400 ':' '}`} />
            <div className="text-slate-100">
                <h2>{props.title}</h2>
                <input type={props.title == '密码' ? 'password' : 'text'} 
                className="w-full input" 
                onFocus={() => setFocus(true)} 
                onBlur={() => setFocus(false)} 
                onChange={(e)=>props.dataChange(e.target.value)
                }
            />
            </div>
        </div>
    );
}

export default Yinput;
