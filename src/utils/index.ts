
function getPasswordStrength(password:string) :number{
    let strength:number = 0;
  
    // 匹配只包含字母的字符串
    if (/^[a-zA-Z]+$/.test(password)) {
      strength = 1;
    }

    else if (/^[0-9]*$/.test(password)) {
    strength = 1;
    }
    // 匹配只包含大写字母和数字的字符串
    else if (/^[a-zA-Z0-9]+$/.test(password)) {
      strength = 2;
    }
  
    // 匹配包含字母、数字和特殊字符的字符串
    else if (/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]+$/.test(password)) {
      strength = 3;
    }
  
    return strength;
  }

function changgeDateForm(dates:string){
  const date = new Date(dates);
  const year = date.getFullYear(); 
  const month = date.getMonth() + 1; 
  const day = date.getDate();
  const hour = date.getHours(); 
  const minute = date.getMinutes(); 
  const result = `${year}年${month}月${day}日${hour}点${minute}分`;
  return result
 // 输出：x年x月x日x点x分
}
  export {getPasswordStrength,changgeDateForm}

  
  
  
  
  