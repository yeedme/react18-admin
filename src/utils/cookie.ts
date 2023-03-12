const cookie_time:number=2;//默认两天
export function setCookie(name:string ,value:boolean){
    let date=new Date();
    date.setTime(date.getTime()+(cookie_time*24*60*60*1000));
    const expires="expires="+date.toUTCString();
    document.cookie=name+"="+value+';'+expires;
}

// 定义一个接口来表示cookie对象
interface Cookie {
    name: string;
    value: string;
  }
  
  // 定义一个函数来获取所有的cookie
  function getCookies(): Cookie[] {
    // 获取document.cookie字符串
    let cookieStr = document.cookie;
    // 定义一个空数组来存储cookie对象
    let cookies: Cookie[] = [];
    // 如果document.cookie不为空
    if (cookieStr) {
      // 按照分号和空格分割字符串
      let cookieArr = cookieStr.split("; ");
      // 遍历每个子字符串
      for (let cookie of cookieArr) {
        // 按照等号分割子字符串
        let [name, value] = cookie.split("=");
        // 创建一个cookie对象并添加到数组中
        cookies.push({ name, value });
      }
    }
    // 返回数组
    return cookies;
  }
  
  // 定义一个函数来获取指定名称的cookie值
  export function getCookie(name: string): string | null {
    // 获取所有的cookie对象
    let cookies = getCookies();
    // 遍历每个cookie对象
    for (let cookie of cookies) {
      // 如果名称匹配
      if (cookie.name === name) {
        // 返回值
        return cookie.value;
      }
    }
    // 如果没有找到匹配的名称，返回null
    return null;
  }