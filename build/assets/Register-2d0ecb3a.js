import{u as b,r as a,a as i,j as e,c as p,Y as o}from"./index-99f31b63.js";function y(n){let r=0;return/^[a-zA-Z]+$/.test(n)||/^[0-9]*$/.test(n)?r=1:/^[a-zA-Z0-9]+$/.test(n)?r=2:/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]+$/.test(n)&&(r=3),r}function $(){const n=b(),[r,f]=a.useState(""),[c,u]=a.useState(""),[t,g]=a.useState(""),[w,d]=a.useState(!1),[l,h]=a.useState(0);function m(s){f(s)}function x(s){u(s)}function N(s){g(s)}return a.useEffect(()=>{t.length>=6&&c==t?d(!0):d(!1)},[t,c]),a.useEffect(()=>{let s=y(t);h(s),(t==""||t==null)&&h(0)},[t]),i("div",{className:"w-screen h-screen  flex justify-center items-center ",children:[e(p,{}),i("div",{className:"animation_backGroundColor h-auto w-80  py-8 flex flex-col justify-around items-center absolute",children:[e("h2",{className:"text-slate-200 p-4",children:"欢迎你加入我们"}),i("div",{children:[e(o,{title:"用户名",type:"text",dataChange:m}),e(o,{title:"密码",type:"password",dataChange:x}),e(o,{title:"确认密码",type:"password",dataChange:N}),i("div",{className:"w-60 h-12  flex justify-around items-center ",children:[e("div",{className:`" w-16 h-3 " + ${l>=1?" bg-yellow-200 ":" bg-slate-500 "}`}),e("div",{className:`" w-16 h-3 " + ${l>=2?" bg-yellow-300 ":" bg-slate-500 "}`}),e("div",{className:`" w-16 h-3 " + ${l>=3?" bg-yellow-400 ":" bg-slate-500 "}`}),e("div",{className:"w-4 h-3 flex justify-center items-center text-white",children:e("h2",{children:"强"})})]})]}),i("div",{className:"w-80 flex justify-center p-4",children:[e("button",{className:`${w?" bg-orange-300 ":" bg-orange-00 "}+" text-white w-28 h-12 shadow-3xl shadow-orange-200 "`,children:"注册"}),e("button",{onClick:()=>n("/login"),className:" bg-orange-300 text-white w-28 h-12 shadow-3xl shadow-orange-200 ",children:"登入"})]})]})]})}export{$ as default};