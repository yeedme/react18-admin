function getPasswordStrength(password){
    let strength= 0;
  
    // 匹配只包含字母的字符串
    if (/^[a-zA-Z]+$/.test(password)) {
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
    console.log(strength);
    return strength;
  }

  getPasswordStrength("asd11");