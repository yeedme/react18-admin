import React, { useEffect, useState } from 'react'
import Yinput from '../components/Yinput'
export default function Register() {

    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [confirmpassword,setConfirmPassword]=useState('');
    const [confirm,setConfirm]=useState(false);

    useEffect(()=>{
    },[])

    function getUserName(data:string){
      setUserName(data);
    }

    function getPassword(data:string){
        setPassword(data);
    }

    function getConfirmPassword(data:string){
      setConfirmPassword(data);
    }

    //进行验证 修改提交按钮
    useEffect(()=>{
      if(confirmpassword.length>=6 && password==confirmpassword){
        setConfirm(true);
            
      }
      else{
        setConfirm(false)
      }
    },[confirmpassword,password])
  return (
    <div className='w-screen h-screen bg-slate-600 flex justify-center items-center '>
        <div className="h-screen w-80 bg-slate-600 py-8 flex flex-col justify-around items-center">
            <h2 className='text-slate-400'>欢迎你加入我们</h2>
            <div>
             <Yinput title="用户名" type="text" dataChange={getUserName} />
             <Yinput title="密码" type="text" dataChange={getPassword} />
             <Yinput title="确认密码" type="text" dataChange={getConfirmPassword} />
             </div>
             <button className={`${confirm?' bg-orange-300 ':' bg-orange-00 '}+" text-white w-32 h-12 shadow-3xl shadow-orange-200 "`} >
              注册
            </button>
        </div>
    </div>
  )
}
