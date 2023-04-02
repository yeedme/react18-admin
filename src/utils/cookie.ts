const cookie_time: number = 2; //默认两天
export function setCookie(name: string, value: boolean) {
  let date = new Date();
  date.setTime(date.getTime() + cookie_time * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires;
}

interface Cookie {
  name: string;
  value: string;
}

// 定义一个函数来获取所有的cookie
function getCookies(): Cookie[] {
  let cookieStr = document.cookie;

  let cookies: Cookie[] = [];

  if (cookieStr) {
    let cookieArr = cookieStr.split("; ");

    for (let cookie of cookieArr) {
      let [name, value] = cookie.split("=");

      cookies.push({ name, value });
    }
  }

  return cookies;
}

// 定义一个函数来获取指定名称的cookie值
export function getCookie(name: string): string | null {
  let cookies = getCookies();

  for (let cookie of cookies) {
    if (cookie.name === name) {
      return cookie.value;
    }
  }
  // 如果没有找到匹配的名称，返回null
  return null;
}
