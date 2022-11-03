import React from 'react'
import './Registered.less'
export default function Registered() {

  return (
    <div className='y_Registered'>
        <h1>创建账号</h1>
        <div>
           <div className='y_RegisteredInputContent'>
                用户名
                <input className='y_RegisteredInput'/>
            </div> 
            <div className='y_RegisteredInputContent'>
                密码
                <input className='y_RegisteredInput' type="password"/>
            </div>       

            <div className='y_Passwordstrength'>
              <div className='y_strength'></div>
              <div className='y_strength'></div>
              <div className='y_strength'></div>
              强度
            </div>    
            
            <div className='y_RegisteredInputContent'>
                确认密码
                <input className='y_RegisteredInput' type="password"/>
            </div> 
            <div>
                <button className='y_RegisteredButton'>注册</button>
            </div>
        </div>
    </div>
  )
}
