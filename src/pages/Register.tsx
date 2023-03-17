import React, { useEffect, useState } from 'react'
import Yinput from '../components/Yinput'
export default function Register() {
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [confirm,setConfirm]=useState('');

    useEffect(()=>{

    },[])
    function getPassword(data:string){
        setConfirm(data);
    }
    function getUserName(data:string){
        setUserName(data);
    }

  return (
    <div className='w-screen h-screen '>
        <div className="h-screen w-80 bg-slate-600 py-8 flex flex-col justify-around items-center">
            <h2 className='text-slate-400'>欢迎你加入我们</h2>
            <div>
             <Yinput title="用户名" type="text" dataChange={getUserName} />
             <Yinput title="用户名" type="text" dataChange={getUserName} />
             <Yinput title="用户名" type="text" dataChange={getUserName} />
             </div>
             <button className="bg-orange-300 text-white w-24 h-12 shadow-3xl shadow-orange-200" >
              注册
            </button>
        </div>
    </div>
  )
}
