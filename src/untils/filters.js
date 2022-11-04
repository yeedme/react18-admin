//输入规则 输字、字母、小数点、@
function inputRules(string){
  
    return string.replace(/[^\w\.\/]/g,'');
}
//密码强度显示 
function strengthLeverFilter(string){
    console.log(typeof string );
    let lever=0;
    if(string.match(/[a-z]/g)){
        lever+=1;
    }
    if(string.match(/[0-9]/g)){
        lever+=1
    }if(string.match(/(.[^a-z0-9])/g)){
        lever+=1;
    }
    return lever

}
export { inputRules,strengthLeverFilter}