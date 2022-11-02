//输入规则 输字、字母、小数点、@
function inputRules(string){
  
    return string.replace(/[^\w\.\/]/g,'');
}

export { inputRules}